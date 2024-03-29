const hopital = "Laboratoire de l'Hôpital du Haut-Richelieu";
const codification = "FOR-HRR-LAB015-V1 (2020-02-09)";
let departements = [
    "",
    "Banque de sang",
    "Cytologie",
    "EBMD",
    "Hématologie",
    "Laboratoire général",
    "Laverie",
    "Microbiologie",
    "Milieux de culture",
    "Pathologie",
    "Réception",
    "Sérologie",
    "Biochimie",

];

let provenances = [
    "",
	"1 Nord",
	"3 Ouest",
	"3 Nord",
	"3 Sud",
    "4 Nord",
	"4 Sud",
    "5 Nord",
    "5 Sud (pédiatrie)",
    "6 Nord",
    "6 Sud",
    "7 Nord",
    "7 Sud",
	"Aire ambulatoire",
	"Aire civivère A",
	"Aire civière B",
	"Choc",
	"Clinique ambulatoire",
	"Clinique externe",
	"Clinique jeunesse Chambly",
	"Clinique jeunesse St-Jean",
	"CLSC Bedford",
	"CLSC Farnham",
	"CLSC Henryville",
	"CLSC Lacolle",
	"CLSC Napierville",
	"CLSC Richelieu",
	"CLSC St-Césaire",
	"CLSC Vallée-des-forts",
	"Dialyse",
    "Laboratoire",
	"Maison des naissances",
	"Maison Soins palliatifs",
	"Oncologie",
	"Pouponnière",
	"Résidence Champagnat",
	"Résidence Georges-Phaneuf",
	"Résidence Gertrude Lafrance",
	"Résidence Ste-Croix",
	"Résidence St-Joseph",
	"Résidence le Renfort",
	"Résidence Val-Joly",
	"Salle d'opération",
	"Soins intensifs",
	"UDC",
	"UETT",
	"UHB",
	"UMF",
	"UTRF",
	"Urgence",
	"HHR001 Centre de prélèvement Lyne Bergeron",
	"HHR002 Prélèvements Véronique Paré",
	"HHR003 Prélèvements sanguins Josée Goupil",
	"HHR004 Pharmacie Caroline Paré",
	"HHR005 Centre de prélèvement Ginette Fortier",
	"HHR006 Clinique prélèvement Richelieu Éric Nadeau",
	"HHR007 Prélèvements Monique Dussault (Clinique 900)",
	"HHR008 Prélèvements Monique Dussault (Bureau)",
	"HHR009 Clinique Sanguine",
	"HHR010 Santé soins infirmiers",
	"HHR011 Pharmacie David Rousseau",
	"HHR012 CMIE",
	"HHR013 CHSLD St-Jean",
	"HHR014 Prélèvements MK",
	"HHR015 Résidence du collège",
	"HHR016 Clinique multi soins",
	"HHR017 Service multi soins",
	"HHR018 Clinique Accès santé St-Jean",
	"HHR019 Clinique Accès santé St-Luc",
	"HHR020 Prélèvement As de pique",
	"HHR021 Résidence des batisseurs de Chambly",
	"HHR022 Résidence Samuel de Champlain",
	"HHR023 Clinique Chakia",
	"HHR024 Clinique Cardio Vasc",
	"HHR025 L'infirmerie du Haut-Richelieu",
	"HHR026 Prélèvements la Johannaise",
	"HHR027 Prélèvements Annick",
	"HHR028 Clinique Pro-Santé Marieville",
	"HHR029 Service infirmier Karine Pinsonneault",
	"HHR030 La cité des tours",
	"HHR031 Résodence Manoir Soleil",
	"HHR032 Prélèvements Nancy",
	"HHR033 Pharmacie Marthe Roussy",
	"HHR034 Clinique médicale Fort-Chambly",
	"HHR035 Résidence Les trois violettes (Frère Maristes)",
	"HHR036 Coopérative de santé lac Champlain",
	"HHR037 Centre Médi-Soleil",
	"HHR038 Centre médical Hygie",
	"HHR039 Médi-centre Iberville",
	"HHR040 Clinique Aux petits soins",
	"HHR041 Clinique de cardiologie",
	"HHR042 Clinique Origyn",
	"HHR043 Clinique de pédiatrie",
	"HHR044 Clinique d'ORL",
	"HHR045 Endocrinologie du Haut-Richelieu",
	"HHR046 Clinique d'orthopédie du Haut-Richelieu",
	"HHR047 Clinique 900",
	"HHR048 Clinique médicale du centre-ville",
	"HHR049 Clinique médicale St-Luc",
	"HHR050 Clinique médicale du collège",
	"HHR051 Clinique médicale du Coteau",
	"HHR052 Clinique médicale St-Eugène",
	"HHR053 Médi-centre St-jean",
	"HHR054 Coop Solidarité Laprairie",
	"HHR055 Clinique médicale Interdisciplinaire",
	"HHR056 MD Signature",
	"HHR057 Clinique du Dre Céline Daigneault",
	"HHR058 Résidence Jardins du couvent",
	"HHR059 Résidence Notre-Dame-de-Richelieu (père Oblats)",
	"HHR060 Résidence Rivière Richelieu",
	"HHR061 Résidence Seigneurie de Chambly",
	"HHR062 Complexe Oasis",
	"HHR063 Rêve de demain",
	"HHR064 Clinique des spécialistes Dix30",
	"HHR065 Famili Prélèvement",
	"HHR066 Prélèvements GHaut-Richelieu",
	"HHR067 Concept Santé Mieux-être",
	"HHR068 Coop Solidarité Santé St-Blaise-sur Richelieu",
	"HHR069 Clinique de dermatologie Dre Adèle Trudeau",
	"HHR070 USS St-Jean (Base militaire BFC)",
	"HHR071 Pharmacie Stéphane Turner",
	"HHR072 GMF St-Césaire",
	"HHR073 GMF Richelieu",
	"HHR074 Clinique Lionel Doucet",
	"HHR075 Clinique d'opthalmologie du Haut-Richelieu",
	"HHR076 Clinique médicale du Haut-Richelieu",
	"HHR077 Dr. André Senikas",
	"HHR078 Clinique Filion-Sautdenmaier",
	"HHR079 Prélèvements Alice",
	"HHR080 Clinique de pédiatrie du Gaut-Richelieu",
	"HHR081 Clinique Maxillo facial Rive-Sud",
    "Autre",
]

