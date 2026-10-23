"use strict";

const translations = {
  en:{demoNotice:"SIMULATION ONLY — no real money, deposits, or banking services.",welcomeTitle:"Welcome to CFM International",loginSubtitle:"Sign in to your simulated account.",email:"Email address",password:"Password",login:"Sign in",signOut:"Sign out",customerDashboard:"CUSTOMER DASHBOARD",hello:"Hello",overview:"Here is your demo account overview.",availableBalance:"Available demo balance",accountNumber:"Account number",copy:"Copy",transferMoney:"Transfer simulated money",transferHelp:"Transfers work only between demo accounts in this project.",receiverName:"Receiver full name",receiverAccount:"Receiver account number",receiverCountry:"Receiver country",amount:"Amount",description:"Description (optional)",sendTransfer:"Make demo transfer",transactions:"Transactions",lastFive:"Latest five transactions",adminTitle:"Admin dashboard",adminSubtitle:"Manage fictional demo accounts and demo balances.",createAccount:"Create customer account",fullName:"Full name",phone:"Phone (optional)",country:"Country",currency:"Account currency",temporaryPassword:"Temporary password (min 12 characters)",initialBalance:"Initial simulated balance",initialNote:"Opening note / optional transaction description",create:"Create account",creditAccount:"Add simulated money",creditReason:"Reason / audit note",addMoney:"Add demo money",accounts:"Customer accounts",refresh:"Refresh list",receipt:"Transfer receipt",printReceipt:"Print receipt",close:"Close",invalidLogin:"Unable to sign in. Check your details.",loginRequired:"Please sign in again.",networkError:"A server error occurred. Try again.",transferSuccess:"Demo transfer completed successfully.",accountCreated:"Demo account created.",creditSuccess:"Demo balance credited.",noTransactions:"No transactions yet.",loading:"Loading…",notFound:"Account not found.",confirmDemo:"This is a simulation. No real money moved."},
  es:{demoNotice:"SOLO SIMULACIÓN: no hay dinero real ni servicios bancarios.",welcomeTitle:"Bienvenido a CFM International",loginSubtitle:"Inicia sesión en tu cuenta de demostración.",email:"Correo electrónico",password:"Contraseña",login:"Iniciar sesión",signOut:"Cerrar sesión",customerDashboard:"PANEL DEL CLIENTE",hello:"Hola",overview:"Resumen de tu cuenta de demostración.",availableBalance:"Saldo de demostración disponible",accountNumber:"Número de cuenta",copy:"Copiar",transferMoney:"Transferir dinero simulado",transferHelp:"Solo se permiten transferencias entre cuentas de demostración.",receiverName:"Nombre completo del destinatario",receiverAccount:"Número de cuenta del destinatario",receiverCountry:"País del destinatario",amount:"Importe",description:"Descripción (opcional)",sendTransfer:"Realizar transferencia de prueba",transactions:"Transacciones",lastFive:"Últimas cinco transacciones",adminTitle:"Panel de administración",adminSubtitle:"Gestionar cuentas y saldos ficticios.",createAccount:"Crear cuenta de cliente",fullName:"Nombre completo",phone:"Teléfono (opcional)",country:"País",currency:"Moneda de la cuenta",temporaryPassword:"Contraseña temporal (mínimo 12 caracteres)",initialBalance:"Saldo inicial simulado",initialNote:"Nota inicial / descripción opcional",create:"Crear cuenta",creditAccount:"Añadir dinero simulado",creditReason:"Motivo / nota de auditoría",addMoney:"Añadir dinero de prueba",accounts:"Cuentas de clientes",refresh:"Actualizar lista",receipt:"Recibo de transferencia",printReceipt:"Imprimir recibo",close:"Cerrar",invalidLogin:"No se pudo iniciar sesión.",loginRequired:"Inicia sesión de nuevo.",networkError:"Error del servidor. Inténtalo de nuevo.",transferSuccess:"Transferencia de prueba completada.",accountCreated:"Cuenta de demostración creada.",creditSuccess:"Saldo de demostración añadido.",noTransactions:"Aún no hay transacciones.",loading:"Cargando…",notFound:"Cuenta no encontrada.",confirmDemo:"Simulación: no se ha movido dinero real."},
  fr:{demoNotice:"SIMULATION UNIQUEMENT — aucun argent réel ni service bancaire.",welcomeTitle:"Bienvenue chez CFM International",loginSubtitle:"Connectez-vous à votre compte de démonstration.",email:"Adresse e-mail",password:"Mot de passe",login:"Se connecter",signOut:"Déconnexion",customerDashboard:"ESPACE CLIENT",hello:"Bonjour",overview:"Aperçu de votre compte de démonstration.",availableBalance:"Solde de démonstration disponible",accountNumber:"Numéro de compte",copy:"Copier",transferMoney:"Transférer de l'argent simulé",transferHelp:"Les virements fonctionnent uniquement entre comptes de démonstration.",receiverName:"Nom complet du bénéficiaire",receiverAccount:"Numéro de compte du bénéficiaire",receiverCountry:"Pays du bénéficiaire",amount:"Montant",description:"Description (facultatif)",sendTransfer:"Effectuer un virement de test",transactions:"Transactions",lastFive:"Cinq dernières transactions",adminTitle:"Tableau d'administration",adminSubtitle:"Gérer des comptes et soldes fictifs.",createAccount:"Créer un compte client",fullName:"Nom complet",phone:"Téléphone (facultatif)",country:"Pays",currency:"Devise du compte",temporaryPassword:"Mot de passe temporaire (12 caractères min.)",initialBalance:"Solde initial simulé",initialNote:"Note initiale / description facultative",create:"Créer le compte",creditAccount:"Ajouter de l'argent simulé",creditReason:"Motif / note d'audit",addMoney:"Ajouter de l'argent de démonstration",accounts:"Comptes clients",refresh:"Actualiser",receipt:"Reçu de virement",printReceipt:"Imprimer le reçu",close:"Fermer",invalidLogin:"Connexion impossible.",loginRequired:"Veuillez vous reconnecter.",networkError:"Erreur du serveur. Réessayez.",transferSuccess:"Virement de démonstration effectué.",accountCreated:"Compte de démonstration créé.",creditSuccess:"Solde de démonstration crédité.",noTransactions:"Aucune transaction pour le moment.",loading:"Chargement…",notFound:"Compte introuvable.",confirmDemo:"Simulation : aucun argent réel n'a été transféré."},
  de:{demoNotice:"NUR SIMULATION — kein echtes Geld und keine Bankdienstleistungen.",welcomeTitle:"Willkommen bei CFM International",loginSubtitle:"Melden Sie sich bei Ihrem Demokonto an.",email:"E-Mail-Adresse",password:"Passwort",login:"Anmelden",signOut:"Abmelden",customerDashboard:"KUNDENBEREICH",hello:"Hallo",overview:"Übersicht Ihres Demokontos.",availableBalance:"Verfügbares Demoguthaben",accountNumber:"Kontonummer",copy:"Kopieren",transferMoney:"Simuliertes Geld überweisen",transferHelp:"Überweisungen funktionieren nur zwischen Demokonten.",receiverName:"Vollständiger Empfängername",receiverAccount:"Empfängerkontonummer",receiverCountry:"Empfängerland",amount:"Betrag",description:"Beschreibung (optional)",sendTransfer:"Demoüberweisung ausführen",transactions:"Transaktionen",lastFive:"Letzte fünf Transaktionen",adminTitle:"Admin-Dashboard",adminSubtitle:"Fiktive Demo-Konten und Guthaben verwalten.",createAccount:"Kundenkonto erstellen",fullName:"Vollständiger Name",phone:"Telefon (optional)",country:"Land",currency:"Kontowährung",temporaryPassword:"Temporäres Passwort (mindestens 12 Zeichen)",initialBalance:"Simuliertes Anfangsguthaben",initialNote:"Eröffnungsnotiz / optionale Beschreibung",create:"Konto erstellen",creditAccount:"Simuliertes Geld hinzufügen",creditReason:"Grund / Prüfnotiz",addMoney:"Demoguthaben hinzufügen",accounts:"Kundenkonten",refresh:"Liste aktualisieren",receipt:"Überweisungsbeleg",printReceipt:"Beleg drucken",close:"Schließen",invalidLogin:"Anmeldung fehlgeschlagen.",loginRequired:"Bitte erneut anmelden.",networkError:"Serverfehler. Bitte erneut versuchen.",transferSuccess:"Demoüberweisung erfolgreich.",accountCreated:"Demokonto erstellt.",creditSuccess:"Demoguthaben gutgeschrieben.",noTransactions:"Noch keine Transaktionen.",loading:"Laden…",notFound:"Konto nicht gefunden.",confirmDemo:"Simulation: Es wurde kein echtes Geld bewegt."},
  pl:{demoNotice:"TYLKO SYMULACJA — bez prawdziwych pieniędzy i usług bankowych.",welcomeTitle:"Witamy w CFM International",loginSubtitle:"Zaloguj się na konto demonstracyjne.",email:"Adres e-mail",password:"Hasło",login:"Zaloguj się",signOut:"Wyloguj się",customerDashboard:"PANEL KLIENTA",hello:"Witaj",overview:"Podsumowanie konta demonstracyjnego.",availableBalance:"Dostępne saldo demonstracyjne",accountNumber:"Numer konta",copy:"Kopiuj",transferMoney:"Przelej symulowane środki",transferHelp:"Przelewy działają tylko między kontami demonstracyjnymi.",receiverName:"Pełne imię i nazwisko odbiorcy",receiverAccount:"Numer konta odbiorcy",receiverCountry:"Kraj odbiorcy",amount:"Kwota",description:"Opis (opcjonalnie)",sendTransfer:"Wykonaj przelew testowy",transactions:"Transakcje",lastFive:"Ostatnie pięć transakcji",adminTitle:"Panel administratora",adminSubtitle:"Zarządzaj fikcyjnymi kontami i saldami.",createAccount:"Utwórz konto klienta",fullName:"Imię i nazwisko",phone:"Telefon (opcjonalnie)",country:"Kraj",currency:"Waluta konta",temporaryPassword:"Hasło tymczasowe (min. 12 znaków)",initialBalance:"Początkowe saldo symulowane",initialNote:"Notatka początkowa / opis",create:"Utwórz konto",creditAccount:"Dodaj symulowane środki",creditReason:"Powód / notatka audytowa",addMoney:"Dodaj środki demo",accounts:"Konta klientów",refresh:"Odśwież listę",receipt:"Potwierdzenie przelewu",printReceipt:"Drukuj potwierdzenie",close:"Zamknij",invalidLogin:"Nie udało się zalogować.",loginRequired:"Zaloguj się ponownie.",networkError:"Błąd serwera. Spróbuj ponownie.",transferSuccess:"Przelew testowy zakończony.",accountCreated:"Utworzono konto demo.",creditSuccess:"Dodano saldo demo.",noTransactions:"Brak transakcji.",loading:"Ładowanie…",notFound:"Nie znaleziono konta.",confirmDemo:"Symulacja: nie przekazano prawdziwych pieniędzy."},
  pt:{demoNotice:"APENAS SIMULAÇÃO — sem dinheiro real ou serviços bancários.",welcomeTitle:"Bem-vindo ao CFM International",loginSubtitle:"Entre na sua conta de demonstração.",email:"E-mail",password:"Palavra-passe",login:"Entrar",signOut:"Sair",customerDashboard:"PAINEL DO CLIENTE",hello:"Olá",overview:"Resumo da sua conta de demonstração.",availableBalance:"Saldo de demonstração disponível",accountNumber:"Número da conta",copy:"Copiar",transferMoney:"Transferir dinheiro simulado",transferHelp:"As transferências funcionam apenas entre contas de demonstração.",receiverName:"Nome completo do destinatário",receiverAccount:"Número da conta do destinatário",receiverCountry:"País do destinatário",amount:"Montante",description:"Descrição (opcional)",sendTransfer:"Fazer transferência de teste",transactions:"Transações",lastFive:"Últimas cinco transações",adminTitle:"Painel de administração",adminSubtitle:"Gerir contas e saldos fictícios.",createAccount:"Criar conta de cliente",fullName:"Nome completo",phone:"Telefone (opcional)",country:"País",currency:"Moeda da conta",temporaryPassword:"Palavra-passe temporária (mínimo 12 caracteres)",initialBalance:"Saldo inicial simulado",initialNote:"Nota inicial / descrição opcional",create:"Criar conta",creditAccount:"Adicionar dinheiro simulado",creditReason:"Motivo / nota de auditoria",addMoney:"Adicionar saldo demo",accounts:"Contas de clientes",refresh:"Atualizar lista",receipt:"Recibo de transferência",printReceipt:"Imprimir recibo",close:"Fechar",invalidLogin:"Não foi possível iniciar sessão.",loginRequired:"Inicie sessão novamente.",networkError:"Erro do servidor. Tente novamente.",transferSuccess:"Transferência de teste concluída.",accountCreated:"Conta de demonstração criada.",creditSuccess:"Saldo de demonstração adicionado.",noTransactions:"Ainda não há transações.",loading:"A carregar…",notFound:"Conta não encontrada.",confirmDemo:"Simulação: não foi movimentado dinheiro real."},
  ar:{demoNotice:"للمحاكاة فقط — لا توجد أموال حقيقية أو خدمات مصرفية.",welcomeTitle:"مرحبًا بك في CFM International",loginSubtitle:"سجّل الدخول إلى حسابك التجريبي.",email:"البريد الإلكتروني",password:"كلمة المرور",login:"تسجيل الدخول",signOut:"تسجيل الخروج",customerDashboard:"لوحة العميل",hello:"مرحبًا",overview:"ملخص حسابك التجريبي.",availableBalance:"الرصيد التجريبي المتاح",accountNumber:"رقم الحساب",copy:"نسخ",transferMoney:"تحويل أموال تجريبية",transferHelp:"التحويلات متاحة بين الحسابات التجريبية فقط.",receiverName:"الاسم الكامل للمستلم",receiverAccount:"رقم حساب المستلم",receiverCountry:"بلد المستلم",amount:"المبلغ",description:"الوصف (اختياري)",sendTransfer:"تنفيذ تحويل تجريبي",transactions:"المعاملات",lastFive:"آخر خمس معاملات",adminTitle:"لوحة الإدارة",adminSubtitle:"إدارة الحسابات والأرصدة التجريبية.",createAccount:"إنشاء حساب عميل",fullName:"الاسم الكامل",phone:"الهاتف (اختياري)",country:"البلد",currency:"عملة الحساب",temporaryPassword:"كلمة مرور مؤقتة (12 حرفًا على الأقل)",initialBalance:"الرصيد التجريبي الأولي",initialNote:"ملاحظة افتتاحية / وصف اختياري",create:"إنشاء الحساب",creditAccount:"إضافة أموال تجريبية",creditReason:"السبب / ملاحظة التدقيق",addMoney:"إضافة رصيد تجريبي",accounts:"حسابات العملاء",refresh:"تحديث القائمة",receipt:"إيصال التحويل",printReceipt:"طباعة الإيصال",close:"إغلاق",invalidLogin:"تعذر تسجيل الدخول.",loginRequired:"يرجى تسجيل الدخول مجددًا.",networkError:"حدث خطأ في الخادم. حاول مجددًا.",transferSuccess:"اكتمل التحويل التجريبي.",accountCreated:"تم إنشاء الحساب التجريبي.",creditSuccess:"تمت إضافة الرصيد التجريبي.",noTransactions:"لا توجد معاملات بعد.",loading:"جارٍ التحميل…",notFound:"لم يتم العثور على الحساب.",confirmDemo:"محاكاة: لم يتم تحويل أي أموال حقيقية."},
  ur:{demoNotice:"صرف مشق کے لیے — کوئی حقیقی رقم یا بینکنگ خدمات نہیں۔",welcomeTitle:"CFM International میں خوش آمدید",loginSubtitle:"اپنے ڈیمو اکاؤنٹ میں لاگ ان کریں۔",email:"ای میل",password:"پاس ورڈ",login:"لاگ ان",signOut:"لاگ آؤٹ",customerDashboard:"کسٹمر ڈیش بورڈ",hello:"خوش آمدید",overview:"آپ کے ڈیمو اکاؤنٹ کا خلاصہ۔",availableBalance:"دستیاب ڈیمو بیلنس",accountNumber:"اکاؤنٹ نمبر",copy:"کاپی",transferMoney:"ڈیمو رقم منتقل کریں",transferHelp:"منتقلی صرف ڈیمو اکاؤنٹس کے درمیان ہوتی ہے۔",receiverName:"وصول کنندہ کا پورا نام",receiverAccount:"وصول کنندہ کا اکاؤنٹ نمبر",receiverCountry:"وصول کنندہ کا ملک",amount:"رقم",description:"تفصیل (اختیاری)",sendTransfer:"ڈیمو ٹرانسفر کریں",transactions:"لین دین",lastFive:"آخری پانچ لین دین",adminTitle:"ایڈمن ڈیش بورڈ",adminSubtitle:"فرضی ڈیمو اکاؤنٹس اور بیلنس کا انتظام۔",createAccount:"کسٹمر اکاؤنٹ بنائیں",fullName:"پورا نام",phone:"فون (اختیاری)",country:"ملک",currency:"اکاؤنٹ کی کرنسی",temporaryPassword:"عارضی پاس ورڈ (کم از کم 12 حروف)",initialBalance:"ابتدائی ڈیمو بیلنس",initialNote:"ابتدائی نوٹ / اختیاری تفصیل",create:"اکاؤنٹ بنائیں",creditAccount:"ڈیمو رقم شامل کریں",creditReason:"وجہ / آڈٹ نوٹ",addMoney:"ڈیمو رقم شامل کریں",accounts:"کسٹمر اکاؤنٹس",refresh:"فہرست تازہ کریں",receipt:"ٹرانسفر رسید",printReceipt:"رسید پرنٹ کریں",close:"بند کریں",invalidLogin:"لاگ ان نہیں ہو سکا۔",loginRequired:"دوبارہ لاگ ان کریں۔",networkError:"سرور کی خرابی۔ دوبارہ کوشش کریں۔",transferSuccess:"ڈیمو ٹرانسفر مکمل ہوگیا۔",accountCreated:"ڈیمو اکاؤنٹ بن گیا۔",creditSuccess:"ڈیمو بیلنس شامل ہوگیا۔",noTransactions:"ابھی کوئی لین دین نہیں۔",loading:"لوڈ ہو رہا ہے…",notFound:"اکاؤنٹ نہیں ملا۔",confirmDemo:"مشق: کوئی حقیقی رقم منتقل نہیں ہوئی۔"}
};

