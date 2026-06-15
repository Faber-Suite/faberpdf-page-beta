import { siteConfig } from "@/lib/site"
import type { Locale } from "@/lib/i18n-routing"

export const legalOwner = {
  name: siteConfig.ownerName,
  email: siteConfig.contactEmail,
} as const

export const legalDocumentTypes = ["terms", "privacy"] as const

export type LegalDocumentType = (typeof legalDocumentTypes)[number]

type LegalSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type LegalDocument = {
  title: string
  navLabel: string
  metadata: {
    title: string
    description: string
  }
  eyebrow: string
  description: string
  updatedLabel: string
  ownerLabel: string
  owner: string
  contactLabel: string
  contactEmail: string
  sections: LegalSection[]
}

type LegalCopy = Record<LegalDocumentType, LegalDocument>

function withOwner(
  document: Omit<LegalDocument, "owner" | "contactEmail">
): LegalDocument {
  return {
    ...document,
    owner: legalOwner.name,
    contactEmail: legalOwner.email,
  }
}

const en: LegalCopy = {
  terms: withOwner({
    title: "Terms of Service",
    navLabel: "Terms",
    metadata: {
      title: "Terms of Service",
      description:
        "Terms for using the FaberPDF website, beta downloads, and feedback channels.",
    },
    eyebrow: "Legal",
    description:
      "These terms cover the public FaberPDF website, beta desktop downloads, and feedback channels.",
    updatedLabel: "Effective date: June 15, 2026",
    ownerLabel: "Product owner",
    contactLabel: "Contact",
    sections: [
      {
        title: "Who operates FaberPDF",
        paragraphs: [
          "FaberPDF is operated by the product owner listed above. Questions about these terms or the beta website should be sent to the contact email on this page.",
        ],
      },
      {
        title: "Beta product",
        paragraphs: [
          "FaberPDF is currently offered as beta software. Features, supported platforms, installer formats, download URLs, and product behavior may change while the product is being tested and improved.",
          "The beta is provided for evaluation and everyday PDF workflow testing. You are responsible for checking that the app output is suitable for your own use before relying on it.",
        ],
      },
      {
        title: "Website and downloads",
        paragraphs: [
          "This website explains the product, links to installer files, and collects optional feedback. Installer files may be served from FaberPDF download storage or another trusted hosting location selected by the product owner.",
          "You may not interfere with the website, abuse download infrastructure, probe systems without permission, or use the site in a way that harms other visitors or the service.",
        ],
      },
      {
        title: "Local document work",
        paragraphs: [
          "FaberPDF is positioned as a desktop PDF application. This website is not a web PDF editor and is not designed to receive, process, or store your PDF documents.",
          "Do not paste sensitive document contents into feedback messages or other website forms.",
        ],
      },
      {
        title: "Feedback",
        paragraphs: [
          "If you send feedback, you allow the product owner to review it and use it to improve FaberPDF. Feedback may include an optional reply email.",
          "Please send only feedback you have the right to share, and avoid including confidential, personal, or regulated information unless it is necessary and safe for you to do so.",
        ],
      },
      {
        title: "No warranties",
        paragraphs: [
          "The website, beta downloads, and beta software are provided as available and without warranties to the extent allowed by law. The product owner does not promise that the beta will be uninterrupted, error-free, or suitable for every document workflow.",
        ],
      },
      {
        title: "Changes",
        paragraphs: [
          "These terms may be updated as the product and website evolve. The effective date on this page shows when this version became active.",
        ],
      },
    ],
  }),
  privacy: withOwner({
    title: "Privacy Policy",
    navLabel: "Privacy",
    metadata: {
      title: "Privacy Policy",
      description:
        "How the FaberPDF website handles feedback, cookies, analytics, and local document privacy.",
    },
    eyebrow: "Legal",
    description:
      "This policy explains what the FaberPDF website collects, what stays local, and how to contact the product owner.",
    updatedLabel: "Effective date: June 15, 2026",
    ownerLabel: "Product owner",
    contactLabel: "Contact",
    sections: [
      {
        title: "Controller and contact",
        paragraphs: [
          "The product owner listed above is responsible for this website's privacy practices. For privacy questions or requests, use the contact email on this page.",
        ],
      },
      {
        title: "PDF documents",
        paragraphs: [
          "The public FaberPDF website does not ask you to upload PDFs and is not intended to process PDF contents. PDF work happens in the desktop application.",
          "Do not include private document contents in feedback messages, support details, or other forms on this website.",
        ],
      },
      {
        title: "Information you provide",
        paragraphs: [
          "The feedback form can collect the message you submit, selected feedback category, platform, app version, and an optional reply email address.",
          "The reply email is optional. If you leave it blank, the feedback is handled without a direct reply address.",
        ],
      },
      {
        title: "Cookies and analytics",
        paragraphs: [
          "The site uses necessary storage for core behavior such as language routing and saving cookie choices. Optional analytics are loaded only if you allow them in the cookie preferences.",
          "Analytics, when enabled, are used to understand site visits and page performance, not to inspect PDF documents.",
        ],
      },
      {
        title: "Service providers",
        paragraphs: [
          "The website may use hosting, download delivery, analytics, and form-processing providers to operate the site and receive feedback.",
          "These providers process information only as needed for the website, downloads, analytics choices, and feedback workflow.",
        ],
      },
      {
        title: "Retention",
        paragraphs: [
          "Feedback is kept only as long as it is useful for product development, support follow-up, security, or record keeping. Cookie preferences remain stored in your browser until changed or cleared.",
        ],
      },
      {
        title: "Your choices",
        paragraphs: [
          "You can avoid optional analytics by rejecting non-essential cookies or changing cookie settings from the site footer.",
          "You can request access, correction, or deletion of personal information you provided by contacting the product owner at the email listed above.",
        ],
      },
    ],
  }),
}

