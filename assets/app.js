window.addEventListener('load', () => {
  //Validation
  const form = document.getElementById('form-non-conformite');
  const inputs = form.elements;
  form.addEventListener('submit', e => {
    form.classList.add('was-validated');
    e.preventDefault();
    if (form.checkValidity()) {
      exportTableToCSV(inputs);
    }
  });

  //Templating
  document.getElementById('hopital').innerHTML = hopital;
  document.getElementById('codification').innerHTML = codification;

  //Tri des données en ordre alphabétique
  departements.sort((a, b) => a.localeCompare(b, 'fr'));
  provenances.sort((a, b) => a.localeCompare(b, 'fr'));
  descriptifsPre.sort((a, b) => a.localeCompare(b, 'fr'));
  descriptifAnalytique.sort((a, b) => a.localeCompare(b, 'fr'));
  descriptifPost.sort((a, b) => a.localeCompare(b, 'fr'));

  //Remplissage des menus déroulants
  document.getElementById('datePicker').valueAsDate = new Date();

  const departementSelect = document.getElementById('departement');
  departements.forEach((dep, index) => {
    departementSelect[index] = new Option(dep, dep);
  });

  let typeSelect = document.getElementById('type');
  types.forEach((type, index) => {
    typeSelect[index] = new Option(type, type);
  });

  let provenanceSelect = document.getElementById('provenance');
  provenances.forEach((provenance, index) => {
    provenanceSelect[index] = new Option(provenance, provenance);
  });

  document.getElementById('type').addEventListener('change', e => {
    let descriptifSelect = document.getElementById('descriptifSelect');
    inputField = document.getElementById('descriptifInput');
    selectField = document.getElementById('descriptifList');
    impactField = document.getElementById('impact');
    causeField = document.getElementById('cause');

    inputField.classList.add('d-none');
    selectField.classList.remove('d-none');
    impactField.removeAttribute('disabled');
    causeField.removeAttribute('disabled');

    let descriptifs;
    if (e.target.value === 'Autre') {
      inputField.classList.remove('d-none');
      selectField.classList.add('d-none');
    } else {
      if (e.target.value === 'Pré-analytique') {
        descriptifs = descriptifsPre;
        impactField.setAttribute('disabled', '');
        causeField.setAttribute('disabled', '');
      } else if (e.target.value === 'Analytique') {
        descriptifs = descriptifAnalytique;
      } else if (e.target.value === 'Post-analytique') {
        descriptifs = descriptifPost;
      }

      descriptifSelect.options.length = 0;
      descriptifs.forEach((descriptif, index) => {
        descriptifSelect[index] = new Option(descriptif, descriptif);
      });
    }
  });
});

function exportTableToCSV(inputs) {
  let csv =
    'Date;Nom;Provenance;Département;Type NC;#requête;Descriptif;Action immédiate;Impact;Cause;AH-223;\
            Mesures à entreprendre pour corriger la situation;Échéancier (30 jours);Responsable;Échéancier (90 jours);Efficacité - Suivi\n';
  let ah223 = document.getElementById('ah223');
  ah223.value = ah223.checked ? 'Oui' : 'Non';

  let separator = '';
  let values = [...inputs];

  let descriptif = document.getElementById('descriptifSelect');
  if (descriptif.value) {
    values = values.filter(elem => elem.id !== 'descriptifInput');
  } else {
    values = values.filter(elem => elem.id !== 'descriptifSelect');
  }

  values.forEach(element => {
    csv += separator + element.value;
    separator = ';';
  });

  let csvFile = new Blob([csv], { type: 'text/csv;charset=utf-8' });

  // Download link
  let downloadLink = document.createElement('a');

  // File name
  downloadLink.download = `NC_${inputs[3].value}_${inputs[4].value}_${new Date().toLocaleString()}.csv`;

  // Create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Hide download link
  downloadLink.style.display = 'none';

  // Add the link to DOM
  document.body.appendChild(downloadLink);

  // Click download link
  downloadLink.click();
}
