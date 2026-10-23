
"use strict";

/*
 * CFM International — banking simulation frontend
 * Backend: Render
 * No real money or banking services.
 */

const API_BASE = "https://cfm-international-bank-in.onrender.com";
const $ = id => document.getElementById(id);

const english = {
  autoLanguage: "Automatic detection",
  demoNotice: "SIMULATION ONLY — no real money, deposits, or banking services.",
  welcomeTitle: "Welcome to CFM International",
  loginSubtitle: "Sign in to your simulated account.",
  email: "Email address",
  password: "Password",
  login: "Sign in",
  signOut: "Sign out",
  customerDashboard: "CUSTOMER DASHBOARD",
  hello: "Hello",
  overview: "Here is your demo account overview.",
  availableBalance: "Available demo balance",
  accountNumber: "Account number",
  copy: "Copy",
  copied: "Copied",
  transferMoney: "Transfer simulated money",
  transferHelp: "Transfers work only between demo accounts in this project.",
  receiverName: "Receiver full name",
  receiverAccount: "Receiver account number",
  receiverCountry: "Receiver country",
  amount: "Amount",
  description: "Description (optional)",
  sendTransfer: "Make demo transfer",
  transactions: "Transactions",
  lastFive: "Latest five transactions",
  adminTitle: "Admin dashboard",
  administrator: "ADMINISTRATOR",
  adminSubtitle: "Manage fictional demo accounts and demo balances.",
  createAccount: "Create customer account",
  fullName: "Full name",
  phone: "Phone (optional)",
  country: "Country",
  currency: "Account currency",
  temporaryPassword: "Temporary password (min 12 characters)",
  initialBalance: "Initial simulated balance",
  initialNote: "Opening note / optional transaction description",
  openingNotePlaceholder: "Opening balance note",
  create: "Create account",
  creditAccount: "Add simulated money",
  creditReason: "Reason / audit note",
  addMoney: "Add demo money",
  accounts: "Customer accounts",
  refresh: "Refresh list",
  receipt: "Transfer receipt",
  receiptWarning: "SIMULATION RECORD — NOT A PAYMENT CONFIRMATION",
  printReceipt: "Print receipt",
  close: "Close",
  invalidLogin: "Unable to sign in. Check your details.",
  loginRequired: "Please sign in again.",
  networkError: "A server error occurred. Try again.",
  transferSuccess: "Demo transfer completed successfully.",
  accountCreated: "Demo account created.",
  creditSuccess: "Demo balance credited.",
  noTransactions: "No transactions yet.",
  loading: "Loading…",
  notFound: "Account not found.",
  confirmDemo: "This is a simulation. No real money moved.",
  adminOnlyAccounts: "Access is available to accounts created by the administrator.",
  invalidAmount: "Enter a valid positive amount.",
  invalidDemoBalance: "Enter a valid non-negative demo balance.",
  passwordTooShort: "Password must contain at least 12 characters.",
  noAccounts: "No demo accounts yet.",
  demoCustomer: "Demo customer",
  transferReceived: "Transfer received",
  transferSent: "Transfer sent",
  demoAccount: "Demo account",
  completed: "completed",
  status: "Status",
  reference: "Reference",
  date: "Date",
  sender: "Sender",
  senderAccount: "Sender account",
  receiver: "Receiver",
  receiverCountryReceipt: "Receiver country",
  receiptDescription: "Description",
  receiptWarningShort: "NOT A REAL PAYMENT",
  footerNotice: "Simulation interface only. This is not a licensed bank and does not hold or transfer real funds.",
  refreshHint: "Use refresh to load customer accounts."
};

