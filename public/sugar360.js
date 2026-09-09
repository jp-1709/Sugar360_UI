
/* ═══════════════════════════════════════════════
   PANEL SWITCHING
═══════════════════════════════════════════════ */
var charts = {};

function switchPanel(id, btn) {
  document.querySelectorAll('.role-btn').forEach(function(b){ b.classList.remove('active'); });
  document.querySelectorAll('.dash-panel').forEach(function(p){ p.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById('panel-' + id).classList.add('active');
  // Resize charts after panel becomes visible
  setTimeout(function(){
    Object.values(charts).forEach(function(c){ if(c && c.resize) c.resize(); });
  }, 60);
}

/* ═══════════════════════════════════════════════
   CLOCK
═══════════════════════════════════════════════ */
function updateClock(){
  var now = new Date();
  var clockEl = document.getElementById('clock');
  if (!clockEl) return;
  clockEl.textContent =
    now.getHours().toString().padStart(2,'0') + ':' +
    now.getMinutes().toString().padStart(2,'0') + ':' +
    now.getSeconds().toString().padStart(2,'0');
}
setInterval(updateClock, 1000);
updateClock();

/* ═══════════════════════════════════════════════
   CHART DEFAULTS
═══════════════════════════════════════════════ */
var defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { ticks: { font: { size: 10 }, color: '#8A909C' }, grid: { display: false }, border: { display: false } },
    y: { ticks: { font: { size: 10 }, color: '#8A909C' }, grid: { color: '#F3F4F6' }, border: { display: false } }
  }
};

