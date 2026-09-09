import { createFileRoute } from "@tanstack/react-router";
import { DepartmentDashboard } from "@/components/DepartmentDashboard";

export const Route = createFileRoute("/harvesting-transport")({
  head: () => ({ meta: [{ title: "Harvesting & Transport · Sugar 360" }] }),
  component: HarvestingTransportPage,
});

function HarvestingTransportPage() {
  return <DepartmentDashboard department="ht" />;
}
