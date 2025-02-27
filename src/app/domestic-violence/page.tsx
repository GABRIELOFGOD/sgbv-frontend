"use client";

import Button from "@/components/common/buttons/SmallButton";
import Loading from "@/components/common/loader/Loading";
import subMenuRoutes, { SubMenuRouteType } from "@/data/pillars";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

const DomesticViolence = () => {
  const [content, setContent] = useState<SubMenuRouteType | null>(null);
  const path = usePathname();

  useEffect(() => {
    if (path === "/domestic-violence") {
      setContent(subMenuRoutes.find((route) => route.link === path) || null);
    }
  }, [path, content]);

  if (content === null) return <Loading />
  
  return (
    <div className="container mx-auto py-10 md:py-20 px-4 md:px-20 w-full">
      <div className="flex justify-between flex-col gap-5 md:min-h-[200px] h-fit items-center">
        <p className="md:text-[50px] text-4xl font-bold">Women are <span className="text-[#2a66ec]">Treasure</span> not punching bags</p>
        <div className="flex flex-col gap-3">
          <p className="text-gray-500 font-semibold">{content?.description}</p>
          <Button text="Report a case"  className="bg-[#2a66ec] font-semibold py-2 shadow-sm hover:opacity-90 duration-200" />
        </div>
      </div>
      <div className="py-20 flex flex-col gap-5">
        <p className="font-semibold text-xl">Preventions for this act:</p>
        <ul>
          {content?.preventionMeasures?.map((item, index) => (
            <li key={index} className="py-2 list-disc ml-5">
              <p><b>{item.title}: </b>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-20 flex flex-col gap-5">
        <p className="font-semibold text-xl">Our Initiatives:</p>
        <ul>
          {content?.ngoInitiatives?.map((item, index) => (
            <li key={index} className="py-2 list-disc ml-5">
              <p><b>{item.title}: </b>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {
        content?.resources && <div className="py-20 flex flex-col gap-5">
          <p className="font-semibold text-xl">Articles:</p>
          <ul className="flex flex-col gap-4">
            {content.resources.map((item, i) => (
              <li key={i} className="list-disc ml-5"><Link className="underline text-blue-500 decoration-blue-500" href={item}>Article {i+1}</Link></li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}
export default DomesticViolence