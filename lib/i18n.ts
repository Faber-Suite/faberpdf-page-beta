import {
  BadgeCheckIcon,
  BugIcon,
  FilePenLineIcon,
  FileTextIcon,
  LightbulbIcon,
  LockKeyholeIcon,
  MessageSquareTextIcon,
  MonitorDownIcon,
  PenLineIcon,
  ShieldCheckIcon,
  TextCursorInputIcon,
} from "lucide-react"

import { siteConfig } from "@/lib/site"
import {
  defaultLocale,
  getLocaleFromPathname,
  getPathWithoutLocale,
  getPreferredLocale,
  htmlLangs,
  isLocale,
  localeLabels,
  locales,
  localizePath,
  type Locale,
} from "@/lib/i18n-routing"

export {
  defaultLocale,
  getLocaleFromPathname,
  getPathWithoutLocale,
  getPreferredLocale,
  htmlLangs,
  isLocale,
  localeLabels,
  locales,
  localizePath,
}

const en = {
  locale: "en",
  htmlLang: "en",
  metadata: {
    defaultTitle: `${siteConfig.name} - Desktop PDF editor`,
    titleTemplate: `%s - ${siteConfig.name}`,
    description: siteConfig.description,
  },
  navigation: [
    { label: "Features", href: "/#features" },
    { label: "Download", href: "/download" },
    { label: "Feedback", href: "/feedback" },
    { label: "FAQ", href: "/#faq" },
  ],
  header: {
    primaryNavigationLabel: "Primary navigation",
    download: "Download",
    feedback: "Feedback",
    toggleTheme: "Toggle theme",
  },
  footer: {
    description:
      "Desktop PDF editing for signatures, notes, validation checks, and small text fixes.",
    productHeading: "Product",
    contactHeading: "Contact",
    copyright: "All rights reserved.",
  },
  languageSwitcher: {
    label: "Language",
  },
  productWorkspace: {
    editorAlt: "FaberPDF editor with an open PDF",
    welcomeAlt: "FaberPDF welcome screen",
    editorBadge: "PDF editor",
    welcomeBadge: "Desktop app",
  },
  home: {
    hero: {
      badge: "Public preview",
      secondaryBadge: "Local files. Direct download.",
      versionBadge: `Version ${siteConfig.betaVersion}`,
      title: "Edit PDFs on your desktop. Keep the file on your machine.",
      description:
        "FaberPDF handles the PDF jobs that break your flow: signatures, annotations, validation checks, and focused text fixes without starting with a cloud upload.",
      primaryAction: "Download for your desktop",
      secondaryAction: "Send feedback",
    },
    sections: {
      featuresEyebrow: "Desktop workflow",
      featuresTitle: "Routine PDF work should feel local, fast, and plain.",
      featuresDescription:
        "Open a file, make the change, save it, and get back to the real work. The preview is free while the app is shaped by real usage.",
      screenshotsEyebrow: "Actual product screens",
      screenshotsTitle: "See the app before you install it.",
      screenshotsDescription:
        "The page uses real FaberPDF screens, so visitors can judge the desktop workflow before downloading.",
      previewEyebrow: "Preview promise",
      previewTitle: "A simple path for trying FaberPDF.",
      previewDescription:
        "A clear page, the right desktop build, and one place to tell us what needs work.",
      downloadEyebrow: "Download",
      downloadTitle: "One button for the visitor's operating system.",
      downloadDescription:
        "The site detects Windows, macOS, or Linux and points people to the matching installer hosted on downloads.faberpdf.com.",
      feedbackEyebrow: "Feedback",
      feedbackTitle: "Found something rough? Send it from a dedicated page.",
      feedbackDescription:
        "Feedback stays anonymous by default and goes through Formspree to email. Specific examples are more useful than polished essays.",
      trustEyebrow: "Trust",
      trustTitle: "Clear enough before the click.",
      trustDescription:
        "The website is only the marketing, download, and feedback surface. The PDF work belongs in the desktop app.",
      faqEyebrow: "FAQ",
      faqTitle: "Clear boundaries for this preview.",
      faqDescription:
        "A plain product page, one download path, and a real feedback loop.",
    },
    featurePillars: [
      {
        title: "Sign and mark up PDFs locally",
        description:
          "Place signatures, add notes, and save finished documents from the desktop app.",
        icon: PenLineIcon,
      },
      {
        title: "Fix small text issues",
        description:
          "Make focused corrections in existing PDFs without rebuilding the whole document.",
        icon: TextCursorInputIcon,
      },
      {
        title: "Keep documents on your machine",
        description:
          "Routine review and editing can stay in a local file workflow instead of beginning with a browser upload.",
        icon: LockKeyholeIcon,
      },
    ],
    previewCards: [
      {
        title: "Free while feedback shapes the app",
        description:
          "This preview is for learning what users need before the paid launch returns.",
        icon: BadgeCheckIcon,
      },
      {
        title: "Anonymous feedback is welcome",
        description:
          "Email is optional. Send bugs, friction, missing workflows, or quick notes.",
        icon: MessageSquareTextIcon,
      },
      {
        title: "Desktop app first",
        description:
          "The website explains FaberPDF and hosts builds. Editing happens in the app.",
        icon: MonitorDownIcon,
      },
    ],
    feedbackTips: [
      {
        title: "Bugs",
        description:
          "What happened, what you expected, and your operating system.",
        icon: BugIcon,
      },
      {
        title: "Friction",
        description:
          "Anything that felt slow, hidden, confusing, or too many clicks.",
        icon: FilePenLineIcon,
      },
      {
        title: "Ideas",
        description:
          "PDF jobs you want FaberPDF to handle better in future builds.",
        icon: LightbulbIcon,
      },
    ],
    trustPoints: [
      "Direct desktop download",
      "Clear public preview",
      "Anonymous feedback",
      "Local PDF workflow",
      "Windows, macOS, and Linux builds",
      "Real desktop app screenshots",
    ],
    legalNotes: [
      {
        title: "Local-first positioning",
        description:
          "FaberPDF is positioned around working with files on your desktop rather than uploading PDFs to this website.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Feedback by email",
        description:
          "Feedback is sent through Formspree to the site owner. Do not paste sensitive PDF contents into feedback messages.",
        icon: FileTextIcon,
      },
    ],
    faqItems: [
      {
        question: "Is this preview free?",
        answer:
          "Yes. Download the current desktop build directly from downloads.faberpdf.com.",
      },
      {
        question: "Is FaberPDF a web PDF editor?",
        answer:
          "No. FaberPDF is a desktop PDF editor. The website explains the product, hosts download links, and collects feedback.",
      },
      {
        question: "Will the final version also be free?",
        answer:
          "The stable commercial model can be decided later. This project is intentionally focused on the free public preview.",
      },
      {
        question: "Can I send feedback anonymously?",
        answer: "Yes. Email is optional and only useful if you want a reply.",
      },
      {
        question: "How are download links configured?",
        answer:
          "The public download links point to downloads.faberpdf.com. Future releases can update those links without changing the operating-system detection flow.",
      },
    ],
    feedbackCta: "Open feedback page",
  },
  downloadPage: {
    metadata: {
      title: "Download",
      description:
        "Download the FaberPDF desktop preview for Windows, macOS, or Linux.",
    },
    eyebrow: "Download",
    title: "Get the desktop build for your operating system.",
    description:
      "Open this page on the machine where you want to try FaberPDF. The site detects your operating system and keeps the alternate platform choices close by.",
    badges: [
      "Windows, macOS, and Linux",
      "Local desktop app",
      "Feedback-friendly preview",
    ],
    cardsTitle: "Before you install",
    cardsDescription:
      "A few practical notes for trying FaberPDF on a real desktop workflow.",
    cards: [
      {
        title: "Use the matching desktop build",
        description:
          "The primary button follows the detected operating system. If detection misses, choose another platform from the selector.",
      },
      {
        title: "Keep sensitive PDFs local",
        description:
          "This website hosts the installer. Editing and review happen inside the desktop app.",
      },
      {
        title: "Tell us what feels rough",
        description:
          "Short notes about install friction, missing builds, or platform-specific problems are useful.",
      },
    ],
    feedbackTitle: "Something off with the build?",
    feedbackDescription:
      "Send a note from the feedback page with your operating system and app version.",
    feedbackAction: "Send download feedback",
  },
  download: {
    platformNames: {
      linux: "Linux",
      macos: "macOS",
      mobile: "mobile device",
      unknown: "your desktop",
      windows: "Windows",
    },
    formats: {
      linux: "AppImage or archive",
      macos: ".app archive",
      windows: ".exe installer",
    },
    details: {
      linux: "Direct AppImage build for Linux desktops.",
      macos: "Compressed FaberPDF app archive for macOS desktops.",
      mobile:
        "FaberPDF is a desktop app. Open this page on Windows, macOS, or Linux to download the matching build.",
      windows: "For Windows 10 and newer desktop machines.",
      unknown:
        "Open this page on Windows, macOS, or Linux, or choose a desktop platform.",
    },
    detectedLabel: "Detected platform",
    selectLabel: "Different OS?",
    selectPlaceholder: "Choose OS",
    recommendedBadge: "Recommended",
    pendingBadge: "Link pending",
    unsupportedBadge: "Not supported",
    unsupportedTitle: "Your device is not supported",
    unsupportedDescription:
      "There is no Android or iOS build for this desktop preview.",
    unsupportedAlertTitle: "Open this page on a desktop",
    unsupportedAlertDescription:
      "Mobile visitors do not see a download button because FaberPDF currently ships only for Windows, macOS, and Linux.",
    button: "Download for {platform}",
    unsupportedButton: "Your OS is not supported",
    pendingButton: "Installer link pending",
    unknownButton: "Choose a desktop OS",
    noteTitle: "Installers are hosted on downloads.faberpdf.com",
    noteDescription:
      "The primary button opens the matching installer from FaberPDF download storage.",
  },
  feedback: {
    metadata: {
      title: "Feedback",
      description:
        "Send anonymous FaberPDF feedback about bugs, friction, ideas, and desktop workflow notes.",
    },
    title: "Tell us what should change next.",
    description:
      "Send bugs, friction, workflow gaps, or small wins. The form goes through Formspree to email, and the reply address stays optional.",
    formTitle: "Send feedback",
    formDescription: "Short notes are fine. Specific examples are gold.",
    badges: {
      anonymous: "Anonymous by default",
      emailOptional: "Email optional",
    },
    tipsTitle: "Useful feedback includes",
    tips: [
      "What you were trying to do.",
      "What felt slow, unclear, or broken.",
      "Your platform and app version if it matters.",
    ],
    form: {
      categoryLabel: "Feedback type",
      categoryDescription:
        "Choose the closest bucket so the message is easier to triage.",
      categories: {
        bug: "Bug",
        friction: "Friction",
        idea: "Idea",
        praise: "Praise",
      },
      platformLabel: "Platform",
      platforms: {
        linux: "Linux",
        macos: "macOS",
        other: "Other",
        windows: "Windows",
      },
      versionLabel: "App version",
      versionPlaceholder: siteConfig.betaVersion,
      messageLabel: "Your feedback",
      messagePlaceholder:
        "What happened, what felt rough, or what should be easier?",
      messageDescription: "Please avoid pasting sensitive document contents.",
      emailLabel: "Reply email",
      emailPlaceholder: "you@example.com",
      emailDescription:
        "Optional. Leave this blank for fully anonymous feedback.",
      submit: "Send feedback",
      submitting: "Sending...",
      submittingDescription: "Sending feedback...",
      successTitle: "Feedback sent",
      successDescription: "Thanks. Your FaberPDF feedback was sent.",
      errorTitle: "Feedback not sent",
      errorDescription:
        "Feedback could not be sent right now. Please try again.",
    },
  },
} as const

