import { createFileRoute } from "@tanstack/react-router";
import { DepartmentDashboard } from "@/components/DepartmentDashboard";

export const Route = createFileRoute("/production")({
  head: () => ({ meta: [{ title: "Production · Sugar 360" }] }),
  component: ProductionPage,
});

function ProductionPage() {
  return <DepartmentDashboard department="prod" />;
}
