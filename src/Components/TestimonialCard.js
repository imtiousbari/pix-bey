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
    <div>
    <div className="relative bg-white rounded-tl-[150px] w-72 h-auto overflow-hidden">
      <div className="absolute top-24 left-4 text-primary-blue">
        <FaQuoteLeft size={60} />
      </div>
      <Image
        src={imageUrl}
        alt={`${author} picture`}
        width={900}
        className="rounded-tl-lg"
      />
    </div>

      <div className="flex items-start p-8 bg-primary-blue bg-opacity-5  rounded-lg shadow-md space-x-6">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            {[...Array(rating)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" size={20} />
            ))}
          </div>
          <p className="text-black mb-4">"{quote}"</p>
          <div>
            <p className="font-bold">{author}</p>
            <p className="text-gray-500">
              {position} at{" "}
              <a href={`https://${company}`} className="text-blue-500">
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