const srLatn = {
  ...en,
  locale: "sr-Latn",
  htmlLang: "sr-Latn",
  metadata: {
    defaultTitle: `${siteConfig.name} - Desktop PDF editor`,
    titleTemplate: `%s - ${siteConfig.name}`,
    description:
      "Lokalni desktop PDF editor za potpisivanje dokumenata, anotacije, proveru PDF-ova i male izmene teksta offline.",
  },
  navigation: [
    { label: "Funkcije", href: "/#features" },
    { label: "Preuzimanje", href: "/download" },
    { label: "Utisci", href: "/feedback" },
    { label: "FAQ", href: "/#faq" },
  ],
  header: {
    primaryNavigationLabel: "Glavna navigacija",
    download: "Preuzmi",
    feedback: "Utisci",
    toggleTheme: "Promeni temu",
  },
  footer: {
    description:
      "Desktop PDF editor za potpise, napomene, provere dokumenata i male izmene teksta.",
    productHeading: "Proizvod",
    contactHeading: "Kontakt",
    copyright: "Sva prava zadržana.",
  },
  languageSwitcher: {
    label: "Jezik",
  },
  productWorkspace: {
    editorAlt: "FaberPDF editor sa otvorenim PDF-om",
    welcomeAlt: "FaberPDF početni ekran",
    editorBadge: "PDF editor",
    welcomeBadge: "Desktop aplikacija",
  },
  home: {
    ...en.home,
    hero: {
      badge: "Javno izdanje",
      secondaryBadge: "Lokalni fajlovi. Direktno preuzimanje.",
      versionBadge: `Verzija ${siteConfig.betaVersion}`,
      title: "Uređujte PDF na desktopu. Fajl ostaje kod vas.",
      description:
        "FaberPDF rešava PDF poslove koji prekidaju tok rada: potpise, anotacije, provere dokumenata i ciljane izmene teksta bez slanja fajla u servis u oblaku.",
      primaryAction: "Preuzmi za svoj računar",
      secondaryAction: "Pošalji utisak",
    },
    sections: {
      featuresEyebrow: "Desktop tok rada",
      featuresTitle: "Svakodnevni PDF posao treba da bude lokalan i brz.",
      featuresDescription:
        "Otvorite fajl, napravite izmenu, sačuvajte ga i nastavite dalje. Ovo izdanje je besplatno dok se aplikacija oblikuje kroz stvarno korišćenje.",
      screenshotsEyebrow: "Stvarni ekrani proizvoda",
      screenshotsTitle: "Pogledajte aplikaciju pre instalacije.",
      screenshotsDescription:
        "Stranica koristi stvarne FaberPDF ekrane da posetilac razume desktop tok rada pre preuzimanja.",
      previewEyebrow: "Obećanje ovog izdanja",
      previewTitle: "Jednostavan put da probate FaberPDF.",
      previewDescription:
        "Jasna stranica, pravi desktop paket i jedno mesto za korisne utiske.",
      downloadEyebrow: "Preuzimanje",
      downloadTitle: "Jedno dugme za operativni sistem posetioca.",
      downloadDescription:
        "Sajt prepoznaje Windows, macOS ili Linux i vodi ka odgovarajućem instalacionom fajlu na downloads.faberpdf.com.",
      feedbackEyebrow: "Utisci",
      feedbackTitle: "Nešto je zapinjalo? Pošaljite na posebnoj stranici.",
      feedbackDescription:
        "Utisci su anonimni podrazumevano i preko Formspree-a stižu na imejl. Konkretan primer vredi više od savršeno napisane poruke.",
      trustEyebrow: "Poverenje",
      trustTitle: "Dovoljno jasno pre klika.",
      trustDescription:
        "Sajt je samo marketing, preuzimanje i mesto za utiske. PDF posao se obavlja u desktop aplikaciji.",
      faqEyebrow: "FAQ",
      faqTitle: "Jasne granice za ovo izdanje.",
      faqDescription:
        "Jasna stranica proizvoda, jedan put do preuzimanja i stvarna petlja za utiske.",
    },
    featurePillars: [
      {
        title: "Potpisujte i obeležavajte PDF-ove lokalno",
        description:
          "Postavite potpise, dodajte napomene i sačuvajte završene dokumente iz desktop aplikacije.",
        icon: PenLineIcon,
      },
      {
        title: "Ispravite sitne tekstualne greške",
        description:
          "Napravite ciljane izmene u postojećim PDF-ovima bez ponovne izrade celog dokumenta.",
        icon: TextCursorInputIcon,
      },
      {
        title: "Dokumenti ostaju na vašem računaru",
        description:
          "Pregled i uređivanje mogu ostati u lokalnom toku rada umesto da počnu slanjem fajla kroz pregledač.",
        icon: LockKeyholeIcon,
      },
    ],
    previewCards: [
      {
        title: "Besplatno dok utisci oblikuju aplikaciju",
        description:
          "Ovo izdanje služi da saznamo šta korisnicima stvarno treba pre povratka plaćenog lansiranja.",
        icon: BadgeCheckIcon,
      },
      {
        title: "Anonimni utisci su dobrodošli",
        description:
          "Imejl je opcionalan. Pošaljite grešku, frikciju, tok rada koji nedostaje ili kratku napomenu.",
        icon: MessageSquareTextIcon,
      },
      {
        title: "Desktop aplikacija na prvom mestu",
        description:
          "Sajt objašnjava FaberPDF i hostuje pakete. Uređivanje se radi u aplikaciji.",
        icon: MonitorDownIcon,
      },
    ],
    feedbackTips: [
      {
        title: "Greške",
        description: "Šta se desilo, šta ste očekivali i koji OS koristite.",
        icon: BugIcon,
      },
      {
        title: "Frikcija",
        description:
          "Sve što je delovalo sporo, skriveno, nejasno ili sa previše klikova.",
        icon: FilePenLineIcon,
      },
      {
        title: "Ideje",
        description:
          "PDF poslovi koje želite da FaberPDF bolje rešava u budućim izdanjima.",
        icon: LightbulbIcon,
      },
    ],
    trustPoints: [
      "Direktno desktop preuzimanje",
      "Javno izdanje bez konfuzije",
      "Anonimni utisci",
      "Lokalni PDF tok rada",
      "Windows, macOS i Linux paketi",
      "Stvarni snimci ekrana aplikacije",
    ],
    legalNotes: [
      {
        title: "Lokalni proizvod",
        description:
          "FaberPDF se pozicionira oko rada sa fajlovima na desktopu, ne oko slanja PDF-ova na ovaj sajt.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Utisci preko imejla",
        description:
          "Utisci se šalju kroz Formspree vlasniku sajta. Ne lepite osetljiv sadržaj PDF-a u poruku.",
        icon: FileTextIcon,
      },
    ],
    faqItems: [
      {
        question: "Da li je ovo izdanje besplatno?",
        answer:
          "Da. Preuzmite trenutni desktop paket direktno sa downloads.faberpdf.com.",
      },
      {
        question: "Da li je FaberPDF web PDF editor?",
        answer:
          "Ne. FaberPDF je desktop PDF editor. Sajt objašnjava proizvod, hostuje linkove za preuzimanje i prikuplja utiske.",
      },
      {
        question: "Da li će finalna verzija biti besplatna?",
        answer:
          "Komercijalni model za stabilnu verziju može da se odluči kasnije. Ovaj projekat je namerno fokusiran na besplatno javno izdanje.",
      },
      {
        question: "Mogu li anonimno da pošaljem utisak?",
        answer: "Da. Imejl je opcionalan i koristan samo ako želite odgovor.",
      },
      {
        question: "Kako se podešavaju linkovi za preuzimanje?",
        answer:
          "Javni linkovi za preuzimanje vode na downloads.faberpdf.com. Buduća izdanja mogu da promene te linkove bez promene prepoznavanja operativnog sistema.",
      },
    ],
    feedbackCta: "Otvori stranicu za utiske",
  },
  downloadPage: {
    metadata: {
      title: "Preuzimanje",
      description:
        "Preuzmite FaberPDF desktop izdanje za Windows, macOS ili Linux.",
    },
    eyebrow: "Preuzimanje",
    title: "Preuzmite desktop paket za svoj operativni sistem.",
    description:
      "Otvorite ovu stranicu na računaru na kom želite da probate FaberPDF. Sajt prepoznaje operativni sistem, a izbor drugih platformi ostaje odmah pri ruci.",
    badges: [
      "Windows, macOS i Linux",
      "Lokalna desktop aplikacija",
      "Javno izdanje za utiske",
    ],
    cardsTitle: "Pre instalacije",
    cardsDescription:
      "Nekoliko praktičnih napomena za probu FaberPDF-a u stvarnom desktop toku rada.",
    cards: [
      {
        title: "Koristite odgovarajući desktop paket",
        description:
          "Glavno dugme prati prepoznati operativni sistem. Ako detekcija promaši, izaberite drugu platformu iz selektora.",
      },
      {
        title: "Osetljivi PDF-ovi ostaju lokalno",
        description:
          "Ovaj sajt hostuje instalacioni fajl. Uređivanje i pregled rade se u desktop aplikaciji.",
      },
      {
        title: "Recite šta zapinje",
        description:
          "Kratke poruke o instalaciji, paketima koji nedostaju ili platformskim problemima su korisne.",
      },
    ],
    feedbackTitle: "Nešto ne valja sa paketom?",
    feedbackDescription:
      "Pošaljite napomenu sa stranice za utiske uz operativni sistem i verziju aplikacije.",
    feedbackAction: "Pošalji utisak o preuzimanju",
  },
  download: {
    platformNames: {
      linux: "Linux",
      macos: "macOS",
      mobile: "mobilni uređaj",
      unknown: "vaš računar",
      windows: "Windows",
    },
    formats: {
      linux: "AppImage ili arhiva",
      macos: ".app arhiva",
      windows: ".exe instalacioni fajl",
    },
    details: {
      linux: "Direktan AppImage paket za Linux desktop računare.",
      macos: "Kompresovana FaberPDF app arhiva za macOS računare.",
      mobile:
        "FaberPDF je desktop aplikacija. Otvorite ovu stranicu na Windows, macOS ili Linux računaru da preuzmete odgovarajući paket.",
      windows: "Za Windows 10 i novije desktop računare.",
      unknown:
        "Otvorite ovu stranicu na Windows, macOS ili Linux računaru, ili izaberite desktop platformu.",
    },
    detectedLabel: "Prepoznata platforma",
    selectLabel: "Drugi OS?",
    selectPlaceholder: "Izaberite OS",
    recommendedBadge: "Preporučeno",
    pendingBadge: "Link se čeka",
    unsupportedBadge: "Nije podržano",
    unsupportedTitle: "Vaš uređaj nije podržan",
    unsupportedDescription:
      "Ne postoji Android ili iOS paket za ovo desktop izdanje.",
    unsupportedAlertTitle: "Otvorite ovu stranicu na računaru",
    unsupportedAlertDescription:
      "Mobilnim posetiocima se ne prikazuje dugme za preuzimanje jer FaberPDF trenutno izlazi samo za Windows, macOS i Linux.",
    button: "Preuzmi za {platform}",
    unsupportedButton: "Vaš OS nije podržan",
    pendingButton: "Link za instalaciju se čeka",
    unknownButton: "Izaberite desktop OS",
    noteTitle: "Instalacioni fajlovi su na downloads.faberpdf.com",
    noteDescription:
      "Glavno dugme otvara odgovarajući instalacioni fajl iz FaberPDF download storage-a.",
  },
  feedback: {
    metadata: {
      title: "Utisci",
      description:
        "Pošaljite anonimne FaberPDF utiske o greškama, frikciji, idejama i desktop toku rada.",
    },
    title: "Recite šta treba sledeće da se promeni.",
    description:
      "Pošaljite grešku, frikciju, prazninu u toku rada ili mali plus. Forma ide preko Formspree-a na imejl, a adresa za odgovor je opcionalna.",
    formTitle: "Pošaljite utisak",
    formDescription:
      "Kratke poruke su sasvim u redu. Konkretni primeri vrede najviše.",
    badges: {
      anonymous: "Anonimno podrazumevano",
      emailOptional: "Imejl opcionalan",
    },
    tipsTitle: "Korisni utisci uključuju",
    tips: [
      "Šta ste pokušavali da uradite.",
      "Šta je delovalo sporo, nejasno ili pokvareno.",
      "Platformu i verziju aplikacije ako je važno.",
    ],
    form: {
      categoryLabel: "Tip utiska",
      categoryDescription:
        "Izaberite najbližu kategoriju da poruka lakše uđe u trijažu.",
      categories: {
        bug: "Greška",
        friction: "Frikcija",
        idea: "Ideja",
        praise: "Pohvala",
      },
      platformLabel: "Platforma",
      platforms: {
        linux: "Linux",
        macos: "macOS",
        other: "Drugo",
        windows: "Windows",
      },
      versionLabel: "Verzija aplikacije",
      versionPlaceholder: siteConfig.betaVersion,
      messageLabel: "Vaš utisak",
      messagePlaceholder:
        "Šta se desilo, šta je zapinjalo ili šta treba da bude lakše?",
      messageDescription: "Molimo ne lepite osetljiv sadržaj dokumenta.",
      emailLabel: "Imejl za odgovor",
      emailPlaceholder: "vi@example.com",
      emailDescription:
        "Opcionalno. Ostavite prazno za potpuno anoniman utisak.",
      submit: "Pošalji utisak",
      submitting: "Šaljemo...",
      submittingDescription: "Šaljemo utisak...",
      successTitle: "Utisak je poslat",
      successDescription: "Hvala. Vaš FaberPDF utisak je poslat.",
      errorTitle: "Utisak nije poslat",
      errorDescription:
        "Utisak trenutno ne može da se pošalje. Pokušajte ponovo.",
    },
  },
} as const

