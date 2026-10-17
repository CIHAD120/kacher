/**
 * ============================================================================
 * MODULE 1: THE COMPLETE MENU DATA (65 Items)
 * ============================================================================
 */
const FIREBASE_DB_URL = 'https://pos-kasher-default-rtdb.firebaseio.com';

const defaultMenuData = [
  // 1. سندويش فلافل (Falafel Dürüm) — 5 Items
  { category: 'سندويش فلافل', nameAr: 'فلافل لف', nameTr: 'Falafel Dürüm', price: 110 },
  { category: 'سندويش فلافل', nameAr: 'فلافل دبل', nameTr: 'Falafel extra Dürüm', price: 125 },
  { category: 'سندويش فلافل', nameAr: 'فلافل مع فول', nameTr: 'Falafel ve Bakla Dürüm', price: 125 },
  { category: 'سندويش فلافل', nameAr: 'فلافل مع بطاطا', nameTr: 'Falafel ve Patates Dürüm', price: 125 },
  { category: 'سندويش فلافل', nameAr: 'فلافل عربي مع بطاطا', nameTr: 'Falafel ve Patates Dürüm (Arap)', price: 185 },

  // 2. شاميات (Şamiyat) — 18 Items
  { category: 'شاميات', nameAr: 'فول بطحينة', nameTr: 'Tahinli yoğurtlu koru bakla', price: 155 },
  { category: 'شاميات', nameAr: 'فول مدمس بزيت', nameTr: 'Zeytin yoğurtlu koru bakla', price: 155 },
  { category: 'شاميات', nameAr: 'فول بطحينة مهروس', nameTr: 'Tahinli koru bakla ezmesi', price: 155 },
  { category: 'شاميات', nameAr: 'فول بزيت مهروس', nameTr: 'Zeytin yağlı koru bakla ezmesi', price: 155 },
  { category: 'شاميات', nameAr: 'حمص حب طحينة', nameTr: 'Tahinli nohut', price: 155 },
  { category: 'شاميات', nameAr: 'حمص حب بزيت', nameTr: 'Zeytin yağlı nohut', price: 155 },
  { category: 'شاميات', nameAr: 'حمص بطحينة (مسبحة)', nameTr: 'Humus', price: 150 },
  { category: 'شاميات', nameAr: 'فتة بزيت بلدي', nameTr: 'Sıvıyağlı fatte', price: 170 },
  { category: 'شاميات', nameAr: 'فتة بسمنة', nameTr: 'Tereyağlı fatte', price: 170 },
  { category: 'شاميات', nameAr: 'فتة بزيت فقسة', nameTr: 'Zeytinyağlı fatte (فقسة)', price: 170 },
  { category: 'شاميات', nameAr: 'فته بالكاجو', nameTr: 'Kajulu fatte', price: 260 },
  { category: 'شاميات', nameAr: 'فتة باللحمة', nameTr: 'Kıymalı fatte', price: 285 },
  { category: 'شاميات', nameAr: 'مسبحة بيروتية', nameTr: 'Humus (tahinli nohut ezmesi)', price: 155 },
  { category: 'شاميات', nameAr: 'مسبحة باللحمة', nameTr: 'Kıymalı homus', price: 265 },
  { category: 'شاميات', nameAr: 'مسبحة بالكاجو', nameTr: 'Kajulu nuhut', price: 250 },
  { category: 'شاميات', nameAr: 'متبل باذنجان', nameTr: 'Tahinli yoğurtlu patlıcan', price: 150 },
  { category: 'شاميات', nameAr: 'فلافل 6 قرص', nameTr: '6 adet Falafel', price: 120 },
  { category: 'شاميات', nameAr: 'فلافل 10 قرص', nameTr: '10 adet Falafel', price: 150 },

  // 3. غربي - وجبة — 9 Items
  { category: 'غربي - وجبة', nameAr: 'كريسبي وجبة', nameTr: 'Acılı çıtır tavuk Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'سكالوب وجبة', nameTr: 'Galata ünlü çıtır tavuk Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'زنجر وجبة', nameTr: 'Çıtır tavuk göğsü kızarması Porsiyon', price: 260 },
  { category: 'غربي - وجبة', nameAr: 'فاهيتا وجبة', nameTr: 'Fajita Porsiyon', price: 260 },
  { category: 'غربي - وجبة', nameAr: 'فرانشيسكو وجبة', nameTr: 'Mantar kaşarlı sote Porsiyon', price: 260 },
  { category: 'غربي - وجبة', nameAr: 'مكسيكي وجبة', nameTr: 'Biberli tavuk sote acılı Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'شيش وجبة', nameTr: 'Tavuk şişi Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'بطاطا وجبة', nameTr: 'Patates Porsiyon', price: 150 },
  { category: 'غربي - وجبة', nameAr: 'بطاطا مع قشقوان وجبة', nameTr: 'Kaşarlı Patates Porsiyon', price: 200 },

  // 4. غربي - سندويش — 9 Items
  { category: 'غربي - سندويش', nameAr: 'كريسبي سندويش', nameTr: 'Acılı çıtır tavuk Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'سكالوب سندويش', nameTr: 'Galata ünlü çıtır tavuk Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'زنجر سندويش', nameTr: 'Çıtır tavuk göğsü kızarması Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'فاهيتا سندويش', nameTr: 'Fajita Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'فرانشيسكو سندويش', nameTr: 'Mantar kaşarlı sote Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'مكسيكي سندويش', nameTr: 'Biberli tavuk sote acılı Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'شيش سندويش', nameTr: 'Tavuk şişi Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'بطاطا سندويش', nameTr: 'Patates Dürüm', price: 125 },
  { category: 'غربي - سندويش', nameAr: 'بطاطا مع قشقوان سندويش', nameTr: 'Kaşarlı Patates Dürüm', price: 170 },

  // 5. غربي - عربي — 9 Items
  { category: 'غربي - عربي', nameAr: 'كريسبي عربي', nameTr: 'Acılı çıtır tavuk (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'سكالوب عربي', nameTr: 'Galata ünlü çıtır tavuk (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'زنجر عربي', nameTr: 'Çıtır tavuk göğsü kızarması (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'فاهيتا عربي', nameTr: 'Fajita (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'فرانشيسكو عربي', nameTr: 'Mantar kaşarlı sote (Arap)', price: 225 },
  { category: 'غربي - عربي', nameTr: 'Biberli tavuk sote acılı (Arap)', nameAr: 'مكسيكي عربي', price: 225 },
  { category: 'غربي - عربي', nameAr: 'شيش عربي', nameTr: 'Tavuk şişi (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'بطاطا عربي', nameTr: 'Patates (Arap)', price: 185 },
  { category: 'غربي - عربي', nameAr: 'بطاطا مع قشقوان عربي', nameTr: 'Kaşarlı Patates (Arap)', price: 235 },

  // 6. سلطات (Salatalar)
  { category: 'سلطات', nameAr: 'سلطة شرقية', nameTr: 'Mevsim salatası', price: 140 },
  { category: 'سلطات', nameAr: 'فتوش', nameTr: 'Fettuş', price: 140 },
  { category: 'سلطات', nameAr: 'تبولة', nameTr: 'Tabboule', price: 140 },
  { category: 'سلطات', nameAr: 'سلطة روسية', nameTr: 'Rus salatası', price: 90 },
  { category: 'سلطات', nameAr: 'زينة خضرة', nameTr: 'Yeşillik / Garnitür', price: 30 },
  { category: 'سلطات', nameAr: 'سرفيس', nameTr: 'Servis', price: 30 },
  { category: 'سلطات', nameAr: 'مايونيز', nameTr: 'Mayonez', price: 25 },

  // 7. كوكتيلات (Kokteyller)
  { category: 'كوكتيلات', nameAr: 'موز و حليب', nameTr: 'Muzlu süt', price: 100 },
  { category: 'كوكتيلات', nameAr: 'موز و حليب و فريز', nameTr: 'Muzlu çilekli süt', price: 120 },
  { category: 'كوكتيلات', nameAr: 'موز و حليب و عسل', nameTr: 'Muzlu ballı süt', price: 120 },
  { category: 'كوكتيلات', nameAr: 'كوكتيل فواكه', nameTr: 'Meyveli kaymaklı milkshake', price: 140 },
  { category: 'كوكتيلات', nameAr: 'موز و حليب و شوكولاه', nameTr: 'Muzlu çikolatalı süt', price: 120 },

  // 8. مشروبات (İçecekler)
  { category: 'مشروبات', nameAr: 'كولا', nameTr: 'Kola', price: 50 },
  { category: 'مشروبات', nameAr: 'عيران', nameTr: 'Ayran', price: 25 },
  { category: 'مشروبات', nameAr: 'شاي', nameTr: 'Çay', price: 20 }
];

const STORAGE_KEY_MENU = 'falafel_damashqi_pos_menu_v3';
const STORAGE_KEY_ORDERS = 'falafel_damashqi_pos_orders_v3';
const STORAGE_KEY_PRINT_CFG = 'falafel_damashqi_pos_print_cfg_v4';

let menuData = JSON.parse(JSON.stringify(defaultMenuData));

/**
 * ============================================================================
 * MODULE 2: HIGH-POWER RESTAURANT BELL & BACKGROUND AUDIO KEEP-ALIVE ENGINE
 * يضمن خروج صوت جرس قوي جداً حتى لو كان الكاشير في تبويب يوتيوب أو مصغراً كروم
 * ============================================================================
 */
let isAudioUnlocked = false;
let webAudioCtx = null;
let loudBellAudioEl = null;
let silentKeepAliveAudioEl = null;
let repeatBellTimer = null;
let titleFlashTimer = null;
const ORIGINAL_DOC_TITLE = document.title;

// توليد ملف WAV لجرس مطعم ميكانيكي قوي جداً وعالي التردد (3 ضربات مزدوجة) داخل الذاكرة
function generateLoudBellWavBlobUrl() {
  const sampleRate = 44100;
  const durationSec = 2.6;
  const numSamples = Math.floor(sampleRate * durationSec);
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  function writeStr(offset, str) {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  }

  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, numSamples * 2, true);

  // 4 ضربات جرس قوية ومتتالية (تنغ! تنغ! تنغ! تنغ!)
  const strikes = [0.0, 0.42, 0.84, 1.35];
  const harmonics = [
    { freq: 1046.5, amp: 0.48, decay: 4.2 },  // C6
    { freq: 1318.5, amp: 0.42, decay: 4.8 },  // E6
    { freq: 1567.98, amp: 0.38, decay: 5.5 }, // G6
    { freq: 2093.0, amp: 0.45, decay: 6.0 },  // C7 (اختراق سمعي قوي)
    { freq: 2637.0, amp: 0.35, decay: 7.5 },  // E7
    { freq: 3135.96, amp: 0.25, decay: 9.0 }  // G7 (رنين معدني حاد)
  ];

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    let sample = 0;

    for (let s = 0; s < strikes.length; s++) {
      const dt = t - strikes[s];
      if (dt >= 0 && dt < 1.15) {
        for (let h = 0; h < harmonics.length; h++) {
          const hm = harmonics[h];
          const env = Math.exp(-hm.decay * dt);
          sample += Math.sin(2 * Math.PI * hm.freq * dt) * hm.amp * env;
        }
        // نقرة المطرقة المعدنية في بداية كل ضربة جرس
        if (dt < 0.015) {
          sample += Math.sin(2 * Math.PI * 3800 * dt) * 0.55 * (1 - dt / 0.015);
        }
      }
    }

    // تضخيم وضغط الصوت لأقصى شدة بدون تشويه (Hard Limiter)
    sample = Math.tanh(sample * 1.65) * 0.98;
    const pcmVal = Math.max(-32767, Math.min(32767, Math.floor(sample * 32767)));
    view.setInt16(44 + i * 2, pcmVal, true);
  }

  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

// توليد قناة صوتية خفية تمنع كروم من إيقاف الصوت عند فتح يوتيوب أو تصغير المتصفح
function generateSilentKeepAliveWavUrl() {
  const sampleRate = 8000;
  const numSamples = sampleRate * 2;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  function writeStr(offset, str) {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  }

  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, numSamples * 2, true);

  for (let i = 0; i < numSamples; i++) {
    view.setInt16(44 + i * 2, i % 2 === 0 ? 1 : -1, true);
  }

  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

function initAudioElements() {
  if (!loudBellAudioEl) {
    loudBellAudioEl = new Audio(generateLoudBellWavBlobUrl());
    loudBellAudioEl.preload = 'auto';
    loudBellAudioEl.volume = 1.0;
  }
  if (!silentKeepAliveAudioEl) {
    silentKeepAliveAudioEl = new Audio(generateSilentKeepAliveWavUrl());
    silentKeepAliveAudioEl.loop = true;
    silentKeepAliveAudioEl.volume = 0.01;
  }
}

function unlockCashierAudio(showNotification) {
  initAudioElements();

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass && !webAudioCtx) {
      webAudioCtx = new AudioContextClass();
    }
    if (webAudioCtx && webAudioCtx.state === 'suspended') {
      webAudioCtx.resume();
    }
  } catch (e) {}

  try {
    silentKeepAliveAudioEl.play().catch(() => {});
  } catch (e) {}

  // طلب إذن إشعارات سطح المكتب للظهور فوق يوتيوب أو خارج كروم
  try {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().catch(() => {});
    }
  } catch (e) {}

  markAudioUnlockedUI(showNotification);
}

