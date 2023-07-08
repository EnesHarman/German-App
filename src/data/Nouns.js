const nouns = [
    {
        german: "die Frau",
        english: "Wife",
        turkish: "Kadın Eş",
        plural: "die Frauen"
    },
    {
        german: "der Herr",
        english: "Mister",
        turkish: "Bay",
        plural: "die Herren"
    },
    {
        german: "der Name",
        english: "Name",
        turkish: "İsim",
        plural: "die Namen"
    },
    {
        german: "der Vorname",
        english: "Name",
        turkish: "İsim",
        plural: "die Vornamen"
    },
    {
        german: "der Familienname",
        english: "Last Name",
        turkish: "Soy İsim",
        plural: "die Familiennamen"
    },
    {
        german: "das Land",
        english: "Country",
        turkish: "Ülke",
        plural: "die Länder"
    },
    {
        german: "das Alphabet",
        english: "Alphabet",
        turkish: "Alfabe",
        plural: "die Alphabete"
    },
    {
        german: "der Arbeitgeber",
        english: "Employer",
        turkish: "İş Veren",
        plural: "die Arbeitgeber"
    },
    {
        german: "die Ausbildung",
        english: "Education",
        turkish: "Eğitim",
        plural: "die Ausbildungen"
    },
    {
        german: "der Beruf",
        english: "Job",
        turkish: "Meslek",
        plural: "die Berufe"
    },
    {
        german: "die Hochschule",
        english: "University",
        turkish: "Üniversite",
        plural: "die Hochschulen"
    },
    {
        german: "der Job",
        english: "Job",
        turkish: "Meslek",
        plural: "die Jobs"
    },
    {
        german: "die Universität",
        english: "University",
        turkish: "Üniversite",
        plural: "die Universitäten"
    },
    {
        german: "das Praktikum",
        english: "Internship",
        turkish: "Staj",
        plural: "die Pratika"
    },
    {
        german: "die Schule",
        english: "School",
        turkish: "Okul",
        plural: "die Schulen"
    },
    {
        german: "die Stelle",
        english: "Job",
        turkish: "Meslek",
        plural: "die Stellen"
    },
    {
        german: "der Architekt",
        english: "Architect",
        turkish: "Mimar ",
        plural: "die Architekten"
    },
    {
        german: "der Arzt",
        english: "Docter",
        turkish: "Doktor",
        plural: "die Ärzte"
    },
    {
        german: "der Friseur",
        english: "Barber",
        turkish: "Berber ",
        plural: "die Friseure"
    },
    {
        german: "der Coiffeur",
        english: "",
        turkish: "Kuaför",
        plural: "die Coiffeure"
    },
    {
        german: "die Coiffeuse",
        english: "",
        turkish: "Kuaför",
        plural: "die Coiffeusen"
    },
    {
        german: "der Ingenieur",
        english: "Engineer",
        turkish: "Mühendis",
        plural: "die Ingenieure"
    },
    {
        german: "der Journalist",
        english: "Journalist",
        turkish: "Gazeteci",
        plural: "der Journalisten"
    },
    {
        german: "der Kellner",
        english: "Wailter",
        turkish: "Garson",
        plural: "die Kellner"
    },
    {
        german: "die Krankenschwester",
        english: "Nurse",
        turkish: "Hemşire",
        plural: "die Krankenschwestern"
    },
    {
        german: "der Lehrer",
        english: "Teacher",
        turkish: "Öğretmen",
        plural: "die Lehrer"
    },
    {
        german: "der Mechatroniker",
        english: "",
        turkish: "Mekatronik",
        plural: "die Mechatroniker"
    },
    {
        german: "der Student",
        english: "Student",
        turkish: "Öğrenci",
        plural: "die Studenten"
    },
    {
        german: "der Schauspieler",
        english: "Actor",
        turkish: "Aktör",
        plural: "dir Schauspieler"
    },
    {
        german: "der Schüler",
        english: "Student",
        turkish: "Öğrenci",
        plural: "der Schüler"
    },
    {
        german: "der Sekretär",
        english: "Secretary",
        turkish: "Sekreter",
        plural: "dir Sekretäre"
    },
    {
        german: "der Verkäufer",
        english: "Salesperson",
        turkish: "Kasiyer",
        plural: "die Verkäufer"
    },
    {
        german: "das Alter",
        english: "Age",
        turkish: "Yaş",
        plural: "-"
    },
    {
        german: "der Familienstand",
        english: "Marital status",
        turkish: "Aile Durumu",
        plural: "-"
    },
    {
        german: "das Jahr",
        english: "Year",
        turkish: "Yıl",
        plural: "die Jahre"
    },
    {
        german: "das Kind",
        english: "Kid",
        turkish: "Çocuk",
        plural: "die Kinder"
    },
    {
        german: "der Zivilstand",
        english: "Marital status",
        turkish: "Aile Durumu",
        plural: "-"
    },
    {
        german: "die Familie",
        english: "Family",
        turkish: "Aile",
        plural: "die Familien"
    },
    {
        german: "der Vater",
        english: "Father",
        turkish: "Baba",
        plural: "die Väter"
    },
    {
        german: "die Mutter",
        english: "Mother",
        turkish: "Anne",
        plural: "die Mütter"
    },
    {
        german: "die Eltern (PL)",
        english: "Parents",
        turkish: "Ebevenyler",
        plural: "-"
    },
    {
        german: "der Sohn",
        english: "Son",
        turkish: "Oğlan",
        plural: "die Söhne"
    },
    {
        german: "die Tochter",
        english: "Daughter",
        turkish: "Kız Çocuk",
        plural: "die Töchter"
    },
    {
        german: "der Großvater",
        english: "Grand Fater",
        turkish: "Dede",
        plural: "die Großväter"
    },
    {
        german: "die Großmutter",
        english: "Grand Mother",
        turkish: "Nene",
        plural: "die Großmütter"
    },
    {
        german: "die Oma",
        english: "Grand Mother",
        turkish: "Nene",
        plural: "die Omas"
    },
    {
        german: "der Opa",
        english: "Grand Father",
        turkish: "Dede",
        plural: "die Opas"
    },
    {
        german: "die Großeltern (PL)",
        english: "Grand Parents",
        turkish: "Büyük ebevenyler",
        plural: "-"
    },
    {
        german: "die Enkelin",
        english: "Granddaughter",
        turkish: "Kız Torun",
        plural: "die Enkelinnen"
    },
    {
        german: "der Enkel",
        english: "Grandson",
        turkish: "Erkek Torun",
        plural: "die Enkel"
    },
    {
        german: "die Schwester",
        english: "Sister",
        turkish: "Kız Kardeş",
        plural: "die Schwestern"
    },
    {
        german: "die Geschwister (PL)",
        english: "Siblings",
        turkish: "Kardeş",
        plural: "-"
    },
    {
        german: "der Mann",
        english: "Man",
        turkish: "Erkek",
        plural: "die Männer"
    },
    {
        german: "die Sprache",
        english: "Language",
        turkish: "Dil",
        plural: "die Sprachen"
    },
    {
        german: "das Bild",
        english: "Picture",
        turkish: "Resim",
        plural: "die Bilder"
    },
    {
        german: "der Freund",
        english: "Friend",
        turkish: "Arkadaş",
        plural: "die Freunde"
    },
    {
        german: "der Kollege",
        english: "Colleague",
        turkish: "İş Arkadaşı",
        plural: "die Kollegen"
    },
    {
        german: "der Partner",
        english: "Partner",
        turkish: "Eş",
        plural: "die Partner"
    } 
];

export default nouns;