const types = [
    "",
    "Pré-analytique",
    "Analytique",
    "Post-analytique",
    "Autre"
]

let descriptifsPre = [
    "",
    "Mauvais type tube ou milieu de transport inadéquat",
    "Quantité insuffisante ou inadéquate",
    "Stabilisation inadéquate",
    "Délai de conservation dépassé",
    "Condition de conservation non-respectée",
    "Fuite / Contenant brisé",
    "Coagulé",
    "Hémolysé",
    "Non-respect des instructions de prélèvements",
    "Délai de prélèvement/réception",
    "Discordance nombre d’échantillons",
    "Pas d’échantillon reçu (requête seulement)",
    "Absence d’identification / Absence de double identification",
    "Absence date et heure de prélèvements",
    "Absence information préleveur",
    "Absence information provenance",
    "Absence site/source",
    "Absence information destinataire",
    "Absence information prescripteur ou mauvais prescripteur inscrit",
    "Renseignements cliniques obligatoires / informations manquantes",
    "Discordance d’identification requête/échantillon",
    "Utilisation du pneumatique inadéquat",
    "Quantité de fixateur inadéquate",
	"Analyse oubliée ou échantillon égaré",
    "Mauvaise analyse réalisée",

]

let descriptifAnalytique = [
    "",
    "Température zone à température contrôlée et équipements hors limites (alarme)",
    "Température, humidité ou maintenance non-documentée",
    "Documentation et suivi de l’orientation incomplète",
    "CQ ne satisfait pas aux critères de l’analyse (plusieurs reprises ou une reprise avec patient)",
    "CQ non-documenté",
    "Utilisation d’un produit non-contrôlé",
    "Utilisation d’un produit périmé",
    "Fréquence de d’étalonnage/calibration non-respectée",
    "Calibration/étalonnage non-documentée",
    "Maintenances non-respectées",
    

]

let descriptifPost = [
    "",
    "Rapport émis au mauvais destinataire",

]