function markAudioUnlockedUI(showNotification) {
  isAudioUnlocked = true;
  const btn = document.getElementById('btn-cashier-login-audio');
  const icon = document.getElementById('audio-status-icon');
  const text = document.getElementById('audio-status-text');
  if (btn && icon && text) {
    btn.classList.add('unlocked');
    icon.textContent = '🔔';
    text.textContent = 'الجرس القوي مفعّل (يعمل بالخلفية)';
  }
  if (showNotification) {
    playOrderAlertPing();
    showToast('🔔 تم تفعيل الجرس القوي والعمل في الخلفية بنجاح!', 'success');
  }
}

// تشغيل رنين قوي جداً عبر Web Audio API مع مضخم صوت (GainBoost)
function playSynthesizedHighPowerBell() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!webAudioCtx) webAudioCtx = new AudioContextClass();
    if (webAudioCtx.state === 'suspended') webAudioCtx.resume();

    const compressor = webAudioCtx.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-18, webAudioCtx.currentTime);
    compressor.knee.setValueAtTime(10, webAudioCtx.currentTime);
    compressor.ratio.setValueAtTime(12, webAudioCtx.currentTime);
    compressor.attack.setValueAtTime(0, webAudioCtx.currentTime);
    compressor.release.setValueAtTime(0.2, webAudioCtx.currentTime);
    compressor.connect(webAudioCtx.destination);

    const now = webAudioCtx.currentTime;
    const strikes = [0, 0.38, 0.76, 1.25];
    const chord = [1046.5, 1318.5, 1567.98, 2093.0, 2637.0];

    strikes.forEach((strikeOffset) => {
      chord.forEach((freq, idx) => {
        const osc = webAudioCtx.createOscillator();
        const gain = webAudioCtx.createGain();
        osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(freq, now + strikeOffset);

        gain.gain.setValueAtTime(0.45, now + strikeOffset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + strikeOffset + 0.85);

        osc.connect(gain);
        gain.connect(compressor);
        osc.start(now + strikeOffset);
        osc.stop(now + strikeOffset + 0.86);
      });
    });
  } catch (e) {}
}

function playOrderAlertPing() {
  initAudioElements();

  // 1. تشغيل ملف الـ WAV القوي (يعمل حتى لو كان التبويب في الخلفية أو مصغراً)
  try {
    loudBellAudioEl.currentTime = 0;
    loudBellAudioEl.volume = 1.0;
    const p = loudBellAudioEl.play();
    if (p !== undefined) {
      p.catch(() => {});
    }
  } catch (e) {}

  // 2. تشغيل المولد الصوتي المضخم بالتوازي لمضاعفة قوة الجرس
  playSynthesizedHighPowerBell();
}

function sendBackgroundSystemNotification(title, bodyText) {
  try {
    if ('Notification' in window && Notification.permission === 'granted') {
      const n = new Notification(title, {
        body: bodyText,
        tag: 'falafel-pos-order-alert',
        renotify: true,
        requireInteraction: true
      });
      n.onclick = () => {
        window.focus();
        n.close();
      };
    }
  } catch (e) {}
}

function updateBackgroundAlarmLoop() {
  const unacknowledgedOrders = state.orders.filter(
    (o) => o.status === 'new' || o.hasUnreadAdditions
  );

  const btnAudio = document.getElementById('btn-cashier-login-audio');

  if (unacknowledgedOrders.length > 0) {
    if (btnAudio) btnAudio.classList.add('ringing-active');

    if (!titleFlashTimer) {
      let toggle = false;
      titleFlashTimer = setInterval(() => {
        toggle = !toggle;
        document.title = toggle
          ? `🔔 (${unacknowledgedOrders.length}) طلب جديد! — فلافل الدمشقي`
          : ORIGINAL_DOC_TITLE;
      }, 900);
    }

    if (state.repeatBellUntilAccepted && !repeatBellTimer) {
      repeatBellTimer = setInterval(() => {
        const stillPending = state.orders.some(
          (o) => o.status === 'new' || o.hasUnreadAdditions
        );
        if (stillPending) {
          playOrderAlertPing();
        } else {
          stopBackgroundAlarmLoop();
        }
      }, 5500);
    }
  } else {
    stopBackgroundAlarmLoop();
  }
}

