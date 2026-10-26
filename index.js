"use strict";

const API_BASE = "https://cfm-international-bank-in.onrender.com";
const $ = id => document.getElementById(id);

let token = sessionStorage.getItem("cfm-access-token") || "";
let profile = null;
let selectedPhotoDataUrl = null;
let currentLang = "en";

/* ====================== TRANSLATIONS ====================== */
const translations = {
  en: {
    welcome: "Welcome back",
    loginSubtitle: "Sign in to your CFM account",
    email: "Email",
    password: "Password",
    signIn: "Sign in",
    accountHolder: "Account Holder",
    accounts: "Accounts",
    cards: "Cards",
    transfer: "Transfer",
    deposit: "Deposit",
    trade: "Trade",
    crypto: "Crypto",
    transactions: "Transactions",
    seeAll: "See all",
    netWorth: "Net Worth",
    currentValue: "Current value",
    cashBalance: "Cash balance",
    overview: "Overview",
    settings: "Settings",
    sendMoney: "Send money",
    receiverName: "Receiver full name",
    receiverAccount: "Account number",
    receiverCountry: "Country",
    amount: "Amount",
    description: "Description (optional)",
    send: "Send",
    cancel: "Cancel",
    receipt: "Transfer receipt",
    print: "Print",
    close: "Close",
    copy: "Copy",
    copied: "Copied",
    noTransactions: "No transactions yet",
    processing: "Processing…",
    transferSuccess: "Transfer completed",
    transferFailed: "Transfer failed",
    invalidAmount: "Enter a valid amount",
    status: "Status",
    reference: "Reference",
    date: "Date",
    sender: "Sender",
    senderAccount: "Sender account",
    receiver: "Receiver",
    country: "Country"
  },
  es: {
    welcome: "Bienvenido de nuevo",
    loginSubtitle: "Inicia sesión en tu cuenta CFM",
    email: "Correo electrónico",
    password: "Contraseña",
    signIn: "Iniciar sesión",
    accountHolder: "Titular de la cuenta",
    accounts: "Cuentas",
    cards: "Tarjetas",
    transfer: "Transferir",
    deposit: "Depósito",
    trade: "Comercio",
    crypto: "Cripto",
    transactions: "Transacciones",
    seeAll: "Ver todo",
    netWorth: "Patrimonio neto",
    currentValue: "Valor actual",
    cashBalance: "Saldo en efectivo",
    overview: "Resumen",
    settings: "Ajustes",
    sendMoney: "Enviar dinero",
    receiverName: "Nombre completo del receptor",
    receiverAccount: "Número de cuenta",
    receiverCountry: "País",
    amount: "Monto",
    description: "Descripción (opcional)",
    send: "Enviar",
    cancel: "Cancelar",
    receipt: "Recibo de transferencia",
    print: "Imprimir",
    close: "Cerrar",
    copy: "Copiar",
    copied: "Copiado",
    noTransactions: "Aún no hay transacciones",
    processing: "Procesando…",
    transferSuccess: "Transferencia completada",
    transferFailed: "Transferencia fallida",
    invalidAmount: "Ingrese un monto válido",
    status: "Estado",
    reference: "Referencia",
    date: "Fecha",
    sender: "Remitente",
    senderAccount: "Cuenta del remitente",
    receiver: "Receptor",
    country: "País"
  },
  th: {
    welcome: "ยินดีต้อนรับกลับ",
    loginSubtitle: "เข้าสู่ระบบบัญชี CFM ของคุณ",
    email: "อีเมล",
    password: "รหัสผ่าน",
    signIn: "เข้าสู่ระบบ",
    accountHolder: "เจ้าของบัญชี",
    accounts: "บัญชี",
    cards: "บัตร",
    transfer: "โอน",
    deposit: "ฝาก",
    trade: "เทรด",
    crypto: "คริปโต",
    transactions: "ธุรกรรม",
    seeAll: "ดูทั้งหมด",
    netWorth: "มูลค่าสุทธิ",
    currentValue: "มูลค่าปัจจุบัน",
    cashBalance: "ยอดเงินสด",
    overview: "ภาพรวม",
    settings: "ตั้งค่า",
    sendMoney: "ส่งเงิน",
    receiverName: "ชื่อเต็มผู้รับ",
    receiverAccount: "เลขบัญชี",
    receiverCountry: "ประเทศ",
    amount: "จำนวนเงิน",
    description: "รายละเอียด (ไม่บังคับ)",
    send: "ส่ง",
    cancel: "ยกเลิก",
    receipt: "ใบเสร็จการโอน",
    print: "พิมพ์",
    close: "ปิด",
    copy: "คัดลอก",
    copied: "คัดลอกแล้ว",
    noTransactions: "ยังไม่มีธุรกรรม",
    processing: "กำลังดำเนินการ…",
    transferSuccess: "โอนสำเร็จ",
    transferFailed: "โอนไม่สำเร็จ",
    invalidAmount: "กรุณากรอกจำนวนเงินที่ถูกต้อง",
    status: "สถานะ",
    reference: "เลขอ้างอิง",
    date: "วันที่",
    sender: "ผู้ส่ง",
    senderAccount: "บัญชีผู้ส่ง",
    receiver: "ผู้รับ",
    country: "ประเทศ"
  },
  id: {
    welcome: "Selamat datang kembali",
    loginSubtitle: "Masuk ke akun CFM Anda",
    email: "Email",
    password: "Kata sandi",
    signIn: "Masuk",
    accountHolder: "Pemilik Rekening",
    accounts: "Rekening",
    cards: "Kartu",
    transfer: "Transfer",
    deposit: "Deposit",
    trade: "Perdagangan",
    crypto: "Kripto",
    transactions: "Transaksi",
    seeAll: "Lihat semua",
    netWorth: "Kekayaan Bersih",
    currentValue: "Nilai saat ini",
    cashBalance: "Saldo tunai",
    overview: "Ringkasan",
    settings: "Pengaturan",
    sendMoney: "Kirim uang",
    receiverName: "Nama lengkap penerima",
    receiverAccount: "Nomor rekening",
    receiverCountry: "Negara",
    amount: "Jumlah",
    description: "Deskripsi (opsional)",
    send: "Kirim",
    cancel: "Batal",
    receipt: "Bukti transfer",
    print: "Cetak",
    close: "Tutup",
    copy: "Salin",
    copied: "Disalin",
    noTransactions: "Belum ada transaksi",
    processing: "Memproses…",
    transferSuccess: "Transfer berhasil",
    transferFailed: "Transfer gagal",
    invalidAmount: "Masukkan jumlah yang valid",
    status: "Status",
    reference: "Referensi",
    date: "Tanggal",
    sender: "Pengirim",
    senderAccount: "Rekening pengirim",
    receiver: "Penerima",
    country: "Negara"
  },
  ms: {
    welcome: "Selamat kembali",
    loginSubtitle: "Log masuk ke akaun CFM anda",
    email: "E-mel",
    password: "Kata laluan",
    signIn: "Log masuk",
    accountHolder: "Pemegang Akaun",
    accounts: "Akaun",
    cards: "Kad",
    transfer: "Pindahan",
    deposit: "Deposit",
    trade: "Perdagangan",
    crypto: "Kripto",
    transactions: "Transaksi",
    seeAll: "Lihat semua",
    netWorth: "Nilai Bersih",
    currentValue: "Nilai semasa",
    cashBalance: "Baki tunai",
    overview: "Gambaran keseluruhan",
    settings: "Tetapan",
    sendMoney: "Hantar wang",
    receiverName: "Nama penuh penerima",
    receiverAccount: "Nombor akaun",
    receiverCountry: "Negara",
    amount: "Jumlah",
    description: "Penerangan (pilihan)",
    send: "Hantar",
    cancel: "Batal",
    receipt: "Resit pindahan",
    print: "Cetak",
    close: "Tutup",
    copy: "Salin",
    copied: "Disalin",
    noTransactions: "Tiada transaksi lagi",
    processing: "Memproses…",
    transferSuccess: "Pindahan berjaya",
    transferFailed: "Pindahan gagal",
    invalidAmount: "Masukkan jumlah yang sah",
    status: "Status",
    reference: "Rujukan",
    date: "Tarikh",
    sender: "Penghantar",
    senderAccount: "Akaun penghantar",
    receiver: "Penerima",
    country: "Negara"
  },
  ru: {
    welcome: "С возвращением",
    loginSubtitle: "Войдите в свой аккаунт CFM",
    email: "Электронная почта",
    password: "Пароль",
    signIn: "Войти",
    accountHolder: "Владелец счета",
    accounts: "Счета",
    cards: "Карты",
    transfer: "Перевод",
    deposit: "Депозит",
    trade: "Торговля",
    crypto: "Крипто",
    transactions: "Транзакции",
    seeAll: "Смотреть все",
    netWorth: "Чистая стоимость",
    currentValue: "Текущая стоимость",
    cashBalance: "Денежный баланс",
    overview: "Обзор",
    settings: "Настройки",
    sendMoney: "Отправить деньги",
    receiverName: "Полное имя получателя",
    receiverAccount: "Номер счета",
    receiverCountry: "Страна",
    amount: "Сумма",
    description: "Описание (необязательно)",
    send: "Отправить",
    cancel: "Отмена",
    receipt: "Квитанция о переводе",
    print: "Печать",
    close: "Закрыть",
    copy: "Копировать",
    copied: "Скопировано",
    noTransactions: "Транзакций пока нет",
    processing: "Обработка…",
    transferSuccess: "Перевод выполнен",
    transferFailed: "Перевод не удался",
    invalidAmount: "Введите корректную сумму",
    status: "Статус",
    reference: "Ссылка",
    date: "Дата",
    sender: "Отправитель",
    senderAccount: "Счет отправителя",
    receiver: "Получатель",
    country: "Страна"
  }
};

