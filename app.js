/**
 * ============================================================================
 * MODULE 1: THE COMPLETE MENU DATA (Updated 100% from Menu Photos + Easy Config)
 * يدعم خيارات الحجم (عادي Normal / دبل Double) وإدارة الأصناف بسهولة تامة
 * ============================================================================
 */
const FIREBASE_DB_URL = 'https://pos-kasher-default-rtdb.firebaseio.com';

const defaultMenuData = [
  // 1. سندويش فلافل (Falafel Dürüm) — يدعم خيار عادي / دبل
  { category: 'سندويش فلافل', nameAr: 'فلافل لف', nameTr: 'Falafel Dürüm', price: 110, hasSizeOption: true, doublePrice: 125 },
  { category: 'سندويش فلافل', nameAr: 'فلافل دبل', nameTr: 'Duble Falafel Dürüm', price: 125, hasSizeOption: true, doublePrice: 145 },
  { category: 'سندويش فلافل', nameAr: 'فلافل مع فول', nameTr: 'Baklalı Falafel Dürüm', price: 125, hasSizeOption: true, doublePrice: 145 },
  { category: 'سندويش فلافل', nameAr: 'فلافل مع بطاطا', nameTr: 'Patatesli Falafel Dürüm', price: 125, hasSizeOption: true, doublePrice: 145 },
  { category: 'سندويش فلافل', nameAr: 'فلافل عربي مع بطاطا', nameTr: 'Patatesli Falafel Dürüm (Arap)', price: 185, hasSizeOption: true, doublePrice: 220 },

  // 2. شاميات (Şam Mutfağı)
  { category: 'شاميات', nameAr: 'فول بطحينة', nameTr: 'Tahinli Bakla', price: 155, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'فول مدمس بزيت', nameTr: 'Zeytinyağlı Bakla', price: 155, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'فول بطحينة مهروس', nameTr: 'Tahinli Bakla Ezmesi', price: 155, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'فول بزيت مهروس', nameTr: 'Zeytinyağlı Bakla Ezmesi', price: 155, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'حمص حب بطحينة', nameTr: 'Tahinli Nohut', price: 155, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'حمص حب بزيت', nameTr: 'Zeytinyağlı Nohut', price: 155, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'حمص بطحينة (مسبحة)', nameTr: 'Tahinli Humus', price: 150, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'فتة بزيت بلدي', nameTr: 'Zeytinyağlı Fette', price: 170, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'فتة بسمنة', nameTr: 'Tereyağlı Fette', price: 170, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'فتة بزيت فقسة', nameTr: 'Zeytinyağlı Fette (فقسة)', price: 170, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'فتة بالكاجو', nameTr: 'Kajulu Fette', price: 260, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'فتة باللحمة', nameTr: 'Etli Fette', price: 285, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'مسبحة بيروتية', nameTr: 'Beyrut Usulü Müsebbaha', price: 155, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'مسبحة باللحمة', nameTr: 'Beyrut Usulü Humus', price: 265, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'مسبحة بالكاجو', nameTr: 'Kajulu Humus', price: 260, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'متبل باذنجان', nameTr: 'Tahinli Yoğurtlu Patlıcan', price: 150, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'فلافل 6 قرص', nameTr: '6 Adet Falafel', price: 120, hasSizeOption: false },
  { category: 'شاميات', nameAr: 'فلافل 10 قرص', nameTr: '10 Adet Falafel', price: 150, hasSizeOption: false },

  // 3. وجبات الدجاج - وجبة (Tavuk Menüleri - Porsiyon)
  { category: 'غربي - وجبة', nameAr: 'كريسبي وجبة', nameTr: 'Çıtır Tavuk Porsiyon', price: 250, hasSizeOption: false },
  { category: 'غربي - وجبة', nameAr: 'سكالوب وجبة', nameTr: 'Galata Çıtır Tavuk Porsiyon', price: 250, hasSizeOption: false },
  { category: 'غربي - وجبة', nameAr: 'زنجر وجبة', nameTr: 'Acı Çıtır Tavuk Porsiyon', price: 250, hasSizeOption: false },
  { category: 'غربي - وجبة', nameAr: 'فاهيتا وجبة', nameTr: 'Tavuk Fajita Porsiyon', price: 260, hasSizeOption: false },
  { category: 'غربي - وجبة', nameAr: 'فرانشيسكو وجبة', nameTr: 'Mantarlı Kaşarlı Tavuk Porsiyon', price: 260, hasSizeOption: false },
  { category: 'غربي - وجبة', nameAr: 'مكسيكي وجبة', nameTr: 'Meksika Usulü Tavuk Porsiyon', price: 250, hasSizeOption: false },
  { category: 'غربي - وجبة', nameAr: 'شيش وجبة', nameTr: 'Tavuk Şiş Porsiyon', price: 250, hasSizeOption: false },
  { category: 'غربي - وجبة', nameAr: 'بطاطا وجبة', nameTr: 'Patates Kızartması Porsiyon', price: 150, hasSizeOption: false },
  { category: 'غربي - وجبة', nameAr: 'بطاطا مع قشقوان وجبة', nameTr: 'Kaşarlı Patates Porsiyon', price: 170, hasSizeOption: false },

  // 4. وجبات الدجاج - سندويش (Tavuk Menüleri - Dürüm) — يدعم خيار عادي / دبل
  { category: 'غربي - سندويش', nameAr: 'كريسبي سندويش', nameTr: 'Çıtır Tavuk Dürüm', price: 150, hasSizeOption: true, doublePrice: 200 },
  { category: 'غربي - سندويش', nameAr: 'سكالوب سندويش', nameTr: 'Galata Çıtır Tavuk Dürüm', price: 150, hasSizeOption: true, doublePrice: 200 },
  { category: 'غربي - سندويش', nameAr: 'زنجر سندويش', nameTr: 'Acı Çıtır Tavuk Dürüm', price: 150, hasSizeOption: true, doublePrice: 200 },
  { category: 'غربي - سندويش', nameAr: 'فاهيتا سندويش', nameTr: 'Tavuk Fajita Dürüm', price: 150, hasSizeOption: true, doublePrice: 200 },
  { category: 'غربي - سندويش', nameAr: 'فرانشيسكو سندويش', nameTr: 'Mantarlı Kaşarlı Tavuk Dürüm', price: 150, hasSizeOption: true, doublePrice: 200 },
  { category: 'غربي - سندويش', nameAr: 'مكسيكي سندويش', nameTr: 'Meksika Usulü Tavuk Dürüm', price: 150, hasSizeOption: true, doublePrice: 200 },
  { category: 'غربي - سندويش', nameAr: 'شيش سندويش', nameTr: 'Tavuk Şiş Dürüm', price: 150, hasSizeOption: true, doublePrice: 200 },
  { category: 'غربي - سندويش', nameAr: 'بطاطا سندويش', nameTr: 'Patates Kızartması Dürüm', price: 125, hasSizeOption: true, doublePrice: 160 },
  { category: 'غربي - سندويش', nameAr: 'بطاطا مع قشقوان سندويش', nameTr: 'Kaşarlı Patates Dürüm', price: 170, hasSizeOption: true, doublePrice: 210 },

  // 5. وجبات الدجاج - عربي (Tavuk Menüleri - Arap Dürümü) — يدعم خيار عادي / دبل
  { category: 'غربي - عربي', nameAr: 'كريسبي عربي', nameTr: 'Çıtır Tavuk (Arap Dürümü)', price: 225, hasSizeOption: true, doublePrice: 285 },
  { category: 'غربي - عربي', nameAr: 'سكالوب عربي', nameTr: 'Galata Çıtır Tavuk (Arap Dürümü)', price: 225, hasSizeOption: true, doublePrice: 285 },
  { category: 'غربي - عربي', nameAr: 'زنجر عربي', nameTr: 'Acı Çıtır Tavuk (Arap Dürümü)', price: 225, hasSizeOption: true, doublePrice: 285 },
  { category: 'غربي - عربي', nameAr: 'فاهيتا عربي', nameTr: 'Tavuk Fajita (Arap Dürümü)', price: 225, hasSizeOption: true, doublePrice: 285 },
  { category: 'غربي - عربي', nameAr: 'فرانشيسكو عربي', nameTr: 'Mantarlı Kaşarlı Tavuk (Arap Dürümü)', price: 225, hasSizeOption: true, doublePrice: 285 },
  { category: 'غربي - عربي', nameAr: 'مكسيكي عربي', nameTr: 'Meksika Usulü Tavuk (Arap Dürümü)', price: 225, hasSizeOption: true, doublePrice: 285 },
  { category: 'غربي - عربي', nameAr: 'شيش عربي', nameTr: 'Tavuk Şiş (Arap Dürümü)', price: 225, hasSizeOption: true, doublePrice: 285 },
  { category: 'غربي - عربي', nameAr: 'بطاطا عربي', nameTr: 'Patates Kızartması (Arap Dürümü)', price: 185, hasSizeOption: true, doublePrice: 230 },
  { category: 'غربي - عربي', nameAr: 'بطاطا مع قشقوان عربي', nameTr: 'Kaşarlı Patates (Arap Dürümü)', price: 235, hasSizeOption: true, doublePrice: 285 },

  // 6. سلطات وإضافات (Şark Salatası)
  { category: 'سلطات', nameAr: 'سلطة شرقية', nameTr: 'Şark Salatası', price: 140, hasSizeOption: false },
  { category: 'سلطات', nameAr: 'فتوش', nameTr: 'Fettuş', price: 140, hasSizeOption: false },
  { category: 'سلطات', nameAr: 'تبولة', nameTr: 'Tabbule', price: 140, hasSizeOption: false },
  { category: 'سلطات', nameAr: 'سلطة روسية', nameTr: 'Rus Salatası', price: 50, hasSizeOption: false },
  { category: 'سلطات', nameAr: 'زينة خضرة', nameTr: 'Yeşillik Tabağı', price: 50, hasSizeOption: false },
  { category: 'سلطات', nameAr: 'سرفيس', nameTr: 'Servis', price: 50, hasSizeOption: false },
  { category: 'سلطات', nameAr: 'مايونيز', nameTr: 'Mayonez', price: 20, hasSizeOption: false },
  { category: 'سلطات', nameAr: 'كاتشب', nameTr: 'Ketçap', price: 20, hasSizeOption: false },

  // 7. مشروبات (İçecekler)
  { category: 'مشروبات', nameAr: 'ماء', nameTr: 'Su', price: 15, hasSizeOption: false },
  { category: 'مشروبات', nameAr: 'كولا', nameTr: 'Cola Turka', price: 60, hasSizeOption: false },
  { category: 'مشروبات', nameAr: 'كولا برتقال', nameTr: 'Sarıyer Orange', price: 60, hasSizeOption: false },
  { category: 'مشروبات', nameAr: 'تشامليجا', nameTr: 'Çamlıca Gazoz', price: 50, hasSizeOption: false },
  { category: 'مشروبات', nameAr: 'كازوز', nameTr: 'Niğde Gazozu', price: 50, hasSizeOption: false },
  { category: 'مشروبات', nameAr: 'عيران', nameTr: 'Ayran', price: 30, hasSizeOption: false },
  { category: 'مشروبات', nameAr: 'أفشار', nameTr: 'Avşar Maden Suyu', price: 40, hasSizeOption: false },
  { category: 'مشروبات', nameAr: 'شاي', nameTr: 'Çay', price: 20, hasSizeOption: false },

  // 8. كوكتيلات (Kokteyller)
  { category: 'كوكتيلات', nameAr: 'موز و حليب', nameTr: 'Muzlu Süt', price: 100, hasSizeOption: false },
  { category: 'كوكتيلات', nameAr: 'موز و حليب و فريز', nameTr: 'Muzlu Çilekli Süt', price: 120, hasSizeOption: false },
  { category: 'كوكتيلات', nameAr: 'موز و حليب و عسل', nameTr: 'Muzlu Ballı Süt', price: 120, hasSizeOption: false },
  { category: 'كوكتيلات', nameAr: 'كوكتيل فواكه', nameTr: 'Meyveli Kaymaklı Milkshake', price: 140, hasSizeOption: false },
  { category: 'كوكتيلات', nameAr: 'موز و حليب و شوكولاه', nameTr: 'Muzlu Çikolatalı Süt', price: 120, hasSizeOption: false }
];