/* ═══════════════════════════════════════════════
   BUILD ALL CHARTS
═══════════════════════════════════════════════ */
function buildCharts(){
  Object.keys(charts).forEach(function(k){ try { charts[k] && charts[k].destroy && charts[k].destroy(); } catch(e){} });
  charts = {};

  /* ── 1. HOURLY CRUSHING RATE (MD Panel) ── */
  var hours = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14'];
  var hourlyActual = [198, 202, 205, 199, 196, 188, 204, 208, 210, 202, 198, 201, 199, 203, 201];
  var hourlyTarget = hours.map(function(){ return 200; });
  charts['md-hourly'] = new Chart(document.getElementById('chart-md-hourly'), {
    type: 'line',
    data: {
      labels: hours,
      datasets: [
        {
          label: 'Actual (MT/hr)',
          data: hourlyActual,
          borderColor: '#1FA45C',
          backgroundColor: 'rgba(5,150,105,.08)',
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: hourlyActual.map(function(v){ return v >= 200 ? '#1FA45C' : '#D3453F'; }),
          tension: 0.3,
          fill: true
        },
        {
          label: 'Target 200 MT/hr',
          data: hourlyTarget,
          borderColor: '#D3D6DC',
          borderWidth: 1.5,
          borderDash: [4, 3],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(c){ return c.dataset.label + ': ' + c.raw + ' MT/hr'; } } } },
      scales: {
        x: { ticks: { font: { size: 10 }, color: '#8A909C' }, grid: { display: false }, border: { display: false } },
        y: {
          min: 180, max: 220,
          ticks: { font: { size: 10 }, color: '#8A909C', callback: function(v){ return v + ' MT'; } },
          grid: { color: '#F3F4F6' }, border: { display: false }
        }
      }
    }
  });

  /* ── 2. CANE SUPPLY vs TARGET (Cane Panel) ── */
  var last10days = ['D-9','D-8','D-7','D-6','D-5','D-4','D-3','D-2','Yest','Today'];
  var caneReceived = [4820, 4760, 4940, 4880, 4820, 4700, 4780, 4840, 4900, 4980];
  var caneTarget = last10days.map(function(){ return 5000; });
  charts['cane-supply'] = new Chart(document.getElementById('chart-cane-supply'), {
    type: 'bar',
    data: {
      labels: last10days,
      datasets: [
        {
          label: 'Received (MT)',
          data: caneReceived,
          backgroundColor: caneReceived.map(function(v, i){
            return i === 9 ? '#1FA45C' : (v >= 5000 ? 'rgba(5,150,105,.45)' : 'rgba(217,119,6,.45)');
          }),
          borderRadius: 4,
          borderSkipped: false
        },
        {
          label: 'Target 5,000 MT',
          type: 'line',
          data: caneTarget,
          borderColor: '#D3D6DC',
          borderWidth: 1.5,
          borderDash: [4, 3],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { font: { size: 10 }, color: '#8A909C' }, grid: { display: false }, border: { display: false } },
        y: {
          min: 4400, max: 5400,
          ticks: { font: { size: 10 }, color: '#8A909C', callback: function(v){ return (v/1000).toFixed(1) + 'k'; } },
          grid: { color: '#F3F4F6' }, border: { display: false }
        }
      }
    }
  });

  /* ── 3. RECOVERY % TREND (Cane Panel) ── */
  var wks8 = ['Wk 40','Wk 41','Wk 42','Wk 43','Wk 44','Wk 45','Wk 46','Wk 47'];
  charts['cane-recovery'] = new Chart(document.getElementById('chart-cane-recovery'), {
    type: 'line',
    data: {
      labels: wks8,
      datasets: [
        {
          label: 'Actual Recovery %',
          data: [10.80, 10.95, 11.10, 11.22, 11.15, 10.98, 11.04, 11.08],
          borderColor: '#1FA45C',
          backgroundColor: 'rgba(5,150,105,.06)',
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: '#1FA45C',
          tension: 0.3,
          fill: true
        },
        {
          label: 'Target 11.20%',
          data: wks8.map(function(){ return 11.20; }),
          borderColor: '#D3D6DC',
          borderWidth: 1.5,
          borderDash: [4, 3],
          pointRadius: 0,
          fill: false
        },
        {
          label: 'Last Season',
          data: [10.55, 10.72, 10.88, 10.96, 10.92, 10.78, 10.85, 10.90],
          borderColor: '#D1D5DB',
          borderWidth: 1.5,
          borderDash: [2, 3],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { font: { size: 9 }, boxWidth: 8, padding: 6, color: '#6E7480' } } },
      scales: {
        x: { ticks: { font: { size: 10 }, color: '#8A909C' }, grid: { display: false }, border: { display: false } },
        y: {
          min: 10.4, max: 11.5,
          ticks: { font: { size: 10 }, color: '#8A909C', callback: function(v){ return v.toFixed(2) + '%'; } },
          grid: { color: '#F3F4F6' }, border: { display: false }
        }
      }
    }
  });

  /* ── 4. CANE VARIETY MIX (Cane Panel) ── */
  charts['cane-variety'] = new Chart(document.getElementById('chart-cane-variety'), {
    type: 'doughnut',
    data: {
      labels: ['Co 0238', 'Co 86032', 'CoM 0265', 'CoC 671', 'Others'],
      datasets: [{
        data: [38, 28, 18, 10, 6],
        backgroundColor: ['#1FA45C', '#22C55E', '#4ADE80', '#86EFAC', '#D1FAE5'],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'right', labels: { font: { size: 10 }, boxWidth: 10, padding: 8, color: '#6E7480' } } },
      cutout: '60%'
    }
  });

  /* ── 5. BY-PRODUCT REVENUE SPLIT (Production Panel) ── */
  charts['prod-byp'] = new Chart(document.getElementById('chart-prod-byp'), {
    type: 'doughnut',
    data: {
      labels: ['Ethanol', 'Molasses', 'Bagasse', 'Rectified Spirit', 'Pressmud', 'CO₂'],
      datasets: [{
        data: [18.4, 5.4, 1.8, 1.6, 0.8, 0.2],
        backgroundColor: ['#C7891B', '#F59E0B', '#4ADE80', '#5B63D3', '#1FA45C', '#60A5FA'],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right', labels: { font: { size: 10 }, boxWidth: 10, padding: 8, color: '#6E7480' } },
        tooltip: { callbacks: { label: function(c){ return c.label + ': ₹' + c.raw + ' Cr'; } } }
      },
      cutout: '60%'
    }
  });

  /* ── 6. CASH FLOW FORECAST (Finance Panel) ── */
  var fDays = [];
  for(var i = 0; i < 14; i++){
    var d = new Date('2025-02-14');
    d.setDate(d.getDate() + i);
    fDays.push((d.getDate()) + '/' + (d.getMonth()+1));
  }
  var cfInflow  = [2.8, 8.4, 3.2, 6.8, 4.2, 9.4, 3.8, 7.2, 2.6, 8.8, 4.4, 6.2, 3.4, 7.6];
  var cfOutflow = [4.8, 6.2, 8.4, 3.6, 7.2, 5.4, 8.8, 4.2, 6.8, 5.2, 7.4, 4.6, 8.2, 3.8];
  var cfNet = cfInflow.map(function(v,i){ return +(v - cfOutflow[i]).toFixed(1); });
  charts['fi-cashflow'] = new Chart(document.getElementById('chart-fi-cashflow'), {
    type: 'bar',
    data: {
      labels: fDays,
      datasets: [
        {
          label: 'Expected Inflow',
          data: cfInflow,
          backgroundColor: 'rgba(5,150,105,.35)',
          borderRadius: 3,
          borderSkipped: false
        },
        {
          label: 'Expected Outflow',
          data: cfOutflow,
          backgroundColor: 'rgba(220,38,38,.28)',
          borderRadius: 3,
          borderSkipped: false
        },
        {
          label: 'Net',
          type: 'line',
          data: cfNet,
          borderColor: '#5B63D3',
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: cfNet.map(function(v){ return v >= 0 ? '#1FA45C' : '#D3453F'; }),
          tension: 0.3,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { font: { size: 9 }, boxWidth: 8, padding: 6, color: '#6E7480' } },
        tooltip: { callbacks: { label: function(c){ return c.dataset.label + ': ₹' + c.raw + ' Cr'; } } }
      },
      scales: {
        x: { ticks: { font: { size: 9 }, color: '#8A909C' }, grid: { display: false }, border: { display: false } },
        y: {
          ticks: { font: { size: 10 }, color: '#8A909C', callback: function(v){ return '₹' + v + ' Cr'; } },
          grid: { color: '#F3F4F6' }, border: { display: false }
        }
      }
    }
  });

  /* ── 7. SUGAR PRICE TREND (Finance Panel) ── */
  charts['fi-price'] = new Chart(document.getElementById('chart-fi-price'), {
    type: 'line',
    data: {
      labels: wks8,
      datasets: [
        {
          label: 'Realisation (₹/Qtl)',
          data: [3340, 3320, 3380, 3440, 3420, 3460, 3460, 3480],
          borderColor: '#D3453F',
          backgroundColor: 'rgba(220,38,38,.06)',
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: '#D3453F',
          tension: 0.3,
          fill: true
        },
        {
          label: 'MSP ₹3,100',
          data: wks8.map(function(){ return 3100; }),
          borderColor: '#D3D6DC',
          borderWidth: 1.5,
          borderDash: [4, 3],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { font: { size: 9 }, boxWidth: 8, padding: 6, color: '#6E7480' } } },
      scales: {
        x: { ticks: { font: { size: 10 }, color: '#8A909C' }, grid: { display: false }, border: { display: false } },
        y: {
          min: 3000, max: 3700,
          ticks: { font: { size: 10 }, color: '#8A909C', callback: function(v){ return '₹' + v; } },
          grid: { color: '#F3F4F6' }, border: { display: false }
        }
      }
    }
  });

} /* end buildCharts */

/* Build charts with a short delay to ensure canvases are rendered */
setTimeout(buildCharts, 80);
window.buildCharts = buildCharts;
window.charts = charts;