const translations = {
  en: { ...english },

  es: {
    ...english,
    autoLanguage: "Detección automática",
    demoNotice: "SOLO SIMULACIÓN: no hay dinero real ni servicios bancarios.",
    welcomeTitle: "Bienvenido a CFM International",
    loginSubtitle: "Inicia sesión en tu cuenta de demostración.",
    email: "Correo electrónico",
    password: "Contraseña",
    login: "Iniciar sesión",
    signOut: "Cerrar sesión",
    customerDashboard: "PANEL DEL CLIENTE",
    hello: "Hola",
    overview: "Resumen de tu cuenta de demostración.",
    availableBalance: "Saldo de demostración disponible",
    accountNumber: "Número de cuenta",
    copy: "Copiar",
    copied: "Copiado",
    transferMoney: "Transferir dinero simulado",
    transferHelp: "Solo se permiten transferencias entre cuentas de demostración.",
    receiverName: "Nombre completo del destinatario",
    receiverAccount: "Número de cuenta del destinatario",
    receiverCountry: "País del destinatario",
    amount: "Importe",
    description: "Descripción (opcional)",
    sendTransfer: "Realizar transferencia de prueba",
    transactions: "Transacciones",
    lastFive: "Últimas cinco transacciones",
    adminTitle: "Panel de administración",
    administrator: "ADMINISTRADOR",
    adminSubtitle: "Gestionar cuentas y saldos ficticios.",
    createAccount: "Crear cuenta de cliente",
    fullName: "Nombre completo",
    phone: "Teléfono (opcional)",
    country: "País",
    currency: "Moneda de la cuenta",
    temporaryPassword: "Contraseña temporal (mínimo 12 caracteres)",
    initialBalance: "Saldo inicial simulado",
    initialNote: "Nota inicial / descripción opcional",
    openingNotePlaceholder: "Nota del saldo inicial",
    create: "Crear cuenta",
    creditAccount: "Añadir dinero simulado",
    creditReason: "Motivo / nota de auditoría",
    addMoney: "Añadir dinero de prueba",
    accounts: "Cuentas de clientes",
    refresh: "Actualizar lista",
    receipt: "Recibo de transferencia",
    receiptWarning: "REGISTRO DE SIMULACIÓN — NO ES UN COMPROBANTE DE PAGO",
    printReceipt: "Imprimir recibo",
    close: "Cerrar",
    invalidLogin: "No se pudo iniciar sesión. Comprueba tus datos.",
    loginRequired: "Inicia sesión de nuevo.",
    networkError: "Error del servidor. Inténtalo de nuevo.",
    transferSuccess: "Transferencia de prueba completada.",
    accountCreated: "Cuenta de demostración creada.",
    creditSuccess: "Saldo de demostración añadido.",
    noTransactions: "Aún no hay transacciones.",
    loading: "Cargando…",
    notFound: "Cuenta no encontrada.",
    adminOnlyAccounts: "El acceso está disponible para cuentas creadas por el administrador.",
    invalidAmount: "Introduce un importe positivo válido.",
    invalidDemoBalance: "Introduce un saldo de demostración válido.",
    passwordTooShort: "La contraseña debe tener al menos 12 caracteres.",
    noAccounts: "Todavía no hay cuentas de demostración.",
    demoCustomer: "Cliente de demostración",
    transferReceived: "Transferencia recibida",
    transferSent: "Transferencia enviada",
    demoAccount: "Cuenta de demostración",
    completed: "completada",
    status: "Estado",
    reference: "Referencia",
    date: "Fecha",
    sender: "Remitente",
    senderAccount: "Cuenta del remitente",
    receiver: "Destinatario",
    receiverCountryReceipt: "País del destinatario",
    receiptDescription: "Descripción",
    footerNotice: "Interfaz de simulación. No es un banco autorizado y no guarda ni transfiere fondos reales."
  },

  fr: {
    ...english,
    autoLanguage: "Détection automatique",
    demoNotice: "SIMULATION UNIQUEMENT — aucun argent réel ni service bancaire.",
    welcomeTitle: "Bienvenue chez CFM International",
    loginSubtitle: "Connectez-vous à votre compte de démonstration.",
    email: "Adresse e-mail",
    password: "Mot de passe",
    login: "Se connecter",
    signOut: "Déconnexion",
    customerDashboard: "ESPACE CLIENT",
    hello: "Bonjour",
    overview: "Aperçu de votre compte de démonstration.",
    availableBalance: "Solde de démonstration disponible",
    accountNumber: "Numéro de compte",
    copy: "Copier",
    copied: "Copié",
    transferMoney: "Transférer de l'argent simulé",
    transferHelp: "Les virements fonctionnent uniquement entre comptes de démonstration.",
    receiverName: "Nom complet du bénéficiaire",
    receiverAccount: "Numéro de compte du bénéficiaire",
    receiverCountry: "Pays du bénéficiaire",
    amount: "Montant",
    description: "Description (facultatif)",
    sendTransfer: "Effectuer un virement de test",
    transactions: "Transactions",
    lastFive: "Cinq dernières transactions",
    adminTitle: "Tableau d'administration",
    administrator: "ADMINISTRATEUR",
    adminSubtitle: "Gérer les comptes et soldes fictifs.",
    createAccount: "Créer un compte client",
    fullName: "Nom complet",
    phone: "Téléphone (facultatif)",
    country: "Pays",
    currency: "Devise du compte",
    temporaryPassword: "Mot de passe temporaire (12 caractères min.)",
    initialBalance: "Solde initial simulé",
    initialNote: "Note initiale / description facultative",
    openingNotePlaceholder: "Note du solde initial",
    create: "Créer le compte",
    creditAccount: "Ajouter de l'argent simulé",
    creditReason: "Motif / note d'audit",
    addMoney: "Ajouter de l'argent de démonstration",
    accounts: "Comptes clients",
    refresh: "Actualiser",
    receipt: "Reçu de virement",
    receiptWarning: "ENREGISTREMENT DE SIMULATION — PAS UNE CONFIRMATION DE PAIEMENT",
    printReceipt: "Imprimer le reçu",
    close: "Fermer",
    invalidLogin: "Connexion impossible. Vérifiez vos informations.",
    loginRequired: "Veuillez vous reconnecter.",
    networkError: "Erreur du serveur. Réessayez.",
    transferSuccess: "Virement de démonstration effectué.",
    accountCreated: "Compte de démonstration créé.",
    creditSuccess: "Solde de démonstration crédité.",
    noTransactions: "Aucune transaction pour le moment.",
    loading: "Chargement…",
    notFound: "Compte introuvable.",
    adminOnlyAccounts: "L'accès est réservé aux comptes créés par l'administrateur.",
    invalidAmount: "Saisissez un montant positif valide.",
    invalidDemoBalance: "Saisissez un solde de démonstration valide.",
    passwordTooShort: "Le mot de passe doit comporter au moins 12 caractères.",
    noAccounts: "Aucun compte de démonstration pour le moment.",
    demoCustomer: "Client de démonstration",
    transferReceived: "Virement reçu",
    transferSent: "Virement envoyé",
    demoAccount: "Compte de démonstration",
    completed: "terminé",
    status: "Statut",
    reference: "Référence",
    date: "Date",
    sender: "Expéditeur",
    senderAccount: "Compte de l'expéditeur",
    receiver: "Bénéficiaire",
    receiverCountryReceipt: "Pays du bénéficiaire",
    receiptDescription: "Description",
    footerNotice: "Interface de simulation. Ce service n'est pas une banque agréée et ne détient ni ne transfère de fonds réels."
  },

  de: {
    ...english,
    autoLanguage: "Automatische Erkennung",
    demoNotice: "NUR SIMULATION — kein echtes Geld und keine Bankdienstleistungen.",
    welcomeTitle: "Willkommen bei CFM International",
    loginSubtitle: "Melden Sie sich bei Ihrem Demokonto an.",
    email: "E-Mail-Adresse",
    password: "Passwort",
    login: "Anmelden",
    signOut: "Abmelden",
    customerDashboard: "KUNDENBEREICH",
    hello: "Hallo",
    overview: "Übersicht Ihres Demokontos.",
    availableBalance: "Verfügbares Demoguthaben",
    accountNumber: "Kontonummer",
    copy: "Kopieren",
    copied: "Kopiert",
    transferMoney: "Simuliertes Geld überweisen",
    transferHelp: "Überweisungen funktionieren nur zwischen Demokonten.",
    receiverName: "Vollständiger Empfängername",
    receiverAccount: "Empfängerkontonummer",
    receiverCountry: "Empfängerland",
    amount: "Betrag",
    description: "Beschreibung (optional)",
    sendTransfer: "Demoüberweisung ausführen",
    transactions: "Transaktionen",
    lastFive: "Letzte fünf Transaktionen",
    adminTitle: "Admin-Dashboard",
    administrator: "ADMINISTRATOR",
    adminSubtitle: "Fiktive Demo-Konten und Guthaben verwalten.",
    createAccount: "Kundenkonto erstellen",
    fullName: "Vollständiger Name",
    phone: "Telefon (optional)",
    country: "Land",
    currency: "Kontowährung",
    temporaryPassword: "Temporäres Passwort (mindestens 12 Zeichen)",
    initialBalance: "Simuliertes Anfangsguthaben",
    initialNote: "Eröffnungsnotiz / optionale Beschreibung",
    openingNotePlaceholder: "Notiz zum Anfangsguthaben",
    create: "Konto erstellen",
    creditAccount: "Simuliertes Geld hinzufügen",
    creditReason: "Grund / Prüfnotiz",
    addMoney: "Demoguthaben hinzufügen",
    accounts: "Kundenkonten",
    refresh: "Liste aktualisieren",
    receipt: "Überweisungsbeleg",
    receiptWarning: "SIMULATIONSBELEG — KEINE ZAHLUNGSBESTÄTIGUNG",
    printReceipt: "Beleg drucken",
    close: "Schließen",
    invalidLogin: "Anmeldung fehlgeschlagen. Bitte Angaben prüfen.",
    loginRequired: "Bitte erneut anmelden.",
    networkError: "Serverfehler. Bitte erneut versuchen.",
    transferSuccess: "Demoüberweisung erfolgreich.",
    accountCreated: "Demokonto erstellt.",
    creditSuccess: "Demoguthaben gutgeschrieben.",
    noTransactions: "Noch keine Transaktionen.",
    loading: "Laden…",
    notFound: "Konto nicht gefunden.",
    adminOnlyAccounts: "Zugriff ist für vom Administrator erstellte Konten verfügbar.",
    invalidAmount: "Geben Sie einen gültigen positiven Betrag ein.",
    invalidDemoBalance: "Geben Sie ein gültiges Demoguthaben ein.",
    passwordTooShort: "Das Passwort muss mindestens 12 Zeichen lang sein.",
    noAccounts: "Noch keine Demokonten vorhanden.",
    demoCustomer: "Demokunde",
    transferReceived: "Überweisung erhalten",
    transferSent: "Überweisung gesendet",
    demoAccount: "Demokonto",
    completed: "abgeschlossen",
    status: "Status",
    reference: "Referenz",
    date: "Datum",
    sender: "Absender",
    senderAccount: "Absenderkonto",
    receiver: "Empfänger",
    receiverCountryReceipt: "Empfängerland",
    receiptDescription: "Beschreibung",
    footerNotice: "Simulationsoberfläche. Dies ist keine lizenzierte Bank und verwahrt oder überweist kein echtes Geld."
  },

  pl: {
    ...english,
    autoLanguage: "Automatyczne wykrywanie",
    demoNotice: "TYLKO SYMULACJA — bez prawdziwych pieniędzy i usług bankowych.",
    welcomeTitle: "Witamy w CFM International",
    loginSubtitle: "Zaloguj się na konto demonstracyjne.",
    email: "Adres e-mail",
    password: "Hasło",
    login: "Zaloguj się",
    signOut: "Wyloguj się",
    customerDashboard: "PANEL KLIENTA",
    hello: "Witaj",
    overview: "Podsumowanie konta demonstracyjnego.",
    availableBalance: "Dostępne saldo demonstracyjne",
    accountNumber: "Numer konta",
    copy: "Kopiuj",
    copied: "Skopiowano",
    transferMoney: "Przelej symulowane środki",
    transferHelp: "Przelewy działają tylko między kontami demonstracyjnymi.",
    receiverName: "Pełne imię i nazwisko odbiorcy",
    receiverAccount: "Numer konta odbiorcy",
    receiverCountry: "Kraj odbiorcy",
    amount: "Kwota",
    description: "Opis (opcjonalnie)",
    sendTransfer: "Wykonaj przelew testowy",
    transactions: "Transakcje",
    lastFive: "Ostatnie pięć transakcji",
    adminTitle: "Panel administratora",
    administrator: "ADMINISTRATOR",
    adminSubtitle: "Zarządzaj fikcyjnymi kontami i saldami.",
    createAccount: "Utwórz konto klienta",
    fullName: "Imię i nazwisko",
    phone: "Telefon (opcjonalnie)",
    country: "Kraj",
    currency: "Waluta konta",
    temporaryPassword: "Hasło tymczasowe (min. 12 znaków)",
    initialBalance: "Początkowe saldo symulowane",
    initialNote: "Notatka początkowa / opis",
    openingNotePlaceholder: "Notatka salda początkowego",
    create: "Utwórz konto",
    creditAccount: "Dodaj symulowane środki",
    creditReason: "Powód / notatka audytowa",
    addMoney: "Dodaj środki demo",
    accounts: "Konta klientów",
    refresh: "Odśwież listę",
    receipt: "Potwierdzenie przelewu",
    receiptWarning: "ZAPIS SYMULACJI — NIE JEST POTWIERDZENIEM PŁATNOŚCI",
    printReceipt: "Drukuj potwierdzenie",
    close: "Zamknij",
    invalidLogin: "Nie udało się zalogować. Sprawdź dane.",
    loginRequired: "Zaloguj się ponownie.",
    networkError: "Błąd serwera. Spróbuj ponownie.",
    transferSuccess: "Przelew testowy zakończony.",
    accountCreated: "Utworzono konto demo.",
    creditSuccess: "Dodano saldo demo.",
    noTransactions: "Brak transakcji.",
    loading: "Ładowanie…",
    notFound: "Nie znaleziono konta.",
    adminOnlyAccounts: "Dostęp jest przeznaczony dla kont utworzonych przez administratora.",
    invalidAmount: "Wprowadź prawidłową dodatnią kwotę.",
    invalidDemoBalance: "Wprowadź prawidłowe saldo demonstracyjne.",
    passwordTooShort: "Hasło musi mieć co najmniej 12 znaków.",
    noAccounts: "Brak kont demonstracyjnych.",
    demoCustomer: "Klient demonstracyjny",
    transferReceived: "Otrzymano przelew",
    transferSent: "Wysłano przelew",
    demoAccount: "Konto demo",
    completed: "zakończono",
    status: "Status",
    reference: "Numer referencyjny",
    date: "Data",
    sender: "Nadawca",
    senderAccount: "Konto nadawcy",
    receiver: "Odbiorca",
    receiverCountryReceipt: "Kraj odbiorcy",
    receiptDescription: "Opis",
    footerNotice: "Interfejs symulacyjny. To nie jest licencjonowany bank i nie przechowuje ani nie przesyła prawdziwych pieniędzy."
  },

  pt: {
    ...english,
    autoLanguage: "Deteção automática",
    demoNotice: "APENAS SIMULAÇÃO — sem dinheiro real ou serviços bancários.",
    welcomeTitle: "Bem-vindo ao CFM International",
    loginSubtitle: "Entre na sua conta de demonstração.",
    email: "E-mail",
    password: "Palavra-passe",
    login: "Entrar",
    signOut: "Sair",
    customerDashboard: "PAINEL DO CLIENTE",
    hello: "Olá",
    overview: "Resumo da sua conta de demonstração.",
    availableBalance: "Saldo de demonstração disponível",
    accountNumber: "Número da conta",
    copy: "Copiar",
    copied: "Copiado",
    transferMoney: "Transferir dinheiro simulado",
    transferHelp: "As transferências funcionam apenas entre contas de demonstração.",
    receiverName: "Nome completo do destinatário",
    receiverAccount: "Número da conta do destinatário",
    receiverCountry: "País do destinatário",
    amount: "Montante",
    description: "Descrição (opcional)",
    sendTransfer: "Fazer transferência de teste",
    transactions: "Transações",
    lastFive: "Últimas cinco transações",
    adminTitle: "Painel de administração",
    administrator: "ADMINISTRADOR",
    adminSubtitle: "Gerir contas e saldos fictícios.",
    createAccount: "Criar conta de cliente",
    fullName: "Nome completo",
    phone: "Telefone (opcional)",
    country: "País",
    currency: "Moeda da conta",
    temporaryPassword: "Palavra-passe temporária (mínimo 12 caracteres)",
    initialBalance: "Saldo inicial simulado",
    initialNote: "Nota inicial / descrição opcional",
    openingNotePlaceholder: "Nota do saldo inicial",
    create: "Criar conta",
    creditAccount: "Adicionar dinheiro simulado",
    creditReason: "Motivo / nota de auditoria",
    addMoney: "Adicionar saldo demo",
    accounts: "Contas de clientes",
    refresh: "Atualizar lista",
    receipt: "Recibo de transferência",
    receiptWarning: "REGISTO DE SIMULAÇÃO — NÃO É UMA CONFIRMAÇÃO DE PAGAMENTO",
    printReceipt: "Imprimir recibo",
    close: "Fechar",
    invalidLogin: "Não foi possível iniciar sessão.",
    loginRequired: "Inicie sessão novamente.",
    networkError: "Erro do servidor. Tente novamente.",
    transferSuccess: "Transferência de teste concluída.",
    accountCreated: "Conta de demonstração criada.",
    creditSuccess: "Saldo de demonstração adicionado.",
    noTransactions: "Ainda não há transações.",
    loading: "A carregar…",
    notFound: "Conta não encontrada.",
    adminOnlyAccounts: "O acesso está disponível para contas criadas pelo administrador.",
    invalidAmount: "Introduza um montante positivo válido.",
    invalidDemoBalance: "Introduza um saldo de demonstração válido.",
    passwordTooShort: "A palavra-passe deve ter pelo menos 12 caracteres.",
    noAccounts: "Ainda não existem contas de demonstração.",
    demoCustomer: "Cliente de demonstração",
    transferReceived: "Transferência recebida",
    transferSent: "Transferência enviada",
    demoAccount: "Conta de demonstração",
    completed: "concluída",
    status: "Estado",
    reference: "Referência",
    date: "Data",
    sender: "Remetente",
    senderAccount: "Conta do remetente",
    receiver: "Destinatário",
    receiverCountryReceipt: "País do destinatário",
    receiptDescription: "Descrição",
    footerNotice: "Interface de simulação. Não é um banco licenciado e não guarda nem transfere fundos reais."
  },

  ar: {
    ...english,
    autoLanguage: "اكتشاف اللغة تلقائيًا",
    demoNotice: "للمحاكاة فقط — لا توجد أموال حقيقية أو خدمات مصرفية.",
    welcomeTitle: "مرحبًا بك في CFM International",
    loginSubtitle: "سجّل الدخول إلى حسابك التجريبي.",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    login: "تسجيل الدخول",
    signOut: "تسجيل الخروج",
    customerDashboard: "لوحة العميل",
    hello: "مرحبًا",
    overview: "ملخص حسابك التجريبي.",
    availableBalance: "الرصيد التجريبي المتاح",
    accountNumber: "رقم الحساب",
    copy: "نسخ",
    copied: "تم النسخ",
    transferMoney: "تحويل أموال تجريبية",
    transferHelp: "التحويلات متاحة بين الحسابات التجريبية فقط.",
    receiverName: "الاسم الكامل للمستلم",
    receiverAccount: "رقم حساب المستلم",
    receiverCountry: "بلد المستلم",
    amount: "المبلغ",
    description: "الوصف (اختياري)",
    sendTransfer: "تنفيذ تحويل تجريبي",
    transactions: "المعاملات",
    lastFive: "آخر خمس معاملات",
    adminTitle: "لوحة الإدارة",
    administrator: "المسؤول",
    adminSubtitle: "إدارة الحسابات والأرصدة التجريبية.",
    createAccount: "إنشاء حساب عميل",
    fullName: "الاسم الكامل",
    phone: "الهاتف (اختياري)",
    country: "البلد",
    currency: "عملة الحساب",
    temporaryPassword: "كلمة مرور مؤقتة (12 حرفًا على الأقل)",
    initialBalance: "الرصيد التجريبي الأولي",
    initialNote: "ملاحظة افتتاحية / وصف اختياري",
    openingNotePlaceholder: "ملاحظة الرصيد الافتتاحي",
    create: "إنشاء الحساب",
    creditAccount: "إضافة أموال تجريبية",
    creditReason: "السبب / ملاحظة التدقيق",
    addMoney: "إضافة رصيد تجريبي",
    accounts: "حسابات العملاء",
    refresh: "تحديث القائمة",
    receipt: "إيصال التحويل",
    receiptWarning: "سجل محاكاة — ليس تأكيدًا للدفع",
    printReceipt: "طباعة الإيصال",
    close: "إغلاق",
    invalidLogin: "تعذر تسجيل الدخول. تحقق من بياناتك.",
    loginRequired: "يرجى تسجيل الدخول مجددًا.",
    networkError: "حدث خطأ في الخادم. حاول مجددًا.",
    transferSuccess: "اكتمل التحويل التجريبي.",
    accountCreated: "تم إنشاء الحساب التجريبي.",
    creditSuccess: "تمت إضافة الرصيد التجريبي.",
    noTransactions: "لا توجد معاملات بعد.",
    loading: "جارٍ التحميل…",
    notFound: "لم يتم العثور على الحساب.",
    adminOnlyAccounts: "الوصول متاح للحسابات التي أنشأها المسؤول.",
    invalidAmount: "أدخل مبلغًا موجبًا صالحًا.",
    invalidDemoBalance: "أدخل رصيدًا تجريبيًا صالحًا.",
    passwordTooShort: "يجب ألا تقل كلمة المرور عن 12 حرفًا.",
    noAccounts: "لا توجد حسابات تجريبية بعد.",
    demoCustomer: "عميل تجريبي",
    transferReceived: "تحويل وارد",
    transferSent: "تحويل صادر",
    demoAccount: "حساب تجريبي",
    completed: "مكتمل",
    status: "الحالة",
    reference: "المرجع",
    date: "التاريخ",
    sender: "المرسل",
    senderAccount: "حساب المرسل",
    receiver: "المستلم",
    receiverCountryReceipt: "بلد المستلم",
    receiptDescription: "الوصف",
    footerNotice: "واجهة محاكاة فقط. هذا ليس بنكًا مرخصًا ولا يحتفظ بأموال حقيقية أو يحولها."
  },

  ur: {
    ...english,
    autoLanguage: "خودکار زبان کی شناخت",
    demoNotice: "صرف مشق کے لیے — کوئی حقیقی رقم یا بینکنگ خدمات نہیں۔",
    welcomeTitle: "CFM International میں خوش آمدید",
    loginSubtitle: "اپنے ڈیمو اکاؤنٹ میں لاگ ان کریں۔",
    email: "ای میل",
    password: "پاس ورڈ",
    login: "لاگ ان",
    signOut: "لاگ آؤٹ",
    customerDashboard: "کسٹمر ڈیش بورڈ",
    hello: "خوش آمدید",
    overview: "آپ کے ڈیمو اکاؤنٹ کا خلاصہ۔",
    availableBalance: "دستیاب ڈیمو بیلنس",
    accountNumber: "اکاؤنٹ نمبر",
    copy: "کاپی",
    copied: "کاپی ہوگیا",
    transferMoney: "ڈیمو رقم منتقل کریں",
    transferHelp: "منتقلی صرف ڈیمو اکاؤنٹس کے درمیان ہوتی ہے۔",
    receiverName: "وصول کنندہ کا پورا نام",
    receiverAccount: "وصول کنندہ کا اکاؤنٹ نمبر",
    receiverCountry: "وصول کنندہ کا ملک",
    amount: "رقم",
    description: "تفصیل (اختیاری)",
    sendTransfer: "ڈیمو ٹرانسفر کریں",
    transactions: "لین دین",
    lastFive: "آخری پانچ لین دین",
    adminTitle: "ایڈمن ڈیش بورڈ",
    administrator: "ایڈمن",
    adminSubtitle: "فرضی ڈیمو اکاؤنٹس اور بیلنس کا انتظام۔",
    createAccount: "کسٹمر اکاؤنٹ بنائیں",
    fullName: "پورا نام",
    phone: "فون (اختیاری)",
    country: "ملک",
    currency: "اکاؤنٹ کی کرنسی",
    temporaryPassword: "عارضی پاس ورڈ (کم از کم 12 حروف)",
    initialBalance: "ابتدائی ڈیمو بیلنس",
    initialNote: "ابتدائی نوٹ / اختیاری تفصیل",
    openingNotePlaceholder: "ابتدائی بیلنس کا نوٹ",
    create: "اکاؤنٹ بنائیں",
    creditAccount: "ڈیمو رقم شامل کریں",
    creditReason: "وجہ / آڈٹ نوٹ",
    addMoney: "ڈیمو رقم شامل کریں",
    accounts: "کسٹمر اکاؤنٹس",
    refresh: "فہرست تازہ کریں",
    receipt: "ٹرانسفر رسید",
    receiptWarning: "صرف مشق کا ریکارڈ — ادائیگی کی تصدیق نہیں",
    printReceipt: "رسید پرنٹ کریں",
    close: "بند کریں",
    invalidLogin: "لاگ ان نہیں ہو سکا۔ اپنی تفصیلات چیک کریں۔",
    loginRequired: "دوبارہ لاگ ان کریں۔",
    networkError: "سرور کی خرابی۔ دوبارہ کوشش کریں۔",
    transferSuccess: "ڈیمو ٹرانسفر مکمل ہوگیا۔",
    accountCreated: "ڈیمو اکاؤنٹ بن گیا۔",
    creditSuccess: "ڈیمو بیلنس شامل ہوگیا۔",
    noTransactions: "ابھی کوئی لین دین نہیں۔",
    loading: "لوڈ ہو رہا ہے…",
    notFound: "اکاؤنٹ نہیں ملا۔",
    adminOnlyAccounts: "رسائی صرف ایڈمن کے بنائے ہوئے اکاؤنٹس کے لیے ہے۔",
    invalidAmount: "درست مثبت رقم درج کریں۔",
    invalidDemoBalance: "درست ڈیمو بیلنس درج کریں۔",
    passwordTooShort: "پاس ورڈ کم از کم 12 حروف کا ہونا چاہیے۔",
    noAccounts: "ابھی کوئی ڈیمو اکاؤنٹ نہیں۔",
    demoCustomer: "ڈیمو صارف",
    transferReceived: "رقم موصول ہوئی",
    transferSent: "رقم بھیجی گئی",
    demoAccount: "ڈیمو اکاؤنٹ",
    completed: "مکمل",
    status: "حیثیت",
    reference: "حوالہ",
    date: "تاریخ",
    sender: "بھیجنے والا",
    senderAccount: "بھیجنے والے کا اکاؤنٹ",
    receiver: "وصول کنندہ",
    receiverCountryReceipt: "وصول کنندہ کا ملک",
    receiptDescription: "تفصیل",
    footerNotice: "صرف مشق کا انٹرفیس۔ یہ لائسنس یافتہ بینک نہیں ہے اور حقیقی رقم نہیں رکھتا یا منتقل نہیں کرتا۔"
  },

  th: {
    ...english,
    autoLanguage: "ตรวจจับภาษาอัตโนมัติ",
    demoNotice: "ระบบจำลองเท่านั้น — ไม่มีเงินจริงหรือบริการธนาคารจริง",
    welcomeTitle: "ยินดีต้อนรับสู่ CFM International",
    loginSubtitle: "เข้าสู่บัญชีจำลองของคุณ",
    email: "อีเมล",
    password: "รหัสผ่าน",
    login: "เข้าสู่ระบบ",
    signOut: "ออกจากระบบ",
    customerDashboard: "แดชบอร์ดลูกค้า",
    hello: "สวัสดี",
    overview: "ภาพรวมบัญชีจำลองของคุณ",
    availableBalance: "ยอดเงินจำลองคงเหลือ",
    accountNumber: "หมายเลขบัญชี",
    copy: "คัดลอก",
    copied: "คัดลอกแล้ว",
    transferMoney: "โอนเงินจำลอง",
    transferHelp: "โอนได้เฉพาะระหว่างบัญชีจำลองในโครงการนี้",
    receiverName: "ชื่อเต็มผู้รับ",
    receiverAccount: "หมายเลขบัญชีผู้รับ",
    receiverCountry: "ประเทศผู้รับ",
    amount: "จำนวนเงิน",
    description: "คำอธิบาย (ไม่บังคับ)",
    sendTransfer: "ทำรายการโอนจำลอง",
    transactions: "รายการธุรกรรม",
    lastFive: "ห้ารายการล่าสุด",
    adminTitle: "แดชบอร์ดผู้ดูแล",
    administrator: "ผู้ดูแลระบบ",
    adminSubtitle: "จัดการบัญชีและยอดเงินจำลอง",
    createAccount: "สร้างบัญชีลูกค้า",
    fullName: "ชื่อเต็ม",
    phone: "โทรศัพท์ (ไม่บังคับ)",
    country: "ประเทศ",
    currency: "สกุลเงินบัญชี",
    temporaryPassword: "รหัสผ่านชั่วคราว (อย่างน้อย 12 ตัวอักษร)",
    initialBalance: "ยอดเงินจำลองเริ่มต้น",
    initialNote: "หมายเหตุเริ่มต้น",
    create: "สร้างบัญชี",
    creditAccount: "เพิ่มเงินจำลอง",
    creditReason: "เหตุผล / หมายเหตุการตรวจสอบ",
    addMoney: "เพิ่มเงินจำลอง",
    accounts: "บัญชีลูกค้า",
    refresh: "รีเฟรชรายการ",
    receipt: "ใบเสร็จการโอน",
    receiptWarning: "บันทึกจำลอง — ไม่ใช่หลักฐานการชำระเงินจริง",
    printReceipt: "พิมพ์ใบเสร็จ",
    close: "ปิด",
    invalidLogin: "เข้าสู่ระบบไม่ได้ โปรดตรวจสอบข้อมูล",
    loginRequired: "โปรดเข้าสู่ระบบอีกครั้ง",
    networkError: "เกิดข้อผิดพลาดของเซิร์ฟเวอร์ โปรดลองอีกครั้ง",
    transferSuccess: "โอนเงินจำลองสำเร็จ",
    accountCreated: "สร้างบัญชีจำลองแล้ว",
    creditSuccess: "เพิ่มยอดเงินจำลองแล้ว",
    noTransactions: "ยังไม่มีธุรกรรม",
    loading: "กำลังโหลด…",
    notFound: "ไม่พบบัญชี",
    adminOnlyAccounts: "ใช้ได้กับบัญชีที่ผู้ดูแลสร้างเท่านั้น",
    invalidAmount: "โปรดใส่จำนวนเงินบวกที่ถูกต้อง",
    invalidDemoBalance: "โปรดใส่ยอดเงินจำลองที่ถูกต้อง",
    passwordTooShort: "รหัสผ่านต้องมีอย่างน้อย 12 ตัวอักษร",
    noAccounts: "ยังไม่มีบัญชีจำลอง",
    demoCustomer: "ลูกค้าจำลอง",
    transferReceived: "ได้รับเงินโอน",
    transferSent: "ส่งเงินโอน",
    status: "สถานะ",
    reference: "เลขอ้างอิง",
    date: "วันที่",
    sender: "ผู้ส่ง",
    receiver: "ผู้รับ",
    footerNotice: "ระบบจำลองเท่านั้น ไม่ใช่ธนาคารที่ได้รับอนุญาต และไม่มีการถือหรือโอนเงินจริง"
  },

  id: {
    ...english,
    autoLanguage: "Deteksi bahasa otomatis",
    demoNotice: "HANYA SIMULASI — tidak ada uang atau layanan perbankan nyata.",
    welcomeTitle: "Selamat datang di CFM International",
    loginSubtitle: "Masuk ke akun simulasi Anda.",
    email: "Alamat email",
    password: "Kata sandi",
    login: "Masuk",
    signOut: "Keluar",
    customerDashboard: "DASHBOARD NASABAH",
    hello: "Halo",
    overview: "Ringkasan akun simulasi Anda.",
    availableBalance: "Saldo simulasi tersedia",
    accountNumber: "Nomor rekening",
    copy: "Salin",
    copied: "Disalin",
    transferMoney: "Transfer uang simulasi",
    transferHelp: "Transfer hanya berfungsi antar akun simulasi dalam proyek ini.",
    receiverName: "Nama lengkap penerima",
    receiverAccount: "Nomor rekening penerima",
    receiverCountry: "Negara penerima",
    amount: "Jumlah",
    description: "Deskripsi (opsional)",
    sendTransfer: "Lakukan transfer simulasi",
    transactions: "Transaksi",
    lastFive: "Lima transaksi terbaru",
    adminTitle: "Dashboard admin",
    administrator: "ADMINISTRATOR",
    adminSubtitle: "Kelola akun dan saldo simulasi.",
    createAccount: "Buat akun nasabah",
    fullName: "Nama lengkap",
    phone: "Telepon (opsional)",
    country: "Negara",
    currency: "Mata uang rekening",
    temporaryPassword: "Kata sandi sementara (minimal 12 karakter)",
    initialBalance: "Saldo simulasi awal",
    initialNote: "Catatan pembukaan / deskripsi opsional",
    create: "Buat akun",
    creditAccount: "Tambahkan uang simulasi",
    creditReason: "Alasan / catatan audit",
    addMoney: "Tambah saldo simulasi",
    accounts: "Akun nasabah",
    refresh: "Segarkan daftar",
    receipt: "Bukti transfer",
    receiptWarning: "CATATAN SIMULASI — BUKAN KONFIRMASI PEMBAYARAN",
    printReceipt: "Cetak bukti",
    close: "Tutup",
    invalidLogin: "Tidak dapat masuk. Periksa data Anda.",
    loginRequired: "Silakan masuk kembali.",
    networkError: "Terjadi kesalahan server. Coba lagi.",
    transferSuccess: "Transfer simulasi berhasil.",
    accountCreated: "Akun simulasi dibuat.",
    creditSuccess: "Saldo simulasi ditambahkan.",
    noTransactions: "Belum ada transaksi.",
    loading: "Memuat…",
    notFound: "Akun tidak ditemukan.",
    adminOnlyAccounts: "Akses tersedia untuk akun yang dibuat administrator.",
    invalidAmount: "Masukkan jumlah positif yang valid.",
    invalidDemoBalance: "Masukkan saldo simulasi yang valid.",
    passwordTooShort: "Kata sandi harus memiliki minimal 12 karakter.",
    noAccounts: "Belum ada akun simulasi.",
    demoCustomer: "Nasabah simulasi",
    transferReceived: "Transfer diterima",
    transferSent: "Transfer terkirim",
    status: "Status",
    reference: "Referensi",
    date: "Tanggal",
    sender: "Pengirim",
    receiver: "Penerima",
    footerNotice: "Antarmuka simulasi. Ini bukan bank berlisensi dan tidak menyimpan atau mentransfer dana nyata."
  },

  km: {
    ...english,
    autoLanguage: "រកឃើញភាសាដោយស្វ័យប្រវត្តិ",
    demoNotice: "សម្រាប់ការក្លែងធ្វើប៉ុណ្ណោះ — មិនមានប្រាក់ពិត ឬសេវាធនាគារពិតទេ។",
    welcomeTitle: "សូមស្វាគមន៍មកកាន់ CFM International",
    loginSubtitle: "ចូលគណនីសាកល្បងរបស់អ្នក។",
    email: "អាសយដ្ឋានអ៊ីមែល",
    password: "ពាក្យសម្ងាត់",
    login: "ចូល",
    signOut: "ចាកចេញ",
    customerDashboard: "ផ្ទាំងគ្រប់គ្រងអតិថិជន",
    hello: "សួស្តី",
    overview: "សេចក្តីសង្ខេបគណនីសាកល្បងរបស់អ្នក។",
    availableBalance: "សមតុល្យសាកល្បងដែលមាន",
    accountNumber: "លេខគណនី",
    copy: "ចម្លង",
    copied: "បានចម្លង",
    transferMoney: "ផ្ទេរប្រាក់សាកល្បង",
    transferHelp: "ការផ្ទេរដំណើរការតែរវាងគណនីសាកល្បងប៉ុណ្ណោះ។",
    receiverName: "ឈ្មោះពេញអ្នកទទួល",
    receiverAccount: "លេខគណនីអ្នកទទួល",
    receiverCountry: "ប្រទេសអ្នកទទួល",
    amount: "ចំនួនទឹកប្រាក់",
    description: "ការពិពណ៌នា (ជាជម្រើស)",
    sendTransfer: "ធ្វើការផ្ទេរសាកល្បង",
    transactions: "ប្រតិបត្តិការ",
    lastFive: "ប្រតិបត្តិការប្រាំចុងក្រោយ",
    adminTitle: "ផ្ទាំងគ្រប់គ្រងអ្នកគ្រប់គ្រង",
    administrator: "អ្នកគ្រប់គ្រង",
    adminSubtitle: "គ្រប់គ្រងគណនី និងសមតុល្យសាកល្បង។",
    createAccount: "បង្កើតគណនីអតិថិជន",
    fullName: "ឈ្មោះពេញ",
    phone: "ទូរស័ព្ទ (ជាជម្រើស)",
    country: "ប្រទេស",
    currency: "រូបិយប័ណ្ណគណនី",
    temporaryPassword: "ពាក្យសម្ងាត់បណ្តោះអាសន្ន (យ៉ាងតិច 12 តួអក្សរ)",
    initialBalance: "សមតុល្យសាកល្បងដំបូង",
    initialNote: "កំណត់ចំណាំដំបូង",
    create: "បង្កើតគណនី",
    creditAccount: "បន្ថែមប្រាក់សាកល្បង",
    creditReason: "មូលហេតុ / កំណត់ចំណាំសវនកម្ម",
    addMoney: "បន្ថែមសមតុល្យសាកល្បង",
    accounts: "គណនីអតិថិជន",
    refresh: "ធ្វើបច្ចុប្បន្នភាពបញ្ជី",
    receipt: "បង្កាន់ដៃផ្ទេរ",
    receiptWarning: "កំណត់ត្រាសាកល្បង — មិនមែនជាការបញ្ជាក់ការទូទាត់ទេ",
    printReceipt: "បោះពុម្ពបង្កាន់ដៃ",
    close: "បិទ",
    invalidLogin: "មិនអាចចូលបានទេ។ សូមពិនិត្យព័ត៌មានរបស់អ្នក។",
    loginRequired: "សូមចូលម្តងទៀត។",
    networkError: "មានកំហុសម៉ាស៊ីនមេ។ សូមព្យាយាមម្តងទៀត។",
    transferSuccess: "ការផ្ទេរសាកល្បងបានបញ្ចប់។",
    accountCreated: "បានបង្កើតគណនីសាកល្បង។",
    creditSuccess: "បានបន្ថែមសមតុល្យសាកល្បង។",
    noTransactions: "មិនទាន់មានប្រតិបត្តិការទេ។",
    loading: "កំពុងផ្ទុក…",
    notFound: "រកមិនឃើញគណនីទេ។",
    adminOnlyAccounts: "អាចចូលប្រើគណនីដែលអ្នកគ្រប់គ្រងបានបង្កើត។",
    invalidAmount: "សូមបញ្ចូលចំនួនវិជ្ជមានត្រឹមត្រូវ។",
    invalidDemoBalance: "សូមបញ្ចូលសមតុល្យសាកល្បងត្រឹមត្រូវ។",
    passwordTooShort: "ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច 12 តួអក្សរ។",
    noAccounts: "មិនទាន់មានគណនីសាកល្បងទេ។",
    demoCustomer: "អតិថិជនសាកល្បង",
    transferReceived: "បានទទួលការផ្ទេរ",
    transferSent: "បានផ្ញើការផ្ទេរ",
    status: "ស្ថានភាព",
    reference: "លេខយោង",
    date: "កាលបរិច្ឆេទ",
    sender: "អ្នកផ្ញើ",
    receiver: "អ្នកទទួល",
    footerNotice: "ចំណុចប្រទាក់សាកល្បងប៉ុណ្ណោះ។ នេះមិនមែនជាធនាគារដែលមានអាជ្ញាប័ណ្ណទេ ហើយមិនកាន់កាប់ ឬផ្ទេរប្រាក់ពិតឡើយ។"
  },

  ms: {
    ...english,
    autoLanguage: "Pengesanan bahasa automatik",
    demoNotice: "SIMULASI SAHAJA — tiada wang sebenar atau perkhidmatan perbankan.",
    welcomeTitle: "Selamat datang ke CFM International",
    loginSubtitle: "Log masuk ke akaun simulasi anda.",
    email: "Alamat e-mel",
    password: "Kata laluan",
    login: "Log masuk",
    signOut: "Log keluar",
    customerDashboard: "PAPAN PEMUKA PELANGGAN",
    hello: "Helo",
    overview: "Ringkasan akaun simulasi anda.",
    availableBalance: "Baki simulasi tersedia",
    accountNumber: "Nombor akaun",
    copy: "Salin",
    copied: "Disalin",
    transferMoney: "Pindahkan wang simulasi",
    transferHelp: "Pemindahan hanya berfungsi antara akaun simulasi dalam projek ini.",
    receiverName: "Nama penuh penerima",
    receiverAccount: "Nombor akaun penerima",
    receiverCountry: "Negara penerima",
    amount: "Jumlah",
    description: "Penerangan (pilihan)",
    sendTransfer: "Buat pemindahan simulasi",
    transactions: "Transaksi",
    lastFive: "Lima transaksi terkini",
    adminTitle: "Papan pemuka pentadbir",
    administrator: "PENTADBIR",
    adminSubtitle: "Urus akaun dan baki simulasi.",
    createAccount: "Cipta akaun pelanggan",
    fullName: "Nama penuh",
    phone: "Telefon (pilihan)",
    country: "Negara",
    currency: "Mata wang akaun",
    temporaryPassword: "Kata laluan sementara (minimum 12 aksara)",
    initialBalance: "Baki simulasi awal",
    initialNote: "Nota pembukaan / penerangan pilihan",
    create: "Cipta akaun",
    creditAccount: "Tambah wang simulasi",
    creditReason: "Sebab / nota audit",
    addMoney: "Tambah baki simulasi",
    accounts: "Akaun pelanggan",
    refresh: "Muat semula senarai",
    receipt: "Resit pemindahan",
    receiptWarning: "REKOD SIMULASI — BUKAN PENGESAHAN PEMBAYARAN",
    printReceipt: "Cetak resit",
    close: "Tutup",
    invalidLogin: "Tidak dapat log masuk. Semak maklumat anda.",
    loginRequired: "Sila log masuk semula.",
    networkError: "Ralat pelayan. Cuba lagi.",
    transferSuccess: "Pemindahan simulasi berjaya.",
    accountCreated: "Akaun simulasi dicipta.",
    creditSuccess: "Baki simulasi ditambah.",
    noTransactions: "Belum ada transaksi.",
    loading: "Memuatkan…",
    notFound: "Akaun tidak ditemui.",
    adminOnlyAccounts: "Akses tersedia untuk akaun yang dicipta oleh pentadbir.",
    invalidAmount: "Masukkan jumlah positif yang sah.",
    invalidDemoBalance: "Masukkan baki simulasi yang sah.",
    passwordTooShort: "Kata laluan mesti sekurang-kurangnya 12 aksara.",
    noAccounts: "Belum ada akaun simulasi.",
    demoCustomer: "Pelanggan simulasi",
    transferReceived: "Pemindahan diterima",
    transferSent: "Pemindahan dihantar",
    status: "Status",
    reference: "Rujukan",
    date: "Tarikh",
    sender: "Pengirim",
    receiver: "Penerima",
    footerNotice: "Antara muka simulasi sahaja. Ini bukan bank berlesen dan tidak menyimpan atau memindahkan dana sebenar."
  },

  hu: {
    ...english,
    autoLanguage: "Automatikus nyelvfelismerés",
    demoNotice: "CSAK SZIMULÁCIÓ — nincs valódi pénz vagy banki szolgáltatás.",
    welcomeTitle: "Üdvözöljük a CFM International oldalán",
    loginSubtitle: "Jelentkezzen be a szimulációs fiókjába.",
    email: "E-mail-cím",
    password: "Jelszó",
    login: "Bejelentkezés",
    signOut: "Kijelentkezés",
    customerDashboard: "ÜGYFÉL-IRÁNYÍTÓPULT",
    hello: "Üdvözöljük",
    overview: "Szimulációs fiókjának áttekintése.",
    availableBalance: "Elérhető szimulációs egyenleg",
    accountNumber: "Számlaszám",
    copy: "Másolás",
    copied: "Másolva",
    transferMoney: "Szimulált pénz átutalása",
    transferHelp: "Átutalás csak a projektben lévő szimulációs számlák között működik.",
    receiverName: "A címzett teljes neve",
    receiverAccount: "A címzett számlaszáma",
    receiverCountry: "A címzett országa",
    amount: "Összeg",
    description: "Leírás (nem kötelező)",
    sendTransfer: "Szimulált átutalás indítása",
    transactions: "Tranzakciók",
    lastFive: "Az utolsó öt tranzakció",
    adminTitle: "Adminisztrációs felület",
    administrator: "ADMINISZTRÁTOR",
    adminSubtitle: "Szimulációs számlák és egyenlegek kezelése.",
    createAccount: "Ügyfélszámla létrehozása",
    fullName: "Teljes név",
    phone: "Telefon (nem kötelező)",
    country: "Ország",
    currency: "Számla pénzneme",
    temporaryPassword: "Ideiglenes jelszó (legalább 12 karakter)",
    initialBalance: "Kezdeti szimulációs egyenleg",
    initialNote: "Kezdő megjegyzés / opcionális leírás",
    create: "Számla létrehozása",
    creditAccount: "Szimulált pénz hozzáadása",
    creditReason: "Indok / ellenőrzési megjegyzés",
    addMoney: "Szimulált pénz hozzáadása",
    accounts: "Ügyfélszámlák",
    refresh: "Lista frissítése",
    receipt: "Átutalási bizonylat",
    receiptWarning: "SZIMULÁCIÓS NYILVÁNTARTÁS — NEM FIZETÉSI IGAZOLÁS",
    printReceipt: "Bizonylat nyomtatása",
    close: "Bezárás",
    invalidLogin: "Sikertelen bejelentkezés. Ellenőrizze az adatokat.",
    loginRequired: "Kérjük, jelentkezzen be újra.",
    networkError: "Szerverhiba történt. Próbálja újra.",
    transferSuccess: "A szimulált átutalás sikerült.",
    accountCreated: "Szimulációs számla létrehozva.",
    creditSuccess: "Szimulációs egyenleg hozzáadva.",
    noTransactions: "Még nincsenek tranzakciók.",
    loading: "Betöltés…",
    notFound: "A számla nem található.",
    adminOnlyAccounts: "A hozzáférés az adminisztrátor által létrehozott fiókokhoz érhető el.",
    invalidAmount: "Adjon meg érvényes, pozitív összeget.",
    invalidDemoBalance: "Adjon meg érvényes szimulációs egyenleget.",
    passwordTooShort: "A jelszónak legalább 12 karakterből kell állnia.",
    noAccounts: "Még nincsenek szimulációs számlák.",
    demoCustomer: "Szimulációs ügyfél",
    transferReceived: "Beérkezett átutalás",
    transferSent: "Elküldött átutalás",
    status: "Állapot",
    reference: "Hivatkozás",
    date: "Dátum",
    sender: "Küldő",
    receiver: "Fogadó",
    footerNotice: "Szimulációs felület. Ez nem engedéllyel rendelkező bank, és nem kezel valódi pénzt."
  }
};

