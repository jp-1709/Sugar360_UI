import {
  Bell,
  Search,
  Command as CmdIcon,
  Menu,
  X,
  PanelLeftClose,
  PanelLeftOpen,
  Zap,
  Sprout,
  Factory,
  Truck,
  Package,
  Wallet,
} from "lucide-react";
import { useEffect, useState } from "react";

export type PanelId = "cmd" | "cane" | "prod" | "ht" | "inv" | "fi";

type NavItem = {
  id: PanelId;
  label: string;
  dept: string;
  icon: typeof Zap;
  group: string;
};

export const NAV: NavItem[] = [
  { id: "cmd", label: "MD / Management", dept: "Level 1 Executive View", icon: Zap, group: "Top Management" },
  { id: "cane", label: "Cane & Agriculture", dept: "Receiving & Forecast", icon: Sprout, group: "Operations" },
  { id: "prod", label: "Production", dept: "Sugar & By-products", icon: Factory, group: "Operations" },
  { id: "ht", label: "H&T", dept: "Harvesting & Transport", icon: Truck, group: "Operations" },
  { id: "inv", label: "Inventory", dept: "Stock & Fuel / Diesel", icon: Package, group: "Business" },
  { id: "fi", label: "Finance & Sales", dept: "Cash Flow & Revenue", icon: Wallet, group: "Business" },
];

const TICKER = [
  { label: "Season Day", value: "Day 47" },
  { label: "Cane Crushed", value: "4,820 MT", tone: "success" },
  { label: "Recovery %", value: "11.08%", tone: "warning" },
  { label: "Cane Yard", value: "2,840 MT", tone: "success" },
  { label: "Bank & Cash", value: "₹8.42 Cr", tone: "success" },
  { label: "Sugar Stock", value: "18,240 MT" },
  { label: "Ethanol Today", value: "48,000 L", tone: "success" },
  { label: "Diesel Stock", value: "28,400 L", tone: "destructive" },
] as const;

function toneClass(tone?: string) {
  if (tone === "success") return "text-success";
  if (tone === "warning") return "text-warning";
  if (tone === "destructive") return "text-destructive";
  return "text-foreground";
}

export function AppShell({
  active,
  onSelect,
  children,
}: {
  active: PanelId;
  onSelect: (id: PanelId) => void;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const current = NAV.find((n) => n.id === active)!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar
        active={active}
        onSelect={(id) => {
          onSelect(id);
          setMobileOpen(false);
        }}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((c) => !c)}
      />
      <div
        className={`transition-[padding] duration-200 ${collapsed ? "lg:pl-16" : "lg:pl-60"}`}
      >
        <TopNav title={current.label} onMenuClick={() => setMobileOpen(true)} />
        <Ticker />
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}

function Sidebar({
  active,
  onSelect,
  mobileOpen,
  onClose,
  collapsed,
  onToggleCollapse,
}: {
  active: PanelId;
  onSelect: (id: PanelId) => void;
  mobileOpen: boolean;
  onClose: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}) {
  let lastGroup = "";
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-surface-panel/60 transition-all duration-200 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "lg:w-16" : "w-60"}`}
      >
        <div
          className={`flex h-14 items-center border-b border-border ${
            collapsed ? "lg:justify-center lg:px-0" : "justify-between"
          } px-4`}
        >
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-foreground text-background">
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
                <path d="M8 1L10.5 6H14L11 9.5L12 14L8 11.5L4 14L5 9.5L2 6H5.5L8 1Z" />
              </svg>
            </div>
            {!collapsed && (
              <div className="leading-tight">
                <div className="text-[15px] font-semibold tracking-tight">Sugar 360</div>
                <div className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Decision Intelligence
                </div>
              </div>
            )}
          </div>
          <button
            onClick={onToggleCollapse}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="hidden h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground lg:grid"
          >
            {collapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto p-3">
          {NAV.map((item) => {
            const showGroup = item.group !== lastGroup;
            lastGroup = item.group;
            const isActive = item.id === active;
            return (
              <div key={item.id}>
                {showGroup && (
                  <div className="mb-2 mt-3 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.group}
                  </div>
                )}
                <button
                  onClick={() => onSelect(item.id)}
                  className={`group flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{item.label}</span>
                    <span
                      className={`block truncate text-[11px] ${
                        isActive ? "text-background/70" : "text-muted-foreground"
                      }`}
                    >
                      {item.dept}
                    </span>
                  </span>
                </button>
              </div>
            );
          })}
        </nav>

        <div className="border-t border-border p-3">
          <div className="rounded-lg border border-border bg-surface p-3">
            <div className="text-[11px] font-medium text-muted-foreground">
              Season 2024–25 Progress
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-success" style={{ width: "39%" }} />
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
              <span>Day 47 of 120</span>
              <span>
                <b className="font-semibold text-foreground">39%</b> complete
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function TopNav({ title, onMenuClick }: { title: string; onMenuClick: () => void }) {
  const [clock, setClock] = useState("—");
  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur">
      <button
        onClick={onMenuClick}
        className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
      >
        <Menu className="h-4 w-4" />
      </button>
      <div className="hidden min-w-0 items-center gap-2 text-sm text-muted-foreground md:flex">
        <span>Dashboard</span>
        <span className="text-border">/</span>
        <span className="truncate font-medium text-foreground">{title}</span>
      </div>
      <div className="flex-1" />
      <div className="relative hidden w-full max-w-sm md:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search..."
          className="h-9 w-full rounded-lg border border-border bg-surface pl-9 pr-14 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
        />
        <kbd className="pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          <CmdIcon className="h-3 w-3" />K
        </kbd>
      </div>
      <span className="hidden items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[11px] font-medium text-success sm:inline-flex">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
        Live
      </span>
      <span className="hidden font-mono text-xs text-muted-foreground lg:inline">{clock}</span>
      <button className="relative grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
        <Bell className="h-4 w-4" />
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
      </button>
      <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-foreground to-muted-foreground text-xs font-semibold text-background">
        MD
      </div>
    </header>
  );
}

function Ticker() {
  return (
    <div className="flex gap-6 overflow-x-auto border-b border-border bg-surface-panel/60 px-4 py-2 lg:px-6">
      {TICKER.map((t) => (
        <div key={t.label} className="shrink-0">
          <div className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
            {t.label}
          </div>
          <div className={`text-[13px] font-semibold ${toneClass((t as { tone?: string }).tone)}`}>
            {t.value}
          </div>
        </div>
      ))}
    </div>
  );
}
