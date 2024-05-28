import Image from "next/image";
import banner from "../Images/header.jpg";
import Header from "../Common/Header";
import { FaLongArrowAltRight } from "react-icons/fa";

function Banner() {
  return (
    <div className=" h-screen text-white overflow-hidden ">
      <div className="absolute inset-0">
        <Image
          src={banner}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />

        <div className="absolute inset-0 bg-primary-blue opacity-60"></div>
      </div>
      <Header />
      <div
        className="relative z-10 flex flex-col justify-center items-center h-full text-center mx-auto"
        style={{ maxWidth: "1440px" }}
      >
        <div className="md:w-[600px] mb-20">
          <h1 className="text-[65px] font-sans font-medium leading-tight mb-4">
            Your Gateway To A Richer Life
          </h1>
        </div>
        <div className="md:w-[870px] mb-20">
          <p className="font-sans md:text-2xl text-white font-normal mb-8 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layoutto using
            'making it look like readable English.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-block py-4 px-16 shadow-lg shadow-primary-blue bg-white text-primary-blue rounded-lg flex items-center space-x-2 transition-colors duration-300"
        >
          <span className="text-left font-semibold text-2xl font-sans">
            Learn More
          </span>
          <FaLongArrowAltRight size={40} />
        </a>
      </div>
    </div>
  );
}

export default Banner;
