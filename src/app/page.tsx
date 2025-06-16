import AppBar from "@/components/AppBar";
import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <AppBar />
        <div className="container max-w-5xl mt-5">
          <div className="flex flex-col gap-[40px]">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
          </div>
        </div>
      </div>
    </>
  );
}