const srLatn: LegalCopy = {
  terms: withOwner({
    title: "Uslovi korištenja",
    navLabel: "Uslovi",
    metadata: {
      title: "Uslovi korištenja",
      description:
        "Uslovi za korištenje FaberPDF sajta, beta preuzimanja i kanala za utiske.",
    },
    eyebrow: "Pravni dokumenti",
    description:
      "Ovi uslovi pokrivaju javni FaberPDF sajt, beta desktop preuzimanja i kanale za slanje utisaka.",
    updatedLabel: "Datum stupanja na snagu: 15. juni 2026.",
    ownerLabel: "Vlasnik proizvoda",
    contactLabel: "Kontakt",
    sections: [
      {
        title: "Ko vodi FaberPDF",
        paragraphs: [
          "FaberPDF vodi vlasnik proizvoda naveden iznad. Pitanja o ovim uslovima ili beta sajtu treba poslati na kontakt email na ovoj stranici.",
        ],
      },
      {
        title: "Beta proizvod",
        paragraphs: [
          "FaberPDF je trenutno dostupan kao beta softver. Funkcije, podržane platforme, formati instalacije, linkovi za preuzimanje i ponašanje proizvoda mogu se mijenjati dok se proizvod testira i unapređuje.",
          "Beta verzija je namijenjena za evaluaciju i provjeru svakodnevnih PDF tokova rada. Vi ste odgovorni da provjerite da li je rezultat aplikacije pogodan za vašu upotrebu prije nego što se na njega oslonite.",
        ],
      },
      {
        title: "Sajt i preuzimanja",
        paragraphs: [
          "Ovaj sajt objašnjava proizvod, vodi do instalacionih fajlova i prikuplja opcione utiske. Instalacioni fajlovi mogu biti posluženi iz FaberPDF download storage-a ili druge pouzdane hosting lokacije koju izabere vlasnik proizvoda.",
          "Ne smijete ometati sajt, zloupotrebljavati infrastrukturu za preuzimanje, ispitivati sisteme bez dozvole ili koristiti sajt na način koji šteti drugim posjetiocima ili servisu.",
        ],
      },
      {
        title: "Lokalni rad sa dokumentima",
        paragraphs: [
          "FaberPDF je pozicioniran kao desktop PDF aplikacija. Ovaj sajt nije web PDF editor i nije namijenjen za primanje, obradu ili čuvanje vaših PDF dokumenata.",
          "Ne lijepite osjetljiv sadržaj dokumenata u poruke za utiske ili druge forme na sajtu.",
        ],
      },
      {
        title: "Utisci",
        paragraphs: [
          "Ako pošaljete utisak, dozvoljavate vlasniku proizvoda da ga pregleda i koristi za unapređenje FaberPDF-a. Utisak može sadržavati opcionalni email za odgovor.",
          "Šaljite samo utiske koje imate pravo podijeliti i izbjegavajte povjerljive, lične ili regulisane podatke osim ako je to neophodno i sigurno za vas.",
        ],
      },
      {
        title: "Bez garancija",
        paragraphs: [
          "Sajt, beta preuzimanja i beta softver daju se onakvi kakvi jesu i bez garancija u mjeri dozvoljenoj zakonom. Vlasnik proizvoda ne garantuje da će beta raditi bez prekida, bez grešaka ili odgovarati svakom toku rada sa dokumentima.",
        ],
      },
      {
        title: "Izmjene",
        paragraphs: [
          "Ovi uslovi mogu biti ažurirani kako se proizvod i sajt razvijaju. Datum na ovoj stranici pokazuje kada je ova verzija stupila na snagu.",
        ],
      },
    ],
  }),
  privacy: withOwner({
    title: "Politika privatnosti",
    navLabel: "Privatnost",
    metadata: {
      title: "Politika privatnosti",
      description:
        "Kako FaberPDF sajt obrađuje utiske, kolačiće, analitiku i privatnost lokalnih dokumenata.",
    },
    eyebrow: "Pravni dokumenti",
    description:
      "Ova politika objašnjava šta FaberPDF sajt prikuplja, šta ostaje lokalno i kako kontaktirati vlasnika proizvoda.",
    updatedLabel: "Datum stupanja na snagu: 15. juni 2026.",
    ownerLabel: "Vlasnik proizvoda",
    contactLabel: "Kontakt",
    sections: [
      {
        title: "Kontrolor i kontakt",
        paragraphs: [
          "Vlasnik proizvoda naveden iznad odgovoran je za praksu privatnosti ovog sajta. Za pitanja ili zahtjeve u vezi privatnosti koristite kontakt email na ovoj stranici.",
        ],
      },
      {
        title: "PDF dokumenti",
        paragraphs: [
          "Javni FaberPDF sajt ne traži upload PDF dokumenata i nije namijenjen za obradu sadržaja PDF fajlova. PDF rad se obavlja u desktop aplikaciji.",
          "Ne uključujte privatni sadržaj dokumenata u poruke za utiske, detalje podrške ili druge forme na ovom sajtu.",
        ],
      },
      {
        title: "Informacije koje šaljete",
        paragraphs: [
          "Forma za utiske može prikupiti poruku koju pošaljete, izabranu kategoriju, platformu, verziju aplikacije i opcionalnu email adresu za odgovor.",
          "Email za odgovor je opcionalan. Ako ga ostavite praznog, utisak se obrađuje bez direktne adrese za odgovor.",
        ],
      },
      {
        title: "Kolačići i analitika",
        paragraphs: [
          "Sajt koristi neophodnu pohranu za osnovno ponašanje kao što su jezičko rutiranje i čuvanje izbora kolačića. Opciona analitika učitava se samo ako je dozvolite u podešavanjima kolačića.",
          "Analitika, kada je uključena, koristi se za razumijevanje posjeta i performansi stranica, ne za pregled PDF dokumenata.",
        ],
      },
      {
        title: "Pružaoci usluga",
        paragraphs: [
          "Sajt može koristiti hosting, isporuku preuzimanja, analitiku i servise za obradu formi kako bi radio i primao utiske.",
          "Ti pružaoci obrađuju informacije samo koliko je potrebno za sajt, preuzimanja, analitičke izbore i tok rada sa utiscima.",
        ],
      },
      {
        title: "Čuvanje podataka",
        paragraphs: [
          "Utisci se čuvaju samo dok su korisni za razvoj proizvoda, odgovor podrške, sigurnost ili evidenciju. Preference kolačića ostaju u vašem browseru dok ih ne promijenite ili obrišete.",
        ],
      },
      {
        title: "Vaši izbori",
        paragraphs: [
          "Opcionalnu analitiku možete izbjeći odbijanjem neesencijalnih kolačića ili promjenom podešavanja kolačića iz footera sajta.",
          "Možete zatražiti pristup, ispravku ili brisanje ličnih informacija koje ste poslali kontaktiranjem vlasnika proizvoda na email naveden iznad.",
        ],
      },
    ],
  }),
}

