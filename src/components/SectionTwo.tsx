import { ChartBarDefault } from "@/components/ui/chart-bar";
import { ChartBarHorizontal } from "@/components/ui/chart-bar-horizontal";
export default function SectionTwo() {
  return (
    <>
      <h3 className="font-bold text-2xl">Sales Performance</h3>
      <div className="flex gap-[100px]">
        <ChartBarDefault />
        <ChartBarHorizontal />
      </div>
    </>
  );
}
