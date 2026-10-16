/**
 * ============================================================================
 * MODULE 1: THE COMPLETE MENU DATA (Extracted 100% from Uploaded Menu Photos)
 * CRITICAL RULE: Zero defaultModifiers or extras (no cheese/lettuce logic).
 * ============================================================================
 */
const defaultMenuData = [
  // 1. سندويش فلافل (Falafel Dürüm) — 5 Items from Photo 1
  { category: 'سندويش فلافل', nameAr: 'فلافل لف', nameTr: 'Falafel Durum', price: 110 },
  { category: 'سندويش فلافل', nameAr: 'فلافل دبل', nameTr: 'Falafel extra Durum', price: 125 },
  { category: 'سندويش فلافل', nameAr: 'فلافل مع فول', nameTr: 'Falafel ve Bakla Durum', price: 125 },
  { category: 'سندويش فلافل', nameAr: 'فلافل مع بطاطا', nameTr: 'Falafel ve Patates Durum', price: 125 },
  { category: 'سندويش فلافل', nameAr: 'فلافل عربي مع بطاطا', nameTr: 'Falafel ve Patates Durum (Arap)', price: 185 },

  // 2. شاميات (Şamiyat) — 18 Items from Photo 1
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

  // 3. وجبات غربية - وجبة (Batı Yemekleri - Porsiyon) — 9 Items from Photo 2
  { category: 'غربي - وجبة', nameAr: 'كريسبي وجبة', nameTr: 'Acılı çıtır tavuk Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'سكالوب وجبة', nameTr: 'Galata ünlü çıtır tavuk Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'زنجر وجبة', nameTr: 'Çıtır tavuk göğsü kızarması Porsiyon', price: 260 },
  { category: 'غربي - وجبة', nameAr: 'فاهيتا وجبة', nameTr: 'Fajita Porsiyon', price: 260 },
  { category: 'غربي - وجبة', nameAr: 'فرانشيسكو وجبة', nameTr: 'Mantar kaşarlı sote Porsiyon', price: 260 },
  { category: 'غربي - وجبة', nameAr: 'مكسيكي وجبة', nameTr: 'Biberli tavuk sote acılı Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'شيش وجبة', nameTr: 'Tavuk şişi Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'بطاطا وجبة', nameTr: 'Patates Porsiyon', price: 150 },
  { category: 'غربي - وجبة', nameAr: 'بطاطا مع قشقوان وجبة', nameTr: 'Kaşarlı Patates Porsiyon', price: 200 },

  // 4. وجبات غربية - سندويش (Batı Yemekleri - Dürüm) — 9 Items
  { category: 'غربي - سندويش', nameAr: 'كريسبي سندويش', nameTr: 'Acılı çıtır tavuk Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'سكالوب سندويش', nameTr: 'Galata ünlü çıtır tavuk Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'زنجر سندويش', nameTr: 'Çıtır tavuk göğsü kızarması Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'فاهيتا سندويش', nameTr: 'Fajita Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'فرانشيسكو سندويش', nameTr: 'Mantar kaşarlı sote Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'مكسيكي سندويش', nameTr: 'Biberli tavuk sote acılı Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'شيش سندويش', nameTr: 'Tavuk şişi Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'بطاطا سندويش', nameTr: 'Patates Dürüm', price: 125 },
  { category: 'غربي - سندويش', nameAr: 'بطاطا مع قشقوان سندويش', nameTr: 'Kaşarlı Patates Dürüm', price: 170 },

  // 5. وجبات غربية - عربي (Batı Yemekleri - عربي) — 9 Items
  { category: 'غربي - عربي', nameAr: 'كريسبي عربي', nameTr: 'Acılı çıtır tavuk (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'سكالوب عربي', nameTr: 'Galata ünlü çıtır tavuk (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'زنجر عربي', nameTr: 'Çıtır tavuk göğsü kızarması (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'فاهيتا عربي', nameTr: 'Fajita (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'فرانشيسكو عربي', nameTr: 'Mantar kaşarlı sote (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'مكسيكي عربي', nameTr: 'Biberli tavuk sote acılı (Arap)', price: 225 },
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

let menuData = JSON.parse(JSON.stringify(defaultMenuData));

/**
 * ============================================================================
 * MODULE 3 AUDIO ALERT INITIALIZATION
 * Exact Audio Alert declaration + First-Click Autoplay Unlocker
 * ============================================================================
 */
const alertSound = new Audio('https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg');
alertSound.preload = 'auto';

let isAudioUnlocked = false;
let webAudioCtx = null;

function unlockCashierAudio(showNotification) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass && !webAudioCtx) {
      webAudioCtx = new AudioContextClass();
    }
    if (webAudioCtx && webAudioCtx.state === 'suspended') {
      webAudioCtx.resume();
    }

    alertSound.muted = true;
    const playPromise = alertSound.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          alertSound.pause();
          alertSound.currentTime = 0;
          alertSound.muted = false;
          markAudioUnlockedUI(showNotification);
        })
        .catch(() => {
          alertSound.muted = false;
          markAudioUnlockedUI(showNotification);
        });
    } else {
      alertSound.muted = false;
      markAudioUnlockedUI(showNotification);
    }
  } catch (err) {
    markAudioUnlockedUI(showNotification);
  }
}