function stopBackgroundAlarmLoop() {
  if (repeatBellTimer) {
    clearInterval(repeatBellTimer);
    repeatBellTimer = null;
  }
  if (titleFlashTimer) {
    clearInterval(titleFlashTimer);
    titleFlashTimer = null;
  }
  document.title = ORIGINAL_DOC_TITLE;
  const btnAudio = document.getElementById('btn-cashier-login-audio');
  if (btnAudio) btnAudio.classList.remove('ringing-active');
}

function toggleRepeatBellSetting() {
  state.repeatBellUntilAccepted = !state.repeatBellUntilAccepted;
  const btn = document.getElementById('btn-toggle-repeat-bell');
  if (btn) {
    btn.textContent = state.repeatBellUntilAccepted
      ? '🔁 تكرار الجرس: مفعّل'
      : '🔂 تكرار الجرس: مرة واحدة';
    btn.className = state.repeatBellUntilAccepted ? 'btn-gold' : 'btn-secondary';
  }
  updateBackgroundAlarmLoop();
}

// فك قفل الصوت تلقائياً عند أول نقرة في أي مكان بالصفحة
document.addEventListener(
  'click',
  () => {
    if (!isAudioUnlocked) {
      unlockCashierAudio(false);
    }
  },
  { once: true }
);

/**
 * ============================================================================
 * APPLICATION STATE
 * ============================================================================
 */
const state = {
  roleMode: 'waiter',
  waiterSubView: 'menu',
  selectedCategory: 'ALL',
  searchQuery: '',
  selectedTable: '',
  targetExistingOrderId: null, // عندما يريد النادل إضافة أصناف لطلب طاولة قائم
  cart: [],
  orders: [],
  repeatBellUntilAccepted: true,
  cashierEditingOrderId: null,
  cashierEditDraftItems: [],
  cashierEditTable: '',
  cashierPickerQuery: '',
  cashierPickerCategory: 'ALL',
  printConfig: {
    preset: 'zjiang58', // 'zjiang58' (46mm), 'full58' (48mm), 'safe42' (42mm), '80' (72mm)
    align: 'right',     // 'right', 'center', 'left'
    offsetMm: 0
  }
};

function loadMenuFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MENU);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length === defaultMenuData.length) {
        menuData = parsed;
        return;
      }
    }
  } catch (e) {}
  menuData = JSON.parse(JSON.stringify(defaultMenuData));
}

function saveMenuToStorage() {
  try { localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(menuData)); } catch (e) {}
}

function loadOrdersFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ORDERS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        state.orders = parsed;
        return;
      }
    }
  } catch (e) {}
  state.orders = [];
}

function saveOrdersToStorage() {
  try { localStorage.setItem(STORAGE_KEY_ORDERS, JSON.stringify(state.orders)); } catch (e) {}
}

function showToast(message, type = 'gold') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast-item ${type === 'success' ? 'toast-success' : type === 'danger' ? 'toast-danger' : ''}`;
  toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3400);
}

function switchRoleMode(mode) {
  state.roleMode = mode;
  const tabWaiter = document.getElementById('tab-waiter-mode');
  const tabCashier = document.getElementById('tab-cashier-mode');
  const btnHeaderCart = document.getElementById('btn-header-cart');

  if (mode === 'waiter') {
    tabWaiter.classList.add('active');
    tabCashier.classList.remove('active');
    btnHeaderCart.style.display = 'flex';
    toggleWaiterSubView(state.waiterSubView);
  } else {
    unlockCashierAudio(false);
    tabCashier.classList.add('active');
    tabWaiter.classList.remove('active');
    btnHeaderCart.style.display = 'none';
    setActiveSpaView('view-cashier-dashboard');
    syncNowFromCloud(false);
    renderCashierKanban();
  }
}

function toggleWaiterSubView(subView) {
  state.roleMode = 'waiter';
  state.waiterSubView = subView;
  document.getElementById('tab-waiter-mode').classList.add('active');
  document.getElementById('tab-cashier-mode').classList.remove('active');
  document.getElementById('btn-header-cart').style.display = 'flex';

  if (subView === 'cart') {
    setActiveSpaView('view-waiter-cart');
    renderCartView();
  } else {
    setActiveSpaView('view-waiter-menu');
    renderWaiterActiveOrdersStrip();
    renderMenuView();
  }
}

function setActiveSpaView(targetId) {
  ['view-waiter-menu', 'view-waiter-cart', 'view-cashier-dashboard'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === targetId) {
      el.classList.add('active-view');
      el.style.display = 'block';
    } else {
      el.classList.remove('active-view');
      el.style.display = 'none';
    }
  });
}

function getUniqueCategories() {
  return Array.from(new Set(menuData.map((i) => i.category)));
}

function renderCategoryPills() {
  const container = document.getElementById('category-pills-container');
  if (!container) return;
  const categories = ['ALL', ...getUniqueCategories()];
  container.innerHTML = '';
  categories.forEach((cat) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `category-pill ${state.selectedCategory === cat ? 'active' : ''}`;
    btn.textContent = cat === 'ALL' ? `الكل (${menuData.length})` : cat;
    btn.onclick = () => {
      state.selectedCategory = cat;
      renderCategoryPills();
      renderMenuView();
    };
    container.appendChild(btn);
  });
}

function handleSearchInput(val) {
  state.searchQuery = (val || '').trim().toLowerCase();
  renderMenuView();
}

/**
 * ============================================================================
 * WAITER FEATURE: ADDING NEW ITEMS TO AN EXISTING TABLE ORDER
 * إمكانية إضافة أصناف جديدة لطاولة لديها طلب مفتوح (مثلاً طاولة 5)
 * ============================================================================
 */
function getActiveOrderForTable(tableName) {
  if (!tableName) return null;
  return state.orders.find(
    (o) => o.table === tableName && (o.status === 'new' || o.status === 'preparing')
  ) || null;
}

function handleTableChange(tableVal) {
  state.selectedTable = tableVal;
  const menuSelect = document.getElementById('waiter-menu-table-select');
  const cartSelect = document.getElementById('waiter-cart-table-select');
  const cartTableBox = document.getElementById('cart-table-box');
  if (menuSelect) menuSelect.value = tableVal;
  if (cartSelect) cartSelect.value = tableVal;
  if (cartTableBox && tableVal) cartTableBox.classList.remove('error-highlight');

  // إذا غير النادل الطاولة، نتحقق إن كان عليها طلب نشط
  const existing = getActiveOrderForTable(tableVal);
  if (state.targetExistingOrderId) {
    const targetOrd = state.orders.find((o) => o.id === state.targetExistingOrderId);
    if (!targetOrd || targetOrd.table !== tableVal) {
      state.targetExistingOrderId = existing ? existing.id : null;
    }
  }

  renderWaiterActiveOrdersStrip();
  if (state.waiterSubView === 'cart') {
    renderCartView();
  }
}

function startWaiterAppendToOrder(orderId) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;
  state.targetExistingOrderId = order.id;
  state.selectedTable = order.table;

  const menuSelect = document.getElementById('waiter-menu-table-select');
  const cartSelect = document.getElementById('waiter-cart-table-select');
  if (menuSelect) menuSelect.value = order.table;
  if (cartSelect) cartSelect.value = order.table;

  renderWaiterActiveOrdersStrip();
  toggleWaiterSubView('menu');
  showToast(`➕ اختر الأصناف الإضافية لطاولة (${order.table}) ثم افتح السلة`, 'success');
}

function cancelWaiterAppendMode() {
  state.targetExistingOrderId = null;
  renderWaiterActiveOrdersStrip();
  if (state.waiterSubView === 'cart') renderCartView();
  showToast('تم التحويل إلى وضع إنشاء طلب مستقل', 'gold');
}

function renderWaiterActiveOrdersStrip() {
  const stripEl = document.getElementById('waiter-active-orders-strip');
  const bannerEl = document.getElementById('waiter-append-banner');
  if (!stripEl || !bannerEl) return;

  const activeOrders = state.orders.filter(
    (o) => o.status === 'new' || o.status === 'preparing'
  );

  // شريط وضع الإضافة النشط
  const targetOrder = state.targetExistingOrderId
    ? state.orders.find((o) => o.id === state.targetExistingOrderId)
    : getActiveOrderForTable(state.selectedTable);

  if (targetOrder && state.targetExistingOrderId === targetOrder.id) {
    bannerEl.style.display = 'flex';
    bannerEl.innerHTML = `
      <div class="append-mode-info">
        <span>➕ وضع إضافة أصناف جديدة للطلب:</span>
        <span class="order-table-badge">${escapeHtml(targetOrder.table)}</span>
        <span class="order-id-badge">#${escapeHtml(targetOrder.id)}</span>
        <span style="font-size:0.8rem; color:var(--text-muted);">(المجموع السابق: ${Number(targetOrder.total)} ₺)</span>
      </div>
      <div style="display:flex; gap:0.5rem; align-items:center;">
        <button type="button" class="btn-gold" style="padding:0.4rem 0.75rem; font-size:0.8rem;" onclick="toggleWaiterSubView('cart')">
          🛒 مراجعة الإضافات وإرسالها (${calculateCartCount()})
        </button>
        <button type="button" class="btn-secondary" style="padding:0.4rem 0.7rem; font-size:0.78rem;" onclick="cancelWaiterAppendMode()">
          ✕ إلغاء الوضع
        </button>
      </div>
    `;
  } else {
    bannerEl.style.display = 'none';
    bannerEl.innerHTML = '';
  }

  if (activeOrders.length === 0) {
    stripEl.style.display = 'none';
    stripEl.innerHTML = '';
    return;
  }

  stripEl.style.display = 'flex';
  const chipsHtml = activeOrders.map((ord) => {
    const isTarget = state.targetExistingOrderId === ord.id;
    const statusLabel = ord.status === 'new' ? '🔴 جديد' : '🟡 قيد التحضير';
    return `
      <div class="active-table-chip ${isTarget ? 'selected-for-append' : ''}">
        <div>
          <strong style="color:var(--accent-gold);">${escapeHtml(ord.table)}</strong>
          <span class="ltr-text" style="font-size:0.75rem; color:var(--text-muted); margin-right:4px;">#${escapeHtml(ord.id)}</span>
          <div style="font-size:0.72rem; color:var(--text-muted);">${statusLabel} • ${ord.items.length} أصناف (${Number(ord.total)} ₺)</div>
        </div>
        <button type="button" class="btn-append-table ${isTarget ? 'active-mode' : ''}" onclick="startWaiterAppendToOrder('${ord.id}')">
          ${isTarget ? '✓ جاري الإضافة...' : '➕ إضافة أصناف'}
        </button>
      </div>
    `;
  }).join('');

  stripEl.innerHTML = `
    <div class="active-tables-header">
      <span>🪑 الطاولات المفتوحة حالياً (اضغط "➕ إضافة أصناف" لإضافة طلبات جديدة لنفس الطاولة):</span>
      <span style="font-size:0.75rem; color:var(--text-muted);">${activeOrders.length} طاولات نشطة</span>
    </div>
    <div class="active-tables-list">${chipsHtml}</div>
  `;
}

function renderMenuView() {
  const container = document.getElementById('menu-sections-container');
  if (!container) return;
  container.innerHTML = '';

  const cats = state.selectedCategory === 'ALL' ? getUniqueCategories() : [state.selectedCategory];

  cats.forEach((categoryName) => {
    const itemsInCat = menuData
      .map((item, idx) => ({ ...item, itemIndex: idx }))
      .filter((item) => {
        if (item.category !== categoryName) return false;
        if (!state.searchQuery) return true;
        return (
          item.nameAr.toLowerCase().includes(state.searchQuery) ||
          item.nameTr.toLowerCase().includes(state.searchQuery)
        );
      });

    if (itemsInCat.length === 0) return;

    const section = document.createElement('div');
    section.className = 'category-section';
    section.innerHTML = `
      <div class="category-header">
        <div class="category-title"><span>◆</span><span>${escapeHtml(categoryName)}</span></div>
        <span class="category-count">${itemsInCat.length} أصناف</span>
      </div>
    `;

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    itemsInCat.forEach((item) => {
      const cartEntry = state.cart.find((c) => c.itemIndex === item.itemIndex);
      const qtyInCart = cartEntry ? Number(cartEntry.qty) : 0;

      const card = document.createElement('div');
      card.className = `menu-card ${qtyInCart > 0 ? 'in-cart' : ''}`;
      card.innerHTML = `
        <div class="menu-card-names">
          <div class="menu-name-ar">${escapeHtml(item.nameAr)}</div>
          <div class="menu-name-tr">${escapeHtml(item.nameTr)}</div>
        </div>
        <div class="menu-card-right">
          <span class="menu-price-tag">${Number(item.price)} ₺</span>
          <button type="button" class="btn-add-item" onclick="addItemToCart(${item.itemIndex})">
            +
            ${qtyInCart > 0 ? `<span class="item-qty-indicator">${qtyInCart}</span>` : ''}
          </button>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  updateHeaderBadges();
}

