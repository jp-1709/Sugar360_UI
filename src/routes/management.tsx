import { createFileRoute } from "@tanstack/react-router";
import { DepartmentDashboard } from "@/components/DepartmentDashboard";

export const Route = createFileRoute("/management")({
  head: () => ({ meta: [{ title: "MD / Management · Sugar 360" }] }),
  component: ManagementPage,
});

function ManagementPage() {
  return <DepartmentDashboard department="cmd" />;
}
