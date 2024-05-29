import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
  rating,
  imageUrl,
}) => {
  return (
    <div className="relative">
      <div className="relative bg-white rounded-tl-[150px] w-80 h-auto overflow-hidden z-10">
        <div className="absolute top-24 left-4 text-primary-blue">
          <FaQuoteLeft size={60} />
        </div>
        <Image
          src={imageUrl}
          alt={`${author} picture`}
          width={900}
          height={600} // added height for better image scaling
          className="rounded-tl-lg"
        />
      </div>

      <div className="absolute top-20 left-40 right-0 flex items-start w-[1240px] h-[420px]  bg-primary-blue bg-opacity-5 rounded-lg shadow-md space-x-6 z-0">
        <div className="flex-1 mx-28 my-24 px-36">
          <div className="flex space-x-4 items-center mb-11">
            {[...Array(rating)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" size={35} />
            ))}
          </div>
          <p className="text-black font-sans mb-5 font-normal text-[24px] leading-6 pr-24">"{quote}"</p>
          <div>
            <p className="font-bold text-[24px] font-sans mb-2">{author}</p>
            <p className="text-gray-500 text-[16px] font-sans">
              {position} at{" "}
              <a href={`https://${company}`} className="text-blue-500 font-sans">
                @{company}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
