import Image from "next/image";

const Logo = "/images/female-logo.png";
const Woman = "/images/woman.jpg";

const SGBVCard = ({
  name,
  kind,
  words,
  image
}: {
  name: string;
  kind: string;
  words: string;
  image?: string;
}) => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col md:grid md:grid-cols-2 gap-3 w-full mx-auto shadow-md">
      {/* Left Content */}
      <div className="flex flex-col gap-5 justify-center p-4">
        <div className="bg-[#2a66ec] rounded-md p-1 w-fit h-fit">
          <Image src={Logo} alt="Logo" width={20} height={20} />
        </div>
        <p className="font-semibold text-lg italic">&ldquo;{words}&ldquo;</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">{kind}</p>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-60 md:h-full">
        <Image
          src={image ? image : Woman}
          alt="Victim"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SGBVCard;