let language = "en";
let token = sessionStorage.getItem("cfm-access-token") || "";
let profile = null;
let lastReceipt = null;

function t(key) {
  return translations[language]?.[key] ?? english[key] ?? key;
}

function detectLanguage() {
  const saved = localStorage.getItem("cfm-language");

  if (saved && saved !== "auto" && translations[saved]) {
    return saved;
  }

  const preferences = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || "en"];

  for (const preference of preferences) {
    const code = preference.toLowerCase().split("-")[0];
    if (translations[code]) return code;
  }

  return "en";
}

function setLanguage(code, selectorValue = code) {
  language = translations[code] ? code : "en";

  document.documentElement.lang = language;
  document.documentElement.dir =
    ["ar", "ur"].includes(language) ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  if ($("language")) $("language").value = selectorValue;

  if ($("initialNote")) {
    $("initialNote").placeholder = t("openingNotePlaceholder");
  }
}

if ($("language")) {
  $("language").addEventListener("change", () => {
    const selected = $("language").value;
    localStorage.setItem("cfm-language", selected);

    if (selected === "auto") {
      setLanguage(detectLanguage(), "auto");
    } else {
      setLanguage(selected, selected);
    }
  });
}

const savedLanguage = localStorage.getItem("cfm-language");
setLanguage(
  savedLanguage && savedLanguage !== "auto" && translations[savedLanguage]
    ? savedLanguage
    : detectLanguage(),
  savedLanguage && translations[savedLanguage] ? savedLanguage : "auto"
);

