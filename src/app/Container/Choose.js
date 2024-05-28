import Image from "next/image";
import teammeeting from "../Images/teammeeting.jpg";
import male from "../Images/maleemp.png";
import IconWithText from "@/Components/IconwithText";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IoPeopleCircleOutline } from "react-icons/io5";

function Choose() {
  return (
    <div className="relative flex items-center justify-center h-auto bg-cover bg-center">
      <Image
        src={teammeeting}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 bg-primary-blue opacity-50"></div>
      <div className="flex relative z-10 w-[1440px] mx-auto  px-5 ">
        <Image src={male} alt="Background Image" className="h-auto w-64 mt-10" />
        <div className=" text-left text-white ml-20 my-16 w-[1440px] mx-auto ">
          <h1 className="text-[65px] text-white font-medium font-sans">why choose us!</h1>
          <p className="mt-10 text-white font-sans font-normal text-[24px] w-[620px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layoutto using 'making it look like readable English.</p>
        <div className="flex justify-between mt-20">
        <IconWithText
            icon={HiOutlineCheckBadge}
            title="100+"
            subtitle="Service complete"
        />
            <IconWithText
            icon={HiOutlineClipboardDocumentCheck}
            title="100+"
            subtitle="Project complete"
        />
            <IconWithText
            icon={IoPeopleCircleOutline}
            title="100+"
            subtitle="Client satisfaction"
        />

        </div>

        </div>
       
      </div>
    </div>
  );
}

export default Choose;