function t(key) {
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

function detectLanguage() {
  const lang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("th")) return "th";
  if (lang.startsWith("id")) return "id";
  if (lang.startsWith("ms") || lang.startsWith("my")) return "ms";
  if (lang.startsWith("ru")) return "ru";
  return "en";
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });
}

/* ====================== HELPERS ====================== */
function currencyFormat(amount, currency = "EUR") {
  try {
    return new Intl.NumberFormat(currentLang, {
      style: "currency",
      currency: currency || "EUR",
      minimumFractionDigits: 2
    }).format(Number(amount));
  } catch {
    return `€${Number(amount).toFixed(2)}`;
  }
}

function message(id, text, kind = "error") {
  const el = $(id);
  if (!el) return;
  el.textContent = text || "";
  el.className = `message ${kind}`;
}

async function api(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, { ...options, headers });
  } catch {
    throw new Error("Cannot reach the server.");
  }

  const data = await response.json().catch(() => ({ error: "Invalid response" }));

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
}

/* ====================== BOOT ====================== */
async function boot() {
  currentLang = detectLanguage();
  applyTranslations();

  if (!token) {
    show("authView");
    return;
  }
  try {
    const data = await api("/api/me");
    profile = data.profile;
    if (!profile || profile.status !== "active") throw new Error("Account inactive");

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

/* ====================== LOGIN ====================== */
if ($("loginForm")) {
  $("loginForm").addEventListener("submit", async e => {
    e.preventDefault();
    message("authMessage", t("processing"), "");
    try {
      const data = await api("/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: $("email").value.trim(),
          password: $("password").value
        })
      });

      token = data.access_token;
      profile = data.profile;
      sessionStorage.setItem("cfm-access-token", token);

      if (profile.role === "admin") {
        show("adminView");
        await loadAccounts();
      } else {
        show("customerView");
        await loadDashboard();
      }
      message("authMessage", "", "");
    } catch (err) {
      message("authMessage", err.message || "Unable to sign in");
    }
  });
}