const STORAGE_KEY_MENU = 'falafel_damashqi_pos_menu_v5';
const STORAGE_KEY_ORDERS = 'falafel_damashqi_pos_orders_v3';
const STORAGE_KEY_ARCHIVE = 'falafel_damashqi_pos_archive_v1';
const STORAGE_KEY_LAST_RESET = 'falafel_damashqi_pos_last_reset_v1';
const STORAGE_KEY_AUTO_REPORT_DATE = 'falafel_damashqi_pos_auto_report_9pm_v1';
const STORAGE_KEY_PRINT_CFG = 'falafel_damashqi_pos_print_cfg_v4';

let menuData = JSON.parse(JSON.stringify(defaultMenuData));

// دالة برمجية مساعدة لإضافة أو تحديث أي صنف في المنيو بسهولة
function addOrUpdateMenuItem({ category, nameAr, nameTr, price, hasSizeOption = false, doublePrice = null }) {
  if (!category || !nameAr) return false;
  const cleanPrice = Number(price) || 0;
  const isSandwich = Boolean(hasSizeOption) || category.includes('سندويش') || category.includes('عربي');
  const cleanDouble = isSandwich ? (Number(doublePrice) || Math.round(cleanPrice * 1.3)) : cleanPrice;

  const existingIdx = menuData.findIndex((m) => m.nameAr === nameAr && m.category === category);
  const itemObj = {
    category: String(category).trim(),
    nameAr: String(nameAr).trim(),
    nameTr: String(nameTr || '').trim(),
    price: cleanPrice,
    hasSizeOption: isSandwich,
    doublePrice: cleanDouble
  };

  if (existingIdx !== -1) {
    menuData[existingIdx] = itemObj;
  } else {
    menuData.push(itemObj);
  }
  saveMenuToStorage();
  renderCategoryPills();
  renderMenuView();
  return true;
}