function markAudioUnlockedUI(showNotification) {
  isAudioUnlocked = true;
  const btn = document.getElementById('btn-cashier-login-audio');
  const icon = document.getElementById('audio-status-icon');
  const text = document.getElementById('audio-status-text');
  if (btn && icon && text) {
    btn.classList.add('unlocked');
    icon.textContent = '🔔';
    text.textContent = 'الجرس مفعّل / Ses Aktif';
  }
  if (showNotification) {
    playOrderAlertPing();
    showToast('تم تفعيل جرس تنبيهات الكاشير بنجاح 🔔', 'success');
  }
}

function playSynthesizedBellFallback() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!webAudioCtx) webAudioCtx = new AudioContextClass();
    if (webAudioCtx.state === 'suspended') webAudioCtx.resume();

    const now = webAudioCtx.currentTime;
    const freqs = [1318.5, 1760.0, 2637.0];
    freqs.forEach((freq, idx) => {
      const osc = webAudioCtx.createOscillator();
      const gain = webAudioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.25, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.75);
      osc.connect(gain);
      gain.connect(webAudioCtx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.76);
    });
  } catch (e) {}
}

function playOrderAlertPing() {
  try {
    alertSound.currentTime = 0;
    const playPromise = alertSound.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => playSynthesizedBellFallback());
    }
  } catch (err) {
    playSynthesizedBellFallback();
  }
}

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
  cart: [],
  orders: []
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

  setTimeout(() => toast.remove(), 3200);
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

function handleTableChange(tableVal) {
  state.selectedTable = tableVal;
  const menuSelect = document.getElementById('waiter-menu-table-select');
  const cartSelect = document.getElementById('waiter-cart-table-select');
  const cartTableBox = document.getElementById('cart-table-box');

  if (menuSelect) menuSelect.value = tableVal;
  if (cartSelect) cartSelect.value = tableVal;
  if (cartTableBox && tableVal) cartTableBox.classList.remove('error-highlight');
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
  const newCount = state.orders.filter((o) => o.status === 'new').length;
  document.getElementById('header-new-orders-badge').textContent = String(newCount);
}

function renderCartView() {
  const container = document.getElementById('cart-items-container');
  const grandTotalEl = document.getElementById('cart-grand-total');
  const cartSelect = document.getElementById('waiter-cart-table-select');

  if (cartSelect) cartSelect.value = state.selectedTable;
  if (!container || !grandTotalEl) return;

  if (state.cart.length === 0) {
    container.innerHTML = `<div class="cart-empty-state">🛒 السلة فارغة حالياً</div>`;
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

// الرابط السحابي
const FIREBASE_DB_URL = 'https://pos-kasher-default-rtdb.firebaseio.com';

async function submitWaiterOrder() {
  if (state.cart.length === 0) {
    showToast('السلة فارغة! أضف أصنافاً أولاً', 'danger');
    return;
  }
  if (!state.selectedTable) {
    document.getElementById('cart-table-box').classList.add('error-highlight');
    showToast('⚠️ يرجى اختيار رقم الطاولة أولاً!', 'danger');
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
    state.selectedTable = '';
    handleTableChange('');
    updateHeaderBadges();
    renderCashierKanban();
    toggleWaiterSubView('menu');
    showToast(`✅ تم إرسال الطلب #${orderId} بنجاح!`, 'success');
  } catch (err) {
    showToast('⚠️ تعذر الحفظ في السحابة', 'danger');
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

async function syncNowFromCloud(manualTrigger = false) {
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/orders.json?t=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) return;
    const data = await res.json();

    if (!data) {
      if (manualTrigger) showToast('لا توجد طلبات مسجلة في السحابة حالياً', 'gold');
      return;
    }

    const cloudOrders = Object.values(data)
      .filter((o) => o && o.id && Array.isArray(o.items))
      .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    let foundBrandNewOrder = false;

    cloudOrders.forEach((cOrd) => {
      const existsLocally = state.orders.find((loc) => loc.id === cOrd.id);
      if (!existsLocally && cOrd.status === 'new') {
        foundBrandNewOrder = true;
        cOrd.isNewlyInjected = true;
      }
    });

    state.orders = cloudOrders;
    saveOrdersToStorage();
    updateHeaderBadges();
    renderCashierKanban();

    if (foundBrandNewOrder) {
      playOrderAlertPing();
      showToast('🔔 وصل طلب جديد من النادل!', 'success');
    } else if (manualTrigger) {
      showToast('✓ تم تحديث الطلبات من السحابة', 'success');
    }
  } catch (e) {}
}

async function updateOrderStatus(orderId, nextStatus) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;
  order.status = nextStatus;
  order.isNewlyInjected = false;
  saveOrdersToStorage();
  updateHeaderBadges();
  renderCashierKanban();

  try {
    await fetch(`${FIREBASE_DB_URL}/orders/${orderId}.json`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: nextStatus, isNewlyInjected: false })
    });
  } catch (e) {}
}

