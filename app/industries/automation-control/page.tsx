import { Stage3PageTemplate } from "@/components/stage3/Stage3PageTemplate";
import { stage3PageBriefs } from "@/lib/stage3-page-briefs";

export default function AutomationControlPage() {
  return <Stage3PageTemplate brief={stage3PageBriefs["/industries/automation-control/"]} />;
}