/**
 * ============================================================================
 * MODULE 2: SOFT, GENTLE NOTIFICATION CHIME ENGINE (Requirement 4)
 * نغمة تنبيه هادئة، ناعمة، وغير مزعجة عند وصول الطلب للكاشير
 * ============================================================================
 */
let isAudioUnlocked = false;
let webAudioCtx = null;
let softChimeAudioEl = null;
let silentKeepAliveAudioEl = null;
let repeatBellTimer = null;
let titleFlashTimer = null;
const ORIGINAL_DOC_TITLE = document.title;

// توليد ملف WAV لنغمة هادئة وناعمة جداً (Soft Warm Harmonic Chime)
function generateSoftGentleChimeWavBlobUrl() {
  const sampleRate = 44100;
  const durationSec = 1.6;
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
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, numSamples * 2, true);

  // نغمتان هادئتان متناغمتان (C5 -> E5) بموجة جيبية ناعمة (Pure Sine Wave)
  const notes = [
    { start: 0.0, freq: 523.25, amp: 0.22, decay: 3.2 }, // C5 هادئة
    { start: 0.22, freq: 659.25, amp: 0.20, decay: 2.8 } // E5 دافئة
  ];

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    let sample = 0;

    for (let n = 0; n < notes.length; n++) {
      const dt = t - notes[n].start;
      if (dt >= 0) {
        // دخول تدريجي ناعم (Soft Attack 25ms) وتلاشي هادئ
        const attack = Math.min(1, dt / 0.025);
        const env = attack * Math.exp(-notes[n].decay * dt);
        sample += Math.sin(2 * Math.PI * notes[n].freq * dt) * notes[n].amp * env;
        sample += Math.sin(2 * Math.PI * (notes[n].freq * 2) * dt) * (notes[n].amp * 0.15) * env;
      }
    }

    const pcmVal = Math.max(-32767, Math.min(32767, Math.floor(sample * 32767)));
    view.setInt16(44 + i * 2, pcmVal, true);
  }

  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

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
    view.setInt16(44 + i * 2, 0, true);
  }

  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

function initAudioElements() {
  if (!softChimeAudioEl) {
    softChimeAudioEl = new Audio(generateSoftGentleChimeWavBlobUrl());
    softChimeAudioEl.preload = 'auto';
    softChimeAudioEl.volume = 0.45;
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
    text.textContent = 'النغمة الهادئة مفعّلة / Ses Aktif';
  }
  if (showNotification) {
    playOrderAlertPing();
    showToast('🔔 تم تفعيل نغمة التنبيه الهادئة بنجاح!', 'success');
  }
}

function playSynthesizedSoftChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!webAudioCtx) webAudioCtx = new AudioContextClass();
    if (webAudioCtx.state === 'suspended') webAudioCtx.resume();

    const now = webAudioCtx.currentTime;
    const softNotes = [
      { freq: 523.25, delay: 0.0, duration: 1.1 },  // C5
      { freq: 659.25, delay: 0.22, duration: 1.3 }  // E5
    ];

    softNotes.forEach((n) => {
      const osc = webAudioCtx.createOscillator();
      const gain = webAudioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(n.freq, now + n.delay);

      gain.gain.setValueAtTime(0.001, now + n.delay);
      gain.gain.linearRampToValueAtTime(0.18, now + n.delay + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + n.delay + n.duration);

      osc.connect(gain);
      gain.connect(webAudioCtx.destination);
      osc.start(now + n.delay);
      osc.stop(now + n.delay + n.duration + 0.02);
    });
  } catch (e) {}
}

function playOrderAlertPing() {
  initAudioElements();

  try {
    softChimeAudioEl.currentTime = 0;
    softChimeAudioEl.volume = 0.45;
    const p = softChimeAudioEl.play();
    if (p !== undefined) {
      p.catch(() => {});
    }
  } catch (e) {}

  playSynthesizedSoftChime();
}

function sendBackgroundSystemNotification(title, bodyText) {
  try {
    if ('Notification' in window && Notification.permission === 'granted') {
      const n = new Notification(title, {
        body: bodyText,
        tag: 'falafel-pos-order-alert',
        renotify: true
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
          ? `🔔 (${unacknowledgedOrders.length}) طلب جديد — فلافل الدمشقي`
          : ORIGINAL_DOC_TITLE;
      }, 1200);
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
      }, 10000);
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
      ? '🔁 تذكير النغمة الهادئة: مفعّل'
      : '🔂 تذكير النغمة: مرة واحدة';
    btn.className = state.repeatBellUntilAccepted ? 'btn-gold' : 'btn-secondary';
  }
  updateBackgroundAlarmLoop();
}

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
  targetExistingOrderId: null,
  selectedSizes: {}, // { [itemIndex]: 'normal' | 'double' }
  draftNotes: {},    // { [itemIndex]: 'بدون صوص...' }
  cart: [],
  orders: [],
  archivedOrders: [],
  repeatBellUntilAccepted: true,
  cashierEditingOrderId: null,
  cashierEditDraftItems: [],
  cashierEditTable: '',
  cashierPickerQuery: '',
  cashierPickerCategory: 'ALL',
  pendingDeleteOrderId: null,
  printConfig: {
    preset: 'zjiang58',
    align: 'right',
    offsetMm: 0
  }
};

function getLocalDateISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function isSandwichItem(item) {
  if (!item) return false;
  if (typeof item.hasSizeOption === 'boolean') return item.hasSizeOption;
  return item.category.includes('سندويش') || item.category.includes('عربي');
}

function getDoublePrice(item) {
  if (!item) return 0;
  if (item.doublePrice && Number(item.doublePrice) > 0) return Number(item.doublePrice);
  return Math.round(Number(item.price) * 1.3);
}

function loadMenuFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MENU);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
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
      }
    }
    const rawArch = localStorage.getItem(STORAGE_KEY_ARCHIVE);
    if (rawArch) {
      const parsedArch = JSON.parse(rawArch);
      if (Array.isArray(parsedArch)) {
        state.archivedOrders = parsedArch;
      }
    }
  } catch (e) {
    state.orders = [];
  }
}

function saveOrdersToStorage() {
  try { localStorage.setItem(STORAGE_KEY_ORDERS, JSON.stringify(state.orders)); } catch (e) {}
}

function saveArchivedOrdersToStorage() {
  try { localStorage.setItem(STORAGE_KEY_ARCHIVE, JSON.stringify(state.archivedOrders)); } catch (e) {}
}

/**
 * ============================================================================
 * MODULE 5: DAILY 24-HOUR AUTOMATIC RESET & 9:00 PM AUTO DAILY REPORT
 * (Requirements 5 & 6)
 * ============================================================================
 */
async function checkAndRunDailyReset() {
  const todayISO = getLocalDateISO();
  let lastResetDate = '';
  try {
    lastResetDate = localStorage.getItem(STORAGE_KEY_LAST_RESET) || '';
  } catch (e) {}

  if (!lastResetDate) {
    try { localStorage.setItem(STORAGE_KEY_LAST_RESET, todayISO); } catch (e) {}
    return;
  }

  // إذا دخل يوم جديد (منتصف الليل 00:00 أو أول فتح في اليوم الجديد)
  if (lastResetDate !== todayISO) {
    const completedToArchive = state.orders.filter((o) => o.status === 'completed');
    const remainingActive = state.orders.filter((o) => o.status !== 'completed');

    if (completedToArchive.length > 0) {
      state.archivedOrders = [...completedToArchive, ...state.archivedOrders].slice(0, 500);
      saveArchivedOrdersToStorage();

      // حذف الطلبات المكتملة المؤرشفة من السحابة ليبدأ اليوم الجديد بصفر
      for (const compOrd of completedToArchive) {
        try {
          fetch(`${FIREBASE_DB_URL}/orders/${compOrd.id}.json`, { method: 'DELETE' }).catch(() => {});
        } catch (e) {}
      }
    }

    state.orders = remainingActive;
    saveOrdersToStorage();
    try { localStorage.setItem(STORAGE_KEY_LAST_RESET, todayISO); } catch (e) {}

    updateHeaderBadges();
    renderCashierKanban();
    renderWaiterActiveOrdersStrip();
    showToast('🔄 تم تصفير الطلبات المكتملة تلقائياً لبداية يوم جديد (00:00)', 'success');
  }
}

function checkAutoDailyReport9PM() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const todayISO = getLocalDateISO();

  // عند الساعة 9:00 مساءً (21:00) يتم إصدار وعرض التقرير اليومي تلقائياً مرة واحدة يومياً
  if (hours === 21 && minutes >= 0) {
    let lastShownDate = '';
    try {
      lastShownDate = localStorage.getItem(STORAGE_KEY_AUTO_REPORT_DATE) || '';
    } catch (e) {}

    if (lastShownDate !== todayISO) {
      try { localStorage.setItem(STORAGE_KEY_AUTO_REPORT_DATE, todayISO); } catch (e) {}
      openDailyReport9PMModal(true);
      playOrderAlertPing();
      showToast('📊 تم إصدار التقرير اليومي التلقائي (الساعة 9:00 مساءً)', 'success');
    }
  }
}