function currencyFormat(amount, currency) {
  try {
    return new Intl.NumberFormat(
      language,
      {
        style: "currency",
        currency: currency || "GBP"
      }
    ).format(Number(amount));
  } catch {
    return `${currency || ""} ${Number(amount).toFixed(2)}`;
  }
}

function message(id, text, kind = "error") {
  const element = $(id);
  if (!element) return;

  element.textContent = text;
  element.className = `message ${kind}`;
}

async function api(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  let response;

  try {
    response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers
    });
  } catch {
    throw new Error(
      "Cannot reach the server. Check your internet connection and Render CORS settings."
    );
  }

  const data = await response.json().catch(() => ({
    error: "The server returned an invalid response."
  }));

  if (!response.ok) {
    if (response.status === 401) {
      token = "";
      profile = null;
      sessionStorage.removeItem("cfm-access-token");
    }

    throw new Error(data.error || `Request failed (${response.status})`);
  }

  return data;
}

function show(view) {
  ["authView", "customerView", "adminView"].forEach(id => {
    if ($(id)) $(id).classList.add("hidden");
  });

  if ($(view)) $(view).classList.remove("hidden");

  if ($("signout")) {
    $("signout").classList.toggle("hidden", view === "authView");
  }
}

function safeText(value) {
  return String(value ?? "");
}