let language = "en";
const $ = id => document.getElementById(id);
function t(key){ return (translations[language] && translations[language][key]) || translations.en[key] || key; }
function setLanguage(code){
  language = translations[code] ? code : "en";
  document.documentElement.lang = language;
  document.documentElement.dir = ["ar","ur"].includes(language) ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $("language").value = code;
}
function detectLanguage(){
  const saved = localStorage.getItem("cfm-language");
  if(saved && saved !== "auto") return saved;
  const prefs = navigator.languages || [navigator.language || "en"];
  for(const p of prefs){
    const code = p.toLowerCase().split("-")[0];
    if(translations[code]) return code;
  }
  return "en";
}
$("language").addEventListener("change", () => {
  const value = $("language").value;
  localStorage.setItem("cfm-language", value);
  setLanguage(value === "auto" ? detectLanguage() : value);
});
setLanguage(detectLanguage());

let token = sessionStorage.getItem("cfm-access-token") || "";
let profile = null;
let lastReceipt = null;
const currencyFormat = (amount, currency) => {
  try { return new Intl.NumberFormat(undefined,{style:"currency",currency:currency||"GBP"}).format(Number(amount)); }
  catch { return `${currency||""} ${Number(amount).toFixed(2)}`; }
};
function message(id, text, kind="error"){
  const el=$(id); el.textContent=text; el.className=`message ${kind}`;
}
async function api(path, options={}){
  const headers={"Content-Type":"application/json",...(options.headers||{})};
  if(token) headers.Authorization=`Bearer ${token}`;
  const response=await fetch(path,{...options,headers});
  const data=await response.json().catch(()=>({error:"Unexpected server response"}));
  if(!response.ok) throw new Error(data.error || `Request failed (${response.status})`);
  return data;
}
function show(view){
  ["authView","customerView","adminView"].forEach(id=>$(id).classList.add("hidden"));
  $(view).classList.remove("hidden");
  $("signout").classList.toggle("hidden",view==="authView");
}
function escapeText(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
async function boot(){
  if(!token){show("authView");return;}
  try{
    const data=await api("/api/me"); profile=data.profile;
    if(profile.role==="admin"){show("adminView");await loadAccounts();}
    else {show("customerView");await loadDashboard();}
  }catch{token="";sessionStorage.removeItem("cfm-access-token");show("authView");}
}
$("loginForm").addEventListener("submit",async e=>{
  e.preventDefault();message("authMessage",t("loading"),"");
  try{
    const data=await api("/api/login",{method:"POST",body:JSON.stringify({email:$("email").value.trim(),password:$("password").value})});
    token=data.access_token;sessionStorage.setItem("cfm-access-token",token);profile=data.profile;
    $("authMessage").textContent="";
    if(profile.role==="admin"){show("adminView");await loadAccounts();}
    else{show("customerView");await loadDashboard();}
  }catch(err){message("authMessage",err.message||t("invalidLogin"));}
});
$("signout").addEventListener("click",async()=>{
  try{await api("/api/logout",{method:"POST",body:"{}"});}catch{}
  token="";profile=null;sessionStorage.removeItem("cfm-access-token");show("authView");
});
async function loadDashboard(){
  const data=await api("/api/me/account");const a=data.account;
  $("customerName").textContent=a.full_name;$("balance").textContent=currencyFormat(a.balance,a.currency);
  $("accountNumberValue").textContent=a.account_number;$("currencyLabel").textContent=a.currency;
  const list=await api("/api/transactions");
  renderTransactions(list.transactions||[]);
}
function renderTransactions(items){
  const box=$("transactionList");box.replaceChildren();
  if(!items.length){box.innerHTML=`<p class="muted">${escapeText(t("noTransactions"))}</p>`;return;}
  items.slice(0,5).forEach(tx=>{
    const row=document.createElement("div");row.className="transaction";
    const incoming=tx.direction==="in";
    const left=document.createElement("div");
    left.innerHTML=`<b>${escapeText(tx.description|| (incoming?"Transfer received":"Transfer sent"))}</b><p>${escapeText(new Date(tx.created_at).toLocaleString())}</p><p>${escapeText(tx.counterparty||"Demo account")} · ${escapeText(tx.status||"completed")}</p>`;
    const right=document.createElement("div");right.className=incoming?"amount-in":"amount-out";
    right.textContent=`${incoming?"+":"−"}${currencyFormat(tx.amount,tx.currency)}`;
    row.append(left,right);box.append(row);
  });
}
$("transferForm").addEventListener("submit",async e=>{
  e.preventDefault();message("transferMessage",t("loading"),"");
  const amount=Number($("amount").value);
  if(!Number.isFinite(amount)||amount<=0){message("transferMessage","Enter a valid positive amount.");return;}
  try{
    const result=await api("/api/transfers",{method:"POST",body:JSON.stringify({
      receiver_name:$("receiverName").value.trim(),
      receiver_account:$("receiverAccount").value.trim(),
      receiver_country:$("receiverCountry").value,
      amount,
      description:$("description").value.trim()
    })});
    message("transferMessage",t("transferSuccess"),"success");
    $("transferForm").reset();
    await loadDashboard();
    lastReceipt=result.receipt;showReceipt(result.receipt);
  }catch(err){message("transferMessage",err.message||t("networkError"));}
});
function showReceipt(r){
  $("receiptView").classList.remove("hidden");
  const rows=[
    ["Status","SIMULATION ONLY — NOT A PAYMENT"],
    ["Reference",r.reference],["Date",new Date(r.created_at).toLocaleString()],
    ["Sender",r.sender_name],["Sender account",r.sender_account],
    ["Receiver",r.receiver_name],["Receiver account",r.receiver_account],
    ["Receiver country",r.receiver_country],["Amount",currencyFormat(r.amount,r.currency)],
    ["Description",r.description||"—"]
  ];
  $("receiptDetails").replaceChildren();
  rows.forEach(([label,value])=>{
    const row=document.createElement("div");row.className="receipt-row";
    const a=document.createElement("span"),b=document.createElement("strong");
    a.textContent=label;b.textContent=String(value??"—");row.append(a,b);$("receiptDetails").append(row);
  });
  $("receiptView").scrollIntoView({behavior:"smooth"});
}
$("printReceipt").addEventListener("click",()=>window.print());
$("closeReceipt").addEventListener("click",()=>$("receiptView").classList.add("hidden"));
$("copyAccount").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText($("accountNumberValue").textContent);$("copyAccount").textContent="Copied";}
  catch{$("copyAccount").textContent=$("accountNumberValue").textContent;}
});
$("createForm").addEventListener("submit",async e=>{
  e.preventDefault();message("createMessage",t("loading"),"");
  try{
    const data=await api("/api/admin/accounts",{method:"POST",body:JSON.stringify({
      full_name:$("newName").value.trim(),email:$("newEmail").value.trim(),
      phone:$("newPhone").value.trim(),country:$("newCountry").value.trim(),
      currency:$("newCurrency").value,password:$("newPassword").value,
      initial_balance:Number($("initialBalance").value),
      opening_note:$("initialNote").value.trim()
    })});
    message("createMessage",`${t("accountCreated")} Account: ${data.account.account_number}`,"success");
    $("createForm").reset();$("newCountry").value="United Kingdom";$("initialBalance").value="0";
    await loadAccounts();
  }catch(err){message("createMessage",err.message||t("networkError"));}
});
$("creditForm").addEventListener("submit",async e=>{
  e.preventDefault();message("creditMessage",t("loading"),"");
  try{
    await api("/api/admin/credit",{method:"POST",body:JSON.stringify({
      account_number:$("creditAccount").value.trim(),amount:Number($("creditAmount").value),
      reason:$("creditReason").value.trim()
    })});
    message("creditMessage",t("creditSuccess"),"success");$("creditForm").reset();await loadAccounts();
  }catch(err){message("creditMessage",err.message||t("networkError"));}
});
$("refreshAccounts").addEventListener("click",loadAccounts);
async function loadAccounts(){
  const box=$("accountList");box.textContent=t("loading");
  try{
    const data=await api("/api/admin/accounts");box.replaceChildren();
    if(!data.accounts.length){box.textContent="No demo accounts yet.";return;}
    data.accounts.forEach(a=>{
      const item=document.createElement("div");item.className="account-item";
      item.innerHTML=`<b>${escapeText(a.full_name)}</b><br><span>${escapeText(a.account_number)} · ${escapeText(a.email)}</span><br><span>${escapeText(currencyFormat(a.balance,a.currency))} · ${escapeText(a.status)}</span>`;
      box.append(item);
    });
  }catch(err){box.textContent=err.message;}
}
boot();