function openDailyReport9PMModal(isAutoTriggered = false) {
  const todayISO = getLocalDateISO();
  const nowTime = new Date().toTimeString().slice(0, 5);

  // جمع طلبات اليوم (النشطة والمكتملة)
  const todayOrders = state.orders.filter((o) => (o.dateISO || todayISO) === todayISO);
  const completedToday = todayOrders.filter((o) => o.status === 'completed');
  const preparingToday = todayOrders.filter((o) => o.status === 'preparing');
  const newToday = todayOrders.filter((o) => o.status === 'new');

  const completedRevenue = completedToday.reduce((s, o) => s + Number(o.total || 0), 0);
  const pendingRevenue = [...preparingToday, ...newToday].reduce((s, o) => s + Number(o.total || 0), 0);
  const totalDayRevenue = completedRevenue + pendingRevenue;

  // حساب أكثر الأصناف طلباً اليوم
  const itemMap = new Map();
  todayOrders.forEach((ord) => {
    (ord.items || []).forEach((it) => {
      const key = it.nameAr;
      const prev = itemMap.get(key) || { nameAr: it.nameAr, qty: 0, rev: 0 };
      prev.qty += Number(it.qty || 0);
      prev.rev += Number(it.qty || 0) * Number(it.price || 0);
      itemMap.set(key, prev);
    });
  });

  const topItems = Array.from(itemMap.values()).sort((a, b) => b.qty - a.qty);
  const topRowsHtml = topItems.map((it, idx) => `
    <tr>
      <td class="receipt-col-item">
        <div class="receipt-item-ar">${idx + 1}. ${escapeHtml(it.nameAr)}</div>
      </td>
      <td class="receipt-col-qty">${it.qty}x</td>
      <td class="receipt-col-total">${formatPriceClean(it.rev)}</td>
    </tr>
  `).join('');

  const html = `
    <div class="receipt-wrapper">
      <div class="receipt-logo-wrap">
        <img src="Falafel aldmşke.png" alt="Logo" class="receipt-logo-img">
      </div>
      <div class="receipt-header">
        <div class="receipt-brand-ar">التقرير اليومي (9:00 مساءً)</div>
        <div class="receipt-brand-tr">FALAFEL ALDMŞKE • DAILY REPORT</div>
        <div class="receipt-phones">${todayISO} • ${nowTime}</div>
      </div>
      <div class="receipt-meta">
        <div class="receipt-meta-row">
          <span>إجمالي طلبات اليوم:</span>
          <strong class="ltr-text">${todayOrders.length} طلب</strong>
        </div>
        <div class="receipt-meta-row">
          <span>الطلبات المكتملة:</span>
          <strong class="ltr-text">${completedToday.length} (${formatPriceClean(completedRevenue)} TL)</strong>
        </div>
        <div class="receipt-meta-row">
          <span>قيد التحضير / جديدة:</span>
          <strong class="ltr-text">${preparingToday.length + newToday.length} (${formatPriceClean(pendingRevenue)} TL)</strong>
        </div>
      </div>
      <div style="font-weight:900; font-size:11px; text-align:right; margin-bottom:3px; border-bottom:1px solid #000;">
        🏆 أكثر الأصناف طلباً اليوم:
      </div>
      <table class="receipt-table">
        <thead>
          <tr>
            <th class="receipt-col-item">الصنف</th>
            <th class="receipt-col-qty">الكمية</th>
            <th class="receipt-col-total">الإجمالي</th>
          </tr>
        </thead>
        <tbody>${topRowsHtml || '<tr><td colspan="3" style="text-align:center;">لا توجد طلبات مسجلة اليوم</td></tr>'}</tbody>
      </table>
      <div class="receipt-total-block">
        <span>إجمالي مبيعات اليوم:</span>
        <span class="ltr-text">${formatPriceClean(totalDayRevenue)} TL</span>
      </div>
      <div class="receipt-footer">
        <div>${isAutoTriggered ? 'تقرير يومي تلقائي — الساعة 9:00 مساءً' : 'تقرير مبيعات اليوم المباشر'}</div>
      </div>
    </div>
  `;

  const titleEl = document.getElementById('receipt-modal-title');
  if (titleEl) {
    titleEl.textContent = isAutoTriggered
      ? '🕘 التقرير اليومي التلقائي (الساعة 9:00 مساءً)'
      : '📊 التقرير اليومي الشامل (مبيعات وطلبات اليوم)';
  }

  document.getElementById('print-section').innerHTML = html;
  document.getElementById('modal-thermal-preview').innerHTML = html;
  document.getElementById('receipt-modal-backdrop').classList.add('open');
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
 * WAITER FEATURE: ACTIVE TABLE ORDERS & DELETE WRONG ORDER (Requirement 8)
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
        <div style="display:flex; gap:0.35rem; align-items:center;">
          <button type="button" class="btn-append-table ${isTarget ? 'active-mode' : ''}" onclick="startWaiterAppendToOrder('${ord.id}')">
            ${isTarget ? '✓ جاري الإضافة' : '➕ إضافة'}
          </button>
          <button type="button" class="btn-waiter-delete-order" onclick="openDeleteOrderConfirmModal('${ord.id}')" title="حذف الطلب الخطأ حتى لو قيد التحضير">
            🗑️ حذف الطلب
          </button>
        </div>
      </div>
    `;
  }).join('');

  stripEl.innerHTML = `
    <div class="active-tables-header">
      <span>🪑 الطلبات النشطة حالياً (يمكن للنادل إضافة أصناف أو حذف الطلب الخطأ حتى لو كان قيد التحضير):</span>
      <span style="font-size:0.75rem; color:var(--text-muted);">${activeOrders.length} طلبات نشطة</span>
    </div>
    <div class="active-tables-list">${chipsHtml}</div>
  `;
}

/**
 * ============================================================================
 * MENU RENDERING WITH SANDWICH SIZE (NORMAL/DOUBLE) & ITEM NOTES
 * (Requirements 2 & 3)
 * ============================================================================
 */
function selectItemSize(itemIndex, sizeMode) {
  state.selectedSizes[itemIndex] = sizeMode;
  renderMenuView();
}

function handleDraftNoteInput(itemIndex, val) {
  state.draftNotes[itemIndex] = val;
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
      const matchingInCart = state.cart.filter((c) => c.itemIndex === item.itemIndex);
      const qtyInCart = matchingInCart.reduce((s, c) => s + Number(c.qty), 0);

      const hasSizes = isSandwichItem(item);
      const currentSize = state.selectedSizes[item.itemIndex] || 'normal';
      const normalPrice = Number(item.price);
      const doublePrice = getDoublePrice(item);
      const activePrice = hasSizes && currentSize === 'double' ? doublePrice : normalPrice;
      const draftNoteVal = state.draftNotes[item.itemIndex] || '';

      const sizeSelectorHtml = hasSizes ? `
        <div class="size-selector-group">
          <button type="button" class="btn-size-option ${currentSize === 'normal' ? 'active' : ''}" onclick="selectItemSize(${item.itemIndex}, 'normal')">
            <span>عادي (Normal)</span>
            <span class="ltr-text">${normalPrice}₺</span>
          </button>
          <button type="button" class="btn-size-option ${currentSize === 'double' ? 'active' : ''}" onclick="selectItemSize(${item.itemIndex}, 'double')">
            <span>🔥 دبل (Double)</span>
            <span class="ltr-text">${doublePrice}₺</span>
          </button>
        </div>
      ` : '';

      const card = document.createElement('div');
      card.className = `menu-card ${qtyInCart > 0 ? 'in-cart' : ''}`;
      card.innerHTML = `
        <div class="menu-card-top-row">
          <div class="menu-card-names">
            <div class="menu-name-ar">${escapeHtml(item.nameAr)}</div>
            <div class="menu-name-tr">${escapeHtml(item.nameTr)}</div>
          </div>
          <div class="menu-card-right">
            <span class="menu-price-tag">${activePrice} ₺</span>
            <button type="button" class="btn-add-item" onclick="addItemToCart(${item.itemIndex})">
              +
              ${qtyInCart > 0 ? `<span class="item-qty-indicator">${qtyInCart}</span>` : ''}
            </button>
          </div>
        </div>
        <div class="menu-card-options-row">
          ${sizeSelectorHtml}
          <div class="item-note-inline-wrap">
            <input
              type="text"
              class="item-note-input"
              placeholder="📝 ملاحظة خاصة (مثلاً: بدون صوص، زيادة طحينة...)"
              value="${escapeHtml(draftNoteVal)}"
              oninput="handleDraftNoteInput(${item.itemIndex}, this.value)"
            />
          </div>
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

  const hasSizes = isSandwichItem(sourceItem);
  const chosenSize = hasSizes ? (state.selectedSizes[itemIndex] || 'normal') : 'standard';
  const unitPrice = (hasSizes && chosenSize === 'double')
    ? getDoublePrice(sourceItem)
    : Number(sourceItem.price);

  const noteText = String(state.draftNotes[itemIndex] || '').trim();

  const sizeLabelAr = chosenSize === 'double' ? ' (دبل)' : (chosenSize === 'normal' ? ' (عادي)' : '');
  const sizeLabelTr = chosenSize === 'double' ? ' (Double)' : (chosenSize === 'normal' ? ' (Normal)' : '');

  const cartKey = `${itemIndex}__${chosenSize}__${noteText}`;
  const existing = state.cart.find((c) => c.cartKey === cartKey);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      cartKey,
      itemIndex,
      nameAr: `${sourceItem.nameAr}${sizeLabelAr}`,
      nameTr: `${sourceItem.nameTr}${sizeLabelTr}`,
      baseNameAr: sourceItem.nameAr,
      size: chosenSize,
      note: noteText,
      price: unitPrice,
      qty: 1
    });
  }

  // تفريغ حقل الملاحظة بعد الإضافة ليكون جاهزاً للصنف التالي
  state.draftNotes[itemIndex] = '';

  updateHeaderBadges();
  renderWaiterActiveOrdersStrip();
  renderMenuView();
  showToast(`+1 ${sourceItem.nameAr}${sizeLabelAr}${noteText ? ' 📝' : ''}`, 'gold');
}