/* ====================== SIGN OUT ====================== */
async function doSignOut() {
  try { await api("/api/logout", { method: "POST", body: "{}" }); } catch {}
  token = "";
  profile = null;
  sessionStorage.removeItem("cfm-access-token");
  show("authView");
}
if ($("signOutBtn")) $("signOutBtn").addEventListener("click", doSignOut);
if ($("adminSignOut")) $("adminSignOut").addEventListener("click", doSignOut);

/* ====================== PHOTO UPLOAD ====================== */
const photoInput = $("ownerPhoto");
const photoPreview = $("photoPreview");

if (photoPreview && photoInput) {
  photoPreview.addEventListener("click", () => photoInput.click());
  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      selectedPhotoDataUrl = e.target.result;
      photoPreview.innerHTML = `<img src="${selectedPhotoDataUrl}" alt="Owner photo">`;
      photoPreview.classList.add("has-image");
    };
    reader.readAsDataURL(file);
  });
}

/* ====================== DASHBOARD ====================== */
async function loadDashboard() {
  const data = await api("/api/me/account");
  const account = data.account;
  if (!account) throw new Error("Account not found");

  const name = account.full_name || "Customer";

  // Show owner name
  if ($("customerName")) $("customerName").textContent = name;

  // Avatar
  if (account.avatar_url) {
    $("customerPhoto").src = account.avatar_url;
    $("customerPhoto").classList.remove("hidden");
    $("customerInitial").classList.add("hidden");
  } else {
    $("customerPhoto").classList.add("hidden");
    $("customerInitial").classList.remove("hidden");
    $("customerInitial").textContent = name.charAt(0).toUpperCase();
  }

  const bal = currencyFormat(account.balance, account.currency);
  if ($("balance")) $("balance").textContent = bal;
  if ($("netWorth")) $("netWorth").textContent = bal;
  if ($("cashBalance")) $("cashBalance").textContent = bal;
  if ($("accountNumberValue")) $("accountNumberValue").textContent = account.account_number || "—";
  if ($("accountCurrencyLabel")) {
    $("accountCurrencyLabel").textContent = `${account.currency || "USD"} Account`;
  }

  const txData = await api("/api/transactions");
  renderTransactions(txData.transactions || []);
}