async function boot() {
  if (!token) {
    show("authView");
    return;
  }

  try {
    const data = await api("/api/me");
    profile = data.profile;

    if (!profile || profile.status !== "active") {
      throw new Error("Your account is inactive.");
    }

    if (profile.role === "admin") {
      show("adminView");
      await loadAccounts();
    } else {
      show("customerView");
      await loadDashboard();
    }
  } catch {
    token = "";
    profile = null;
    sessionStorage.removeItem("cfm-access-token");
    show("authView");
  }
}

if ($("loginForm")) {
  $("loginForm").addEventListener("submit", async event => {
    event.preventDefault();
    message("authMessage", t("loading"), "");

    try {
      const data = await api("/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: $("email").value.trim(),
          password: $("password").value
        })
      });

      if (!data.access_token || !data.profile) {
        throw new Error("The server did not return a valid login session.");
      }

      token = data.access_token;
      profile = data.profile;
      sessionStorage.setItem("cfm-access-token", token);

      if (profile.status !== "active") {
        token = "";
        profile = null;
        sessionStorage.removeItem("cfm-access-token");
        throw new Error("This account is inactive.");
      }

      if (profile.role === "admin") {
        show("adminView");
        await loadAccounts();
      } else {
        show("customerView");
        await loadDashboard();
      }

      message("authMessage", "", "");
    } catch (error) {
      message("authMessage", error.message || t("invalidLogin"));
    }
  });
}

