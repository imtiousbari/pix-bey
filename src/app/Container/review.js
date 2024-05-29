import { FaLongArrowAltRight } from "react-icons/fa";
import TestimonialCard from "@/Components/TestimonialCard";
import busiwmn from "../Images/busiwmn.jpg";

function review() {
  return (
    <div className="w-[1440px] mx-auto px-5 my-20 ">
      <div className="flex justify-between">
        <p className="font-sans text-[65px] leading-[65px] font-medium w-[600px]">
            what our customer say about us
        </p>
        <div>
        <a
          href="/contact"
          className="inline-block py-4 px-16 shadow-lg border-2 border-black bg-white text-black rounded-lg flex items-center space-x-2 transition-colors duration-300"
        >
          <span className="text-left font-semibold text-xl font-sans">
            read more
          </span>
          <FaLongArrowAltRight size={40} />
        </a>
        </div>
      </div>
      <div className="my-16">
      <TestimonialCard
        quote="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo modi tenetur."
        author="Raida Islam"
        position="Product Manager"
        company="pixbay"
        rating={5}
        imageUrl={busiwmn} // Replace with your image path
      />
      </div>
    </div>
  );
}

export default review;
