import Image from "next/image"

const AboutTheMove = () => {
  return (
    <div className="py-10">
      <p className="font-semibold text-lg mb-5">About the Move:</p>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full mx-auto">
        {/* Left Content */}
        <div className="flex flex-col gap-5 justify-center p-4">
          <p className="italic text-lg">We are a community of people who are against Sexual and Gender based violence. We are here to empower the community, give voice to the voiceless and curb future crime.</p>
          <div>
            <p className="font-semibold">Say NO! to #SGBV</p>
            <p className="text-gray-500">Join us today</p>
            <p className="text-gray-500">Together we can make a difference</p>
            <p className="text-gray-500">#SayNoToSGBV</p>
            <p className="text-gray-500">#EmpowerTheCommunity</p>
            <p className="text-gray-500">#GiveVoiceToTheVoiceless</p>
            <p className="text-gray-500">#CurbFutureCrime</p>
          </div>
        </div>
          
          {/* Right Image */}
          <div className="relative w-full h-60 md:h-full">
            <Image
              src="/images/abuse.jpg"
              alt="Empower"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
    </div>
  )
}
export default AboutTheMove