async function cancelOrder(orderId) {
  state.orders = state.orders.filter((o) => o.id !== orderId);
  saveOrdersToStorage();
  updateHeaderBadges();
  renderCashierKanban();

  try {
    await fetch(`${FIREBASE_DB_URL}/orders/${orderId}.json`, { method: 'DELETE' });
  } catch (e) {}
  showToast(`تم حذف الطلب ${orderId}`, 'danger');
}

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
    card.className = `order-card ${order.isNewlyInjected && order.status === 'new' ? 'pulse-new' : ''}`;

    const itemsHtml = order.items.map((it) => `
      <div class="order-item-line">
        <div><span class="order-item-qty">${Number(it.qty)}x</span> ${escapeHtml(it.nameAr)}</div>
        <span class="order-item-line-price">${Number(it.price) * Number(it.qty)} ₺</span>
      </div>
    `).join('');

    let btns = '';
    if (order.status === 'new') {
      btns = `
        <button type="button" class="btn-card-action btn-prepare" onclick="updateOrderStatus('${order.id}', 'preparing')">▶ تحضير</button>
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">🖨️ الفيش</button>
        <button type="button" class="btn-card-action btn-cancel-order" onclick="cancelOrder('${order.id}')">✕</button>
      `;
    } else if (order.status === 'preparing') {
      btns = `
        <button type="button" class="btn-card-action btn-complete" onclick="updateOrderStatus('${order.id}', 'completed')">✔ تسليم</button>
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">🖨️ الفيش</button>
      `;
    } else {
      btns = `<button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">🖨️ طباعة الفيش</button>`;
    }

    card.innerHTML = `
      <div class="order-card-top">
        <span class="order-id-badge">#${escapeHtml(order.id)}</span>
        <span class="order-table-badge">${escapeHtml(order.table)}</span>
        <span class="order-time">🕒 ${escapeHtml(order.createdAt)}</span>
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
// دالة إنشاء الفيش الحراري بتصميم احترافي
// ==========================================
function printReceiptById(orderId) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;

  let total = 0;
  const rows = order.items.map((item) => {
    const line = Number(item.qty) * Number(item.price);
    total += line;
    return `
      <tr>
        <td class="num-col" style="text-align:center;font-weight:900;">${item.qty}</td>
        <td>
          <div style="font-weight:900; font-size: 14px;">${escapeHtml(item.nameAr)}</div>
          <div style="font-size:11px; color:#444;">${escapeHtml(item.nameTr)}</div>
        </td>
        <td class="num-col">${Number(item.price).toFixed(2)}</td>
        <td class="num-col" style="font-weight:900; font-size: 14px;">${line.toFixed(2)}</td>
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
        <div style="font-size:11px; margin-top:4px;" class="ltr-text">Tel: 0554 142 22 20 | 0539 522 63 88</div>
      </div>
      <div class="receipt-meta">
        <div class="receipt-meta-row">
          <span>رقم الفاتورة / Fiş No:</span>
          <strong class="ltr-text" style="font-size: 15px;">#${escapeHtml(order.id)}</strong>
        </div>
        <div class="receipt-meta-row">
          <span>الطاولة / Masa:</span>
          <strong style="font-size: 15px;">${escapeHtml(order.table)}</strong>
        </div>
        <div class="receipt-meta-row">
          <span>التاريخ / Tarih:</span>
          <span class="ltr-text">${order.dateISO || ''} ${escapeHtml(order.createdAt)}</span>
        </div>
      </div>
      <table class="receipt-table">
        <thead>
          <tr>
            <th style="width:15%; text-align:center;">الكمية<br>Qty</th>
            <th style="width:50%;">الصنف<br>Ürün</th>
            <th style="width:15%;">السعر<br>Fiyat</th>
            <th style="width:20%;">المجموع<br>Tutar</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="receipt-total-block">
        <span>المطلوب دفعه / TOPLAM:</span>
        <span class="ltr-text" style="font-size: 18px;">${total.toFixed(2)} TL</span>
      </div>
      <div class="receipt-footer">
         <div style="font-size: 13px; font-weight: 900; margin-bottom: 3px;">شكراً لزيارتكم - صحتين وعافية</div>
         <div>Afiyet Olsun • Yine Bekleriz</div>
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
      <td class="num-col" style="text-align:center;font-weight:900;">${it.qty}</td>
      <td style="font-weight:900;">${escapeHtml(it.nameAr)}</td>
      <td class="num-col" style="font-weight:900;">${it.rev.toFixed(2)} TL</td>
    </tr>
  `).join('');

  const html = `
    <div class="receipt-wrapper">
      <div class="receipt-logo-wrap">
        <img src="Falafel aldmşke.png" alt="Logo" class="receipt-logo-img">
      </div>
      <div class="receipt-header">
        <div class="receipt-brand-ar" style="font-size: 18px;">تقرير الإغلاق (Z-REPORT)</div>
        <div class="receipt-brand-tr">FALAFEL ALDMŞKE • Z-REPORT</div>
      </div>
      <div class="receipt-meta">
        <div class="receipt-meta-row">
          <span>اليوم (24 ساعة):</span>
          <strong class="ltr-text">${dayCnt} طلب | ${dayRev.toFixed(2)} TL</strong>
        </div>
        <div class="receipt-meta-row">
          <span>الأسبوع (7 أيام):</span>
          <strong class="ltr-text">${weekCnt} طلب | ${weekRev.toFixed(2)} TL</strong>
        </div>
        <div class="receipt-meta-row">
          <span>الشهر (30 يوماً):</span>
          <strong class="ltr-text">${monthCnt} طلب | ${monthRev.toFixed(2)} TL</strong>
        </div>
      </div>
      <table class="receipt-table">
        <thead>
          <tr>
            <th style="text-align:center;">الكمية</th>
            <th>الصنف</th>
            <th>الإجمالي</th>
          </tr>
        </thead>
        <tbody>${rows || '<tr><td colspan="3" style="text-align:center;">لا توجد مبيعات مكتملة</td></tr>'}</tbody>
      </table>
      <div class="receipt-total-block">
        <span>إجمالي المبيعات الكلي:</span>
        <span class="ltr-text" style="font-size: 18px;">${totalRev.toFixed(2)} TL</span>
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

