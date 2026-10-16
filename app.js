function setThermalPaperSize(sizeMm) {
  const root = document.documentElement;
  const preview = document.getElementById('modal-thermal-preview');
  const btn58 = document.getElementById('btn-size-58');
  const btn80 = document.getElementById('btn-size-80');

  // 1. تحديث متغيرات CSS لتنسيق عرض المتصفح
  if (sizeMm === '80') {
    root.style.setProperty('--print-paper-width', '80mm');
    root.style.setProperty('--print-content-width', '72mm');
    if (preview) preview.classList.add('paper-80mm');
    if (btn80) btn80.className = 'btn-gold';
    if (btn58) btn58.className = 'btn-secondary';
    showToast('تم ضبط المقاس على POS-80 (80mm)', 'gold');
  } else {
    root.style.setProperty('--print-paper-width', '58mm');
    root.style.setProperty('--print-content-width', '48mm');
    if (preview) preview.classList.remove('paper-80mm');
    if (btn58) btn58.className = 'btn-gold';
    if (btn80) btn80.className = 'btn-secondary';
    showToast('تم ضبط المقاس على POS-58 (58mm في المنتصف)', 'success');
  }

  // 2. حقن كود @page ديناميكياً لإجبار المتصفح على التوسيط
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