const srCyrl: LegalCopy = {
  terms: withOwner({
    title: "Услови коришћења",
    navLabel: "Услови",
    metadata: {
      title: "Услови коришћења",
      description:
        "Услови за коришћење FaberPDF сајта, бета преузимања и канала за утиске.",
    },
    eyebrow: "Правни документи",
    description:
      "Ови услови покривају јавни FaberPDF сајт, бета desktop преузимања и канале за слање утисака.",
    updatedLabel: "Датум ступања на снагу: 15. јун 2026.",
    ownerLabel: "Власник производа",
    contactLabel: "Контакт",
    sections: [
      {
        title: "Ко води FaberPDF",
        paragraphs: [
          "FaberPDF води власник производа наведен изнад. Питања о овим условима или бета сајту треба послати на контакт имејл на овој страници.",
        ],
      },
      {
        title: "Бета производ",
        paragraphs: [
          "FaberPDF је тренутно доступан као бета софтвер. Функције, подржане платформе, формати инсталације, линкови за преузимање и понашање производа могу се мењати док се производ тестира и унапређује.",
          "Бета верзија је намењена за евалуацију и проверу свакодневних PDF токова рада. Ви сте одговорни да проверите да ли је резултат апликације погодан за вашу употребу пре него што се на њега ослоните.",
        ],
      },
      {
        title: "Сајт и преузимања",
        paragraphs: [
          "Овај сајт објашњава производ, води до инсталационих фајлова и прикупља опционе утиске. Инсталациони фајлови могу бити послужени из FaberPDF download storage-а или друге поуздане hosting локације коју изабере власник производа.",
          "Не смете ометати сајт, злоупотребљавати инфраструктуру за преузимање, испитивати системе без дозволе или користити сајт на начин који штети другим посетиоцима или сервису.",
        ],
      },
      {
        title: "Локални рад са документима",
        paragraphs: [
          "FaberPDF је позициониран као desktop PDF апликација. Овај сајт није web PDF едитор и није намењен за примање, обраду или чување ваших PDF докумената.",
          "Не лепите осетљив садржај докумената у поруке за утиске или друге форме на сајту.",
        ],
      },
      {
        title: "Утисци",
        paragraphs: [
          "Ако пошаљете утисак, дозвољавате власнику производа да га прегледа и користи за унапређење FaberPDF-а. Утисак може садржати опциони имејл за одговор.",
          "Шаљите само утиске које имате право поделити и избегавајте поверљиве, личне или регулисане податке осим ако је то неопходно и безбедно за вас.",
        ],
      },
      {
        title: "Без гаранција",
        paragraphs: [
          "Сајт, бета преузимања и бета софтвер дају се онакви какви јесу и без гаранција у мери дозвољеној законом. Власник производа не гарантује да ће бета радити без прекида, без грешака или одговарати сваком току рада са документима.",
        ],
      },
      {
        title: "Измене",
        paragraphs: [
          "Ови услови могу бити ажурирани како се производ и сајт развијају. Датум на овој страници показује када је ова верзија ступила на снагу.",
        ],
      },
    ],
  }),
  privacy: withOwner({
    title: "Политика приватности",
    navLabel: "Приватност",
    metadata: {
      title: "Политика приватности",
      description:
        "Како FaberPDF сајт обрађује утиске, колачиће, аналитику и приватност локалних докумената.",
    },
    eyebrow: "Правни документи",
    description:
      "Ова политика објашњава шта FaberPDF сајт прикупља, шта остаје локално и како контактирати власника производа.",
    updatedLabel: "Датум ступања на снагу: 15. јун 2026.",
    ownerLabel: "Власник производа",
    contactLabel: "Контакт",
    sections: [
      {
        title: "Контролор и контакт",
        paragraphs: [
          "Власник производа наведен изнад одговоран је за праксу приватности овог сајта. За питања или захтеве у вези приватности користите контакт имејл на овој страници.",
        ],
      },
      {
        title: "PDF документи",
        paragraphs: [
          "Јавни FaberPDF сајт не тражи upload PDF докумената и није намењен за обраду садржаја PDF фајлова. PDF рад се обавља у desktop апликацији.",
          "Не укључујте приватни садржај докумената у поруке за утиске, детаље подршке или друге форме на овом сајту.",
        ],
      },
      {
        title: "Информације које шаљете",
        paragraphs: [
          "Форма за утиске може прикупити поруку коју пошаљете, изабрану категорију, платформу, верзију апликације и опциону имејл адресу за одговор.",
          "Имејл за одговор је опционалан. Ако га оставите празног, утисак се обрађује без директне адресе за одговор.",
        ],
      },
      {
        title: "Колачићи и аналитика",
        paragraphs: [
          "Сајт користи неопходну похрану за основно понашање као што су језичко рутирање и чување избора колачића. Опциона аналитика учитава се само ако је дозволите у подешавањима колачића.",
          "Аналитика, када је укључена, користи се за разумевање посета и перформанси страница, не за преглед PDF докумената.",
        ],
      },
      {
        title: "Пружаоци услуга",
        paragraphs: [
          "Сајт може користити hosting, испоруку преузимања, аналитику и сервисе за обраду форми како би радио и примао утиске.",
          "Ти пружаоци обрађују информације само колико је потребно за сајт, преузимања, аналитичке изборе и ток рада са утисцима.",
        ],
      },
      {
        title: "Чување података",
        paragraphs: [
          "Утисци се чувају само док су корисни за развој производа, одговор подршке, безбедност или евиденцију. Преференце колачића остају у вашем browser-у док их не промените или обришете.",
        ],
      },
      {
        title: "Ваши избори",
        paragraphs: [
          "Опциону аналитику можете избећи одбијањем неесенцијалних колачића или променом подешавања колачића из footer-а сајта.",
          "Можете затражити приступ, исправку или брисање личних информација које сте послали контактирањем власника производа на имејл наведен изнад.",
        ],
      },
    ],
  }),
}

