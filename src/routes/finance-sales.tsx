import { createFileRoute } from "@tanstack/react-router";
import { DepartmentDashboard } from "@/components/DepartmentDashboard";

export const Route = createFileRoute("/finance-sales")({
  head: () => ({ meta: [{ title: "Finance & Sales · Sugar 360" }] }),
  component: FinanceSalesPage,
});

function FinanceSalesPage() {
  return <DepartmentDashboard department="fi" />;
}