if ($("signout")) {
  $("signout").addEventListener("click", async () => {
    try {
      await api("/api/logout", {
        method: "POST",
        body: "{}"
      });
    } catch {}

    token = "";
    profile = null;
    sessionStorage.removeItem("cfm-access-token");
    show("authView");
  });
}

async function loadDashboard() {
  const data = await api("/api/me/account");
  const account = data.account;

  if (!account) throw new Error(t("notFound"));

  if ($("customerName")) $("customerName").textContent = account.full_name || t("hello");
  if ($("balance")) $("balance").textContent = currencyFormat(account.balance, account.currency);
  if ($("accountNumberValue")) $("accountNumberValue").textContent = account.account_number || "—";
  if ($("currencyLabel")) $("currencyLabel").textContent = account.currency || "GBP";

  const transactions = await api("/api/transactions");
  renderTransactions(transactions.transactions || []);
}

function renderTransactions(items) {
  const box = $("transactionList");
  if (!box) return;

  box.replaceChildren();

  if (!items.length) {
    const paragraph = document.createElement("p");
    paragraph.className = "muted";
    paragraph.textContent = t("noTransactions");
    box.append(paragraph);
    return;
  }

  items.slice(0, 5).forEach(transaction => {
    const row = document.createElement("div");
    row.className = "transaction";

    const incoming = transaction.direction === "in";
    const left = document.createElement("div");

    const title = document.createElement("b");
    title.textContent = transaction.description ||
      (incoming ? t("transferReceived") : t("transferSent"));

    const date = document.createElement("p");
    const parsedDate = new Date(transaction.created_at);
    date.textContent = Number.isNaN(parsedDate.getTime())
      ? "—"
      : parsedDate.toLocaleString(language);

    const details = document.createElement("p");
    details.textContent =
      `${transaction.counterparty || t("demoAccount")} · ${transaction.status || t("completed")}`;

    left.append(title, date, details);

    const right = document.createElement("div");
    right.className = incoming ? "amount-in" : "amount-out";
    right.textContent =
      `${incoming ? "+" : "−"}${currencyFormat(transaction.amount, transaction.currency)}`;

    row.append(left, right);
    box.append(row);
  });
}