const srCyrl = {
  ...srLatn,
  locale: "sr-Cyrl",
  htmlLang: "sr-Cyrl",
  metadata: {
    defaultTitle: `${siteConfig.name} - Десктоп PDF едитор`,
    titleTemplate: `%s - ${siteConfig.name}`,
    description:
      "Локални десктоп PDF едитор за потписивање докумената, анотације, проверу PDF-ова и мале измене текста offline.",
  },
  navigation: [
    { label: "Функције", href: "/#features" },
    { label: "Преузимање", href: "/download" },
    { label: "Утисци", href: "/feedback" },
    { label: "FAQ", href: "/#faq" },
  ],
  header: {
    primaryNavigationLabel: "Главна навигација",
    download: "Преузми",
    feedback: "Утисци",
    toggleTheme: "Промени тему",
  },
  footer: {
    description:
      "Десктоп PDF едитор за потписе, напомене, провере докумената и мале измене текста.",
    productHeading: "Производ",
    contactHeading: "Контакт",
    copyright: "Сва права задржана.",
  },
  languageSwitcher: {
    label: "Језик",
  },
  productWorkspace: {
    editorAlt: "FaberPDF едитор са отвореним PDF-ом",
    welcomeAlt: "FaberPDF почетни екран",
    editorBadge: "PDF едитор",
    welcomeBadge: "Десктоп апликација",
  },
  home: {
    ...srLatn.home,
    hero: {
      badge: "Јавно издање",
      secondaryBadge: "Локални фајлови. Директно преузимање.",
      versionBadge: `Верзија ${siteConfig.betaVersion}`,
      title: "Уређујте PDF на десктопу. Фајл остаје код вас.",
      description:
        "FaberPDF решава PDF послове који прекидају ток рада: потписе, анотације, провере докумената и циљане измене текста без слања фајла у сервис у облаку.",
      primaryAction: "Преузми за свој рачунар",
      secondaryAction: "Пошаљи утисак",
    },
    sections: {
      featuresEyebrow: "Десктоп ток рада",
      featuresTitle: "Свакодневни PDF посао треба да буде локалан и брз.",
      featuresDescription:
        "Отворите фајл, направите измену, сачувајте га и наставите даље. Ово издање је бесплатно док се апликација обликује кроз стварно коришћење.",
      screenshotsEyebrow: "Стварни екрани производа",
      screenshotsTitle: "Погледајте апликацију пре инсталације.",
      screenshotsDescription:
        "Страница користи стварне FaberPDF екране да посетилац разуме десктоп ток рада пре преузимања.",
      previewEyebrow: "Обећање овог издања",
      previewTitle: "Једноставан пут да пробате FaberPDF.",
      previewDescription:
        "Јасна страница, прави десктоп пакет и једно место за корисне утиске.",
      downloadEyebrow: "Преузимање",
      downloadTitle: "Једно дугме за оперативни систем посетиоца.",
      downloadDescription:
        "Сајт препознаје Windows, macOS или Linux и води ка одговарајућем инсталационом фајлу на downloads.faberpdf.com.",
      feedbackEyebrow: "Утисци",
      feedbackTitle: "Нешто је запињало? Пошаљите на посебној страници.",
      feedbackDescription:
        "Утисци су анонимни подразумевано и преко Formspree-а стижу на имејл. Конкретан пример вреди више од савршено написане поруке.",
      trustEyebrow: "Поверење",
      trustTitle: "Довољно јасно пре клика.",
      trustDescription:
        "Сајт је само маркетинг, преузимање и место за утиске. PDF посао се обавља у десктоп апликацији.",
      faqEyebrow: "FAQ",
      faqTitle: "Јасне границе за ово издање.",
      faqDescription:
        "Јасна страница производа, један пут до преузимања и стварна петља за утиске.",
    },
    featurePillars: [
      {
        title: "Потписујте и обележавајте PDF-ове локално",
        description:
          "Поставите потписе, додајте напомене и сачувајте завршене документе из десктоп апликације.",
        icon: PenLineIcon,
      },
      {
        title: "Исправите ситне текстуалне грешке",
        description:
          "Направите циљане измене у постојећим PDF-овима без поновне израде целог документа.",
        icon: TextCursorInputIcon,
      },
      {
        title: "Документи остају на вашем рачунару",
        description:
          "Преглед и уређивање могу остати у локалном току рада уместо да почну слањем фајла кроз прегледач.",
        icon: LockKeyholeIcon,
      },
    ],
    previewCards: [
      {
        title: "Бесплатно док утисци обликују апликацију",
        description:
          "Ово издање служи да сазнамо шта корисницима стварно треба пре повратка плаћеног лансирања.",
        icon: BadgeCheckIcon,
      },
      {
        title: "Анонимни утисци су добродошли",
        description:
          "Имејл је опционалан. Пошаљите грешку, фрикцију, ток рада који недостаје или кратку напомену.",
        icon: MessageSquareTextIcon,
      },
      {
        title: "Десктоп апликација на првом месту",
        description:
          "Сајт објашњава FaberPDF и нуди пакете. Уређивање се ради у апликацији.",
        icon: MonitorDownIcon,
      },
    ],
    feedbackTips: [
      {
        title: "Грешке",
        description:
          "Шта се десило, шта сте очекивали и који оперативни систем користите.",
        icon: BugIcon,
      },
      {
        title: "Фрикција",
        description:
          "Све што је деловало споро, скривено, нејасно или са превише кликова.",
        icon: FilePenLineIcon,
      },
      {
        title: "Идеје",
        description:
          "PDF послови које желите да FaberPDF боље решава у будућим издањима.",
        icon: LightbulbIcon,
      },
    ],
    trustPoints: [
      "Директно десктоп преузимање",
      "Јавно издање без конфузије",
      "Анонимни утисци",
      "Локални PDF ток рада",
      "Windows, macOS и Linux пакети",
      "Стварни снимци екрана апликације",
    ],
    legalNotes: [
      {
        title: "Локални производ",
        description:
          "FaberPDF се позиционира око рада са фајловима на десктопу, не око слања PDF-ова на овај сајт.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Утисци преко имејла",
        description:
          "Утисци се шаљу кроз Formspree власнику сајта. Не лепите осетљив садржај PDF-а у поруку.",
        icon: FileTextIcon,
      },
    ],
    faqItems: [
      {
        question: "Да ли је ово издање бесплатно?",
        answer:
          "Да. Преузмите тренутни десктоп пакет директно са downloads.faberpdf.com.",
      },
      {
        question: "Да ли је FaberPDF веб PDF едитор?",
        answer:
          "Не. FaberPDF је десктоп PDF едитор. Сајт објашњава производ, нуди линкове за преузимање и прикупља утиске.",
      },
      {
        question: "Да ли ће финална верзија бити бесплатна?",
        answer:
          "Комерцијални модел за стабилну верзију може да се одлучи касније. Овај пројекат је намерно фокусиран на бесплатно јавно издање.",
      },
      {
        question: "Могу ли анонимно да пошаљем утисак?",
        answer: "Да. Имејл је опционалан и користан само ако желите одговор.",
      },
      {
        question: "Како се подешавају линкови за преузимање?",
        answer:
          "Јавни линкови за преузимање воде на downloads.faberpdf.com. Будућа издања могу да промене те линкове без промене препознавања оперативног система.",
      },
    ],
    feedbackCta: "Отвори страницу за утиске",
  },
  downloadPage: {
    metadata: {
      title: "Преузимање",
      description:
        "Преузмите FaberPDF десктоп издање за Windows, macOS или Linux.",
    },
    eyebrow: "Преузимање",
    title: "Преузмите десктоп пакет за свој оперативни систем.",
    description:
      "Отворите ову страницу на рачунару на ком желите да пробате FaberPDF. Сајт препознаје оперативни систем, а избор других платформи остаје одмах при руци.",
    badges: [
      "Windows, macOS и Linux",
      "Локална десктоп апликација",
      "Јавно издање за утиске",
    ],
    cardsTitle: "Пре инсталације",
    cardsDescription:
      "Неколико практичних напомена за пробу FaberPDF-а у стварном десктоп току рада.",
    cards: [
      {
        title: "Користите одговарајући десктоп пакет",
        description:
          "Главно дугме прати препознати оперативни систем. Ако детекција промаши, изаберите другу платформу из селектора.",
      },
      {
        title: "Осетљиви PDF-ови остају локално",
        description:
          "Овај сајт нуди инсталациони фајл. Уређивање и преглед раде се у десктоп апликацији.",
      },
      {
        title: "Реците шта запиње",
        description:
          "Кратке поруке о инсталацији, пакетима који недостају или платформским проблемима су корисне.",
      },
    ],
    feedbackTitle: "Нешто не ваља са пакетом?",
    feedbackDescription:
      "Пошаљите напомену са странице за утиске уз оперативни систем и верзију апликације.",
    feedbackAction: "Пошаљи утисак о преузимању",
  },
  download: {
    ...srLatn.download,
    platformNames: {
      linux: "Linux",
      macos: "macOS",
      mobile: "мобилни уређај",
      unknown: "ваш рачунар",
      windows: "Windows",
    },
    formats: {
      linux: "AppImage или архива",
      macos: ".app архива",
      windows: ".exe инсталациони фајл",
    },
    details: {
      linux: "Директан AppImage пакет за Linux десктоп рачунаре.",
      macos: "Компресована FaberPDF app архива за macOS рачунаре.",
      mobile:
        "FaberPDF је десктоп апликација. Отворите ову страницу на Windows, macOS или Linux рачунару да преузмете одговарајући пакет.",
      windows: "За Windows 10 и новије десктоп рачунаре.",
      unknown:
        "Отворите ову страницу на Windows, macOS или Linux рачунару, или изаберите десктоп платформу.",
    },
    detectedLabel: "Препозната платформа",
    selectLabel: "Други систем?",
    selectPlaceholder: "Изаберите систем",
    recommendedBadge: "Препоручено",
    pendingBadge: "Линк се чека",
    unsupportedBadge: "Није подржано",
    unsupportedTitle: "Ваш уређај није подржан",
    unsupportedDescription:
      "Не постоји Android или iOS пакет за ово десктоп издање.",
    unsupportedAlertTitle: "Отворите ову страницу на рачунару",
    unsupportedAlertDescription:
      "Мобилним посетиоцима се не приказује дугме за преузимање јер FaberPDF тренутно излази само за Windows, macOS и Linux.",
    button: "Преузми за {platform}",
    unsupportedButton: "Ваш ОС није подржан",
    pendingButton: "Линк за инсталацију се чека",
    unknownButton: "Изаберите десктоп систем",
    noteTitle: "Инсталациони фајлови су на downloads.faberpdf.com",
    noteDescription:
      "Главно дугме отвара одговарајући инсталациони фајл из FaberPDF download storage-а.",
  },
  feedback: {
    ...srLatn.feedback,
    metadata: {
      title: "Утисци",
      description:
        "Пошаљите анонимне FaberPDF утиске о грешкама, фрикцији, идејама и десктоп току рада.",
    },
    title: "Реците шта треба следеће да се промени.",
    description:
      "Пошаљите грешку, фрикцију, празнину у току рада или мали плус. Форма иде преко Formspree-а на имејл, а адреса за одговор је опционална.",
    formTitle: "Пошаљите утисак",
    formDescription:
      "Кратке поруке су сасвим у реду. Конкретни примери вреде највише.",
    badges: {
      anonymous: "Анонимно подразумевано",
      emailOptional: "Имејл опционалан",
    },
    tipsTitle: "Корисни утисци укључују",
    tips: [
      "Шта сте покушавали да урадите.",
      "Шта је деловало споро, нејасно или покварено.",
      "Платформу и верзију апликације ако је важно.",
    ],
    form: {
      ...srLatn.feedback.form,
      categoryLabel: "Тип утиска",
      categoryDescription:
        "Изаберите најближу категорију да порука лакше уђе у тријажу.",
      categories: {
        bug: "Грешка",
        friction: "Фрикција",
        idea: "Идеја",
        praise: "Похвала",
      },
      platformLabel: "Платформа",
      platforms: {
        linux: "Linux",
        macos: "macOS",
        other: "Друго",
        windows: "Windows",
      },
      versionLabel: "Верзија апликације",
      messageLabel: "Ваш утисак",
      messagePlaceholder:
        "Шта се десило, шта је запињало или шта треба да буде лакше?",
      messageDescription: "Молимо не лепите осетљив садржај документа.",
      emailLabel: "Имејл за одговор",
      emailDescription:
        "Опционално. Оставите празно за потпуно анониман утисак.",
      submit: "Пошаљи утисак",
      submitting: "Шаљемо...",
      submittingDescription: "Шаљемо утисак...",
      successTitle: "Утисак је послат",
      successDescription: "Хвала. Ваш FaberPDF утисак је послат.",
      errorTitle: "Утисак није послат",
      errorDescription:
        "Утисак тренутно не може да се пошаље. Покушајте поново.",
    },
  },
} as const