function addItemToCart(itemIndex) {
  const sourceItem = menuData[itemIndex];
  if (!sourceItem) return;
  const existing = state.cart.find((c) => c.itemIndex === itemIndex);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      itemIndex,
      nameAr: sourceItem.nameAr,
      nameTr: sourceItem.nameTr,
      price: Number(sourceItem.price),
      qty: 1
    });
  }
  updateHeaderBadges();
  renderWaiterActiveOrdersStrip();
  renderMenuView();
  showToast(`+1 ${sourceItem.nameAr}`, 'gold');
}

function updateCartItemQty(itemIndex, delta) {
  const idx = state.cart.findIndex((c) => c.itemIndex === itemIndex);
  if (idx === -1) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
  updateHeaderBadges();
  renderCartView();
  renderMenuView();
}

function removeCartItem(itemIndex) {
  state.cart = state.cart.filter((c) => c.itemIndex !== itemIndex);
  updateHeaderBadges();
  renderCartView();
  renderMenuView();
}

function clearCartWithFeedback() {
  state.cart = [];
  updateHeaderBadges();
  renderCartView();
  renderMenuView();
}

function calculateCartTotal() {
  return state.cart.reduce((sum, item) => sum + Number(item.price) * Number(item.qty), 0);
}

function calculateCartCount() {
  return state.cart.reduce((sum, item) => sum + Number(item.qty), 0);
}

function updateHeaderBadges() {
  document.getElementById('header-cart-count').textContent = String(calculateCartCount());
  document.getElementById('header-cart-total').textContent = `${calculateCartTotal()} ₺`;
  const newCount = state.orders.filter((o) => o.status === 'new' || o.hasUnreadAdditions).length;
  document.getElementById('header-new-orders-badge').textContent = String(newCount);
  updateBackgroundAlarmLoop();
}