const bs: LegalCopy = {
  terms: withOwner({
    ...srLatn.terms,
    metadata: {
      title: "Uslovi korištenja",
      description:
        "Uslovi za korištenje FaberPDF sajta, beta preuzimanja i kanala za utiske.",
    },
  }),
  privacy: withOwner({
    ...srLatn.privacy,
    metadata: {
      title: "Politika privatnosti",
      description:
        "Kako FaberPDF sajt obrađuje utiske, kolačiće, analitiku i privatnost lokalnih dokumenata.",
    },
  }),
}

const legalCopies: Record<Locale, LegalCopy> = {
  en,
  "sr-Latn": srLatn,
  "sr-Cyrl": srCyrl,
  bs,
}

const legalHeadings: Record<Locale, string> = {
  en: "Legal",
  "sr-Latn": "Pravno",
  "sr-Cyrl": "Правно",
  bs: "Pravno",
}

export function getLegalDocument(locale: Locale, type: LegalDocumentType) {
  return legalCopies[locale][type]
}

export function getLegalHeading(locale: Locale) {
  return legalHeadings[locale]
}

export function getLegalNavigation(locale: Locale) {
  return legalDocumentTypes.map((type) => ({
    href: type === "terms" ? "/terms" : "/privacy",
    label: getLegalDocument(locale, type).navLabel,
  }))
}