const bs = {
  ...srLatn,
  locale: "bs",
  htmlLang: "bs",
  header: {
    ...srLatn.header,
    toggleTheme: "Promijeni temu",
  },
  metadata: {
    defaultTitle: `${siteConfig.name} - Desktop PDF editor`,
    titleTemplate: `%s - ${siteConfig.name}`,
    description:
      "Lokalni desktop PDF editor za potpisivanje dokumenata, anotacije, provjeru PDF-ova i male izmjene teksta offline.",
  },
  navigation: [
    { label: "Funkcije", href: "/#features" },
    { label: "Preuzimanje", href: "/download" },
    { label: "Utisci", href: "/feedback" },
    { label: "FAQ", href: "/#faq" },
  ],
  home: {
    ...srLatn.home,
    hero: {
      ...srLatn.home.hero,
      title: "Uređujte PDF na desktopu. Fajl ostaje kod vas.",
      description:
        "FaberPDF rješava PDF poslove koji prekidaju tok rada: potpise, anotacije, provjere dokumenata i ciljane izmjene teksta bez slanja fajla u servis u oblaku.",
    },
    sections: {
      ...srLatn.home.sections,
      featuresDescription:
        "Otvorite fajl, napravite izmjenu, sačuvajte ga i nastavite dalje. Ovo izdanje je besplatno dok se aplikacija oblikuje kroz stvarno korištenje.",
      previewDescription:
        "Jasna stranica, pravi desktop paket i jedno mjesto za korisne utiske.",
      feedbackDescription:
        "Utisci su anonimni podrazumijevano i preko Formspree-a stižu na imejl. Konkretan primjer vrijedi više od savršeno napisane poruke.",
    },
    featurePillars: [
      {
        title: "Potpisujte i označavajte PDF-ove lokalno",
        description:
          "Postavite potpise, dodajte napomene i sačuvajte završene dokumente iz desktop aplikacije.",
        icon: PenLineIcon,
      },
      {
        title: "Ispravite sitne tekstualne greške",
        description:
          "Napravite ciljane izmjene u postojećim PDF-ovima bez ponovne izrade cijelog dokumenta.",
        icon: TextCursorInputIcon,
      },
      {
        title: "Dokumenti ostaju na vašem računaru",
        description:
          "Pregled i uređivanje mogu ostati u lokalnom toku rada umjesto da počnu slanjem fajla kroz pregledač.",
        icon: LockKeyholeIcon,
      },
    ],
    previewCards: [
      {
        title: "Besplatno dok utisci oblikuju aplikaciju",
        description:
          "Ovo izdanje služi da saznamo šta korisnicima stvarno treba prije povratka plaćenog lansiranja.",
        icon: BadgeCheckIcon,
      },
      {
        title: "Anonimni utisci su dobrodošli",
        description:
          "Imejl je opcionalan. Pošaljite grešku, frikciju, tok rada koji nedostaje ili kratku napomenu.",
        icon: MessageSquareTextIcon,
      },
      {
        title: "Desktop aplikacija na prvom mjestu",
        description:
          "Sajt objašnjava FaberPDF i hostuje pakete. Uređivanje se radi u aplikaciji.",
        icon: MonitorDownIcon,
      },
    ],
    feedbackTips: [
      {
        title: "Greške",
        description: "Šta se desilo, šta ste očekivali i koji OS koristite.",
        icon: BugIcon,
      },
      {
        title: "Frikcija",
        description:
          "Sve što je djelovalo sporo, skriveno, nejasno ili sa previše klikova.",
        icon: FilePenLineIcon,
      },
      {
        title: "Ideje",
        description:
          "PDF poslovi koje želite da FaberPDF bolje rješava u budućim izdanjima.",
        icon: LightbulbIcon,
      },
    ],
    legalNotes: [
      {
        title: "Lokalni proizvod",
        description:
          "FaberPDF se pozicionira oko rada sa fajlovima na desktopu, ne oko slanja PDF-ova na ovaj sajt.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Utisci preko imejla",
        description:
          "Utisci se šalju kroz Formspree vlasniku sajta. Ne lijepite osjetljiv sadržaj PDF-a u poruku.",
        icon: FileTextIcon,
      },
    ],
    faqItems: [
      {
        question: "Da li je ovo izdanje besplatno?",
        answer:
          "Da. Preuzmite trenutni desktop paket direktno sa downloads.faberpdf.com.",
      },
      {
        question: "Da li je FaberPDF web PDF editor?",
        answer:
          "Ne. FaberPDF je desktop PDF editor. Sajt objašnjava proizvod, hostuje linkove za preuzimanje i prikuplja utiske.",
      },
      {
        question: "Da li će finalna verzija biti besplatna?",
        answer:
          "Komercijalni model za stabilnu verziju može da se odluči kasnije. Ovaj projekat je namjerno fokusiran na besplatno javno izdanje.",
      },
      {
        question: "Mogu li anonimno poslati utisak?",
        answer: "Da. Imejl je opcionalan i koristan samo ako želite odgovor.",
      },
      {
        question: "Kako se podešavaju linkovi za preuzimanje?",
        answer:
          "Javni linkovi za preuzimanje vode na downloads.faberpdf.com. Buduća izdanja mogu promijeniti te linkove bez promjene prepoznavanja operativnog sistema.",
      },
    ],
  },
  downloadPage: {
    ...srLatn.downloadPage,
    metadata: {
      title: "Preuzimanje",
      description:
        "Preuzmite FaberPDF desktop izdanje za Windows, macOS ili Linux.",
    },
    description:
      "Otvorite ovu stranicu na računaru na kojem želite probati FaberPDF. Sajt prepoznaje operativni sistem, a izbor drugih platformi ostaje odmah pri ruci.",
    badges: [
      "Windows, macOS i Linux",
      "Lokalna desktop aplikacija",
      "Javno izdanje za utiske",
    ],
    cardsDescription:
      "Nekoliko praktičnih napomena za probu FaberPDF-a u stvarnom desktop toku rada.",
    cards: [
      {
        title: "Koristite odgovarajući desktop paket",
        description:
          "Glavno dugme prati prepoznati operativni sistem. Ako detekcija promaši, izaberite drugu platformu iz selektora.",
      },
      {
        title: "Osjetljivi PDF-ovi ostaju lokalno",
        description:
          "Ovaj sajt hostuje instalacioni fajl. Uređivanje i pregled rade se u desktop aplikaciji.",
      },
      {
        title: "Recite šta zapinje",
        description:
          "Kratke poruke o instalaciji, paketima koji nedostaju ili platformskim problemima su korisne.",
      },
    ],
    feedbackDescription:
      "Pošaljite napomenu sa stranice za utiske uz operativni sistem i verziju aplikacije.",
  },
  download: {
    ...srLatn.download,
    platformNames: {
      linux: "Linux",
      macos: "macOS",
      mobile: "mobilni uređaj",
      unknown: "vaš računar",
      windows: "Windows",
    },
    details: {
      linux: "Direktan AppImage paket za Linux desktop računare.",
      macos: "Kompresovana FaberPDF app arhiva za macOS računare.",
      mobile:
        "FaberPDF je desktop aplikacija. Otvorite ovu stranicu na Windows, macOS ili Linux računaru da preuzmete odgovarajući paket.",
      windows: "Za Windows 10 i novije desktop računare.",
      unknown:
        "Otvorite ovu stranicu na Windows, macOS ili Linux računaru, ili izaberite desktop platformu.",
    },
    unsupportedAlertDescription:
      "Mobilnim posjetiocima se ne prikazuje dugme za preuzimanje jer FaberPDF trenutno izlazi samo za Windows, macOS i Linux.",
  },
  feedback: {
    ...srLatn.feedback,
    metadata: {
      title: "Utisci",
      description:
        "Pošaljite anonimne FaberPDF utiske o greškama, frikciji, idejama i desktop toku rada.",
    },
    description:
      "Pošaljite grešku, frikciju, prazninu u toku rada ili mali plus. Forma ide preko Formspree-a na imejl, a adresa za odgovor je opcionalna.",
    formDescription:
      "Kratke poruke su sasvim u redu. Konkretni primjeri vrijede najviše.",
    tips: [
      "Šta ste pokušavali uraditi.",
      "Šta je djelovalo sporo, nejasno ili pokvareno.",
      "Platformu i verziju aplikacije ako je važno.",
    ],
    form: {
      ...srLatn.feedback.form,
      categoryDescription:
        "Izaberite najbližu kategoriju da poruka lakše uđe u trijažu.",
      messagePlaceholder:
        "Šta se desilo, šta je zapinjalo ili šta treba biti lakše?",
      messageDescription: "Molimo ne lijepite osjetljiv sadržaj dokumenta.",
    },
  },
} as const

const dictionaries = {
  en,
  "sr-Latn": srLatn,
  "sr-Cyrl": srCyrl,
  bs,
}

export type Dictionary = typeof en

export function getDictionary(locale: Locale) {
  return dictionaries[locale] as Dictionary
}

export function getLocalizedAlternates(pathname: string) {
  return Object.fromEntries(
    locales.map((locale) => [
      locale,
      `${siteConfig.url}${localizePath(locale, pathname)}`,
    ])
  ) as Record<Locale, string>
}
