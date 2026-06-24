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
    defaultTitle: `${siteConfig.name} - Modern local-first PDF editor`,
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
      "Modern local-first PDF editing for signatures, annotations, validation checks, and focused text fixes.",
    productHeading: "Product",
    contactHeading: "Contact",
    copyright: "All rights reserved.",
  },
  languageSwitcher: {
    label: "Language",
  },
  cookieConsent: {
    bannerTitle: "Cookie choices",
    bannerDescription:
      "We use necessary cookies to keep this site working. Analytics and future tracking stay off unless you choose to allow them.",
    dialogTitle: "Cookie preferences",
    dialogDescription:
      "Choose which optional categories FaberPDF can use. You can change this later from the footer.",
    customize: "Customize",
    rejectOptional: "Reject non-essential",
    acceptAll: "Accept all",
    saveChoices: "Save choices",
    alwaysOn: "Always on",
    settingsButton: "Cookie settings",
    categories: {
      necessary: {
        title: "Necessary",
        description:
          "Required for core site behavior, language routing, consent storage, and security-sensitive basics.",
      },
      functional: {
        title: "Functional",
        description:
          "Remember optional preferences that improve the site but are not required for it to work.",
      },
      analytics: {
        title: "Analytics",
        description:
          "Help understand visits and page performance. Vercel Analytics is loaded only when this is enabled.",
      },
      performance: {
        title: "Performance",
        description:
          "Support future diagnostics such as web vitals, reliability metrics, and load-time measurements.",
      },
      personalization: {
        title: "Personalization",
        description:
          "Allow future content or product hints to adapt to previous choices on this site.",
      },
      marketing: {
        title: "Marketing",
        description:
          "Allow future campaign measurement, attribution, ads pixels, or retargeting tools.",
      },
      security: {
        title: "Security",
        description:
          "Reserve an optional category for future anti-abuse, fraud-prevention, or bot-detection tools.",
      },
    },
  },
  productWorkspace: {
    editorAlt: "FaberPDF editor with an open PDF",
    welcomeAlt: "FaberPDF welcome screen",
    editorBadge: "PDF editor",
    welcomeBadge: "Desktop app",
  },
  home: {
    hero: {
      badge: "Modern local-first PDF editor",
      secondaryBadge: "Currently in beta",
      versionBadge: `Version ${siteConfig.betaVersion}`,
      title: "A modern local-first PDF editor for desktop work.",
      description:
        "FaberPDF helps you sign, edit, annotate, and validate PDFs without uploading documents to a browser tool.",
      primaryAction: "Download FaberPDF",
      secondaryAction: "Share feedback",
    },
    sections: {
      featuresEyebrow: "Local-first PDF work",
      featuresTitle:
        "Handle everyday PDF jobs without moving the file out of your workflow.",
      featuresDescription:
        "Open the PDF on your desktop, sign or edit what matters, save it, and move on. The current build is a beta, but the product promise is simple: practical PDF work stays local.",
      screenshotsEyebrow: "Actual product",
      screenshotsTitle: "See the desktop app before you install it.",
      screenshotsDescription:
        "The page uses real FaberPDF screens so you can judge the workflow before downloading the app.",
      previewEyebrow: "Why try it",
      previewTitle: "Built for the PDF work people actually repeat.",
      previewDescription:
        "Signing a document, marking up a page, validating a file, or fixing a small text issue should not require a cloud round-trip.",
      downloadEyebrow: "Download",
      downloadTitle: "The right package for the visitor's desktop.",
      downloadDescription:
        "The site detects Windows or Linux and keeps matching installer choices hosted on downloads.faberpdf.com close to the click. macOS downloads are temporarily unavailable.",
      feedbackEyebrow: "Feedback",
      feedbackTitle: "Help shape the beta around real PDF work.",
      feedbackDescription:
        "If a signing, editing, annotation, or validation workflow feels rough, send a short note. Specific examples are more useful than polished essays.",
      trustEyebrow: "Trust",
      trustTitle: "A desktop editor, not a document upload page.",
      trustDescription:
        "The website explains the product, hosts installers, and collects feedback. Your PDF work happens inside the desktop app.",
      faqEyebrow: "FAQ",
      faqTitle: "What to know before downloading.",
      faqDescription:
        "The current beta is simple to try, clear about installer choices, and explicit about where your files are handled.",
    },
    featurePillars: [
      {
        title: "Sign and review documents locally",
        description:
          "Add signatures, notes, and marks in the desktop app before saving the finished PDF.",
        icon: PenLineIcon,
      },
      {
        title: "Make focused PDF edits",
        description:
          "Correct small text issues and practical document details without rebuilding the file from scratch.",
        icon: TextCursorInputIcon,
      },
      {
        title: "Keep sensitive PDFs off browser tools",
        description:
          "Work from a local desktop app so document review does not begin with an upload.",
        icon: LockKeyholeIcon,
      },
    ],
    previewCards: [
      {
        title: "Currently in beta",
        description:
          "Try the current desktop build while FaberPDF is shaped around real PDF workflows.",
        icon: BadgeCheckIcon,
      },
      {
        title: "Clear desktop builds",
        description:
          "Download the Windows or Linux build directly from FaberPDF download storage.",
        icon: MessageSquareTextIcon,
      },
      {
        title: "Feedback improves the app",
        description:
          "Send bugs, friction, missing workflows, or quick notes with an optional reply email.",
        icon: MonitorDownIcon,
      },
    ],
    feedbackTips: [
      {
        title: "Report a bug",
        description:
          "Tell us what happened, what you expected, and which operating system you used.",
        icon: BugIcon,
      },
      {
        title: "Describe friction",
        description:
          "Point out anything that felt slow, hidden, unclear, or too many clicks.",
        icon: FilePenLineIcon,
      },
      {
        title: "Request a workflow",
        description:
          "Name the PDF job you want FaberPDF to handle better in future builds.",
        icon: LightbulbIcon,
      },
    ],
    trustPoints: [
      "Modern local-first PDF editor",
      "Currently in beta",
      "Desktop app workflow",
      "No browser upload to use the editor",
      "Windows and Linux builds",
      "Real desktop app screenshots",
    ],
    legalNotes: [
      {
        title: "Local-first by design",
        description:
          "FaberPDF is built around working with files on your desktop rather than processing PDFs on this website.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Feedback stays separate from PDFs",
        description:
          "Feedback is sent through Formspree to the site owner. Do not paste sensitive document contents into feedback messages.",
        icon: FileTextIcon,
      },
    ],
    faqItems: [
      {
        question: "Is FaberPDF free to try?",
        answer:
          "Yes. FaberPDF is currently in beta, and the current desktop build can be downloaded directly from downloads.faberpdf.com.",
      },
      {
        question: "What makes it different from a web PDF editor?",
        answer:
          "FaberPDF is a desktop app built around local files. You can sign, edit, annotate, and validate PDFs without uploading documents to a browser tool.",
      },
      {
        question: "Can I use it with sensitive documents?",
        answer:
          "The website does not process your PDFs. Editing happens inside the desktop app, and feedback messages should not include sensitive document contents.",
      },
      {
        question: "Can I send feedback anonymously?",
        answer: "Yes. Email is optional and only useful if you want a reply.",
      },
      {
        question: "Where are installers hosted?",
        answer:
          "The public download links point to downloads.faberpdf.com, with active builds for Windows and Linux. macOS downloads are temporarily unavailable.",
      },
    ],
    feedbackCta: "Share product feedback",
  },
  downloadPage: {
    metadata: {
      title: "Download FaberPDF",
      description: "Download the FaberPDF beta for Windows or Linux.",
    },
    eyebrow: "Download",
    title: "Download the FaberPDF beta for your desktop.",
    description:
      "Open this page on the machine where you want to use FaberPDF. The site detects your operating system and keeps alternate desktop builds close by.",
    badges: [
      "Currently in beta",
      "Modern local-first PDF editor",
      "Windows and Linux",
    ],
    cardsTitle: "Before you install",
    cardsDescription:
      "A few practical notes before trying FaberPDF on real documents.",
    cards: [
      {
        title: "Choose the matching build",
        description:
          "The primary area follows the detected operating system. If detection misses, choose another platform or installer format from the selector.",
      },
      {
        title: "Work with local files",
        description:
          "This website hosts the installer. Signing, editing, annotation, and review happen inside the desktop app.",
      },
      {
        title: "Tell us what blocks your workflow",
        description:
          "Short notes about install friction, missing builds, or platform-specific PDF work are useful.",
      },
    ],
    feedbackTitle: "Something off with the build?",
    feedbackDescription:
      "Send a note with your operating system, app version, and the step that failed.",
    feedbackAction: "Share download feedback",
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
      linux: "AppImage, DEB, or RPM",
      macos: "Download temporarily unavailable",
      windows: ".exe or .msi installer",
    },
    details: {
      linux: "Choose AppImage, Debian/Ubuntu, or Fedora/RHEL packaging.",
      macos:
        "macOS downloads are temporarily unavailable while Apple distribution is being prepared.",
      mobile:
        "FaberPDF is a desktop app. Open this page on Windows or Linux to download the matching build.",
      windows: "Choose the standard setup app or MSI package for deployment.",
      unknown:
        "Open this page on Windows or Linux, or choose a desktop platform.",
    },
    detectedLabel: "Detected platform",
    selectLabel: "Different OS?",
    selectPlaceholder: "Choose OS",
    recommendedBadge: "Recommended",
    chooseBadge: "Choose installer",
    pendingBadge: "Link pending",
    unsupportedBadge: "Not supported",
    unsupportedTitle: "Your device is not supported",
    unsupportedDescription:
      "There is no Android or iOS build for this desktop preview.",
    unsupportedAlertTitle: "Open this page on a desktop",
    unsupportedAlertDescription:
      "Mobile visitors do not see a download button because FaberPDF currently ships installers for Windows and Linux.",
    button: "Download for {platform}",
    chooseButton: "Choose {platform} installer",
    unsupportedButton: "Your OS is not supported",
    pendingButton: "Installer link pending",
    unknownButton: "Choose a desktop OS",
    noteTitle: "Installers are hosted on downloads.faberpdf.com",
    noteDescription:
      "The download choices open the matching installer files from FaberPDF download storage.",
  },
  feedback: {
    metadata: {
      title: "Feedback for FaberPDF",
      description:
        "Send FaberPDF beta feedback about signing, editing, annotations, validation, and desktop workflow friction.",
    },
    title: "Help shape the beta around real PDF work.",
    description:
      "Send bugs, friction, workflow gaps, or small wins from the current beta. The reply address stays optional.",
    formTitle: "Send product feedback",
    formDescription:
      "Short notes are fine. Specific examples make the feedback easier to act on.",
    badges: {
      anonymous: "Anonymous by default",
      emailOptional: "Email optional",
    },
    tipsTitle: "Useful feedback includes",
    tips: [
      "What PDF workflow you were trying to finish.",
      "What felt slow, unclear, hidden, or broken.",
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
        "What happened, what felt rough, or what PDF workflow should be easier?",
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
    defaultTitle: `${siteConfig.name} - PDF editor za elektronsko potpisivanje`,
    titleTemplate: `%s - ${siteConfig.name}`,
    description:
      "PDF editor za potpisivanje kvalifikovanim elektronskim sertifikatom, uređivanje, anotacije i proveru dokumenata.",
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
      "PDF editor za kvalifikovano elektronsko potpisivanje, anotacije, proveru i praktične izmene dokumenata.",
    productHeading: "Proizvod",
    contactHeading: "Kontakt",
    copyright: "Sva prava zadržana.",
  },
  languageSwitcher: {
    label: "Jezik",
  },
  cookieConsent: {
    bannerTitle: "Podešavanja kolačića",
    bannerDescription:
      "Koristimo neophodne kolačiće da sajt radi. Analitika i budući tracking ostaju isključeni dok ih ne dozvolite.",
    dialogTitle: "Podešavanja kolačića",
    dialogDescription:
      "Izaberite koje opcione kategorije FaberPDF može da koristi. Izbor možete promeniti kasnije u footer-u.",
    customize: "Podesi",
    rejectOptional: "Odbij opcione",
    acceptAll: "Prihvati sve",
    saveChoices: "Sačuvaj izbor",
    alwaysOn: "Uvek uključeno",
    settingsButton: "Podešavanja kolačića",
    categories: {
      necessary: {
        title: "Neophodni",
        description:
          "Potrebni za osnovni rad sajta, jezičko rutiranje, čuvanje consent izbora i bezbednosne osnove.",
      },
      functional: {
        title: "Funkcionalni",
        description:
          "Pamte opcione preference koje poboljšavaju sajt, ali nisu neophodne da bi radio.",
      },
      analytics: {
        title: "Analitika",
        description:
          "Pomažu da razumemo posete i performanse stranica. Vercel Analytics se učitava samo kada je ovo uključeno.",
      },
      performance: {
        title: "Performanse",
        description:
          "Podržavaju buduću dijagnostiku kao što su web vitals, pouzdanost i vreme učitavanja.",
      },
      personalization: {
        title: "Personalizacija",
        description:
          "Dozvoljavaju da se budući sadržaj ili product hintovi prilagode prethodnim izborima na sajtu.",
      },
      marketing: {
        title: "Marketing",
        description:
          "Dozvoljavaju buduće merenje kampanja, atribuciju, ads pixele ili retargeting alate.",
      },
      security: {
        title: "Bezbednost",
        description:
          "Rezervisana opciona kategorija za buduće anti-abuse, fraud-prevention ili bot-detection alate.",
      },
    },
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
      badge: "Potpisivanje kvalifikovanim elektronskim sertifikatom",
      secondaryBadge: "Trenutno u beta verziji",
      versionBadge: `Verzija ${siteConfig.betaVersion}`,
      title:
        "PDF editor za potpisivanje kvalifikovanim elektronskim sertifikatom.",
      description:
        "FaberPDF pomaže da potpišete, proverite, označite i uredite PDF dokumente na računaru, bez slanja fajlova kroz browser alat.",
      primaryAction: "Preuzmi FaberPDF",
      secondaryAction: "Pošalji utisak",
    },
    sections: {
      featuresEyebrow: "Elektronsko potpisivanje i PDF rad",
      featuresTitle:
        "Potpisivanje i uređivanje PDF-a bez nepotrebnog slanja fajlova.",
      featuresDescription:
        "Otvorite dokument na računaru, potpišite ga kvalifikovanim sertifikatom, dodajte napomene ili napravite potrebnu izmenu i nastavite dalje.",
      screenshotsEyebrow: "Stvarni ekran aplikacije",
      screenshotsTitle: "Pogledajte aplikaciju pre instalacije.",
      screenshotsDescription:
        "Stranica prikazuje stvarne FaberPDF ekrane da odmah vidite kako izgleda desktop rad sa dokumentima.",
      previewEyebrow: "Zašto probati",
      previewTitle:
        "Jedan alat za potpisivanje, proveru i praktične PDF izmene.",
      previewDescription:
        "FaberPDF je trenutno u beta verziji, ali glavna ideja je jasna: potpisivanje kvalifikovanim elektronskim sertifikatom i svakodnevni PDF poslovi na računaru.",
      downloadEyebrow: "Preuzimanje",
      downloadTitle: "Pravi paket za računar posetioca.",
      downloadDescription:
        "Sajt prepoznaje Windows ili Linux i drži odgovarajuće instalacione opcije sa downloads.faberpdf.com odmah uz klik. macOS preuzimanje je privremeno isključeno.",
      feedbackEyebrow: "Utisci",
      feedbackTitle: "Pomozite da beta verzija bolje pokrije stvaran rad.",
      feedbackDescription:
        "Ako potpisivanje, provera, anotacije ili uređivanje zapinju, pošaljite kratak primer. Konkretna situacija vredi više od savršeno napisane poruke.",
      trustEyebrow: "Poverenje",
      trustTitle: "Desktop aplikacija za dokumente, ne upload stranica.",
      trustDescription:
        "Sajt objašnjava proizvod, nudi instalacione pakete i prima utiske. PDF posao se obavlja u desktop aplikaciji.",
      faqEyebrow: "FAQ",
      faqTitle: "Šta treba znati pre preuzimanja.",
      faqDescription:
        "Najvažnije informacije o potpisivanju, lokalnom radu, izboru instalacije i beta verziji.",
    },
    featurePillars: [
      {
        title: "Potpišite PDF kvalifikovanim sertifikatom",
        description:
          "Koristite FaberPDF za potpisivanje kvalifikovanim elektronskim sertifikatom u lokalnoj desktop aplikaciji.",
        icon: PenLineIcon,
      },
      {
        title: "Uredite i označite dokument",
        description:
          "Dodajte napomene, označite važne delove i napravite ciljane izmene bez ponovne izrade celog PDF-a.",
        icon: TextCursorInputIcon,
      },
      {
        title: "Fajl ostaje na vašem računaru",
        description:
          "Radite sa dokumentom u desktop aplikaciji, umesto da svaki PDF prvo šaljete kroz browser alat.",
        icon: LockKeyholeIcon,
      },
    ],
    previewCards: [
      {
        title: "Trenutno u beta verziji",
        description:
          "FaberPDF je trenutno u beta verziji i oblikuje se oko stvarnih tokova rada sa PDF dokumentima.",
        icon: BadgeCheckIcon,
      },
      {
        title: "Potpisivanje kao glavni tok rada",
        description:
          "Kvalifikovani elektronski sertifikat je u prvom planu, uz uređivanje, anotacije i proveru dokumenata.",
        icon: MessageSquareTextIcon,
      },
      {
        title: "Utisci bez obavezne adrese",
        description:
          "Imejl je opcionalan. Pošaljite grešku, frikciju, tok rada koji nedostaje ili kratku napomenu.",
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
      "Potpisivanje kvalifikovanim sertifikatom",
      "Trenutno u beta verziji",
      "Lokalni rad sa PDF dokumentima",
      "Direktno desktop preuzimanje",
      "Windows i Linux paketi",
      "Stvarni snimci ekrana aplikacije",
    ],
    legalNotes: [
      {
        title: "PDF rad je u desktop aplikaciji",
        description:
          "FaberPDF je pozicioniran oko rada sa fajlovima na računaru, ne oko slanja PDF-ova ovom sajtu.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Utisci preko imejla",
        description:
          "Utisci se šalju kroz Formspree vlasniku sajta. Ne lepite osetljiv sadržaj dokumenta u poruku.",
        icon: FileTextIcon,
      },
    ],
    faqItems: [
      {
        question:
          "Da li FaberPDF podržava potpisivanje kvalifikovanim elektronskim sertifikatom?",
        answer:
          "Da. To je glavni tok rada za regionalne korisnike, uz dodatne PDF funkcije kao što su anotacije, provera i ciljane izmene.",
      },
      {
        question: "Da li je FaberPDF web PDF editor?",
        answer:
          "Ne. FaberPDF je desktop PDF editor. Sajt služi za objašnjenje proizvoda, preuzimanje instalacionih paketa i slanje utisaka.",
      },
      {
        question: "Da li je aplikacija već dostupna?",
        answer:
          "Da. FaberPDF je trenutno u beta verziji, a aktuelni desktop paket možete preuzeti direktno sa downloads.faberpdf.com.",
      },
      {
        question: "Da li dokument ostaje lokalno?",
        answer:
          "PDF rad se obavlja u desktop aplikaciji. U poruke za utiske nemojte lepiti osetljiv sadržaj dokumenta.",
      },
      {
        question: "Mogu li anonimno da pošaljem utisak?",
        answer: "Da. Imejl je opcionalan i koristan samo ako želite odgovor.",
      },
      {
        question: "Gde se nalaze instalacioni paketi?",
        answer:
          "Javni linkovi za preuzimanje vode na downloads.faberpdf.com, odvojeno za Windows i Linux. macOS preuzimanje je privremeno isključeno.",
      },
    ],
    feedbackCta: "Otvori stranicu za utiske",
  },
  downloadPage: {
    metadata: {
      title: "Preuzimanje FaberPDF-a",
      description:
        "Preuzmite FaberPDF beta verziju za Windows ili Linux.",
    },
    eyebrow: "Preuzimanje",
    title: "Preuzmite FaberPDF beta verziju za svoj računar.",
    description:
      "Otvorite ovu stranicu na računaru na kom želite da koristite FaberPDF. Sajt prepoznaje operativni sistem, a izbor drugih platformi ostaje odmah pri ruci.",
    badges: [
      "Potpisivanje kvalifikovanim sertifikatom",
      "Trenutno u beta verziji",
      "Windows i Linux",
    ],
    cardsTitle: "Pre instalacije",
    cardsDescription:
      "Nekoliko praktičnih napomena pre rada sa stvarnim PDF dokumentima.",
    cards: [
      {
        title: "Izaberite odgovarajući paket",
        description:
          "Glavni deo prati prepoznati operativni sistem. Ako detekcija promaši, izaberite drugu platformu ili format instalacije iz selektora.",
      },
      {
        title: "Radite sa lokalnim fajlovima",
        description:
          "Ovaj sajt nudi instalacioni fajl. Potpisivanje, uređivanje i pregled rade se u desktop aplikaciji.",
      },
      {
        title: "Recite šta blokira vaš tok rada",
        description:
          "Kratke poruke o instalaciji, potpisivanju, paketima koji nedostaju ili platformskim problemima su korisne.",
      },
    ],
    feedbackTitle: "Nešto ne valja sa paketom?",
    feedbackDescription:
      "Pošaljite napomenu uz operativni sistem, verziju aplikacije i korak na kom je problem nastao.",
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
      linux: "AppImage, DEB ili RPM",
      macos: "macOS preuzimanje privremeno nije dostupno",
      windows: ".exe ili .msi instalacioni fajl",
    },
    details: {
      linux: "Izaberite AppImage, Debian/Ubuntu ili Fedora/RHEL paket.",
      macos:
        "macOS preuzimanje je privremeno isključeno dok se priprema Apple distribucija.",
      mobile:
        "FaberPDF je desktop aplikacija. Otvorite ovu stranicu na Windows ili Linux računaru da preuzmete odgovarajući paket.",
      windows:
        "Izaberite standardni setup program ili MSI paket za deployment.",
      unknown:
        "Otvorite ovu stranicu na Windows ili Linux računaru, ili izaberite desktop platformu.",
    },
    detectedLabel: "Prepoznata platforma",
    selectLabel: "Drugi OS?",
    selectPlaceholder: "Izaberite OS",
    recommendedBadge: "Preporučeno",
    chooseBadge: "Izaberite instalaciju",
    pendingBadge: "Link se čeka",
    unsupportedBadge: "Nije podržano",
    unsupportedTitle: "Vaš uređaj nije podržan",
    unsupportedDescription:
      "Ne postoji Android ili iOS paket za ovo desktop izdanje.",
    unsupportedAlertTitle: "Otvorite ovu stranicu na računaru",
    unsupportedAlertDescription:
      "Mobilnim posetiocima se ne prikazuje dugme za preuzimanje jer FaberPDF trenutno ima instalere za Windows i Linux.",
    button: "Preuzmi za {platform}",
    chooseButton: "Izaberite {platform} instalaciju",
    unsupportedButton: "Vaš OS nije podržan",
    pendingButton: "Link za instalaciju se čeka",
    unknownButton: "Izaberite desktop OS",
    noteTitle: "Instalacioni fajlovi su na downloads.faberpdf.com",
    noteDescription:
      "Opcije za preuzimanje otvaraju odgovarajuće instalacione fajlove iz FaberPDF download storage-a.",
  },
  feedback: {
    metadata: {
      title: "Utisci",
      description:
        "Pošaljite FaberPDF beta utiske o potpisivanju, uređivanju, anotacijama, proveri i desktop toku rada.",
    },
    title: "Pomozite da FaberPDF bolje pokrije stvaran PDF rad.",
    description:
      "Pošaljite grešku, frikciju, prazninu u toku rada ili mali plus iz trenutne beta verzije. Adresa za odgovor je opcionalna.",
    formTitle: "Pošaljite utisak",
    formDescription:
      "Kratke poruke su sasvim u redu. Konkretni primeri najlakše ulaze u razvoj.",
    badges: {
      anonymous: "Anonimno podrazumevano",
      emailOptional: "Imejl opcionalan",
    },
    tipsTitle: "Korisni utisci uključuju",
    tips: [
      "Koji PDF tok rada ste pokušavali da završite.",
      "Šta je delovalo sporo, skriveno, nejasno ili pokvareno.",
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
        "Šta se desilo, šta je zapinjalo ili koji PDF tok rada treba da bude lakši?",
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
    defaultTitle: `${siteConfig.name} - PDF едитор за електронско потписивање`,
    titleTemplate: `%s - ${siteConfig.name}`,
    description:
      "PDF едитор за потписивање квалификованим електронским сертификатом, уређивање, анотације и проверу докумената.",
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
      "PDF едитор за квалификовано електронско потписивање, анотације, проверу и практичне измене докумената.",
    productHeading: "Производ",
    contactHeading: "Контакт",
    copyright: "Сва права задржана.",
  },
  languageSwitcher: {
    label: "Језик",
  },
  cookieConsent: {
    bannerTitle: "Подешавања колачића",
    bannerDescription:
      "Користимо неопходне колачиће да сајт ради. Аналитика и будући tracking остају искључени док их не дозволите.",
    dialogTitle: "Подешавања колачића",
    dialogDescription:
      "Изаберите које опционе категорије FaberPDF може да користи. Избор можете променити касније у footer-у.",
    customize: "Подеси",
    rejectOptional: "Одбиј опционе",
    acceptAll: "Прихвати све",
    saveChoices: "Сачувај избор",
    alwaysOn: "Увек укључено",
    settingsButton: "Подешавања колачића",
    categories: {
      necessary: {
        title: "Неопходни",
        description:
          "Потребни за основни рад сајта, језичко рутирање, чување consent избора и безбедносне основе.",
      },
      functional: {
        title: "Функционални",
        description:
          "Памте опционе preference које побољшавају сајт, али нису неопходне да би радио.",
      },
      analytics: {
        title: "Аналитика",
        description:
          "Помажу да разумемо посете и перформансе страница. Vercel Analytics се учитава само када је ово укључено.",
      },
      performance: {
        title: "Перформансе",
        description:
          "Подржавају будућу дијагностику као што су web vitals, поузданост и време учитавања.",
      },
      personalization: {
        title: "Персонализација",
        description:
          "Дозвољавају да се будући садржај или product hintови прилагоде претходним изборима на сајту.",
      },
      marketing: {
        title: "Маркетинг",
        description:
          "Дозвољавају будуће мерење кампања, атрибуцију, ads pixele или retargeting алате.",
      },
      security: {
        title: "Безбедност",
        description:
          "Резервисана опциона категорија за будуће anti-abuse, fraud-prevention или bot-detection алате.",
      },
    },
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
      badge: "Потписивање квалификованим електронским сертификатом",
      secondaryBadge: "Тренутно у бета верзији",
      versionBadge: `Верзија ${siteConfig.betaVersion}`,
      title:
        "PDF едитор за потписивање квалификованим електронским сертификатом.",
      description:
        "FaberPDF помаже да потпишете, проверите, означите и уредите PDF документе на рачунару, без слања фајлова кроз browser алат.",
      primaryAction: "Преузми за свој рачунар",
      secondaryAction: "Пошаљи утисак",
    },
    sections: {
      featuresEyebrow: "Електронско потписивање и PDF рад",
      featuresTitle:
        "Потписивање и уређивање PDF-а без непотребног слања фајлова.",
      featuresDescription:
        "Отворите документ на рачунару, потпишите га квалификованим сертификатом, додајте напомене или направите потребну измену и наставите даље.",
      screenshotsEyebrow: "Стварни екран апликације",
      screenshotsTitle: "Погледајте апликацију пре инсталације.",
      screenshotsDescription:
        "Страница приказује стварне FaberPDF екране да одмах видите како изгледа десктоп рад са документима.",
      previewEyebrow: "Зашто пробати",
      previewTitle:
        "Један алат за потписивање, проверу и практичне PDF измене.",
      previewDescription:
        "FaberPDF је тренутно у бета верзији, али главна идеја је јасна: потписивање квалификованим електронским сертификатом и свакодневни PDF послови на рачунару.",
      downloadEyebrow: "Преузимање",
      downloadTitle: "Прави пакет за рачунар посетиоца.",
      downloadDescription:
        "Сајт препознаје Windows или Linux и држи одговарајуће инсталационе опције са downloads.faberpdf.com одмах уз клик. macOS преузимање је привремено искључено.",
      feedbackEyebrow: "Утисци",
      feedbackTitle: "Помозите да бета верзија боље покрије стваран рад.",
      feedbackDescription:
        "Ако потписивање, провера, анотације или уређивање запињу, пошаљите кратак пример. Конкретна ситуација вреди више од савршено написане поруке.",
      trustEyebrow: "Поверење",
      trustTitle: "Десктоп апликација за документе, не upload страница.",
      trustDescription:
        "Сајт објашњава производ, нуди инсталационе пакете и прима утиске. PDF посао се обавља у десктоп апликацији.",
      faqEyebrow: "FAQ",
      faqTitle: "Шта треба знати пре преузимања.",
      faqDescription:
        "Најважније информације о потписивању, локалном раду, избору инсталације и бета верзији.",
    },
    featurePillars: [
      {
        title: "Потпишите PDF квалификованим сертификатом",
        description:
          "Користите FaberPDF за потписивање квалификованим електронским сертификатом у локалној десктоп апликацији.",
        icon: PenLineIcon,
      },
      {
        title: "Уредите и означите документ",
        description:
          "Додајте напомене, означите важне делове и направите циљане измене без поновне израде целог PDF-а.",
        icon: TextCursorInputIcon,
      },
      {
        title: "Фајл остаје на вашем рачунару",
        description:
          "Радите са документом у десктоп апликацији, уместо да сваки PDF прво шаљете кроз browser алат.",
        icon: LockKeyholeIcon,
      },
    ],
    previewCards: [
      {
        title: "Тренутно у бета верзији",
        description:
          "FaberPDF је тренутно у бета верзији и обликује се око стварних токова рада са PDF документима.",
        icon: BadgeCheckIcon,
      },
      {
        title: "Потписивање као главни ток рада",
        description:
          "Квалификовани електронски сертификат је у првом плану, уз уређивање, анотације и проверу докумената.",
        icon: MessageSquareTextIcon,
      },
      {
        title: "Утисци без обавезне адресе",
        description:
          "Имејл је опционалан. Пошаљите грешку, фрикцију, ток рада који недостаје или кратку напомену.",
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
      "Потписивање квалификованим сертификатом",
      "Тренутно у бета верзији",
      "Локални рад са PDF документима",
      "Директно десктоп преузимање",
      "Windows и Linux пакети",
      "Стварни снимци екрана апликације",
    ],
    legalNotes: [
      {
        title: "PDF рад је у десктоп апликацији",
        description:
          "FaberPDF је позициониран око рада са фајловима на рачунару, не око слања PDF-ова овом сајту.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Утисци преко имејла",
        description:
          "Утисци се шаљу кроз Formspree власнику сајта. Не лепите осетљив садржај документа у поруку.",
        icon: FileTextIcon,
      },
    ],
    faqItems: [
      {
        question:
          "Да ли FaberPDF подржава потписивање квалификованим електронским сертификатом?",
        answer:
          "Да. То је главни ток рада за регионалне кориснике, уз додатне PDF функције као што су анотације, провера и циљане измене.",
      },
      {
        question: "Да ли је FaberPDF веб PDF едитор?",
        answer:
          "Не. FaberPDF је десктоп PDF едитор. Сајт служи за објашњење производа, преузимање инсталационих пакета и слање утисака.",
      },
      {
        question: "Да ли је апликација већ доступна?",
        answer:
          "Да. FaberPDF је тренутно у бета верзији, а актуелни десктоп пакет можете преузети директно са downloads.faberpdf.com.",
      },
      {
        question: "Да ли документ остаје локално?",
        answer:
          "PDF рад се обавља у десктоп апликацији. У поруке за утиске немојте лепити осетљив садржај документа.",
      },
      {
        question: "Могу ли анонимно да пошаљем утисак?",
        answer: "Да. Имејл је опционалан и користан само ако желите одговор.",
      },
      {
        question: "Где се налазе инсталациони пакети?",
        answer:
          "Јавни линкови за преузимање воде на downloads.faberpdf.com, одвојено за Windows и Linux. macOS преузимање је привремено искључено.",
      },
    ],
    feedbackCta: "Отвори страницу за утиске",
  },
  downloadPage: {
    metadata: {
      title: "Преузимање FaberPDF-а",
      description:
        "Преузмите FaberPDF бета верзију за Windows или Linux.",
    },
    eyebrow: "Преузимање",
    title: "Преузмите FaberPDF бета верзију за свој рачунар.",
    description:
      "Отворите ову страницу на рачунару на ком желите да користите FaberPDF. Сајт препознаје оперативни систем, а избор других платформи остаје одмах при руци.",
    badges: [
      "Потписивање квалификованим сертификатом",
      "Тренутно у бета верзији",
      "Windows и Linux",
    ],
    cardsTitle: "Пре инсталације",
    cardsDescription:
      "Неколико практичних напомена пре рада са стварним PDF документима.",
    cards: [
      {
        title: "Изаберите одговарајући пакет",
        description:
          "Главни део прати препознати оперативни систем. Ако детекција промаши, изаберите другу платформу или формат инсталације из селектора.",
      },
      {
        title: "Радите са локалним фајловима",
        description:
          "Овај сајт нуди инсталациони фајл. Потписивање, уређивање и преглед раде се у десктоп апликацији.",
      },
      {
        title: "Реците шта блокира ваш ток рада",
        description:
          "Кратке поруке о инсталацији, потписивању, пакетима који недостају или платформским проблемима су корисне.",
      },
    ],
    feedbackTitle: "Нешто не ваља са пакетом?",
    feedbackDescription:
      "Пошаљите напомену уз оперативни систем, верзију апликације и корак на ком је проблем настао.",
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
      linux: "AppImage, DEB или RPM",
      macos: "macOS преузимање привремено није доступно",
      windows: ".exe или .msi инсталациони фајл",
    },
    details: {
      linux: "Изаберите AppImage, Debian/Ubuntu или Fedora/RHEL пакет.",
      macos:
        "macOS преузимање је привремено искључено док се припрема Apple дистрибуција.",
      mobile:
        "FaberPDF је десктоп апликација. Отворите ову страницу на Windows или Linux рачунару да преузмете одговарајући пакет.",
      windows:
        "Изаберите стандардни setup програм или MSI пакет за deployment.",
      unknown:
        "Отворите ову страницу на Windows или Linux рачунару, или изаберите десктоп платформу.",
    },
    detectedLabel: "Препозната платформа",
    selectLabel: "Други систем?",
    selectPlaceholder: "Изаберите систем",
    recommendedBadge: "Препоручено",
    chooseBadge: "Изаберите инсталацију",
    pendingBadge: "Линк се чека",
    unsupportedBadge: "Није подржано",
    unsupportedTitle: "Ваш уређај није подржан",
    unsupportedDescription:
      "Не постоји Android или iOS пакет за ово десктоп издање.",
    unsupportedAlertTitle: "Отворите ову страницу на рачунару",
    unsupportedAlertDescription:
      "Мобилним посетиоцима се не приказује дугме за преузимање јер FaberPDF тренутно има инсталере за Windows и Linux.",
    button: "Преузми за {platform}",
    chooseButton: "Изаберите {platform} инсталацију",
    unsupportedButton: "Ваш ОС није подржан",
    pendingButton: "Линк за инсталацију се чека",
    unknownButton: "Изаберите десктоп систем",
    noteTitle: "Инсталациони фајлови су на downloads.faberpdf.com",
    noteDescription:
      "Опције за преузимање отварају одговарајуће инсталационе фајлове из FaberPDF download storage-а.",
  },
  feedback: {
    ...srLatn.feedback,
    metadata: {
      title: "Утисци",
      description:
        "Пошаљите FaberPDF бета утиске о потписивању, уређивању, анотацијама, провери и десктоп току рада.",
    },
    title: "Помозите да FaberPDF боље покрије стваран PDF рад.",
    description:
      "Пошаљите грешку, фрикцију, празнину у току рада или мали плус из тренутне бета верзије. Адреса за одговор је опционална.",
    formTitle: "Пошаљите утисак",
    formDescription:
      "Кратке поруке су сасвим у реду. Конкретни примери најлакше улазе у развој.",
    badges: {
      anonymous: "Анонимно подразумевано",
      emailOptional: "Имејл опционалан",
    },
    tipsTitle: "Корисни утисци укључују",
    tips: [
      "Који PDF ток рада сте покушавали да завршите.",
      "Шта је деловало споро, скривено, нејасно или покварено.",
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
        "Шта се десило, шта је запињало или који PDF ток рада треба да буде лакши?",
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
    defaultTitle: `${siteConfig.name} - PDF editor za elektronsko potpisivanje`,
    titleTemplate: `%s - ${siteConfig.name}`,
    description:
      "PDF editor za potpisivanje kvalifikovanim elektronskim certifikatom, uređivanje, anotacije i provjeru dokumenata.",
  },
  navigation: [
    { label: "Funkcije", href: "/#features" },
    { label: "Preuzimanje", href: "/download" },
    { label: "Utisci", href: "/feedback" },
    { label: "FAQ", href: "/#faq" },
  ],
  cookieConsent: {
    bannerTitle: "Podešavanja kolačića",
    bannerDescription:
      "Koristimo neophodne kolačiće da sajt radi. Analitika i budući tracking ostaju isključeni dok ih ne dozvolite.",
    dialogTitle: "Podešavanja kolačića",
    dialogDescription:
      "Izaberite koje opcione kategorije FaberPDF može koristiti. Izbor možete promijeniti kasnije u footer-u.",
    customize: "Podesi",
    rejectOptional: "Odbij opcione",
    acceptAll: "Prihvati sve",
    saveChoices: "Sačuvaj izbor",
    alwaysOn: "Uvijek uključeno",
    settingsButton: "Podešavanja kolačića",
    categories: {
      necessary: {
        title: "Neophodni",
        description:
          "Potrebni za osnovni rad sajta, jezičko rutiranje, čuvanje consent izbora i sigurnosne osnove.",
      },
      functional: {
        title: "Funkcionalni",
        description:
          "Pamte opcione preference koje poboljšavaju sajt, ali nisu neophodne da bi radio.",
      },
      analytics: {
        title: "Analitika",
        description:
          "Pomažu da razumijemo posjete i performanse stranica. Vercel Analytics se učitava samo kada je ovo uključeno.",
      },
      performance: {
        title: "Performanse",
        description:
          "Podržavaju buduću dijagnostiku kao što su web vitals, pouzdanost i vrijeme učitavanja.",
      },
      personalization: {
        title: "Personalizacija",
        description:
          "Dozvoljavaju da se budući sadržaj ili product hintovi prilagode prethodnim izborima na sajtu.",
      },
      marketing: {
        title: "Marketing",
        description:
          "Dozvoljavaju buduće mjerenje kampanja, atribuciju, ads pixele ili retargeting alate.",
      },
      security: {
        title: "Sigurnost",
        description:
          "Rezervisana opciona kategorija za buduće anti-abuse, fraud-prevention ili bot-detection alate.",
      },
    },
  },
  footer: {
    description:
      "PDF editor za kvalifikovano elektronsko potpisivanje, anotacije, provjeru i praktične izmjene dokumenata.",
    productHeading: "Proizvod",
    contactHeading: "Kontakt",
    copyright: "Sva prava zadržana.",
  },
  productWorkspace: {
    editorAlt: "FaberPDF editor sa otvorenim PDF-om",
    welcomeAlt: "FaberPDF početni ekran",
    editorBadge: "PDF editor",
    welcomeBadge: "Desktop aplikacija",
  },
  home: {
    ...srLatn.home,
    hero: {
      badge: "Potpisivanje kvalifikovanim elektronskim certifikatom",
      secondaryBadge: "Trenutno u beta verziji",
      versionBadge: `Verzija ${siteConfig.betaVersion}`,
      title:
        "PDF editor za potpisivanje kvalifikovanim elektronskim certifikatom.",
      description:
        "FaberPDF pomaže da potpišete, provjerite, označite i uredite PDF dokumente na računaru, bez slanja fajlova kroz browser alat.",
      primaryAction: "Preuzmi FaberPDF",
      secondaryAction: "Pošalji utisak",
    },
    sections: {
      ...srLatn.home.sections,
      featuresEyebrow: "Elektronsko potpisivanje i PDF rad",
      featuresTitle:
        "Potpisivanje i uređivanje PDF-a bez nepotrebnog slanja fajlova.",
      featuresDescription:
        "Otvorite dokument na računaru, potpišite ga kvalifikovanim certifikatom, dodajte napomene ili napravite potrebnu izmjenu i nastavite dalje.",
      screenshotsEyebrow: "Stvarni ekran aplikacije",
      screenshotsDescription:
        "Stranica prikazuje stvarne FaberPDF ekrane da odmah vidite kako izgleda desktop rad sa dokumentima.",
      previewEyebrow: "Zašto probati",
      previewTitle:
        "Jedan alat za potpisivanje, provjeru i praktične PDF izmjene.",
      previewDescription:
        "FaberPDF je trenutno u beta verziji, ali glavna ideja je jasna: potpisivanje kvalifikovanim elektronskim certifikatom i svakodnevni PDF poslovi na računaru.",
      downloadTitle: "Preuzmite paket za svoj operativni sistem.",
      feedbackTitle: "Pomozite da beta verzija bolje pokrije stvaran rad.",
      feedbackDescription:
        "Ako potpisivanje, provjera, anotacije ili uređivanje zapinju, pošaljite kratak primjer. Konkretna situacija vrijedi više od savršeno napisane poruke.",
      trustTitle: "Desktop aplikacija za dokumente, ne upload stranica.",
      trustDescription:
        "Sajt objašnjava proizvod, nudi instalacione pakete i prima utiske. PDF posao se obavlja u desktop aplikaciji.",
      faqDescription:
        "Najvažnije informacije o potpisivanju, lokalnom radu i beta verziji.",
    },
    featurePillars: [
      {
        title: "Potpišite PDF kvalifikovanim certifikatom",
        description:
          "Koristite FaberPDF za potpisivanje kvalifikovanim elektronskim certifikatom u lokalnoj desktop aplikaciji.",
        icon: PenLineIcon,
      },
      {
        title: "Uredite i označite dokument",
        description:
          "Dodajte napomene, označite važne dijelove i napravite ciljane izmjene bez ponovne izrade cijelog PDF-a.",
        icon: TextCursorInputIcon,
      },
      {
        title: "Fajl ostaje na vašem računaru",
        description:
          "Radite sa dokumentom u desktop aplikaciji, umjesto da svaki PDF prvo šaljete kroz browser alat.",
        icon: LockKeyholeIcon,
      },
    ],
    previewCards: [
      {
        title: "Trenutno u beta verziji",
        description:
          "FaberPDF je trenutno u beta verziji i oblikuje se oko stvarnih tokova rada sa PDF dokumentima.",
        icon: BadgeCheckIcon,
      },
      {
        title: "Potpisivanje kao glavni tok rada",
        description:
          "Kvalifikovani elektronski certifikat je u prvom planu, uz uređivanje, anotacije i provjeru dokumenata.",
        icon: MessageSquareTextIcon,
      },
      {
        title: "Utisci bez obavezne adrese",
        description:
          "Imejl je opcionalan. Pošaljite grešku, frikciju, tok rada koji nedostaje ili kratku napomenu.",
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
    trustPoints: [
      "Potpisivanje kvalifikovanim certifikatom",
      "Trenutno u beta verziji",
      "Lokalni rad sa PDF dokumentima",
      "Direktno desktop preuzimanje",
      "Windows i Linux paketi",
      "Stvarni snimci ekrana aplikacije",
    ],
    legalNotes: [
      {
        title: "PDF rad je u desktop aplikaciji",
        description:
          "FaberPDF je pozicioniran oko rada sa fajlovima na računaru, ne oko slanja PDF-ova ovom sajtu.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Utisci preko imejla",
        description:
          "Utisci se šalju kroz Formspree vlasniku sajta. Ne lijepite osjetljiv sadržaj dokumenta u poruku.",
        icon: FileTextIcon,
      },
    ],
    faqItems: [
      {
        question:
          "Da li FaberPDF podržava potpisivanje kvalifikovanim elektronskim certifikatom?",
        answer:
          "Da. To je glavni tok rada za regionalne korisnike, uz dodatne PDF funkcije kao što su anotacije, provjera i ciljane izmjene.",
      },
      {
        question: "Da li je FaberPDF web PDF editor?",
        answer:
          "Ne. FaberPDF je desktop PDF editor. Sajt služi za objašnjenje proizvoda, preuzimanje instalacionih paketa i slanje utisaka.",
      },
      {
        question: "Da li je aplikacija već dostupna?",
        answer:
          "Da. FaberPDF je trenutno u beta verziji, a aktuelni desktop paket možete preuzeti direktno sa downloads.faberpdf.com.",
      },
      {
        question: "Da li dokument ostaje lokalno?",
        answer:
          "PDF rad se obavlja u desktop aplikaciji. U poruke za utiske nemojte lijepiti osjetljiv sadržaj dokumenta.",
      },
      {
        question: "Mogu li anonimno poslati utisak?",
        answer: "Da. Imejl je opcionalan i koristan samo ako želite odgovor.",
      },
      {
        question: "Gdje se nalaze instalacioni paketi?",
        answer:
          "Javni linkovi za preuzimanje vode na downloads.faberpdf.com, odvojeno za Windows i Linux. macOS preuzimanje je privremeno isključeno.",
      },
    ],
  },
  downloadPage: {
    ...srLatn.downloadPage,
    metadata: {
      title: "Preuzimanje FaberPDF-a",
      description:
        "Preuzmite FaberPDF beta verziju za Windows ili Linux.",
    },
    title: "Preuzmite FaberPDF beta verziju za svoj računar.",
    description:
      "Otvorite ovu stranicu na računaru na kojem želite koristiti FaberPDF. Sajt prepoznaje operativni sistem, a izbor drugih platformi ostaje odmah pri ruci.",
    badges: [
      "Potpisivanje kvalifikovanim certifikatom",
      "Trenutno u beta verziji",
      "Windows i Linux",
    ],
    cardsDescription:
      "Nekoliko praktičnih napomena prije rada sa stvarnim PDF dokumentima.",
    cards: [
      {
        title: "Izaberite odgovarajući paket",
        description:
          "Glavni dio prati prepoznati operativni sistem. Ako detekcija promaši, izaberite drugu platformu ili format instalacije iz selektora.",
      },
      {
        title: "Radite sa lokalnim fajlovima",
        description:
          "Ovaj sajt nudi instalacioni fajl. Potpisivanje, uređivanje i pregled rade se u desktop aplikaciji.",
      },
      {
        title: "Recite šta blokira vaš tok rada",
        description:
          "Kratke poruke o instalaciji, potpisivanju, paketima koji nedostaju ili platformskim problemima su korisne.",
      },
    ],
    feedbackDescription:
      "Pošaljite napomenu uz operativni sistem, verziju aplikacije i korak na kojem je problem nastao.",
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
      linux: "Izaberite AppImage, Debian/Ubuntu ili Fedora/RHEL paket.",
      macos:
        "macOS preuzimanje je privremeno isključeno dok se priprema Apple distribucija.",
      mobile:
        "FaberPDF je desktop aplikacija. Otvorite ovu stranicu na Windows ili Linux računaru da preuzmete odgovarajući paket.",
      windows:
        "Izaberite standardni setup program ili MSI paket za deployment.",
      unknown:
        "Otvorite ovu stranicu na Windows ili Linux računaru, ili izaberite desktop platformu.",
    },
    unsupportedAlertDescription:
      "Mobilnim posjetiocima se ne prikazuje dugme za preuzimanje jer FaberPDF trenutno ima instalere za Windows i Linux.",
    noteDescription:
      "Glavno dugme otvara aktuelni instalacioni fajl iz FaberPDF download storage-a.",
  },
  feedback: {
    ...srLatn.feedback,
    metadata: {
      title: "Utisci",
      description:
        "Pošaljite FaberPDF beta utiske o potpisivanju, uređivanju, anotacijama, provjeri i desktop toku rada.",
    },
    title: "Pomozite da FaberPDF bolje pokrije stvaran PDF rad.",
    description:
      "Pošaljite grešku, frikciju, prazninu u toku rada ili mali plus iz trenutne beta verzije. Adresa za odgovor je opcionalna.",
    formDescription:
      "Kratke poruke su sasvim u redu. Konkretni primjeri najlakše ulaze u razvoj.",
    tips: [
      "Koji PDF tok rada ste pokušavali završiti.",
      "Šta je djelovalo sporo, skriveno, nejasno ili pokvareno.",
      "Platformu i verziju aplikacije ako je važno.",
    ],
    form: {
      ...srLatn.feedback.form,
      categoryDescription:
        "Izaberite najbližu kategoriju da poruka lakše uđe u trijažu.",
      messagePlaceholder:
        "Šta se desilo, šta je zapinjalo ili koji PDF tok rada treba biti lakši?",
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

type DictionaryOptions = {
  version?: string
}

function replaceVersionInDictionaryValue(
  value: unknown,
  version: string
): unknown {
  if (typeof value === "string") {
    return value.split(siteConfig.betaVersion).join(version)
  }

  if (Array.isArray(value)) {
    return value.map((item) => replaceVersionInDictionaryValue(item, version))
  }

  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        replaceVersionInDictionaryValue(nestedValue, version),
      ])
    )
  }

  return value
}

export function getDictionary(locale: Locale, options: DictionaryOptions = {}) {
  const dictionary = dictionaries[locale] as Dictionary

  if (!options.version || options.version === siteConfig.betaVersion) {
    return dictionary
  }

  return replaceVersionInDictionaryValue(
    dictionary,
    options.version
  ) as Dictionary
}

export function getLocalizedAlternates(pathname: string) {
  return Object.fromEntries(
    locales.map((locale) => [
      locale,
      `${siteConfig.url}${localizePath(locale, pathname)}`,
    ])
  ) as Record<Locale, string>
}
