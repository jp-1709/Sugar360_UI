import { createFileRoute } from "@tanstack/react-router";
import { DepartmentDashboard } from "@/components/DepartmentDashboard";

export const Route = createFileRoute("/inventory")({
  head: () => ({ meta: [{ title: "Inventory · Sugar 360" }] }),
  component: InventoryPage,
});

function InventoryPage() {
  return <DepartmentDashboard department="inv" />;
}