if ($("transferForm")) {
  $("transferForm").addEventListener("submit", async event => {
    event.preventDefault();
    message("transferMessage", t("loading"), "");

    const amount = Number($("amount").value);

    if (!Number.isFinite(amount) || amount <= 0) {
      message("transferMessage", t("invalidAmount"));
      return;
    }

    try {
      const result = await api("/api/transfers", {
        method: "POST",
        body: JSON.stringify({
          receiver_name: $("receiverName").value.trim(),
          receiver_account: $("receiverAccount").value.trim(),
          receiver_country: $("receiverCountry").value,
          amount,
          description: $("description").value.trim()
        })
      });

      message("transferMessage", t("transferSuccess"), "success");
      $("transferForm").reset();

      await loadDashboard();

      lastReceipt = result.receipt;
      if (lastReceipt) showReceipt(lastReceipt);
    } catch (error) {
      message("transferMessage", error.message || t("networkError"));
    }
  });
}

function showReceipt(receipt) {
  if (!receipt || !$("receiptView") || !$("receiptDetails")) return;

  $("receiptView").classList.remove("hidden");

  const date = new Date(receipt.created_at);
  const rows = [
    [t("status"), t("receiptWarningShort")],
    [t("reference"), receipt.reference],
    [t("date"), Number.isNaN(date.getTime()) ? "—" : date.toLocaleString(language)],
    [t("sender"), receipt.sender_name],
    [t("senderAccount"), receipt.sender_account],
    [t("receiver"), receipt.receiver_name],
    [t("receiverAccount"), receipt.receiver_account],
    [t("receiverCountryReceipt"), receipt.receiver_country],
    [t("amount"), currencyFormat(receipt.amount, receipt.currency)],
    [t("receiptDescription"), receipt.description || "—"]
  ];

  $("receiptDetails").replaceChildren();

  rows.forEach(([label, value]) => {
    const row = document.createElement("div");
    row.className = "receipt-row";

    const labelElement = document.createElement("span");
    labelElement.textContent = label;

    const valueElement = document.createElement("strong");
    valueElement.textContent = safeText(value || "—");

    row.append(labelElement, valueElement);
    $("receiptDetails").append(row);
  });

  $("receiptView").scrollIntoView({ behavior: "smooth" });
}