function renderTransactions(items) {
  const box = $("transactionList");
  if (!box) return;
  box.replaceChildren();

  if (!items.length) {
    const p = document.createElement("p");
    p.className = "muted";
    p.style.padding = "12px 0";
    p.textContent = t("noTransactions");
    box.append(p);
    return;
  }

  items.slice(0, 6).forEach(tx => {
    const incoming = tx.direction === "in";
    const row = document.createElement("div");
    row.className = "tx-item";

    const flag = document.createElement("div");
    flag.className = "tx-flag";
    flag.textContent = incoming ? "🇺🇸" : "🇬🇧";

    const info = document.createElement("div");
    info.className = "tx-info";
    const title = document.createElement("div");
    title.className = "tx-title";
    title.textContent = tx.description || (incoming ? "Received" : "Sent");
    const time = document.createElement("div");
    time.className = "tx-time";
    const d = new Date(tx.created_at);
    time.textContent = Number.isNaN(d.getTime()) ? "" : d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    info.append(title, time);

    const amount = document.createElement("div");
    amount.className = `tx-amount ${incoming ? "positive" : ""}`;
    amount.textContent = `${incoming ? "+" : "−"}${currencyFormat(tx.amount, tx.currency)}`;

    row.append(flag, info, amount);
    box.append(row);
  });
}

/* ====================== COPY ACCOUNT ====================== */
if ($("copyAccount")) {
  $("copyAccount").addEventListener("click", async () => {
    const num = $("accountNumberValue")?.textContent || "";
    try {
      await navigator.clipboard.writeText(num);
      $("copyAccount").textContent = t("copied");
      setTimeout(() => $("copyAccount").textContent = t("copy"), 1500);
    } catch {}
  });
}

/* ====================== TRANSFER ====================== */
function openTransfer() {
  $("transferSheet")?.classList.remove("hidden");
}
function closeTransfer() {
  $("transferSheet")?.classList.add("hidden");
  message("transferMessage", "", "");
}

if ($("transferBtn")) $("transferBtn").addEventListener("click", openTransfer);
if ($("depositBtn")) $("depositBtn").addEventListener("click", () => alert("Deposit coming soon"));
if ($("tradeBtn")) $("tradeBtn").addEventListener("click", () => alert("Trade coming soon"));
if ($("cryptoBtn")) $("cryptoBtn").addEventListener("click", () => alert("Crypto coming soon"));
if ($("closeTransfer")) $("closeTransfer").addEventListener("click", closeTransfer);

if ($("transferForm")) {
  $("transferForm").addEventListener("submit", async e => {
    e.preventDefault();
    message("transferMessage", t("processing"), "");

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

      if (result.receipt) showReceipt(result.receipt);
      closeTransfer();
    } catch (err) {
      message("transferMessage", err.message || t("transferFailed"));
    }
  });
}