// ==========================================
// دوال التحكم بالطباعة (المقاس والتوسيط)
// ==========================================
function setThermalPaperSize(sizeMm) {
  const root = document.documentElement;
  const preview = document.getElementById('modal-thermal-preview');
  const btn58 = document.getElementById('btn-size-58');
  const btn80 = document.getElementById('btn-size-80');

  if (sizeMm === '80') {
    root.style.setProperty('--print-paper-width', '80mm');
    root.style.setProperty('--print-content-width', '72mm');
    if (btn80) btn80.className = 'btn-gold';
    if (btn58) btn58.className = 'btn-secondary';
    showToast('تم ضبط المقاس لورق 80mm', 'gold');
  } else {
    root.style.setProperty('--print-paper-width', '58mm');
    root.style.setProperty('--print-content-width', '48mm');
    if (btn58) btn58.className = 'btn-gold';
    if (btn80) btn80.className = 'btn-secondary';
    showToast('تم ضبط المقاس لورق 58mm', 'success');
  }

  let pageStyle = document.getElementById('dynamic-print-page-style');
  if (!pageStyle) {
    pageStyle = document.createElement('style');
    pageStyle.id = 'dynamic-print-page-style';
    document.head.appendChild(pageStyle);
  }
  
  pageStyle.innerHTML = `
    @media print {
      @page {
        size: ${sizeMm}mm auto !important;
        margin: 0 !important; 
      }
    }
  `;
}

function setThermalOffset(offsetMm) {
  const val = Number(offsetMm) || 0;
  document.documentElement.style.setProperty('--print-offset-x', `${val}mm`);
  const lbl = document.getElementById('print-offset-label');
  if (lbl) lbl.textContent = `${val > 0 ? '+' : ''}${val}mm`;
}

function triggerBrowserPrint() {
  window.print();
}

function initPosApp() {
  loadMenuFromStorage();
  loadOrdersFromStorage();
  renderCategoryPills();
  renderMenuView();
  renderCartView();
  renderCashierKanban();
  updateHeaderBadges();

  syncNowFromCloud(false);
  setInterval(() => syncNowFromCloud(false), 2000);
}

window.addEventListener('DOMContentLoaded', initPosApp);
