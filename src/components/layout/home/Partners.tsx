"use client";
import Image from "next/image";

const partners = [
  "/partners/brainbuiders.png",
  "/partners/ford.png",
  "/partners/ksmwa.png",
  "/partners/safernet.png",
  "/partners/webfala.png",
];

const Partners = () => {
  return (
    <div className="w-full bg-gray-100 py-10">
      <p className="text-lg font-semibold text-center mb-5">Our Partners</p>
      <div className="relative w-full overflow-hidden">
        {/* Scrolling Wrapper */}
        <div className="flex gap-10 animate-scroll whitespace-nowrap">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="w-[180px] h-[100px] flex-shrink-0 bg-white rounded-lg shadow-md flex items-center justify-center "
            >
              <Image
                src={partner}
                alt="Partner Logo"
                width={160}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
