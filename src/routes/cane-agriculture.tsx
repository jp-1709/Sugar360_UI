import { createFileRoute } from "@tanstack/react-router";
import { DepartmentDashboard } from "@/components/DepartmentDashboard";

export const Route = createFileRoute("/cane-agriculture")({
  head: () => ({ meta: [{ title: "Cane & Agriculture · Sugar 360" }] }),
  component: CaneAgriculturePage,
});

function CaneAgriculturePage() {
  return <DepartmentDashboard department="cane" />;
}
