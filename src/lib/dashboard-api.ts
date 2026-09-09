import { getDashboardPanel, type DashboardPanelId } from "@/components/dashboard-panels";

export type UpdateItem = {
  id: string;
  title: string;
  detail: string;
  time: string;
  severity: "normal" | "warning" | "critical";
  acknowledged: boolean;
};

export type UpdatePage = {
  items: UpdateItem[];
  nextCursor?: number;
};

const departmentNames: Record<DashboardPanelId, string> = {
  cmd: "Management",
  cane: "Cane & Agriculture",
  prod: "Production",
  ht: "Harvesting & Transport",
  inv: "Inventory",
  fi: "Finance & Sales",
};

const updateMessages = [
  ["Shift target reviewed", "Actual output is aligned with the latest operating plan."],
  ["Variance needs attention", "A threshold variance was detected and assigned for review."],
  ["Live reading received", "The newest telemetry batch passed validation."],
  ["Daily plan synchronized", "Targets and operating constraints are now up to date."],
  ["Exception detected", "The control room has received a new exception for assessment."],
  ["Handover completed", "The next shift has confirmed the operational handover."],
] as const;

function delay(ms: number, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timer);
        reject(new DOMException("Request aborted", "AbortError"));
      },
      { once: true },
    );
  });
}

export async function fetchDepartmentDashboard(id: DashboardPanelId, signal?: AbortSignal) {
  await delay(320, signal);
  return {
    id,
    updatedAt: new Date().toISOString(),
    markup: getDashboardPanel(id),
  };
}

export async function fetchDepartmentUpdates(
  id: DashboardPanelId,
  cursor: number,
  signal?: AbortSignal,
): Promise<UpdatePage> {
  await delay(280, signal);
  const pageSize = 4;
  const items = Array.from({ length: pageSize }, (_, offset) => {
    const index = cursor + offset;
    const message = updateMessages[index % updateMessages.length];
    return {
      id: `${id}-${index}`,
      title: message[0],
      detail: `${departmentNames[id]} · ${message[1]}`,
      time: `${8 + Math.floor(index / 2)}:${index % 2 === 0 ? "15" : "45"}`,
      severity: index % 7 === 1 ? "critical" : index % 3 === 1 ? "warning" : "normal",
      acknowledged: false,
    } satisfies UpdateItem;
  });

  return { items, nextCursor: cursor + pageSize < 12 ? cursor + pageSize : undefined };
}

export async function acknowledgeUpdate(id: string) {
  await delay(240);
  return id;
}
