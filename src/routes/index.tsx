import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell, type PanelId } from "@/components/AppShell";
import { dashboardPanels } from "@/components/dashboard-panels";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sugar 360 · Decision Intelligence Dashboard" },
      {
        name: "description",
        content:
          "Role-based decision intelligence for sugar mills: crushing, recovery, cane supply, finance, stores and sales KPIs in one live control room.",
      },
      { property: "og:title", content: "Sugar 360 · Decision Intelligence Dashboard" },
      {
        property: "og:description",
        content:
          "Live mill control room: crushing rate, recovery %, cane supply, finance and inventory alerts across every role.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap",
      },
      { rel: "stylesheet", href: "/sugar360.css" },
    ],
  }),
  component: Dashboard,
});

function loadScript(src: string, attr: string) {
  return new Promise<void>((resolve, reject) => {
    const el = document.createElement("script");
    el.src = src;
    el.dataset[attr] = "true";
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(el);
  });
}

function Dashboard() {
  const [active, setActive] = useState<PanelId>("cmd");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!document.querySelector("script[data-s360chartjs]")) {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js",
          "s360chartjs",
        );
      }
      if (cancelled) return;
      void loadScript("/sugar360.js", "s360run");
    })();
    return () => {
      cancelled = true;
      document.querySelectorAll("script[data-s360run]").forEach((s) => s.remove());
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".dash-panel").forEach((p) => {
      p.classList.toggle("active", p.id === `panel-${active}`);
    });
    const w = window as unknown as { buildCharts?: () => void };
    const timers = [60, 300].map((d) => setTimeout(() => w.buildCharts?.(), d));
    return () => timers.forEach(clearTimeout);
  }, [active]);



  return (
    <AppShell active={active} onSelect={setActive}>
      <div className="s360-app" dangerouslySetInnerHTML={{ __html: dashboardPanels }} />
    </AppShell>
  );
}