if ($("printReceipt")) {
  $("printReceipt").addEventListener("click", () => window.print());
}

if ($("closeReceipt")) {
  $("closeReceipt").addEventListener("click", () => {
    $("receiptView")?.classList.add("hidden");
  });
}

if ($("copyAccount")) {
  $("copyAccount").addEventListener("click", async () => {
    const accountNumber = $("accountNumberValue")?.textContent || "";

    try {
      await navigator.clipboard.writeText(accountNumber);
      $("copyAccount").textContent = t("copied");
    } catch {
      $("copyAccount").textContent = accountNumber || t("copy");
    }
  });
}

if ($("createForm")) {
  $("createForm").addEventListener("submit", async event => {
    event.preventDefault();
    message("createMessage", t("loading"), "");

    const password = $("newPassword").value;
    const initialBalance = Number($("initialBalance").value);

    if (password.length < 12) {
      message("createMessage", t("passwordTooShort"));
      return;
    }

    if (!Number.isFinite(initialBalance) || initialBalance < 0) {
      message("createMessage", t("invalidDemoBalance"));
      return;
    }

    try {
      const data = await api("/api/admin/accounts", {
        method: "POST",
        body: JSON.stringify({
          full_name: $("newName").value.trim(),
          email: $("newEmail").value.trim(),
          phone: $("newPhone").value.trim(),
          country: $("newCountry").value.trim(),
          currency: $("newCurrency").value,
          password,
          initial_balance: initialBalance,
          opening_note: $("initialNote").value.trim()
        })
      });

      message(
        "createMessage",
        `${t("accountCreated")} Account: ${data.account?.account_number || "—"}`,
        "success"
      );

      $("createForm").reset();

      if ($("newCountry")) $("newCountry").value = "United Kingdom";
      if ($("initialBalance")) $("initialBalance").value = "0";

      await loadAccounts();
    } catch (error) {
      message("createMessage", error.message || t("networkError"));
    }
  });
}

if ($("creditForm")) {
  $("creditForm").addEventListener("submit", async event => {
    event.preventDefault();
    message("creditMessage", t("loading"), "");

    const amount = Number($("creditAmount").value);

    if (!Number.isFinite(amount) || amount <= 0) {
      message("creditMessage", t("invalidAmount"));
      return;
    }

    try {
      await api("/api/admin/credit", {
        method: "POST",
        body: JSON.stringify({
          account_number: $("creditAccount").value.trim(),
          amount,
          reason: $("creditReason").value.trim()
        })
      });

      message("creditMessage", t("creditSuccess"), "success");
      $("creditForm").reset();
      await loadAccounts();
    } catch (error) {
      message("creditMessage", error.message || t("networkError"));
    }
  });
}

if ($("refreshAccounts")) {
  $("refreshAccounts").addEventListener("click", () => loadAccounts());
}

async function loadAccounts() {
  const box = $("accountList");
  if (!box) return;

  box.textContent = t("loading");

  try {
    const data = await api("/api/admin/accounts");
    box.replaceChildren();

    if (!Array.isArray(data.accounts) || data.accounts.length === 0) {
      box.textContent = t("noAccounts");
      return;
    }

    data.accounts.forEach(accountData => {
      const item = document.createElement("div");
      item.className = "account-item";

      const name = document.createElement("b");
      name.textContent = accountData.full_name || t("demoCustomer");

      const account = document.createElement("div");
      account.textContent =
        `${accountData.account_number || ""} · ${accountData.email || ""}`;

      const balance = document.createElement("div");
      balance.textContent =
        `${currencyFormat(accountData.balance, accountData.currency)} · ${accountData.status || "active"}`;

      item.append(name, account, balance);
      box.append(item);
    });
  } catch (error) {
    box.textContent = error.message || t("networkError");
  }
}

boot();
