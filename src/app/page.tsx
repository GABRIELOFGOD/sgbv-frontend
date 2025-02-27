"use client";

import Button from "@/components/common/buttons/SmallButton";
import AboutTheMove from "@/components/layout/home/AboutTheMove";
import MissionVisson from "@/components/layout/home/MissionVisson";
import Newsletter from "@/components/layout/home/Newsletter";
import Partners from "@/components/layout/home/Partners";
import Survivors from "@/components/layout/home/Survivors";

export default function Home() {

  return (
    <div className="py-10 md:py-20 w-full container mx-auto">
      <div className="px-4 md:px-20 w-full">
        <div className="flex justify-between flex-col md:flex-row gap-5">
          <p className="md:text-[50px] text-4xl font-bold">Say NO! to <span className="text-[#2a66ec]">#SGBV</span> in our communities</p>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 font-semibold">Empowering the community, giving voice to   the voiceless and curbing future crime</p>
            <Button text="Join Now!"  className="bg-[#2a66ec] font-semibold py-2 shadow-sm hover:opacity-90 duration-200" />
          </div>
        </div>
        <Survivors />
        <hr className="border-[#dcdcdc] w-full border-2" />
        <AboutTheMove />
      </div>
      <MissionVisson />
      <Partners />
      <Newsletter />
    </div>
  );
}