function updateCartItemQtyByKey(cartKey, delta) {
  const idx = state.cart.findIndex((c) => c.cartKey === cartKey);
  if (idx === -1) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
  updateHeaderBadges();
  renderCartView();
  renderMenuView();
}

function updateCartItemNoteByKey(cartKey, newNote) {
  const item = state.cart.find((c) => c.cartKey === cartKey);
  if (!item) return;
  item.note = String(newNote || '').trim();
}

function removeCartItemByKey(cartKey) {
  state.cart = state.cart.filter((c) => c.cartKey !== cartKey);
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
  state.cart.forEach((item, idx) => {
    const lineTotal = Number(item.price) * Number(item.qty);
    const sizeBadge = item.size === 'double'
      ? `<span class="item-size-badge size-double">🔥 دبل / Double</span>`
      : (item.size === 'normal' ? `<span class="item-size-badge size-normal">عادي / Normal</span>` : '');

    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="cart-item-main-line">
        <div class="cart-item-info">
          <div class="cart-item-title-ar">${escapeHtml(item.nameAr)} ${sizeBadge}</div>
          <div class="cart-item-title-tr">${escapeHtml(item.nameTr)}</div>
        </div>
        <div class="cart-item-controls">
          <div class="qty-stepper">
            <button type="button" class="btn-qty" onclick="updateCartItemQtyIndex(${idx}, -1)">−</button>
            <span class="qty-value">${Number(item.qty)}</span>
            <button type="button" class="btn-qty" onclick="updateCartItemQtyIndex(${idx}, 1)">+</button>
          </div>
          <div class="cart-item-price">${lineTotal} ₺</div>
          <button type="button" class="btn-trash" onclick="removeCartItemIndex(${idx})">🗑️</button>
        </div>
      </div>
      <div class="item-note-inline-wrap">
        <input
          type="text"
          class="item-note-input"
          placeholder="📝 ملاحظة خاصة لهذا الصنف (تظهر للكاشير والمطبخ ولا تطبع بالفيش)..."
          value="${escapeHtml(item.note || '')}"
          oninput="updateCartItemNoteIndex(${idx}, this.value)"
        />
      </div>
    `;
    container.appendChild(row);
  });

  grandTotalEl.textContent = `${calculateCartTotal()} ₺`;
}

function updateCartItemQtyIndex(idx, delta) {
  if (!state.cart[idx]) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
  updateHeaderBadges();
  renderCartView();
  renderMenuView();
}

function updateCartItemNoteIndex(idx, val) {
  if (!state.cart[idx]) return;
  state.cart[idx].note = String(val || '').trim();
}

function removeCartItemIndex(idx) {
  state.cart.splice(idx, 1);
  updateHeaderBadges();
  renderCartView();
  renderMenuView();
}

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
    const existingItem = updatedItems.find(
      (it) => it.nameAr === cartItem.nameAr && (it.note || '') === (cartItem.note || '') && (it.size || '') === (cartItem.size || '')
    );
    if (existingItem) {
      existingItem.qty = Number(existingItem.qty) + Number(cartItem.qty);
      existingItem.addedQty = (Number(existingItem.addedQty) || 0) + Number(cartItem.qty);
    } else {
      updatedItems.push({
        nameAr: cartItem.nameAr,
        nameTr: cartItem.nameTr,
        size: cartItem.size || 'standard',
        note: cartItem.note || '',
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
    dateISO: getLocalDateISO(),
    status: 'new',
    revision: 1,
    hasUnreadAdditions: false,
    items: state.cart.map((c) => ({
      nameAr: c.nameAr,
      nameTr: c.nameTr,
      size: c.size || 'standard',
      note: c.note || '',
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
      state.orders = [];
      saveOrdersToStorage();
      updateHeaderBadges();
      renderCashierKanban();
      if (state.roleMode === 'waiter') renderWaiterActiveOrdersStrip();
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

/**
 * ============================================================================
 * DELETE WRONG ORDER FOR WAITER & CASHIER EVEN IF PREPARING (Requirement 8)
 * ============================================================================
 */
function openDeleteOrderConfirmModal(orderId) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;
  state.pendingDeleteOrderId = order.id;

  const infoEl = document.getElementById('delete-confirm-order-info');
  if (infoEl) {
    const statusText = order.status === 'preparing' ? 'قيد التحضير 🟡' : (order.status === 'new' ? 'جديد 🔴' : 'مكتمل 🟢');
    infoEl.innerHTML = `
      هل أنت متأكد من حذف الطلب <strong>#${escapeHtml(order.id)}</strong> الخاص بطاولة <strong>${escapeHtml(order.table)}</strong>؟<br>
      <span style="font-size:0.82rem; color:var(--text-muted);">الحالة الحالية: ${statusText} • القيمة: ${Number(order.total)} ₺</span>
    `;
  }
  document.getElementById('delete-order-confirm-backdrop').classList.add('open');
}

function closeDeleteOrderConfirmModal() {
  state.pendingDeleteOrderId = null;
  document.getElementById('delete-order-confirm-backdrop').classList.remove('open');
}

async function confirmAndExecuteDeleteOrder() {
  const orderId = state.pendingDeleteOrderId;
  closeDeleteOrderConfirmModal();
  if (!orderId) return;
  await cancelOrder(orderId);
}

async function cancelOrder(orderId) {
  state.orders = state.orders.filter((o) => o.id !== orderId);
  if (state.targetExistingOrderId === orderId) {
    state.targetExistingOrderId = null;
  }
  saveOrdersToStorage();
  updateHeaderBadges();
  renderCashierKanban();
  renderWaiterActiveOrdersStrip();

  try {
    await fetch(`${FIREBASE_DB_URL}/orders/${orderId}.json`, { method: 'DELETE' });
  } catch (e) {}
  showToast(`🗑️ تم حذف الطلب الخطأ #${orderId} نهائياً`, 'danger');
}

/**
 * ============================================================================
 * CASHIER KANBAN & ORDER EDITING
 * يظهر الحجم والملاحظات الخاصة بوضوح تام للكاشير والمطبخ
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

    const itemsHtml = order.items.map((it) => {
      const sizeBadge = it.size === 'double'
        ? `<span class="item-size-badge size-double">🔥 دبل</span>`
        : (it.size === 'normal' ? `<span class="item-size-badge size-normal">عادي</span>` : '');
      const noteHtml = it.note
        ? `<div class="order-item-note-box">📝 ملاحظة المطبخ/النادل: ${escapeHtml(it.note)}</div>`
        : '';

      return `
        <div class="order-item-line">
          <div class="order-item-line-top">
            <div>
              <span class="order-item-qty">${Number(it.qty)}x</span>
              ${escapeHtml(it.nameAr)}
              ${sizeBadge}
              ${it.addedQty ? `<span class="added-qty-tag">🆕 +${Number(it.addedQty)} إضافي</span>` : ''}
            </div>
            <span class="order-item-line-price">${Number(it.price) * Number(it.qty)} ₺</span>
          </div>
          ${noteHtml}
        </div>
      `;
    }).join('');

    let btns = '';
    if (order.status === 'new') {
      btns = `
        <button type="button" class="btn-card-action btn-prepare" onclick="updateOrderStatus('${order.id}', 'preparing')">▶ تحضير</button>
        <button type="button" class="btn-card-action btn-edit-order" onclick="openCashierEditOrderModal('${order.id}')">➕ تعديل</button>
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">🖨️ الفيش</button>
        <button type="button" class="btn-card-action btn-cancel-order" onclick="openDeleteOrderConfirmModal('${order.id}')" title="حذف الطلب الخطأ">🗑️ حذف</button>
      `;
    } else if (order.status === 'preparing') {
      btns = `
        <button type="button" class="btn-card-action btn-complete" onclick="updateOrderStatus('${order.id}', 'completed')">✔ تسليم</button>
        <button type="button" class="btn-card-action btn-edit-order" onclick="openCashierEditOrderModal('${order.id}')">➕ تعديل</button>
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">🖨️ الفيش</button>
        <button type="button" class="btn-card-action btn-return-prep" onclick="updateOrderStatus('${order.id}', 'new')" title="إرجاع للجديد">↩</button>
        <button type="button" class="btn-card-action btn-cancel-order" onclick="openDeleteOrderConfirmModal('${order.id}')" title="حذف الطلب الخطأ حتى لو قيد التحضير">🗑️ حذف</button>
      `;
    } else {
      btns = `
        <button type="button" class="btn-card-action btn-return-prep" onclick="updateOrderStatus('${order.id}', 'preparing')">↩ للتحضير</button>
        <button type="button" class="btn-card-action btn-edit-order" onclick="openCashierEditOrderModal('${order.id}')">➕ تعديل</button>
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">🖨️ الفيش</button>
        <button type="button" class="btn-card-action btn-cancel-order" onclick="openDeleteOrderConfirmModal('${order.id}')" title="حذف الطلب">🗑️</button>
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

  const existing = state.cashierEditDraftItems.find((it) => it.nameAr === menuItem.nameAr && !it.note);
  if (existing) {
    existing.qty = Number(existing.qty) + 1;
    existing.addedQty = (Number(existing.addedQty) || 0) + 1;
  } else {
    state.cashierEditDraftItems.push({
      nameAr: menuItem.nameAr,
      nameTr: menuItem.nameTr,
      size: 'standard',
      note: '',
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
  const quickNames = ['ماء', 'كولا', 'عيران', 'شاي', 'فلافل لف', 'بطاطا وجبة', 'مايونيز', 'كاتشب', 'سرفيس'];
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

  renderCashierPickerGrid();

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
        <div class="cart-item-main-line">
          <div class="cart-item-info">
            <div class="cart-item-title-ar">
              ${escapeHtml(it.nameAr)}
              ${it.addedQty ? `<span class="added-qty-tag">+${Number(it.addedQty)} جديد</span>` : ''}
            </div>
            <div class="cart-item-title-tr">${escapeHtml(it.nameTr || '')} (${Number(it.price)} ₺)</div>
            ${it.note ? `<div class="order-item-note-box">📝 ملاحظة: ${escapeHtml(it.note)}</div>` : ''}
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
 * مهم جداً (Requirement 8): عدم إظهار ملاحظة النادل في الفيش المطبوع نهائياً
 * ============================================================================
 */
function formatPriceClean(num) {
  const n = Number(num) || 0;
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

function printReceiptById(orderId) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;

  if (order.hasUnreadAdditions) {
    order.hasUnreadAdditions = false;
    order.isNewlyInjected = false;
    saveOrdersToStorage();
    updateHeaderBadges();
    renderCashierKanban();
  }

  let total = 0;
  // ملاحظة النادل (item.note) مستبعدة تماماً من الفيش المطبوع بناءً على الشرط رقم 8
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
      <div class="receipt-logo-wrap">
        <img src="Falafel aldmşke.png" alt="Logo" class="receipt-logo-img">
      </div>
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

  const titleEl = document.getElementById('receipt-modal-title');
  if (titleEl) {
    titleEl.textContent = '🖨️ معاينة الفيش (مضبوط لطابعة ZJIANG POS-58)';
  }

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
      <div class="receipt-logo-wrap">
        <img src="Falafel aldmşke.png" alt="Logo" class="receipt-logo-img">
      </div>
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

  const titleEl = document.getElementById('receipt-modal-title');
  if (titleEl) {
    titleEl.textContent = '📊 تقرير الإغلاق العام (Z-Report)';
  }

  document.getElementById('print-section').innerHTML = html;
  document.getElementById('modal-thermal-preview').innerHTML = html;
  document.getElementById('receipt-modal-backdrop').classList.add('open');
}

function closeReceiptModal() {
  document.getElementById('receipt-modal-backdrop').classList.remove('open');
}

/**
 * ============================================================================
 * MENU & PRICE MANAGER MODAL (Requirement 1: Easy Add/Edit/Delete Menu Items)
 * ============================================================================
 */
function openPriceEditorModal() {
  renderPriceEditorList();
  document.getElementById('price-editor-backdrop').classList.add('open');
}

function renderPriceEditorList() {
  const listEl = document.getElementById('price-editor-list');
  if (!listEl) return;
  listEl.innerHTML = '';

  menuData.forEach((item, idx) => {
    const isSand = isSandwichItem(item);
    const dblVal = isSand ? getDoublePrice(item) : Number(item.price);
    const row = document.createElement('div');
    row.className = 'price-editor-row';
    row.innerHTML = `
      <div>
        <strong style="font-size:0.88rem;">${escapeHtml(item.nameAr)}</strong>
        <div style="font-size:0.74rem; color:var(--text-muted);">${escapeHtml(item.nameTr || '')}</div>
      </div>
      <div style="font-size:0.78rem; color:var(--accent-gold); font-weight:700;">${escapeHtml(item.category)}</div>
      <div>
        <div style="font-size:0.68rem; color:var(--text-muted); text-align:center;">سعر العادي</div>
        <input type="number" class="price-editor-input" id="price-input-${idx}" value="${Number(item.price)}" />
      </div>
      <div>
        <div style="font-size:0.68rem; color:var(--text-muted); text-align:center;">${isSand ? 'سعر الدبل' : 'بدون دبل'}</div>
        <input type="number" class="price-editor-input" id="double-price-input-${idx}" value="${dblVal}" ${isSand ? '' : 'disabled style="opacity:0.4;"'} />
      </div>
      <button type="button" class="btn-trash" onclick="deleteMenuItemFromManager(${idx})" title="حذف الصنف">🗑️</button>
    `;
    listEl.appendChild(row);
  });
}

function addNewMenuItemFromUI() {
  const catEl = document.getElementById('new-item-category');
  const arEl = document.getElementById('new-item-name-ar');
  const trEl = document.getElementById('new-item-name-tr');
  const prEl = document.getElementById('new-item-price');
  const dblEl = document.getElementById('new-item-double-price');
  const hasSizeEl = document.getElementById('new-item-has-size');

  const category = (catEl ? catEl.value : '').trim();
  const nameAr = (arEl ? arEl.value : '').trim();
  const nameTr = (trEl ? trEl.value : '').trim();
  const price = Number(prEl ? prEl.value : 0);
  const hasSizeOption = Boolean(hasSizeEl && hasSizeEl.checked) || category.includes('سندويش') || category.includes('عربي');
  const doublePrice = Number(dblEl && dblEl.value ? dblEl.value : Math.round(price * 1.3));

  if (!category || !nameAr || price <= 0) {
    showToast('يرجى إدخال اسم الصنف والتصنيف والسعر بشكل صحيح', 'danger');
    return;
  }

  addOrUpdateMenuItem({ category, nameAr, nameTr, price, hasSizeOption, doublePrice });

  if (arEl) arEl.value = '';
  if (trEl) trEl.value = '';
  if (prEl) prEl.value = '';
  if (dblEl) dblEl.value = '';

  renderPriceEditorList();
  showToast(`✓ تمت إضافة الصنف "${nameAr}" إلى قسم "${category}"`, 'success');
}

function deleteMenuItemFromManager(idx) {
  if (!menuData[idx]) return;
  const removed = menuData.splice(idx, 1)[0];
  saveMenuToStorage();
  renderCategoryPills();
  renderMenuView();
  renderPriceEditorList();
  showToast(`🗑️ تم حذف الصنف "${removed.nameAr}" من المنيو`, 'danger');
}

function resetMenuToDefault() {
  menuData = JSON.parse(JSON.stringify(defaultMenuData));
  saveMenuToStorage();
  renderCategoryPills();
  renderMenuView();
  renderPriceEditorList();
  showToast('✓ تمت استعادة قائمة المنيو الافتراضية المحدثة', 'success');
}

function closePriceEditorModal() {
  document.getElementById('price-editor-backdrop').classList.remove('open');
}

function saveUpdatedMenuPrices() {
  menuData.forEach((item, idx) => {
    const input = document.getElementById(`price-input-${idx}`);
    const dblInput = document.getElementById(`double-price-input-${idx}`);
    if (input && Number(input.value) >= 0) item.price = Number(input.value);
    if (dblInput && !dblInput.disabled && Number(dblInput.value) >= 0) {
      item.doublePrice = Number(dblInput.value);
    }
  });
  saveMenuToStorage();
  renderMenuView();
  closePriceEditorModal();
  showToast('تم حفظ تعديلات المنيو والأسعار بنجاح ✓', 'success');
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
  let contentW = '46mm';

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

  let marginRule = '0 auto 0 0';
  if (align === 'left') {
    marginRule = '0 0 0 auto';
  } else if (align === 'center') {
    marginRule = '0 auto';
  }

  root.style.setProperty('--print-paper-width', paperW);
  root.style.setProperty('--print-content-width', contentW);
  root.style.setProperty('--print-align-margin', marginRule);
  root.style.setProperty('--print-offset-x', `${offsetMm}mm`);

  const btn58 = document.getElementById('btn-size-58');
  const btn42 = document.getElementById('btn-preset-safe42');
  const btn80 = document.getElementById('btn-size-80');
  if (btn58) btn58.className = preset === 'zjiang58' ? 'btn-gold' : 'btn-secondary';
  if (btn42) btn42.className = preset === 'safe42' ? 'btn-gold' : 'btn-secondary';
  if (btn80) btn80.className = preset === '80' ? 'btn-gold' : 'btn-secondary';

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

  // فحص التصفير اليومي التلقائي (كل 24 ساعة عند منتصف الليل) والتقرير التلقائي الساعة 9:00 مساءً
  checkAndRunDailyReset();
  checkAutoDailyReport9PM();
  setInterval(() => {
    checkAndRunDailyReset();
    checkAutoDailyReport9PM();
  }, 20000);

  renderCategoryPills();
  renderWaiterActiveOrdersStrip();
  renderMenuView();
  renderCartView();
  renderCashierKanban();
  updateHeaderBadges();

  syncNowFromCloud(false);
  startBackgroundSyncWorker();
}

window.addEventListener('DOMContentLoaded', initPosApp);
