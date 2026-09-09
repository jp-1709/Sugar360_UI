export const dashboardPanels = `
<div class="dash-panel active" id="panel-cmd">
  <div class="panel-header">
    <div class="panel-title-wrap">
      <div class="panel-role-badge" style="background:var(--md-bg)">⚡</div>
      <div>
        <div class="panel-title">MD / Management — Executive Summary</div>
        <div class="panel-sub">What is happening today · Why · Financial Impact · What next</div>
      </div>
    </div>
    <div class="panel-date">Fri, 14 Feb 2025 · Season Day 47 · Shift 2</div>
  </div>

  <!-- CLUSTER 1: Financial Position -->
  <div class="cluster-label fin">💳 Financial Position</div>
  <div class="kpi-row cols-6 md-bento md-bento-finance">
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ok)"></div>
      <div class="kpi-label">Bank Balance</div>
      <div class="kpi-val">₹7.58<span class="kpi-unit"> Cr</span></div>
      <div class="kpi-delta up">↑ ₹1.2 Cr vs yesterday</div>
      <div class="kpi-tav">
        <div class="kpi-tav-item"><div class="kpi-tav-val" style="color:var(--text3)">₹6.0</div><div class="kpi-tav-label">Target</div></div>
        <div class="kpi-tav-item"><div class="kpi-tav-val">₹7.58</div><div class="kpi-tav-label">Actual</div></div>
        <div class="kpi-tav-item"><div class="kpi-tav-val" style="color:var(--ok)">+₹1.58</div><div class="kpi-tav-label">Var Cr</div></div>
      </div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--warn)"></div>
      <div class="kpi-label">C.C. Available Limit</div>
      <div class="kpi-val">₹14.6<span class="kpi-unit"> Cr</span></div>
      <div class="kpi-delta nt">₹20.4 Cr utilized of ₹35 Cr</div>
      <div class="kpi-mini-bar"><div class="kpi-mini-fill" style="width:58%;background:var(--warn)"></div></div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--risk)"></div>
      <div class="kpi-label">Outstanding Receivables</div>
      <div class="kpi-val">₹22.4<span class="kpi-unit"> Cr</span></div>
      <div class="kpi-delta dn">₹4.8 Cr overdue &gt;30 days</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--warn)"></div>
      <div class="kpi-label">Outstanding Payables</div>
      <div class="kpi-val">₹14.8<span class="kpi-unit"> Cr</span></div>
      <div class="kpi-delta dn">₹3.1 Cr due this week</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ok)"></div>
      <div class="kpi-label">Today's Revenue</div>
      <div class="kpi-val">₹2.84<span class="kpi-unit"> Cr</span></div>
      <div class="kpi-delta dn">↓ ₹0.16 Cr vs ₹3.0 Cr target</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ch)"></div>
      <div class="kpi-label">Today's Expenses</div>
      <div class="kpi-val">₹1.62<span class="kpi-unit"> Cr</span></div>
      <div class="kpi-delta up">↓ ₹0.18 Cr under budget</div>
    </div>
  </div>

  <!-- CLUSTER 2: Operations & Cane -->
  <div class="cluster-label ops">🌾 Operations &amp; Cane Position</div>
  <div class="kpi-row cols-5 md-bento md-bento-operations">
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--md)"></div>
      <div class="kpi-label">Expected Cane (Today)</div>
      <div class="kpi-val">5,200<span class="kpi-unit"> MT</span></div>
      <div class="kpi-delta nt">Based on scheduled trips</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ch)"></div>
      <div class="kpi-label">Cane Received Today</div>
      <div class="kpi-val">4,980<span class="kpi-unit"> MT</span></div>
      <div class="kpi-delta dn">↓ 220 MT vs expected (95.8%)</div>
      <div class="kpi-mini-bar"><div class="kpi-mini-fill" style="width:95.8%;background:var(--warn)"></div></div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ok)"></div>
      <div class="kpi-label">Cane Yard Stock</div>
      <div class="kpi-val">2,840<span class="kpi-unit"> MT</span></div>
      <div class="kpi-delta up">≈ 14.2 hrs crushing coverage</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ch)"></div>
      <div class="kpi-label">Cane Crushed Today</div>
      <div class="kpi-val">4,820<span class="kpi-unit"> MT</span></div>
      <div class="kpi-delta up">↑ 20 MT above 4,800 target ✓</div>
      <div class="kpi-tav">
        <div class="kpi-tav-item"><div class="kpi-tav-val" style="color:var(--text3)">4,800</div><div class="kpi-tav-label">Target</div></div>
        <div class="kpi-tav-item"><div class="kpi-tav-val">4,820</div><div class="kpi-tav-label">Actual</div></div>
        <div class="kpi-tav-item"><div class="kpi-tav-val" style="color:var(--ok)">+20</div><div class="kpi-tav-label">Var MT</div></div>
      </div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--md)"></div>
      <div class="kpi-label">Crushing Rate</div>
      <div class="kpi-val">201<span class="kpi-unit"> MT/hr</span></div>
      <div class="kpi-delta up">↑ 1 MT/hr above 200 target</div>
    </div>
  </div>

  <!-- CLUSTER 3: Production & Sales -->
  <div class="cluster-label prd">🍬 Production &amp; Sales</div>
  <div class="kpi-row cols-6 md-bento md-bento-production">
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--sa)"></div>
      <div class="kpi-label">Sugar Production Today</div>
      <div class="kpi-val">534<span class="kpi-unit"> MT</span></div>
      <div class="kpi-delta dn">↓ 4 MT vs 538 MT target</div>
      <div class="kpi-mini-bar"><div class="kpi-mini-fill" style="width:99%;background:var(--ok)"></div></div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--warn)"></div>
      <div class="kpi-label">Recovery %</div>
      <div class="kpi-val">11.08<span class="kpi-unit">%</span></div>
      <div class="kpi-delta dn">↓ 0.12% below 11.20% target</div>
      <div class="kpi-tav">
        <div class="kpi-tav-item"><div class="kpi-tav-val" style="color:var(--text3)">11.20</div><div class="kpi-tav-label">Target %</div></div>
        <div class="kpi-tav-item"><div class="kpi-tav-val" style="color:var(--warn)">11.08</div><div class="kpi-tav-label">Actual %</div></div>
        <div class="kpi-tav-item"><div class="kpi-tav-val" style="color:var(--risk)">-0.12</div><div class="kpi-tav-label">Variance</div></div>
      </div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--info)"></div>
      <div class="kpi-label">Sugar Stock (Total)</div>
      <div class="kpi-val">18,240<span class="kpi-unit"> MT</span></div>
      <div class="kpi-delta nt">1,82,400 Qtl · 68% godown cap.</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ok)"></div>
      <div class="kpi-label">Today's Sugar Sales</div>
      <div class="kpi-val">3,200<span class="kpi-unit"> Qtl</span></div>
      <div class="kpi-delta up">↑ 200 Qtl vs 3,000 target</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--sa)"></div>
      <div class="kpi-label">Today's Sales Value</div>
      <div class="kpi-val">₹1.11<span class="kpi-unit"> Cr</span></div>
      <div class="kpi-delta up">@ ₹3,480/Qtl avg realisation</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--warn)"></div>
      <div class="kpi-label">Pending Dispatch</div>
      <div class="kpi-val">12<span class="kpi-unit"> trucks</span></div>
      <div class="kpi-delta dn">800 Qtl · awaiting DO release</div>
    </div>
  </div>

  <!-- Hourly Crushing + Alerts -->
  <div class="grid-2-1">
    <div class="card">
      <div class="card-header"><div class="card-title">Hourly Crushing Rate — Today</div><span class="pill ok">On Track · 201 MT/hr avg</span></div>
      <div class="card-sub">Actual MT/hr vs 200 MT/hr target · Shift 1 (00–08) &amp; Shift 2 (08–16)</div>
      <div class="chart-wrap" style="height:180px"><canvas id="chart-md-hourly"></canvas></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Critical Alerts Feed</div><span class="pill risk">4 Active</span></div>
      <div class="card-sub">Exception-based management · Requires attention</div>
      <div class="alert-feed">
        <div class="alert-cat">🔴 Financial</div>
        <div class="alert-item r"><div class="alert-dot r"></div><div class="alert-body"><div class="alert-title">C.C. Limit 58% Utilized</div><div class="alert-desc">₹20.4 Cr outstanding — headroom shrinking. CC renewal in 48 days.</div></div><span class="alert-badge r">Urgent</span></div>
        <div class="alert-item r"><div class="alert-dot r"></div><div class="alert-body"><div class="alert-title">Receivable Overdue ₹4.8 Cr</div><div class="alert-desc">Amar Exports (₹2.8 Cr) + Shivam Sugar (₹2.0 Cr) &gt;30 days</div></div><span class="alert-badge r">Action</span></div>
        <div class="alert-cat">🟡 Operational</div>
        <div class="alert-item a"><div class="alert-dot a"></div><div class="alert-body"><div class="alert-title">Recovery Below Target — 3rd Week</div><div class="alert-desc">11.08% vs 11.20% target · Est. ₹1.8 Cr revenue impact</div></div><span class="alert-badge a">Watch</span></div>
        <div class="alert-item a"><div class="alert-dot a"></div><div class="alert-body"><div class="alert-title">Cane Supply Gap — Sangli Zone</div><div class="alert-desc">4,980 MT received vs 5,200 MT expected · -4.2% today</div></div><span class="alert-badge a">Monitor</span></div>
        <div class="alert-cat">🔴 Inventory / Stock</div>
        <div class="alert-item r"><div class="alert-dot r"></div><div class="alert-body"><div class="alert-title">Diesel Stock Critical — 3.1 Days</div><div class="alert-desc">28,400 L stock · 9,200 L avg daily use · Order pending</div></div><span class="alert-badge r">Critical</span></div>
        <div class="alert-item a"><div class="alert-dot a"></div><div class="alert-body"><div class="alert-title">Sulphur &amp; Lime Below Reorder Level</div><div class="alert-desc">Sulphur 1.2 MT (min 4 MT) · Lime 0.8 MT (min 3 MT)</div></div><span class="alert-badge a">PO Due</span></div>
        <div class="alert-cat">🟢 Positive</div>
        <div class="alert-item g"><div class="alert-dot g"></div><div class="alert-body"><div class="alert-title">Crushing Pace 3.2% Ahead of Last Season</div><div class="alert-desc">Season completion on track · 73 days remaining at 4,800 TCD</div></div><span class="alert-badge g">Good</span></div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════
     PANEL 2 — CANE & AGRICULTURE
══════════════════════════════════════════════ -->
<div class="dash-panel" id="panel-cane">
  <div class="panel-header">
    <div class="panel-title-wrap">
      <div class="panel-role-badge" style="background:var(--ag-bg)">🌾</div>
      <div>
        <div class="panel-title">Cane &amp; Agriculture</div>
        <div class="panel-sub">Registration · Supply Forecast · Receiving · Weighbridge · Zone Performance</div>
      </div>
    </div>
    <div class="panel-date">Fri, 14 Feb 2025 · Season Day 47</div>
  </div>

  <div class="kpi-row cols-5">
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ag)"></div>
      <div class="kpi-label">Registered Cane Area</div>
      <div class="kpi-val">12,840<span class="kpi-unit"> Ha</span></div>
      <div class="kpi-delta up">↑ 4.2% vs last season</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ch)"></div>
      <div class="kpi-label">Est. Cane Availability</div>
      <div class="kpi-val">6.42<span class="kpi-unit"> L MT</span></div>
      <div class="kpi-delta nt">@ 50 MT/Ha avg yield</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ok)"></div>
      <div class="kpi-label">Cane Received (Season)</div>
      <div class="kpi-val">2.27<span class="kpi-unit"> L MT</span></div>
      <div class="kpi-delta nt">59.1% of estimated availability</div>
      <div class="kpi-mini-bar"><div class="kpi-mini-fill" style="width:59%;background:var(--ag)"></div></div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ag)"></div>
      <div class="kpi-label">Today's Trips</div>
      <div class="kpi-val">284<span class="kpi-unit"> trips</span></div>
      <div class="kpi-delta up">Target 280 trips ✓ (101.4%)</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--info)"></div>
      <div class="kpi-label">Expected Crushing Days</div>
      <div class="kpi-val">73<span class="kpi-unit"> days</span></div>
      <div class="kpi-delta nt">Est. season end: 28 Apr 2025</div>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">Cane Supply vs Target — Last 10 Days</div><span class="pill warn">Avg -3.6%</span></div>
      <div class="card-sub">Daily received (MT) vs 5,000 MT/day target</div>
      <div class="chart-wrap" style="height:170px"><canvas id="chart-cane-supply"></canvas></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Recovery % — 8-Week Trend</div><span class="pill warn">Below Target</span></div>
      <div class="card-sub">Actual vs 11.20% target vs last season</div>
      <div class="chart-wrap" style="height:170px"><canvas id="chart-cane-recovery"></canvas></div>
    </div>
  </div>

  <div class="grid-3">
    <div class="card">
      <div class="card-header"><div class="card-title">Zone-wise Supply Health</div><span class="pill risk">Sangli Lagging</span></div>
      <div class="card-sub">Survey vs arrived — season to date</div>
      <div class="prog-row"><div class="prog-label">Kolhapur</div><div class="prog-bar"><div class="prog-fill" style="width:72%;background:var(--ok)"></div></div><div class="prog-num">72% · OK</div></div>
      <div class="prog-row"><div class="prog-label">Hatkanangale</div><div class="prog-bar"><div class="prog-fill" style="width:68%;background:var(--ok)"></div></div><div class="prog-num">68% · OK</div></div>
      <div class="prog-row"><div class="prog-label">Shirol</div><div class="prog-bar"><div class="prog-fill" style="width:58%;background:var(--warn)"></div></div><div class="prog-num">58% ⚠</div></div>
      <div class="prog-row"><div class="prog-label">Sangli</div><div class="prog-bar"><div class="prog-fill" style="width:44%;background:var(--risk)"></div></div><div class="prog-num">44% 🔴</div></div>
      <div class="prog-row"><div class="prog-label">Miraj</div><div class="prog-bar"><div class="prog-fill" style="width:62%;background:var(--ok)"></div></div><div class="prog-num">62% · OK</div></div>
      <div style="margin-top:8px;font-size:10px;color:var(--risk)">⚠ Sangli: Possible diversion to private mills · Field visit recommended</div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Variety-wise Cane Mix</div></div>
      <div class="card-sub">Crush mix by variety — season to date</div>
      <div class="chart-wrap" style="height:180px"><canvas id="chart-cane-variety"></canvas></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Weighbridge &amp; Yard Status</div><span class="pill ok">Normal</span></div>
      <div class="card-sub">In-season operations · Real-time</div>
      <div class="status-row"><div class="status-label">Avg Weighment Time</div><div class="status-val ok">4.2 min/vehicle</div></div>
      <div class="status-row"><div class="status-label">Pending Vehicles at Gate</div><div class="status-val warn">14 vehicles</div></div>
      <div class="status-row"><div class="status-label">Avg Vehicle Wait Time</div><div class="status-val warn">38 min (Target: 30)</div></div>
      <div class="status-row"><div class="status-label">Cane Yard Coverage</div><div class="status-val ok">14.2 hrs crushing</div></div>
      <div class="status-row"><div class="status-label">Cane Rcvd per Hour (Avg)</div><div class="status-val">350 MT/hr</div></div>
      <div class="status-row"><div class="status-label">Shift 1 Receipts</div><div class="status-val ok">2,480 MT (124 trips)</div></div>
      <div class="status-row"><div class="status-label">Shift 2 Receipts (so far)</div><div class="status-val">2,500 MT (160 trips)</div></div>
      <div class="status-row"><div class="status-label">Villages Below Schedule</div><div class="status-val risk">4 villages &gt;15% gap</div></div>
      <div class="status-row"><div class="status-label">Avg Pol% in Cane (Week)</div><div class="status-val warn">13.84% ↓ 0.18%</div></div>
    </div>
  </div>

  <div class="card">
    <div class="card-header"><div class="card-title">Supply Forecast vs Actual — Season Comparison</div></div>
    <div class="card-sub">Estimated vs actual cane availability and crushing performance</div>
    <div class="table-wrap">
      <table class="s360">
        <thead><tr><th>Parameter</th><th>Season Target</th><th>Season-to-Date Actual</th><th>Remaining</th><th>Variance</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Cane Registration (MT)</td><td>3,84,000</td><td>3,84,000</td><td>—</td><td style="color:var(--ok)">+4.2% vs last yr</td><td><span class="pill ok">Complete</span></td></tr>
          <tr><td>Cane Supply — Actual (MT)</td><td>3,84,000</td><td>2,27,540</td><td>1,56,460</td><td style="color:var(--warn)">-8.2% pace</td><td><span class="pill warn">Monitor</span></td></tr>
          <tr><td>Cane Crushed (MT)</td><td>3,84,000</td><td>2,27,200</td><td>1,56,800</td><td style="color:var(--ok)">+3.2% vs LY</td><td><span class="pill ok">On Track</span></td></tr>
          <tr><td>Expected Crushing Days</td><td>120 days</td><td>47 days elapsed</td><td>73 days</td><td>—</td><td><span class="pill info">On Schedule</span></td></tr>
          <tr><td>Avg Daily Crushing (TCD)</td><td>3,200 MT</td><td>4,834 MT</td><td>—</td><td style="color:var(--ok)">+51.1%</td><td><span class="pill ok">Excellent</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════
     PANEL 3 — PRODUCTION (Sugar & By-products)
══════════════════════════════════════════════ -->
<div class="dash-panel" id="panel-prod">
  <div class="panel-header">
    <div class="panel-title-wrap">
      <div class="panel-role-badge" style="background:var(--ch-bg)">🏭</div>
      <div>
        <div class="panel-title">Production — Sugar &amp; By-products</div>
        <div class="panel-sub">Grade-wise Production · By-products · Recovery · Efficiency · MTD Comparison</div>
      </div>
    </div>
    <div class="panel-date">Fri, 14 Feb 2025 · Season Day 47</div>
  </div>

  <!-- Efficiency Flow -->
  <div class="eff-flow">
    <div class="eff-node">
      <div class="eff-node-label">Cane Crushed</div>
      <div class="eff-node-val">4,820 <span class="eff-node-unit">MT</span></div>
      <div class="eff-node-delta" style="color:var(--ok);font-size:10px">↑ 20 MT vs target</div>
    </div>
    <div class="eff-arrow">→</div>
    <div class="eff-recovery">
      <div class="eff-node-label">Recovery</div>
      <div class="eff-node-val">11.08%</div>
    </div>
    <div class="eff-arrow">→</div>
    <div class="eff-node">
      <div class="eff-node-label">Sugar Produced</div>
      <div class="eff-node-val">534 <span class="eff-node-unit">MT</span></div>
      <div class="eff-node-delta" style="color:var(--risk);font-size:10px">↓ 4 MT vs 538 target</div>
    </div>
    <div class="eff-arrow">→</div>
    <div class="eff-node">
      <div class="eff-node-label">Sugar Stock</div>
      <div class="eff-node-val">18,240 <span class="eff-node-unit">MT</span></div>
      <div class="eff-node-delta" style="color:var(--text3);font-size:10px">1,82,400 Qtl · 68% cap</div>
    </div>
    <div class="eff-arrow">→</div>
    <div class="eff-node">
      <div class="eff-node-label">Today's Sales</div>
      <div class="eff-node-val">320 <span class="eff-node-unit">MT</span></div>
      <div class="eff-node-delta" style="color:var(--ok);font-size:10px">↑ 20 MT vs target</div>
    </div>
  </div>

  <div class="kpi-row cols-4">
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ch)"></div>
      <div class="kpi-label">MTD Sugar Production</div>
      <div class="kpi-val">25,120<span class="kpi-unit"> MT</span></div>
      <div class="kpi-delta up">↑ 3.4% vs MTD target</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ok)"></div>
      <div class="kpi-label">Season Sugar Production</div>
      <div class="kpi-val">25,120<span class="kpi-unit"> MT</span></div>
      <div class="kpi-delta nt">25,120 MT · 39% of target 64,000</div>
      <div class="kpi-mini-bar"><div class="kpi-mini-fill" style="width:39%;background:var(--ch)"></div></div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--info)"></div>
      <div class="kpi-label">Plant Utilisation</div>
      <div class="kpi-val">96.2<span class="kpi-unit">%</span></div>
      <div class="kpi-delta up">↑ Downtime: 2.4 hrs today</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--warn)"></div>
      <div class="kpi-label">Boiling House Purity</div>
      <div class="kpi-val">86.4<span class="kpi-unit">%</span></div>
      <div class="kpi-delta dn">↓ Below 88% target — review</div>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">Grade-wise Sugar Production</div><span class="pill info">Today · Season</span></div>
      <div class="card-sub">M30 &amp; S30 grade-wise — opening, production, sales, closing stock</div>
      <div class="table-wrap">
        <table class="s360">
          <thead><tr><th>Grade</th><th>Opening Stock (MT)</th><th>Today Prod (MT)</th><th>Today Sales (MT)</th><th>Closing Stock (MT)</th><th>Closing Qtl</th><th>Stock Value (₹ Cr)</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td><b>M30</b></td><td>8,426</td><td>284</td><td>180</td><td style="font-weight:600">8,530</td><td>85,300</td><td style="color:var(--ok)">₹29.7</td><td><span class="pill ok">Normal</span></td></tr>
            <tr><td><b>S30</b></td><td>9,630</td><td>250</td><td>140</td><td style="font-weight:600">9,740</td><td>97,400</td><td style="color:var(--ok)">₹33.9</td><td><span class="pill ok">Normal</span></td></tr>
            <tr style="background:var(--bg)"><td><b>Total</b></td><td><b>18,056</b></td><td><b>534</b></td><td><b>320</b></td><td style="font-weight:700">18,270</td><td><b>1,82,700</b></td><td style="color:var(--ok);font-weight:700">₹63.6</td><td><span class="pill brand">Season</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="section-sep">Production KPIs</div>
      <div class="grid-3" style="gap:8px;margin-bottom:0">
        <div><div style="font-size:9px;color:var(--text3);font-weight:700;text-transform:uppercase">Avg Daily Prod</div><div style="font-size:14px;font-weight:700">535 MT</div></div>
        <div><div style="font-size:9px;color:var(--text3);font-weight:700;text-transform:uppercase">Stock Days</div><div style="font-size:14px;font-weight:700;color:var(--warn)">57 days</div></div>
        <div><div style="font-size:9px;color:var(--text3);font-weight:700;text-transform:uppercase">Avg Sell Price</div><div style="font-size:14px;font-weight:700;color:var(--ok)">₹3,480/Qtl</div></div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">By-product Revenue Split — Season</div></div>
      <div class="card-sub">Revenue contribution by by-product category</div>
      <div class="chart-wrap" style="height:200px"><canvas id="chart-prod-byp"></canvas></div>
    </div>
  </div>

  <!-- By-products Table -->
  <div class="card">
    <div class="card-header"><div class="card-title">By-product Production, Stock &amp; Sales — Today</div><span class="pill info">All Units as Applicable</span></div>
    <div class="card-sub">Bagasse · Pressmud · Molasses · Ethanol · Rectified Spirit · CO₂</div>
    <div class="table-wrap">
      <table class="s360">
        <thead><tr><th>By-product</th><th>Unit</th><th>Opening Stock</th><th>Today Production</th><th>Today Consumed</th><th>Today Sales</th><th>Closing Stock</th><th>Stock Value</th><th>Realisation</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td><b>Bagasse</b></td><td>MT</td><td>8,160</td><td>1,446</td><td>1,406</td><td>200</td><td style="font-weight:600">8,000</td><td>₹0.80 Cr</td><td>₹100/MT</td><td><span class="pill warn">Excess</span></td></tr>
          <tr><td><b>Pressmud</b></td><td>MT</td><td>1,200</td><td>192</td><td>—</td><td>—</td><td style="font-weight:600">1,392</td><td>₹0.28 Cr</td><td>₹200/MT</td><td><span class="pill neu">Available</span></td></tr>
          <tr><td><b>Molasses</b></td><td>MT</td><td>2,060</td><td>241</td><td>198</td><td>120</td><td style="font-weight:600">1,983</td><td>₹1.19 Cr</td><td>₹600/MT</td><td><span class="pill ok">Normal</span></td></tr>
          <tr><td><b>Ethanol</b></td><td>KL</td><td>1,02,000</td><td>48,000</td><td>—</td><td>40,000</td><td style="font-weight:600;color:var(--ok)">1,10,000</td><td>₹7.48 Cr</td><td>₹68/L</td><td><span class="pill ok">OMC On Track</span></td></tr>
          <tr><td><b>Rectified Spirit</b></td><td>KL</td><td>22,000</td><td>8,000</td><td>4,000</td><td>6,000</td><td style="font-weight:600">20,000</td><td>₹1.20 Cr</td><td>₹60/L</td><td><span class="pill ok">Normal</span></td></tr>
          <tr><td><b>CO₂</b></td><td>MT</td><td>42</td><td>18</td><td>—</td><td>18</td><td style="font-weight:600">42</td><td>—</td><td>₹4,000/MT</td><td><span class="pill ok">Dispatched</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════
     PANEL 4 — H&T (Harvesting & Transportation)
══════════════════════════════════════════════ -->
<div class="dash-panel" id="panel-ht">
  <div class="panel-header">
    <div class="panel-title-wrap">
      <div class="panel-role-badge" style="background:var(--pu-bg)">🚛</div>
      <div>
        <div class="panel-title">H&amp;T — Harvesting &amp; Transportation</div>
        <div class="panel-sub">Contractors · Harvesters · Transporters · Vehicle Monitoring · Recovery Status</div>
      </div>
    </div>
    <div class="panel-date">Fri, 14 Feb 2025 · Season Day 47</div>
  </div>

  <div class="kpi-row cols-6">
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--pu)"></div>
      <div class="kpi-label">Active Contractors</div>
      <div class="kpi-val">48<span class="kpi-unit"> / 62</span></div>
      <div class="kpi-delta nt">77.4% engagement rate</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ag)"></div>
      <div class="kpi-label">Active Harvesters</div>
      <div class="kpi-val">18<span class="kpi-unit"> / 22</span></div>
      <div class="kpi-delta warn">↓ 4 idle today</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--info)"></div>
      <div class="kpi-label">Active Transporters</div>
      <div class="kpi-val">62<span class="kpi-unit"> / 74</span></div>
      <div class="kpi-delta nt">83.8% active</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--ok)"></div>
      <div class="kpi-label">Trips Completed Today</div>
      <div class="kpi-val">284<span class="kpi-unit"> trips</span></div>
      <div class="kpi-delta up">↑ 4 above 280 target ✓</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--warn)"></div>
      <div class="kpi-label">Avg Turnaround Time</div>
      <div class="kpi-val">4.2<span class="kpi-unit"> hrs</span></div>
      <div class="kpi-delta dn">↑ 0.2 hrs above 4.0 target</div>
    </div>
    <div class="kpi">
      <div class="kpi-accent" style="background:var(--risk)"></div>
      <div class="kpi-label">H&amp;T Advance Pending</div>
      <div class="kpi-val">₹1.86<span class="kpi-unit"> Cr</span></div>
      <div class="kpi-delta dn">38.7% balance recovery</div>
    </div>
  </div>

  <!-- Vehicle Monitoring Strip -->
  <div class="vehicle-strip">
    <div class="veh-box">
      <div class="veh-box-icon">🚛</div>
      <div class="veh-box-val">142</div>
      <div class="veh-box-label">Vehicles Present</div>
    </div>
    <div class="veh-box in-transit">
      <div class="veh-box-icon">🛣️</div>
      <div class="veh-box-val" style="color:var(--ch)">86</div>
      <div class="veh-box-label">Vehicles in Transit</div>
    </div>
    <div class="veh-box at-factory">
      <div class="veh-box-icon">🏭</div>
      <div class="veh-box-val" style="color:var(--pu)">56</div>
      <div class="veh-box-label">At Factory / Waiting</div>
    </div>
    <div class="veh-box">
      <div class="veh-box-icon">⏱️</div>
      <div class="veh-box-val" style="color:var(--warn)">38</div>
      <div class="veh-box-label">Avg Wait (min)</div>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">H&amp;T Recovery Status</div><span class="pill warn">61.3% Recovered</span></div>
      <div class="card-sub">Advance disbursed vs recovered — season to date</div>
      <div class="prog-row"><div class="prog-label">Total Advance</div><div class="prog-bar"><div class="prog-fill" style="width:100%;background:var(--border-s)"></div></div><div class="prog-num">₹4.80 Cr</div></div>
      <div class="prog-row"><div class="prog-label">Recovered</div><div class="prog-bar"><div class="prog-fill" style="width:61.3%;background:var(--ok)"></div></div><div class="prog-num">₹2.94 Cr</div></div>
      <div class="prog-row"><div class="prog-label">Balance</div><div class="prog-bar"><div class="prog-fill" style="width:38.7%;background:var(--warn)"></div></div><div class="prog-num">₹1.86 Cr</div></div>
      <div class="section-sep">Contract Position</div>
      <div class="status-row"><div class="status-label">Total Contracted (MT)</div><div class="status-val">4,20,000 MT</div></div>
      <div class="status-row"><div class="status-label">Quantity Harvested</div><div class="status-val ok">2,18,400 MT (52%)</div></div>
      <div class="status-row"><div class="status-label">Quantity Transported</div><div class="status-val ok">2,27,200 MT</div></div>
      <div class="status-row"><div class="status-label">Balance Contract Qty</div><div class="status-val warn">1,92,800 MT remaining</div></div>
      <div class="status-row"><div class="status-label">Avg Trips per Vehicle/Day</div><div class="status-val">2.0 trips</div></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">H&amp;T Alerts &amp; Exceptions</div><span class="pill warn">3 Open</span></div>
      <div class="card-sub">Field logistics exceptions requiring attention</div>
      <div class="alert-list">
        <div class="alert-item r"><div class="alert-dot r"></div><div class="alert-body"><div class="alert-title">4 Harvesters Idle — Sangli Zone</div><div class="alert-desc">Gang leader dispute · Affecting 3 villages · 240 MT/day at risk</div></div><span class="alert-badge r">Urgent</span></div>
        <div class="alert-item a"><div class="alert-dot a"></div><div class="alert-body"><div class="alert-title">Wait Time Above Target — 38 min</div><div class="alert-desc">Target 30 min · Peak hour 08:00–10:00 · Token congestion</div></div><span class="alert-badge a">Monitor</span></div>
        <div class="alert-item a"><div class="alert-dot a"></div><div class="alert-body"><div class="alert-title">Contractor Advance Recovery &lt;50%</div><div class="alert-desc">12 contractors · ₹1.86 Cr balance · Recovery lag noted</div></div><span class="alert-badge a">Follow Up</span></div>
        <div class="alert-item g"><div class="alert-dot g"></div><div class="alert-body"><div class="alert-title">Trip Target Achieved — 284/280</div><div class="alert-desc">101.4% achievement · Kolhapur zone excellent at 108%</div></div><span class="alert-badge g">Good</span></div>
        <div class="alert-item g"><div class="alert-dot g"></div><div class="alert-body"><div class="alert-title">Harvesting Pace On Schedule</div><div class="alert-desc">2,18,400 MT harvested vs 2,10,000 MT expected (104%)</div></div><span class="alert-badge g">On Track</span></div>
      </div>
    </div>
  </div>

  <!-- Top 10 Contractor Table -->
  <div class="card">
    <div class="card-header"><div class="card-title">Top 10 Contractors — Performance &amp; H&amp;T Advance Recovery</div><span class="pill info">Season to Date</span></div>
    <div class="card-sub">Ranked by cane quantity supplied · Advance disbursed vs recovered</div>
    <div class="table-wrap">
      <table class="s360">
        <thead><tr><th>#</th><th>Contractor Name</th><th>Zone</th><th>Contracted (MT)</th><th>Supplied (MT)</th><th>Achievement %</th><th>H&T Advance (₹L)</th><th>Recovered (₹L)</th><th>Balance (₹L)</th><th>Recovery %</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><b>Rajesh Transport</b></td><td>Kolhapur</td><td>48,000</td><td>31,200</td><td style="color:var(--ok)">65.0%</td><td>12.0</td><td>8.4</td><td style="color:var(--ok)">3.6</td><td style="color:var(--ok)">70%</td><td><span class="pill ok">Good</span></td></tr>
          <tr><td>2</td><td><b>Shivaji Contractors</b></td><td>Hatkanangale</td><td>42,000</td><td>26,880</td><td style="color:var(--ok)">64.0%</td><td>10.5</td><td>6.8</td><td style="color:var(--ok)">3.7</td><td style="color:var(--warn)">64.8%</td><td><span class="pill ok">Normal</span></td></tr>
          <tr><td>3</td><td><b>Mahalaxmi H&T</b></td><td>Shirol</td><td>36,000</td><td>22,320</td><td style="color:var(--warn)">62.0%</td><td>9.0</td><td>5.2</td><td style="color:var(--warn)">3.8</td><td style="color:var(--warn)">57.8%</td><td><span class="pill warn">Monitor</span></td></tr>
          <tr><td>4</td><td><b>Prakash Harvesting</b></td><td>Kolhapur</td><td>34,000</td><td>21,760</td><td style="color:var(--ok)">64.0%</td><td>8.5</td><td>5.8</td><td style="color:var(--ok)">2.7</td><td style="color:var(--ok)">68.2%</td><td><span class="pill ok">Good</span></td></tr>
          <tr><td>5</td><td><b>Ganesh Transport</b></td><td>Miraj</td><td>32,000</td><td>19,840</td><td style="color:var(--warn)">62.0%</td><td>8.0</td><td>4.2</td><td style="color:var(--warn)">3.8</td><td style="color:var(--risk)">52.5%</td><td><span class="pill warn">Follow Up</span></td></tr>
          <tr><td>6</td><td><b>Vitthal Cane H&T</b></td><td>Sangli</td><td>30,000</td><td>15,600</td><td style="color:var(--risk)">52.0%</td><td>7.5</td><td>3.2</td><td style="color:var(--risk)">4.3</td><td style="color:var(--risk)">42.7%</td><td><span class="pill risk">At Risk</span></td></tr>
          <tr><td>7</td><td><b>Siddhesh Transport</b></td><td>Kolhapur</td><td>28,000</td><td>18,200</td><td style="color:var(--ok)">65.0%</td><td>7.0</td><td>4.8</td><td style="color:var(--ok)">2.2</td><td style="color:var(--ok)">68.6%</td><td><span class="pill ok">Good</span></td></tr>
          <tr><td>8</td><td><b>Datta Harvesting</b></td><td>Miraj</td><td>26,000</td><td>16,640</td><td style="color:var(--ok)">64.0%</td><td>6.5</td><td>3.9</td><td>2.6</td><td style="color:var(--warn)">60.0%</td><td><span class="pill ok">Normal</span></td></tr>
          <tr><td>9</td><td><b>Shree H&T Services</b></td><td>Shirol</td><td>24,000</td><td>14,400</td><td style="color:var(--warn)">60.0%</td><td>6.0</td><td>2.8</td><td style="color:var(--warn)">3.2</td><td style="color:var(--risk)">46.7%</td><td><span class="pill warn">Monitor</span></td></tr>
          <tr><td>10</td><td><b>Om Shanti Transport</b></td><td>Hatkanangale</td><td>22,000</td><td>14,300</td><td style="color:var(--ok)">65.0%</td><td>5.5</td><td>3.6</td><td style="color:var(--ok)">1.9</td><td style="color:var(--ok)">65.5%</td><td><span class="pill ok">Good</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════
     PANEL 5 — INVENTORY & DIESEL MANAGEMENT
══════════════════════════════════════════════ -->
<div class="dash-panel" id="panel-inv">
  <div class="panel-header">
    <div class="panel-title-wrap">
      <div class="panel-role-badge" style="background:var(--fi-bg)">📦</div>
      <div>
        <div class="panel-title">Inventory — Stock &amp; Diesel Management</div>
        <div class="panel-sub">Warehouse Stock · Fuel Monitoring · Min/Max Levels · Alerts</div>
      </div>
    </div>
    <div class="panel-date">Fri, 14 Feb 2025</div>
  </div>

  <!-- Diesel Widget -->
  <div class="diesel-widget">
    <div class="diesel-header">
      <div class="diesel-title">⛽ Diesel Pump — Live Status <span class="pill risk" style="margin-left:4px">LOW STOCK</span></div>
      <span class="pill risk">3.1 Days Coverage ⚠</span>
    </div>
    <div class="diesel-gauge-row">
      <div class="diesel-level-wrap">
        <div class="diesel-level">
          <div class="diesel-level-fill" style="height:31%"></div>
        </div>
        <div class="diesel-level-pct">31%</div>
      </div>
      <div class="diesel-kpis">
        <div class="diesel-kpi">
          <div class="diesel-kpi-label">Current Stock</div>
          <div class="diesel-kpi-val" style="color:var(--risk)">28,400 L</div>
        </div>
        <div class="diesel-kpi">
          <div class="diesel-kpi-label">Opening Stock</div>
          <div class="diesel-kpi-val">25,040 L</div>
        </div>
        <div class="diesel-kpi">
          <div class="diesel-kpi-label">Today's Receipt</div>
          <div class="diesel-kpi-val" style="color:var(--ok)">+12,000 L</div>
        </div>
        <div class="diesel-kpi">
          <div class="diesel-kpi-label">Today's Consumption</div>
          <div class="diesel-kpi-val" style="color:var(--risk)">-8,640 L</div>
        </div>
        <div class="diesel-kpi">
          <div class="diesel-kpi-label">Avg Daily Consumption</div>
          <div class="diesel-kpi-val">9,200 L/day</div>
        </div>
        <div class="diesel-kpi">
          <div class="diesel-kpi-label">Stock Days Remaining</div>
          <div class="diesel-kpi-val" style="color:var(--risk)">3.1 days 🔴</div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid-3">
    <div class="card" style="grid-column:span 2">
      <div class="card-header"><div class="card-title">Diesel Consumption — Department-wise (Today)</div></div>
      <div class="card-sub">Vehicle &amp; equipment-wise fuel usage vs standard</div>
      <div class="table-wrap">
        <table class="s360">
          <thead><tr><th>Department / Category</th><th>Vehicles/Equip</th><th>Std Consumption</th><th>Actual Today</th><th>Variance</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Harvesters (18 units)</td><td>18</td><td>3,600 L</td><td style="color:var(--warn)">3,960 L</td><td style="color:var(--risk)">+360 L ↑10%</td><td><span class="pill warn">High</span></td></tr>
            <tr><td>Tractors / Cane Transport</td><td>42</td><td>2,520 L</td><td>2,480 L</td><td style="color:var(--ok)">-40 L ↓1.6%</td><td><span class="pill ok">Normal</span></td></tr>
            <tr><td>Factory Vehicles</td><td>12</td><td>480 L</td><td>440 L</td><td style="color:var(--ok)">-40 L</td><td><span class="pill ok">Normal</span></td></tr>
            <tr><td>Generators / DG Sets</td><td>4</td><td>840 L</td><td style="color:var(--ok)">760 L</td><td style="color:var(--ok)">-80 L ↓9.5%</td><td><span class="pill ok">Good</span></td></tr>
            <tr style="background:var(--bg)"><td><b>Total</b></td><td><b>76</b></td><td><b>7,440 L</b></td><td style="font-weight:700;color:var(--warn)">8,640 L</td><td style="color:var(--risk)">+1,200 L ↑16%</td><td><span class="pill risk">Excess</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Diesel Alerts</div></div>
      <div class="alert-list">
        <div class="alert-item r"><div class="alert-dot r"></div><div class="alert-body"><div class="alert-title">Stock Below 30-Day Minimum</div><div class="alert-desc">Min level 60,000 L · Current 28,400 L · Order 50,000 L immediately</div></div></div>
        <div class="alert-item r"><div class="alert-dot r"></div><div class="alert-body"><div class="alert-title">Harvester Consumption Abnormal</div><div class="alert-desc">+10% above standard · Check harvester #7 &amp; #14</div></div></div>
        <div class="alert-item a"><div class="alert-dot a"></div><div class="alert-body"><div class="alert-title">Overall Consumption +16% Today</div><div class="alert-desc">8,640 L vs 7,440 L standard · Investigate root cause</div></div></div>
      </div>
    </div>
  </div>

  <!-- Stock Balance -->
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">Stock Balance — Finished Products &amp; By-products</div><span class="pill info">Warehouse / Silo-wise</span></div>
      <div class="card-sub">Overall stock — current level vs min/max norms</div>
      <div class="table-wrap">
        <table class="s360">
          <thead><tr><th>Item / Product</th><th>Location</th><th>Opening</th><th>Receipts</th><th>Issues/Sales</th><th>Closing</th><th>Min Level</th><th>Max Level</th><th>Stock Days</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td><b>Sugar M30</b></td><td>Godown A/B</td><td>8,426 MT</td><td>284 MT</td><td>180 MT</td><td>8,530 MT</td><td>2,000 MT</td><td>20,000 MT</td><td>47 d</td><td><span class="pill ok">Normal</span></td></tr>
            <tr><td><b>Sugar S30</b></td><td>Godown C/D</td><td>9,630 MT</td><td>250 MT</td><td>140 MT</td><td>9,740 MT</td><td>2,000 MT</td><td>20,000 MT</td><td>70 d</td><td><span class="pill warn">Slow Move</span></td></tr>
            <tr><td><b>Bagasse</b></td><td>Yard Open</td><td>8,160 MT</td><td>1,446 MT</td><td>1,406 MT</td><td>8,200 MT</td><td>4,000 MT</td><td>8,000 MT</td><td>—</td><td><span class="pill risk">Excess ⚠</span></td></tr>
            <tr><td><b>Molasses</b></td><td>Silo 1–3</td><td>2,060 MT</td><td>241 MT</td><td>318 MT</td><td>1,983 MT</td><td>500 MT</td><td>4,000 MT</td><td>6 d</td><td><span class="pill ok">Normal</span></td></tr>
            <tr><td><b>Ethanol</b></td><td>Distillery T</td><td>1,02,000 L</td><td>48,000 L</td><td>40,000 L</td><td>1,10,000 L</td><td>50,000 L</td><td>2,00,000 L</td><td>—</td><td><span class="pill ok">Adequate</span></td></tr>
            <tr><td><b>Packing Bags</b></td><td>Store Rm 2</td><td>48,000 bags</td><td>—</td><td>5,340 bags</td><td>42,660 bags</td><td>20,000</td><td>80,000</td><td>8 d</td><td><span class="pill ok">OK</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Critical Chemicals — Stock Monitoring</div><span class="pill risk">2 Critical</span></div>
      <div class="card-sub">Items below minimum stock level — reorder required immediately</div>
      <div class="table-wrap">
        <table class="s360">
          <thead><tr><th>Item</th><th>Current Stock</th><th>Min Level</th><th>Reorder Qty</th><th>Days Left</th><th>PO Status</th></tr></thead>
          <tbody>
            <tr><td><b>Sulphur</b></td><td style="color:var(--risk)">1.2 MT</td><td>4 MT</td><td>15 MT</td><td style="color:var(--risk)">2 days</td><td><span class="pill risk">PO Urgent</span></td></tr>
            <tr><td><b>Lime (CaO)</b></td><td style="color:var(--risk)">0.8 MT</td><td>3 MT</td><td>20 MT</td><td style="color:var(--risk)">1 day</td><td><span class="pill risk">PO Urgent</span></td></tr>
            <tr><td>Filter Cloth</td><td style="color:var(--warn)">14 pcs</td><td>30 pcs</td><td>60 pcs</td><td style="color:var(--warn)">6 days</td><td><span class="pill warn">Order Now</span></td></tr>
            <tr><td>Phosphoric Acid</td><td style="color:var(--ok)">420 L</td><td>200 L</td><td>—</td><td style="color:var(--ok)">18 days</td><td><span class="pill ok">Adequate</span></td></tr>
            <tr><td>Lubricating Oil</td><td style="color:var(--ok)">180 L</td><td>100 L</td><td>—</td><td style="color:var(--ok)">22 days</td><td><span class="pill ok">Adequate</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="section-sep">Stock Summary Indicators</div>
      <div class="status-row"><div class="status-label">Items Below Min Level</div><div class="status-val risk">2 Critical Items</div></div>
      <div class="status-row"><div class="status-label">Excess Stock Items</div><div class="status-val warn">1 Item (Bagasse)</div></div>
      <div class="status-row"><div class="status-label">Slow-moving Stock</div><div class="status-val warn">S30 Sugar (70 days)</div></div>
      <div class="status-row"><div class="status-label">Total Store Value</div><div class="status-val">₹68.4 Cr (approx.)</div></div>
      <div class="status-row"><div class="status-label">Open Purchase Orders</div><div class="status-val warn">4 POs Pending</div></div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════
     PANEL 6 — FINANCE & SALES
══════════════════════════════════════════════ -->
<div class="dash-panel" id="panel-fi">
  <div class="panel-header">
    <div class="panel-title-wrap">
      <div class="panel-role-badge" style="background:var(--sa-bg)">💰</div>
      <div>
        <div class="panel-title">Finance &amp; Sales</div>
        <div class="panel-sub">Bank Position · Cash Flow · Receivables · Revenue · Sales Performance · Dispatch</div>
      </div>
    </div>
    <div class="panel-date">Fri, 14 Feb 2025 · Season Day 47</div>
  </div>

  <!-- Financial Position KPIs -->
  <div class="fi-kpi-grid">
    <div class="fi-kpi">
      <div class="fi-kpi-accent" style="background:var(--ok)"></div>
      <div class="fi-kpi-label">Total Bank Balance</div>
      <div class="fi-kpi-val">₹7.58 <span class="fi-kpi-unit">Cr</span></div>
      <div class="fi-kpi-note" style="color:var(--ok)">↑ ₹1.2 Cr vs yesterday</div>
    </div>
    <div class="fi-kpi">
      <div class="fi-kpi-accent" style="background:var(--text3)"></div>
      <div class="fi-kpi-label">Cash Balance (Petty)</div>
      <div class="fi-kpi-val">₹0.84 <span class="fi-kpi-unit">Cr</span></div>
      <div class="fi-kpi-note">Today receipts ₹3.4 Cr · Payments ₹2.2 Cr</div>
    </div>
    <div class="fi-kpi">
      <div class="fi-kpi-accent" style="background:var(--warn)"></div>
      <div class="fi-kpi-label">C.C. Loan Outstanding</div>
      <div class="fi-kpi-val">₹20.4 <span class="fi-kpi-unit">Cr</span></div>
      <div class="fi-kpi-note" style="color:var(--warn)">58.3% of ₹35 Cr limit used</div>
    </div>
    <div class="fi-kpi">
      <div class="fi-kpi-accent" style="background:var(--ch)"></div>
      <div class="fi-kpi-label">C.C. Available Limit</div>
      <div class="fi-kpi-val">₹14.6 <span class="fi-kpi-unit">Cr</span></div>
      <div class="fi-kpi-note">Renewal due in 48 days</div>
    </div>
    <div class="fi-kpi">
      <div class="fi-kpi-accent" style="background:var(--risk)"></div>
      <div class="fi-kpi-label">Outstanding Receivables</div>
      <div class="fi-kpi-val">₹22.4 <span class="fi-kpi-unit">Cr</span></div>
      <div class="fi-kpi-note" style="color:var(--risk)">₹4.8 Cr overdue &gt;30 days</div>
    </div>
    <div class="fi-kpi">
      <div class="fi-kpi-accent" style="background:var(--risk)"></div>
      <div class="fi-kpi-label">Outstanding Payables</div>
      <div class="fi-kpi-val">₹14.8 <span class="fi-kpi-unit">Cr</span></div>
      <div class="fi-kpi-note" style="color:var(--warn)">₹3.1 Cr due this week</div>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">14-Day Cash Flow Forecast</div><span class="pill warn">3 Deficit Days</span></div>
      <div class="card-sub">Expected inflow vs outflow — next 14 days (₹ Cr)</div>
      <div class="chart-wrap" style="height:170px"><canvas id="chart-fi-cashflow"></canvas></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Sugar Price Trend — Weekly Realisation</div></div>
      <div class="card-sub">Avg realisation per Qtl vs MSP ₹3,100 (₹/Qtl)</div>
      <div class="chart-wrap" style="height:170px"><canvas id="chart-fi-price"></canvas></div>
    </div>
  </div>

  <div class="grid-3">
    <div class="card">
      <div class="card-header"><div class="card-title">Revenue — Today / MTD / Season</div></div>
      <div class="card-sub">Product-wise revenue breakdown</div>
      <div class="status-row"><div class="status-label">Today's Revenue</div><div class="status-val ok">₹2.84 Cr</div></div>
      <div class="status-row"><div class="status-label">MTD Revenue</div><div class="status-val">₹68.4 Cr</div></div>
      <div class="status-row"><div class="status-label">Season Revenue (Total)</div><div class="status-val">₹142.8 Cr</div></div>
      <div class="section-sep">Product-wise</div>
      <div class="prog-row"><div class="prog-label">Sugar Sales</div><div class="prog-bar"><div class="prog-fill" style="width:83%;background:var(--ok)"></div></div><div class="prog-num">₹118.4 Cr</div></div>
      <div class="prog-row"><div class="prog-label">Ethanol</div><div class="prog-bar"><div class="prog-fill" style="width:13%;background:var(--pu)"></div></div><div class="prog-num">₹18.4 Cr</div></div>
      <div class="prog-row"><div class="prog-label">Molasses</div><div class="prog-bar"><div class="prog-fill" style="width:5%;background:var(--ag)"></div></div><div class="prog-num">₹2.8 Cr</div></div>
      <div class="prog-row"><div class="prog-label">Pressmud/CO₂</div><div class="prog-bar"><div class="prog-fill" style="width:2%;background:var(--info)"></div></div><div class="prog-num">₹1.2 Cr</div></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Receivables Ageing</div><span class="pill risk">₹4.8 Cr Overdue</span></div>
      <div class="card-sub">Outstanding receivables by age bucket</div>
      <div class="prog-row"><div class="prog-label">0–30 Days</div><div class="prog-bar"><div class="prog-fill" style="width:55%;background:var(--ok)"></div></div><div class="prog-num">₹12.4 Cr</div></div>
      <div class="prog-row"><div class="prog-label">31–60 Days</div><div class="prog-bar"><div class="prog-fill" style="width:28%;background:var(--warn)"></div></div><div class="prog-num">₹6.2 Cr</div></div>
      <div class="prog-row"><div class="prog-label">61–90 Days</div><div class="prog-bar"><div class="prog-fill" style="width:11%;background:var(--risk)"></div></div><div class="prog-num">₹2.4 Cr</div></div>
      <div class="prog-row"><div class="prog-label">&gt;90 Days</div><div class="prog-bar"><div class="prog-fill" style="width:6%;background:#7F1D1D"></div></div><div class="prog-num">₹1.4 Cr</div></div>
      <div style="margin-top:10px;padding:8px 10px;background:#FEF2F2;border-radius:6px;border:1px solid #FECACA">
        <div style="font-size:10px;font-weight:700;color:var(--risk)">⚠ ₹1.4 Cr overdue &gt;90 days — Legal action recommended</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Expenses — Today / MTD</div></div>
      <div class="card-sub">Department-wise expense vs budget</div>
      <div class="status-row"><div class="status-label">Today's Expenses</div><div class="status-val ok">₹1.62 Cr</div></div>
      <div class="status-row"><div class="status-label">MTD Expenses</div><div class="status-val warn">₹42.8 Cr</div></div>
      <div class="status-row"><div class="status-label">Season Expenses</div><div class="status-val">₹138.2 Cr</div></div>
      <div class="section-sep">Major Heads</div>
      <div class="prog-row"><div class="prog-label">Cane Purchase</div><div class="prog-bar"><div class="prog-fill" style="width:72%;background:var(--ag)"></div></div><div class="prog-num">₹99.6 Cr</div></div>
      <div class="prog-row"><div class="prog-label">Labour &amp; Wages</div><div class="prog-bar"><div class="prog-fill" style="width:14%;background:var(--md)"></div></div><div class="prog-num">₹18.4 Cr</div></div>
      <div class="prog-row"><div class="prog-label">Chemicals</div><div class="prog-bar"><div class="prog-fill" style="width:6%;background:var(--warn)"></div></div><div class="prog-num">₹8.2 Cr</div></div>
      <div class="prog-row"><div class="prog-label">Maintenance</div><div class="prog-bar"><div class="prog-fill" style="width:4%;background:var(--pu)"></div></div><div class="prog-num">₹6.4 Cr</div></div>
      <div class="prog-row"><div class="prog-label">Other Exp.</div><div class="prog-bar"><div class="prog-fill" style="width:4%;background:var(--text3)"></div></div><div class="prog-num">₹5.6 Cr</div></div>
    </div>
  </div>

  <!-- Sales & Dispatch Table -->
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">Sales — Today &amp; MTD Performance</div><span class="pill ok">₹3,480/Qtl Avg</span></div>
      <div class="card-sub">Grade-wise sales quantity, value and pending dispatch</div>
      <div class="table-wrap">
        <table class="s360">
          <thead><tr><th>Grade</th><th>Today Qty (Qtl)</th><th>Today Value (₹)</th><th>MTD Qty (Qtl)</th><th>MTD Value (₹ Cr)</th><th>Pending DO (Qtl)</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td><b>M30</b></td><td>1,800</td><td>62.6 L</td><td>46,800</td><td>₹16.3</td><td>400</td><td><span class="pill ok">Active</span></td></tr>
            <tr><td><b>S30</b></td><td>1,400</td><td>48.7 L</td><td>36,400</td><td>₹12.7</td><td>400</td><td><span class="pill warn">Slow Move</span></td></tr>
            <tr style="background:var(--bg)"><td><b>Total</b></td><td><b>3,200</b></td><td><b>₹1.11 Cr</b></td><td><b>83,200</b></td><td><b>₹29.0 Cr</b></td><td style="color:var(--warn)"><b>800</b></td><td><span class="pill ok">On Track</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="section-sep">Today vs Target vs Last Year</div>
      <div class="status-row"><div class="status-label">Sales Qty Target (Today)</div><div class="status-val">3,000 Qtl</div></div>
      <div class="status-row"><div class="status-label">Actual Sales Today</div><div class="status-val ok">3,200 Qtl (+200 ↑)</div></div>
      <div class="status-row"><div class="status-label">Price vs Last Year</div><div class="status-val ok">₹3,480 vs ₹3,240 (+₹240/Qtl)</div></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Top Customers — Outstanding</div><span class="pill warn">₹22.4 Cr receivable</span></div>
      <div class="card-sub">Active buyers · Sales value · Collection status</div>
      <div class="table-wrap">
        <table class="s360">
          <thead><tr><th>Customer</th><th>Season Qty (Qtl)</th><th>Season Value</th><th>Outstanding</th><th>Overdue</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Shreeji Traders</td><td>24,000</td><td>₹8.4 Cr</td><td style="color:var(--ok)">₹2.1 Cr</td><td>—</td><td><span class="pill ok">Current</span></td></tr>
            <tr><td>Shivam Sugar Co.</td><td>18,000</td><td>₹6.2 Cr</td><td style="color:var(--warn)">₹6.2 Cr</td><td style="color:var(--warn)">₹2.0 Cr</td><td><span class="pill warn">Slow Pay</span></td></tr>
            <tr><td>Amar Exports</td><td>14,000</td><td>₹4.8 Cr</td><td style="color:var(--risk)">₹4.8 Cr</td><td style="color:var(--risk)">₹2.8 Cr</td><td><span class="pill risk">Overdue</span></td></tr>
            <tr><td>National Trading</td><td>16,000</td><td>₹5.6 Cr</td><td style="color:var(--ok)">₹0</td><td>—</td><td><span class="pill ok">Cleared</span></td></tr>
            <tr><td>Ravi Commodities</td><td>8,000</td><td>₹2.8 Cr</td><td style="color:var(--warn)">₹2.6 Cr</td><td style="color:var(--warn)">—</td><td><span class="pill warn">Follow Up</span></td></tr>
            <tr><td>KrishnaVal Agro</td><td>6,000</td><td>₹2.1 Cr</td><td style="color:var(--ok)">₹1.8 Cr</td><td>—</td><td><span class="pill ok">Active</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

`;

const PANEL_IDS = ["cmd", "cane", "prod", "ht", "inv", "fi"] as const;

export type DashboardPanelId = (typeof PANEL_IDS)[number];

const panelMarkup = PANEL_IDS.reduce<Record<DashboardPanelId, string>>(
  (panels, id, index) => {
    const idStart = dashboardPanels.indexOf(`id="panel-${id}"`);
    const actualStart = dashboardPanels.lastIndexOf(`<div class="dash-panel`, idStart);
    const nextId = PANEL_IDS[index + 1];
    const nextIdStart = nextId ? dashboardPanels.indexOf(`id="panel-${nextId}"`) : -1;
    const end =
      nextIdStart === -1
        ? dashboardPanels.length
        : dashboardPanels.lastIndexOf(`<div class="dash-panel`, nextIdStart);

    if (actualStart === -1 || end === -1) {
      throw new Error(`Dashboard panel markup is missing for ${id}`);
    }

    panels[id] = dashboardPanels
      .slice(actualStart, end)
      .replace(/class="dash-panel(?: active)?"/, 'class="dash-panel active"');
    return panels;
  },
  {} as Record<DashboardPanelId, string>,
);

export function getDashboardPanel(id: DashboardPanelId) {
  return panelMarkup[id];
}