/* ====================== RECEIPT (Sender = Owner Name) ====================== */
function showReceipt(receipt) {
  if (!receipt || !$("receiptView") || !$("receiptDetails")) return;
  $("receiptView").classList.remove("hidden");

  // Use the account owner name
  const ownerName = $("customerName")?.textContent || receipt.sender_name || "Account Owner";

  const date = new Date(receipt.created_at);
  const rows = [
    [t("status"), "Completed"],
    [t("reference"), receipt.reference],
    [t("date"), Number.isNaN(date.getTime()) ? "—" : date.toLocaleString()],
    [t("sender"), ownerName],
    [t("senderAccount"), receipt.sender_account],
    [t("receiver"), receipt.receiver_name],
    [t("receiverAccount"), receipt.receiver_account],
    [t("country"), receipt.receiver_country],
    [t("amount"), currencyFormat(receipt.amount, receipt.currency)],
    [t("description"), receipt.description || "—"]
  ];

  $("receiptDetails").replaceChildren();
  rows.forEach(([label, value]) => {
    const row = document.createElement("div");
    row.className = "receipt-row";
    const l = document.createElement("span");
    l.textContent = label;
    const v = document.createElement("strong");
    v.textContent = value || "—";
    row.append(l, v);
    $("receiptDetails").append(row);
  });
}

if ($("printReceipt")) $("printReceipt").addEventListener("click", () => window.print());
if ($("closeReceipt")) $("closeReceipt").addEventListener("click", () => {
  $("receiptView")?.classList.add("hidden");
});

/* ====================== ADMIN ====================== */
if ($("createForm")) {
  $("createForm").addEventListener("submit", async e => {
    e.preventDefault();
    message("createMessage", "Creating…", "");

    const password = $("newPassword").value;
    const initialBalance = Number($("initialBalance").value);

    if (password.length < 6) {
      message("createMessage", "Password must be at least 6 characters");
      return;
    }

    try {
      const payload = {
        full_name: $("newName").value.trim(),
        email: $("newEmail").value.trim(),
        phone: $("newPhone").value.trim(),
        country: $("newCountry").value.trim(),
        currency: $("newCurrency").value,
        password,
        initial_balance: initialBalance,
        opening_note: "Opening balance"
      };

      if (selectedPhotoDataUrl) {
        payload.avatar = selectedPhotoDataUrl;
      }

      const data = await api("/api/admin/accounts", {
        method: "POST",
        body: JSON.stringify(payload)
      });

      message("createMessage", `Account created: ${data.account?.account_number || "—"}`, "success");

      $("createForm").reset();
      selectedPhotoDataUrl = null;
      if (photoPreview) {
        photoPreview.innerHTML = "<span>Click to upload photo</span>";
        photoPreview.classList.remove("has-image");
      }
      if ($("newCountry")) $("newCountry").value = "United Kingdom";
      if ($("initialBalance")) $("initialBalance").value = "0";

      await loadAccounts();
    } catch (err) {
      message("createMessage", err.message || "Failed to create account");
    }
  });
}

if ($("creditForm")) {
  $("creditForm").addEventListener("submit", async e => {
    e.preventDefault();
    message("creditMessage", "Processing…", "");
    const amount = Number($("creditAmount").value);
    if (!Number.isFinite(amount) || amount <= 0) {
      message("creditMessage", "Enter a valid amount");
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
      message("creditMessage", "Balance credited", "success");
      $("creditForm").reset();
      await loadAccounts();
    } catch (err) {
      message("creditMessage", err.message || "Credit failed");
    }
  });
}

if ($("refreshAccounts")) $("refreshAccounts").addEventListener("click", loadAccounts);

async function loadAccounts() {
  const box = $("accountList");
  if (!box) return;
  box.textContent = "Loading…";
  try {
    const data = await api("/api/admin/accounts");
    box.replaceChildren();
    if (!data.accounts?.length) {
      box.textContent = "No accounts yet";
      return;
    }
    data.accounts.forEach(acc => {
      const item = document.createElement("div");
      item.className = "account-item";
      item.innerHTML = `
        <b>${acc.full_name || "Customer"}</b><br>
        ${acc.account_number || ""} · ${acc.email || ""}<br>
        ${currencyFormat(acc.balance, acc.currency)} · ${acc.status || "active"}
      `;
      box.append(item);
    });
  } catch (err) {
    box.textContent = err.message || "Failed to load";
  }
}

/* ====================== START ====================== */
boot();