function renderCartView() {
  const container = document.getElementById('cart-items-container');
  const grandTotalEl = document.getElementById('cart-grand-total');
  const cartSelect = document.getElementById('waiter-cart-table-select');
  const mergeBox = document.getElementById('cart-existing-order-box');
  const footerActions = document.getElementById('cart-footer-actions');

  if (cartSelect) cartSelect.value = state.selectedTable;

  // فحص هل الطاولة المختارة لديها طلب مفتوح حالياً
  const activeOrd = state.targetExistingOrderId
    ? state.orders.find((o) => o.id === state.targetExistingOrderId)
    : getActiveOrderForTable(state.selectedTable);

  if (mergeBox) {
    if (activeOrd) {
      const prevItemsSummary = activeOrd.items
        .map((it) => `${it.qty}× ${escapeHtml(it.nameAr)}`)
        .join(' ، ');
      mergeBox.style.display = 'flex';
      mergeBox.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <strong style="color:var(--success); font-size:0.92rem;">
            📌 يوجد طلب مفتوح لهذه الطاولة (${escapeHtml(activeOrd.table)} - #${escapeHtml(activeOrd.id)})
          </strong>
          <span class="ltr-text" style="font-weight:800; color:var(--accent-gold);">
            المجموع السابق: ${Number(activeOrd.total)} ₺
          </span>
        </div>
        <div style="font-size:0.8rem; color:var(--text-muted);">
          الأصناف السابقة: ${prevItemsSummary}
        </div>
        <div style="font-size:0.85rem; font-weight:800; color:var(--text-main);">
          الإجمالي الجديد بعد إضافة السلة: <span class="ltr-text" style="color:var(--accent-gold);">${Number(activeOrd.total) + calculateCartTotal()} ₺</span>
        </div>
      `;
    } else {
      mergeBox.style.display = 'none';
      mergeBox.innerHTML = '';
    }
  }

  if (footerActions) {
    if (activeOrd) {
      footerActions.innerHTML = `
        <button type="button" id="btn-append-cloud" class="btn-append-order-main" onclick="appendCartToExistingOrder('${activeOrd.id}')">
          ➕ إضافة الأصناف لطلب الطاولة الحالي (#${escapeHtml(activeOrd.id)})
        </button>
        <button type="button" id="btn-submit-cloud" class="btn-submit-order" style="flex:1;" onclick="submitWaiterOrder(true)">
          🆕 إرسال كطلب منفصل
        </button>
        <button type="button" class="btn-clear-cart" onclick="clearCartWithFeedback()">🗑️ إفراغ</button>
      `;
    } else {
      footerActions.innerHTML = `
        <button type="button" id="btn-submit-cloud" class="btn-submit-order" onclick="submitWaiterOrder(false)">
          ✅ إرسال الطلب للكاشير / Siparişi Gönder
        </button>
        <button type="button" class="btn-clear-cart" onclick="clearCartWithFeedback()">🗑️ إفراغ</button>
      `;
    }
  }

  if (state.cart.length === 0) {
    container.innerHTML = `<div class="cart-empty-state">🛒 السلة فارغة حالياً — أضف أصنافاً من القائمة</div>`;
    grandTotalEl.textContent = '0 ₺';
    return;
  }

  container.innerHTML = '';
  state.cart.forEach((item) => {
    const lineTotal = Number(item.price) * Number(item.qty);
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-title-ar">${escapeHtml(item.nameAr)}</div>
        <div class="cart-item-title-tr">${escapeHtml(item.nameTr)}</div>
      </div>
      <div class="cart-item-controls">
        <div class="qty-stepper">
          <button type="button" class="btn-qty" onclick="updateCartItemQty(${item.itemIndex}, -1)">−</button>
          <span class="qty-value">${Number(item.qty)}</span>
          <button type="button" class="btn-qty" onclick="updateCartItemQty(${item.itemIndex}, 1)">+</button>
        </div>
        <div class="cart-item-price">${lineTotal} ₺</div>
        <button type="button" class="btn-trash" onclick="removeCartItem(${item.itemIndex})">🗑️</button>
      </div>
    `;
    container.appendChild(row);
  });

  grandTotalEl.textContent = `${calculateCartTotal()} ₺`;
}

// دمج الأصناف الجديدة مع طلب الطاولة المفتوح وإرسال تنبيه قوي للكاشير
async function appendCartToExistingOrder(orderId) {
  if (state.cart.length === 0) {
    showToast('السلة فارغة! أضف الأصناف الإضافية أولاً', 'danger');
    return;
  }
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) {
    submitWaiterOrder(true);
    return;
  }

  const btn = document.getElementById('btn-append-cloud');
  if (btn) btn.disabled = true;

  const updatedItems = JSON.parse(JSON.stringify(order.items));

  state.cart.forEach((cartItem) => {
    const existingItem = updatedItems.find((it) => it.nameAr === cartItem.nameAr);
    if (existingItem) {
      existingItem.qty = Number(existingItem.qty) + Number(cartItem.qty);
      existingItem.addedQty = (Number(existingItem.addedQty) || 0) + Number(cartItem.qty);
    } else {
      updatedItems.push({
        nameAr: cartItem.nameAr,
        nameTr: cartItem.nameTr,
        price: Number(cartItem.price),
        qty: Number(cartItem.qty),
        addedQty: Number(cartItem.qty)
      });
    }
  });

  const newTotal = updatedItems.reduce((s, it) => s + Number(it.price) * Number(it.qty), 0);
  const nowStr = new Date().toTimeString().slice(0, 5);
  const revision = (Number(order.revision) || 1) + 1;

  order.items = updatedItems;
  order.total = newTotal;
  order.lastModifiedAt = nowStr;
  order.revision = revision;
  order.hasUnreadAdditions = true;
  order.isNewlyInjected = true;

  try {
    const res = await fetch(`${FIREBASE_DB_URL}/orders/${order.id}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });
    if (!res.ok) throw new Error('Firebase Put Error');

    saveOrdersToStorage();
    state.cart = [];
    state.targetExistingOrderId = null;
    state.selectedTable = '';
    handleTableChange('');
    updateHeaderBadges();
    renderCashierKanban();
    toggleWaiterSubView('menu');
    showToast(`✅ تمت إضافة الأصناف الجديدة لطلب ${order.table} (#${order.id}) بنجاح!`, 'success');
  } catch (err) {
    saveOrdersToStorage();
    showToast('تم حفظ الإضافات محلياً (تعذر الاتصال بالسحابة)', 'gold');
  } finally {
    if (btn) btn.disabled = false;
  }
}

async function submitWaiterOrder(forceSeparate = false) {
  if (state.cart.length === 0) {
    showToast('السلة فارغة! أضف أصنافاً أولاً', 'danger');
    return;
  }
  if (!state.selectedTable) {
    document.getElementById('cart-table-box').classList.add('error-highlight');
    showToast('⚠️ يرجى اختيار رقم الطاولة أولاً!', 'danger');
    return;
  }

  // إذا كان النادل في وضع الإضافة لطلب قائم ولم يضغط "منفصل"
  if (!forceSeparate && state.targetExistingOrderId) {
    await appendCartToExistingOrder(state.targetExistingOrderId);
    return;
  }

  const submitBtn = document.getElementById('btn-submit-cloud');
  if (submitBtn) submitBtn.disabled = true;

  const now = new Date();
  const uniqueNum = String(Date.now()).slice(-4);
  const orderId = `ORD-${uniqueNum}`;

  const newOrder = {
    id: orderId,
    table: state.selectedTable,
    createdAt: now.toTimeString().slice(0, 5),
    timestamp: Date.now(),
    dateISO: now.toISOString().slice(0, 10),
    status: 'new',
    revision: 1,
    hasUnreadAdditions: false,
    items: state.cart.map((c) => ({
      nameAr: c.nameAr,
      nameTr: c.nameTr,
      price: Number(c.price),
      qty: Number(c.qty)
    })),
    total: calculateCartTotal(),
    isNewlyInjected: true
  };

  try {
    const res = await fetch(`${FIREBASE_DB_URL}/orders/${orderId}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    });

    if (!res.ok) throw new Error('Firebase Rules Blocked');

    state.orders.unshift(newOrder);
    saveOrdersToStorage();
    state.cart = [];
    state.targetExistingOrderId = null;
    state.selectedTable = '';
    handleTableChange('');
    updateHeaderBadges();
    renderCashierKanban();
    toggleWaiterSubView('menu');
    showToast(`✅ تم إرسال الطلب #${orderId} إلى الكاشير بنجاح!`, 'success');
  } catch (err) {
    state.orders.unshift(newOrder);
    saveOrdersToStorage();
    state.cart = [];
    state.targetExistingOrderId = null;
    handleTableChange('');
    updateHeaderBadges();
    renderCashierKanban();
    toggleWaiterSubView('menu');
    showToast('⚠️ تم حفظ الطلب محلياً — تأكد من اتصال السحابة', 'gold');
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

/**
 * ============================================================================
 * CLOUD SYNC & BACKGROUND WEB WORKER POLLING
 * يعمل في الخلفية عبر Web Worker حتى عند فتح يوتيوب أو تصغير نافذة كروم
 * ============================================================================
 */
let isSyncingNow = false;

async function syncNowFromCloud(manualTrigger = false) {
  if (isSyncingNow) return;
  isSyncingNow = true;

  try {
    const res = await fetch(`${FIREBASE_DB_URL}/orders.json?t=${Date.now()}`, {
      cache: 'no-store'
    });
    if (!res.ok) {
      isSyncingNow = false;
      return;
    }
    const data = await res.json();

    if (!data) {
      if (manualTrigger) showToast('لا توجد طلبات مسجلة في السحابة حالياً', 'gold');
      isSyncingNow = false;
      return;
    }

    const cloudOrders = Object.values(data)
      .filter((o) => o && o.id && Array.isArray(o.items))
      .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    let foundBrandNewOrder = false;
    let foundUpdatedTableOrder = false;
    let alertTableText = '';

    cloudOrders.forEach((cOrd) => {
      const localMatch = state.orders.find((loc) => loc.id === cOrd.id);
      if (!localMatch && cOrd.status === 'new') {
        foundBrandNewOrder = true;
        cOrd.isNewlyInjected = true;
        alertTableText = `${cOrd.table} (#${cOrd.id}) - ${cOrd.total} ₺`;
      } else if (localMatch) {
        const localRev = Number(localMatch.revision) || 1;
        const cloudRev = Number(cOrd.revision) || 1;
        const localTotal = Number(localMatch.total) || 0;
        const cloudTotal = Number(cOrd.total) || 0;
        if (cloudRev > localRev || (cloudTotal !== localTotal && cOrd.hasUnreadAdditions)) {
          foundUpdatedTableOrder = true;
          cOrd.isNewlyInjected = true;
          cOrd.hasUnreadAdditions = true;
          alertTableText = `إضافة أصناف على ${cOrd.table} (#${cOrd.id})`;
        }
      }
    });

    state.orders = cloudOrders;
    saveOrdersToStorage();
    updateHeaderBadges();
    renderCashierKanban();
    if (state.roleMode === 'waiter') {
      renderWaiterActiveOrdersStrip();
    }

    if (foundBrandNewOrder) {
      playOrderAlertPing();
      sendBackgroundSystemNotification('🔔 طلب جديد وصل للكاشير!', alertTableText);
      showToast(`🔔 وصل طلب جديد: ${alertTableText}`, 'success');
    } else if (foundUpdatedTableOrder) {
      playOrderAlertPing();
      sendBackgroundSystemNotification('➕ إضافات جديدة على طاولة!', alertTableText);
      showToast(`➕ ${alertTableText}`, 'success');
    } else if (manualTrigger) {
      showToast('✓ تم تحديث الطلبات من السحابة', 'success');
    }
  } catch (e) {
  } finally {
    isSyncingNow = false;
  }
}

// إنشاء Web Worker يعمل في مسار خلفي مستقل لا يتوقف عند فتح يوتيوب أو تصغير كروم
function startBackgroundSyncWorker() {
  try {
    const workerCode = `
      setInterval(function() {
        postMessage('tick');
      }, 2000);
    `;
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const worker = new Worker(URL.createObjectURL(blob));
    worker.onmessage = () => {
      syncNowFromCloud(false);
    };
  } catch (e) {
    // Fallback if Worker is restricted
    setInterval(() => syncNowFromCloud(false), 2000);
  }
}

async function updateOrderStatus(orderId, nextStatus) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;
  order.status = nextStatus;
  order.isNewlyInjected = false;
  order.hasUnreadAdditions = false;
  if (nextStatus === 'preparing' || nextStatus === 'completed') {
    order.items.forEach((it) => { delete it.addedQty; });
  }
  saveOrdersToStorage();
  updateHeaderBadges();
  renderCashierKanban();
  renderWaiterActiveOrdersStrip();

  try {
    await fetch(`${FIREBASE_DB_URL}/orders/${orderId}.json`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: nextStatus,
        isNewlyInjected: false,
        hasUnreadAdditions: false,
        items: order.items
      })
    });
  } catch (e) {}

  const statusAr =
    nextStatus === 'preparing' ? 'قيد التحضير 🟡' :
    nextStatus === 'completed' ? 'مكتمل 🟢' : 'جديد 🔴';
  showToast(`تم نقل الطلب #${orderId} إلى: ${statusAr}`, 'success');
}

async function cancelOrder(orderId) {
  state.orders = state.orders.filter((o) => o.id !== orderId);
  saveOrdersToStorage();
  updateHeaderBadges();
  renderCashierKanban();
  renderWaiterActiveOrdersStrip();

  try {
    await fetch(`${FIREBASE_DB_URL}/orders/${orderId}.json`, { method: 'DELETE' });
  } catch (e) {}
  showToast(`تم حذف الطلب ${orderId}`, 'danger');
}

/**
 * ============================================================================
 * CASHIER KANBAN & ORDER EDITING / ADDING ITEMS (e.g. Cola at Checkout)
 * ============================================================================
 */
function renderCashierKanban() {
  const colNew = document.getElementById('kanban-list-new');
  const colPrep = document.getElementById('kanban-list-preparing');
  const colComp = document.getElementById('kanban-list-completed');
  if (!colNew || !colPrep || !colComp) return;

  const newOrders = state.orders.filter((o) => o.status === 'new');
  const prepOrders = state.orders.filter((o) => o.status === 'preparing');
  const compOrders = state.orders.filter((o) => o.status === 'completed');

  document.getElementById('col-count-new').textContent = String(newOrders.length);
  document.getElementById('col-count-preparing').textContent = String(prepOrders.length);
  document.getElementById('col-count-completed').textContent = String(compOrders.length);

  document.getElementById('stat-new-count').textContent = String(newOrders.length);
  document.getElementById('stat-prep-count').textContent = String(prepOrders.length);
  document.getElementById('stat-completed-count').textContent = String(compOrders.length);

  const completedRev = compOrders.reduce((s, o) => s + Number(o.total), 0);
  document.getElementById('stat-completed-revenue').textContent = `${completedRev} ₺`;

  renderKanbanColumnList(colNew, newOrders, 'لا توجد طلبات جديدة');
  renderKanbanColumnList(colPrep, prepOrders, 'لا توجد طلبات قيد التحضير');
  renderKanbanColumnList(colComp, compOrders, 'لا توجد طلبات مكتملة');
}

function renderKanbanColumnList(container, list, emptyText) {
  if (list.length === 0) {
    container.innerHTML = `<div class="cart-empty-state" style="padding:1.5rem;">${emptyText}</div>`;
    return;
  }
  container.innerHTML = '';
  list.forEach((order) => {
    const card = document.createElement('div');
    const shouldPulse = (order.isNewlyInjected && order.status === 'new') || order.hasUnreadAdditions;
    card.className = `order-card ${shouldPulse ? 'pulse-new' : ''}`;

    const itemsHtml = order.items.map((it) => `
      <div class="order-item-line">
        <div>
          <span class="order-item-qty">${Number(it.qty)}x</span>
          ${escapeHtml(it.nameAr)}
          ${it.addedQty ? `<span class="added-qty-tag">🆕 +${Number(it.addedQty)} إضافي</span>` : ''}
        </div>
        <span class="order-item-line-price">${Number(it.price) * Number(it.qty)} ₺</span>
      </div>
    `).join('');

    let btns = '';
    if (order.status === 'new') {
      btns = `
        <button type="button" class="btn-card-action btn-prepare" onclick="updateOrderStatus('${order.id}', 'preparing')">▶ تحضير</button>
        <button type="button" class="btn-card-action btn-edit-order" onclick="openCashierEditOrderModal('${order.id}')">➕ تعديل / إضافة</button>
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">🖨️ الفيش</button>
        <button type="button" class="btn-card-action btn-cancel-order" onclick="cancelOrder('${order.id}')">✕</button>
      `;
    } else if (order.status === 'preparing') {
      btns = `
        <button type="button" class="btn-card-action btn-complete" onclick="updateOrderStatus('${order.id}', 'completed')">✔ تسليم</button>
        <button type="button" class="btn-card-action btn-edit-order" onclick="openCashierEditOrderModal('${order.id}')">➕ تعديل / كولا</button>
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">🖨️ الفيش</button>
        <button type="button" class="btn-card-action btn-return-prep" onclick="updateOrderStatus('${order.id}', 'new')" title="إرجاع لقائمة الطلبات الجديدة">↩ للجديد</button>
      `;
    } else {
      btns = `
        <button type="button" class="btn-card-action btn-return-prep" onclick="updateOrderStatus('${order.id}', 'preparing')">↩ إعادة لقيد التحضير</button>
        <button type="button" class="btn-card-action btn-edit-order" onclick="openCashierEditOrderModal('${order.id}')">➕ تعديل / إضافة</button>
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">🖨️ طباعة الفيش</button>
      `;
    }

    card.innerHTML = `
      <div class="order-card-top">
        <span class="order-id-badge">#${escapeHtml(order.id)}</span>
        <span class="order-table-badge">${escapeHtml(order.table)}</span>
        ${order.hasUnreadAdditions ? `<span class="order-modified-badge">🔔 إضافات جديدة!</span>` : ''}
        <span class="order-time">🕒 ${escapeHtml(order.lastModifiedAt || order.createdAt)}</span>
      </div>
      <div class="order-items-mini-list">${itemsHtml}</div>
      <div class="order-card-footer">
        <div class="order-card-total">
          <span>المجموع:</span>
          <span class="order-card-total-val">${Number(order.total)} ₺</span>
        </div>
        <div class="order-card-actions">${btns}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ==========================================
// نافذة الكاشير لتعديل أي طلب وإضافة أصناف (كولا، مشروبات، إلخ)
// ==========================================
function openCashierEditOrderModal(orderId) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;

  state.cashierEditingOrderId = order.id;
  state.cashierEditDraftItems = JSON.parse(JSON.stringify(order.items));
  state.cashierEditTable = order.table;
  state.cashierPickerQuery = '';
  state.cashierPickerCategory = 'ALL';

  const titleEl = document.getElementById('cashier-edit-modal-title');
  if (titleEl) {
    titleEl.textContent = `➕ تعديل الطلب وإضافة أصناف (#${order.id} — ${order.table})`;
  }

  const searchInput = document.getElementById('cashier-picker-search');
  if (searchInput) searchInput.value = '';

  renderCashierEditModalContent();
  document.getElementById('cashier-edit-order-backdrop').classList.add('open');
}

function closeCashierEditOrderModal() {
  document.getElementById('cashier-edit-order-backdrop').classList.remove('open');
  state.cashierEditingOrderId = null;
}

function addMenuItemToCashierDraft(itemIndex) {
  const menuItem = menuData[itemIndex];
  if (!menuItem) return;

  const existing = state.cashierEditDraftItems.find((it) => it.nameAr === menuItem.nameAr);
  if (existing) {
    existing.qty = Number(existing.qty) + 1;
    existing.addedQty = (Number(existing.addedQty) || 0) + 1;
  } else {
    state.cashierEditDraftItems.push({
      nameAr: menuItem.nameAr,
      nameTr: menuItem.nameTr,
      price: Number(menuItem.price),
      qty: 1,
      addedQty: 1
    });
  }
  renderCashierEditModalContent();
  showToast(`+1 ${menuItem.nameAr} أُضيفت للطلب`, 'success');
}

function updateCashierDraftItemQty(idx, delta) {
  if (!state.cashierEditDraftItems[idx]) return;
  state.cashierEditDraftItems[idx].qty = Number(state.cashierEditDraftItems[idx].qty) + delta;
  if (state.cashierEditDraftItems[idx].qty <= 0) {
    state.cashierEditDraftItems.splice(idx, 1);
  }
  renderCashierEditModalContent();
}

function removeCashierDraftItem(idx) {
  state.cashierEditDraftItems.splice(idx, 1);
  renderCashierEditModalContent();
}

function handleCashierPickerSearch(val) {
  state.cashierPickerQuery = (val || '').trim().toLowerCase();
  renderCashierPickerGrid();
}

function renderCashierPickerGrid() {
  const pickerGrid = document.getElementById('cashier-menu-picker-grid');
  if (!pickerGrid) return;

  const filtered = menuData
    .map((it, idx) => ({ ...it, idx }))
    .filter((it) => {
      if (state.cashierPickerCategory !== 'ALL' && it.category !== state.cashierPickerCategory) return false;
      if (!state.cashierPickerQuery) return true;
      return (
        it.nameAr.toLowerCase().includes(state.cashierPickerQuery) ||
        it.nameTr.toLowerCase().includes(state.cashierPickerQuery)
      );
    });

  pickerGrid.innerHTML = filtered.map((it) => `
    <button type="button" class="picker-item-btn" onclick="addMenuItemToCashierDraft(${it.idx})">
      <span>➕ ${escapeHtml(it.nameAr)}</span>
      <span class="ltr-text" style="color:var(--accent-gold); font-weight:800;">${Number(it.price)} ₺</span>
    </button>
  `).join('');
}

function renderCashierEditModalContent() {
  // 1. أزرار الإضافة السريعة (كولا، عيران، شاي، بطاطا، فلافل، مايونيز، سرفيس)
  const quickNames = ['كولا', 'عيران', 'شاي', 'فلافل لف', 'بطاطا وجبة', 'مايونيز', 'سرفيس'];
  const quickContainer = document.getElementById('cashier-quick-addons');
  if (quickContainer) {
    quickContainer.innerHTML = quickNames.map((qName) => {
      const idx = menuData.findIndex((m) => m.nameAr === qName);
      if (idx === -1) return '';
      const item = menuData[idx];
      return `
        <button type="button" class="btn-quick-addon" onclick="addMenuItemToCashierDraft(${idx})">
          <span>➕ ${escapeHtml(item.nameAr)}</span>
          <span class="ltr-text" style="color:var(--accent-gold);">${Number(item.price)} ₺</span>
        </button>
      `;
    }).join('');
  }

  // 2. شبكة كل الأصناف
  renderCashierPickerGrid();

  // 3. قائمة أصناف الطلب الحالية
  const listEl = document.getElementById('cashier-edit-items-list');
  const totalEl = document.getElementById('cashier-edit-total-val');
  if (!listEl || !totalEl) return;

  if (state.cashierEditDraftItems.length === 0) {
    listEl.innerHTML = `<div class="cart-empty-state" style="padding:1rem;">لا توجد أصناف في الطلب حالياً</div>`;
    totalEl.textContent = '0 ₺';
    return;
  }

  let sum = 0;
  listEl.innerHTML = state.cashierEditDraftItems.map((it, idx) => {
    const line = Number(it.price) * Number(it.qty);
    sum += line;
    return `
      <div class="cart-item-row" style="padding:0.55rem 0.8rem;">
        <div class="cart-item-info">
          <div class="cart-item-title-ar">
            ${escapeHtml(it.nameAr)}
            ${it.addedQty ? `<span class="added-qty-tag">+${Number(it.addedQty)} جديد</span>` : ''}
          </div>
          <div class="cart-item-title-tr">${escapeHtml(it.nameTr || '')} (${Number(it.price)} ₺)</div>
        </div>
        <div class="cart-item-controls">
          <div class="qty-stepper">
            <button type="button" class="btn-qty" onclick="updateCashierDraftItemQty(${idx}, -1)">−</button>
            <span class="qty-value">${Number(it.qty)}</span>
            <button type="button" class="btn-qty" onclick="updateCashierDraftItemQty(${idx}, 1)">+</button>
          </div>
          <div class="cart-item-price">${line} ₺</div>
          <button type="button" class="btn-trash" onclick="removeCashierDraftItem(${idx})">🗑️</button>
        </div>
      </div>
    `;
  }).join('');

  totalEl.textContent = `${sum} ₺`;
}

async function saveCashierOrderEdits(nextStatusOption = null, autoPrint = false) {
  const order = state.orders.find((o) => o.id === state.cashierEditingOrderId);
  if (!order) return;
  if (state.cashierEditDraftItems.length === 0) {
    showToast('لا يمكن حفظ طلب فارغ! أضف صنفاً أو احذف الطلب', 'danger');
    return;
  }

  const newTotal = state.cashierEditDraftItems.reduce(
    (s, it) => s + Number(it.price) * Number(it.qty),
    0
  );

  order.items = JSON.parse(JSON.stringify(state.cashierEditDraftItems));
  order.total = newTotal;
  order.lastModifiedAt = new Date().toTimeString().slice(0, 5);
  order.revision = (Number(order.revision) || 1) + 1;
  order.hasUnreadAdditions = false;
  order.isNewlyInjected = false;

  if (nextStatusOption) {
    order.status = nextStatusOption;
  }

  saveOrdersToStorage();
  updateHeaderBadges();
  renderCashierKanban();
  renderWaiterActiveOrdersStrip();

  const savedOrderId = order.id;
  closeCashierEditOrderModal();

  try {
    await fetch(`${FIREBASE_DB_URL}/orders/${savedOrderId}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });
  } catch (e) {}

  showToast(`✓ تم حفظ تعديلات الطلب #${savedOrderId} (المجموع: ${newTotal} ₺)`, 'success');

  if (autoPrint) {
    printReceiptById(savedOrderId);
  }
}

/**
 * ============================================================================
 * MODULE 4: ZJIANG POS-58 (58mm) THERMAL RECEIPT ENGINE
 * تصميم مبسط وواضح جداً بعرض فعلي 46mm يمنع انقسام الفيش إلى النصف نهائياً
 * ============================================================================
 */
function formatPriceClean(num) {
  const n = Number(num) || 0;
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

function printReceiptById(orderId) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;

  // عند فتح الفيش، نعتبر الإضافات مقروءة
  if (order.hasUnreadAdditions) {
    order.hasUnreadAdditions = false;
    order.isNewlyInjected = false;
    saveOrdersToStorage();
    updateHeaderBadges();
    renderCashierKanban();
  }

  let total = 0;
  const rows = order.items.map((item) => {
    const qty = Number(item.qty);
    const price = Number(item.price);
    const line = qty * price;
    total += line;
    return `
      <tr>
        <td class="receipt-col-item">
          <div class="receipt-item-ar">${escapeHtml(item.nameAr)}</div>
          <div class="receipt-item-sub">${escapeHtml(item.nameTr || '')} ${qty > 1 ? `(${qty}×${formatPriceClean(price)})` : ''}</div>
        </td>
        <td class="receipt-col-qty">${qty}x</td>
        <td class="receipt-col-total">${formatPriceClean(line)}</td>
      </tr>
    `;
  }).join('');

  const html = `
    <div class="receipt-wrapper">
      <div class="receipt-header">
        <div class="receipt-brand-ar">مطعم فلافل الدمشقي</div>
        <div class="receipt-brand-tr">FALAFEL ALDMŞKE RESTORAN</div>
        <div class="receipt-phones">0554 142 22 20 | 0539 522 63 88</div>
      </div>
      <div class="receipt-meta">
        <div class="receipt-meta-row">
          <span>رقم الفيش / Fiş:</span>
          <strong class="ltr-text">#${escapeHtml(order.id)}</strong>
        </div>
        <div class="receipt-meta-row">
          <span>الطاولة / Masa:</span>
          <strong>${escapeHtml(order.table)}</strong>
        </div>
        <div class="receipt-meta-row">
          <span>التاريخ / Tarih:</span>
          <span class="ltr-text">${order.dateISO || ''} ${escapeHtml(order.lastModifiedAt || order.createdAt)}</span>
        </div>
      </div>
      <table class="receipt-table">
        <thead>
          <tr>
            <th class="receipt-col-item">الصنف / Ürün</th>
            <th class="receipt-col-qty">الكمية</th>
            <th class="receipt-col-total">المجموع</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="receipt-total-block">
        <span>المجموع / TOPLAM:</span>
        <span class="ltr-text">${formatPriceClean(total)} TL</span>
      </div>
      <div class="receipt-footer">
        <div>شكراً لزيارتكم • صحتين وعافية</div>
        <div class="ltr-text">Afiyet Olsun • Yine Bekleriz</div>
      </div>
    </div>
  `;

  document.getElementById('print-section').innerHTML = html;
  document.getElementById('modal-thermal-preview').innerHTML = html;
  document.getElementById('receipt-modal-backdrop').classList.add('open');
}

function openZReportModal() {
  const completed = state.orders.filter((o) => o.status === 'completed');
  const now = Date.now();
  const dayMs = 86400000;

  let dayRev = 0, dayCnt = 0;
  let weekRev = 0, weekCnt = 0;
  let monthRev = 0, monthCnt = 0;
  let totalRev = 0;

  const map = new Map();

  completed.forEach((ord) => {
    const val = Number(ord.total);
    totalRev += val;
    const age = now - (ord.timestamp || now);
    if (age <= dayMs) { dayRev += val; dayCnt++; }
    if (age <= dayMs * 7) { weekRev += val; weekCnt++; }
    if (age <= dayMs * 30) { monthRev += val; monthCnt++; }

    ord.items.forEach((it) => {
      const prev = map.get(it.nameAr) || { nameAr: it.nameAr, qty: 0, rev: 0 };
      prev.qty += Number(it.qty);
      prev.rev += Number(it.qty) * Number(it.price);
      map.set(it.nameAr, prev);
    });
  });

  const rows = Array.from(map.values()).sort((a, b) => b.qty - a.qty).map((it) => `
    <tr>
      <td class="receipt-col-item"><div class="receipt-item-ar">${escapeHtml(it.nameAr)}</div></td>
      <td class="receipt-col-qty">${it.qty}x</td>
      <td class="receipt-col-total">${formatPriceClean(it.rev)}</td>
    </tr>
  `).join('');

  const html = `
    <div class="receipt-wrapper">
      <div class="receipt-header">
        <div class="receipt-brand-ar">تقرير الإغلاق (Z-REPORT)</div>
        <div class="receipt-brand-tr">FALAFEL ALDMŞKE • Z-REPORT</div>
      </div>
      <div class="receipt-meta">
        <div class="receipt-meta-row">
          <span>اليوم (24س):</span>
          <strong class="ltr-text">${dayCnt} | ${formatPriceClean(dayRev)} TL</strong>
        </div>
        <div class="receipt-meta-row">
          <span>الأسبوع (7أيام):</span>
          <strong class="ltr-text">${weekCnt} | ${formatPriceClean(weekRev)} TL</strong>
        </div>
        <div class="receipt-meta-row">
          <span>الشهر (30يوم):</span>
          <strong class="ltr-text">${monthCnt} | ${formatPriceClean(monthRev)} TL</strong>
        </div>
      </div>
      <table class="receipt-table">
        <thead>
          <tr>
            <th class="receipt-col-item">الصنف</th>
            <th class="receipt-col-qty">الكمية</th>
            <th class="receipt-col-total">الإجمالي</th>
          </tr>
        </thead>
        <tbody>${rows || '<tr><td colspan="3" style="text-align:center;">لا توجد مبيعات مكتملة</td></tr>'}</tbody>
      </table>
      <div class="receipt-total-block">
        <span>الإجمالي الكلي:</span>
        <span class="ltr-text">${formatPriceClean(totalRev)} TL</span>
      </div>
    </div>
  `;

  document.getElementById('print-section').innerHTML = html;
  document.getElementById('modal-thermal-preview').innerHTML = html;
  document.getElementById('receipt-modal-backdrop').classList.add('open');
}

function closeReceiptModal() {
  document.getElementById('receipt-modal-backdrop').classList.remove('open');
}

function openPriceEditorModal() {
  const listEl = document.getElementById('price-editor-list');
  listEl.innerHTML = '';
  menuData.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'price-editor-row';
    row.innerHTML = `
      <div><strong>${escapeHtml(item.nameAr)}</strong></div>
      <input type="number" class="price-editor-input" id="price-input-${idx}" value="${Number(item.price)}" />
    `;
    listEl.appendChild(row);
  });
  document.getElementById('price-editor-backdrop').classList.add('open');
}

function closePriceEditorModal() {
  document.getElementById('price-editor-backdrop').classList.remove('open');
}

function saveUpdatedMenuPrices() {
  menuData.forEach((item, idx) => {
    const input = document.getElementById(`price-input-${idx}`);
    if (input && Number(input.value) >= 0) item.price = Number(input.value);
  });
  saveMenuToStorage();
  renderMenuView();
  closePriceEditorModal();
  showToast('تم حفظ الأسعار ✓', 'success');
}

function escapeHtml(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * ============================================================================
 * دوال ضبط مقاس ومحاذات طابعة ZJIANG POS-58 (58mm) وحفظها تلقائياً
 * ============================================================================
 */
function loadPrintConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PRINT_CFG);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        state.printConfig = { ...state.printConfig, ...parsed };
      }
    }
  } catch (e) {}
  applyPrintConfigToDOM(false);
}

