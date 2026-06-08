import { Stage3PageTemplate } from "@/components/stage3/Stage3PageTemplate";
import { stage3PageBriefs } from "@/lib/stage3-page-briefs";

export default function QualityTestingPage() {
  return <Stage3PageTemplate brief={stage3PageBriefs["/quality-testing/"]} />;
}