function savePrintConfig() {
  try {
    localStorage.setItem(STORAGE_KEY_PRINT_CFG, JSON.stringify(state.printConfig));
  } catch (e) {}
}

function setThermalPaperPreset(presetName) {
  state.printConfig.preset = presetName;
  savePrintConfig();
  applyPrintConfigToDOM(true);
}

function setThermalAlignment(alignMode) {
  state.printConfig.align = alignMode;
  savePrintConfig();
  applyPrintConfigToDOM(true);
}

function setThermalOffset(offsetMm) {
  state.printConfig.offsetMm = Number(offsetMm) || 0;
  savePrintConfig();
  applyPrintConfigToDOM(false);
}

function applyPrintConfigToDOM(showFeedback) {
  const root = document.documentElement;
  const { preset, align, offsetMm } = state.printConfig;

  let paperW = '58mm';
  let contentW = '46mm'; // ZJIANG POS-58 optimal printable width

  if (preset === 'safe42') {
    paperW = '58mm';
    contentW = '42mm';
  } else if (preset === '80') {
    paperW = '80mm';
    contentW = '72mm';
  } else {
    paperW = '58mm';
    contentW = '46mm';
  }

  let marginRule = '0 auto 0 0'; // Right anchor (default for RTL 58mm drivers)
  if (align === 'left') {
    marginRule = '0 0 0 auto';
  } else if (align === 'center') {
    marginRule = '0 auto';
  }

  root.style.setProperty('--print-paper-width', paperW);
  root.style.setProperty('--print-content-width', contentW);
  root.style.setProperty('--print-align-margin', marginRule);
  root.style.setProperty('--print-offset-x', `${offsetMm}mm`);

  // تحديث أزرار المقاس
  const btn58 = document.getElementById('btn-size-58');
  const btn42 = document.getElementById('btn-preset-safe42');
  const btn80 = document.getElementById('btn-size-80');
  if (btn58) btn58.className = preset === 'zjiang58' ? 'btn-gold' : 'btn-secondary';
  if (btn42) btn42.className = preset === 'safe42' ? 'btn-gold' : 'btn-secondary';
  if (btn80) btn80.className = preset === '80' ? 'btn-gold' : 'btn-secondary';
  [].forEach((p) => {
    if (btn) btn.className = preset === p ? 'btn-gold' : 'btn-secondary';
  });

  // تحديث أزرار المحاذاة
  ['right', 'center', 'left'].forEach((a) => {
    const btn = document.getElementById(`btn-align-${a}`);
    if (btn) btn.className = align === a ? 'btn-gold' : 'btn-secondary';
  });

  const lbl = document.getElementById('print-offset-label');
  if (lbl) lbl.textContent = `${offsetMm > 0 ? '+' : ''}${offsetMm}mm`;

  const rangeEl = document.getElementById('print-offset-range');
  if (rangeEl) rangeEl.value = String(offsetMm);

  let pageStyle = document.getElementById('dynamic-print-page-style');
  if (!pageStyle) {
    pageStyle = document.createElement('style');
    pageStyle.id = 'dynamic-print-page-style';
    document.head.appendChild(pageStyle);
  }

  pageStyle.innerHTML = `
    @media print {
      @page {
        size: ${paperW} auto !important;
        margin: 0mm !important;
      }
    }
  `;

  if (showFeedback) {
    showToast(`✓ تم ضبط الطابعة: عرض المحتوى ${contentW} (ZJIANG POS-58)`, 'success');
  }
}

// متوافق مع الاستدعاء القديم إن وجد
function setThermalPaperSize(sizeMm) {
  setThermalPaperPreset(sizeMm === '80' ? '80' : 'zjiang58');
}

function triggerBrowserPrint() {
  window.print();
}

function initPosApp() {
  loadMenuFromStorage();
  loadOrdersFromStorage();
  loadPrintConfig();
  initAudioElements();
  renderCategoryPills();
  renderWaiterActiveOrdersStrip();
  renderMenuView();
  renderCartView();
  renderCashierKanban();
  updateHeaderBadges();

  // جلب الطلبات من السحابة فوراً وتشغيل الـ Web Worker الخلفي الذي لا يتوقف في يوتيوب أو عند تصغير كروم
  syncNowFromCloud(false);
  startBackgroundSyncWorker();
}

window.addEventListener('DOMContentLoaded', initPosApp);
