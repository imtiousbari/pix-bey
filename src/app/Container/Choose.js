// import Image from "next/image";
// import teammeeting from "../Images/teammeeting.jpg";
// import male from "../Images/maleemp.png";
// import IconWithText from "@/Components/IconwithText";
// import { HiOutlineCheckBadge } from "react-icons/hi2";
// import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
// import { IoPeopleCircleOutline } from "react-icons/io5";

// function Choose() {
//   return (
//     <div className="relative flex items-center justify-center h-auto bg-cover bg-center">
//       <Image
//         src={teammeeting}
//         alt="Background Image"
//         layout="fill"
//         objectFit="cover"
//         objectPosition="center"
//       />
//       <div className="absolute inset-0 bg-primary-blue opacity-50"></div>
//       <div className="flex relative z-10 w-[1440px] mx-auto  px-5 ">
//         <Image src={male} alt="Background Image" className="h-auto w-64 mt-10" />
//         <div className=" text-left text-white ml-20 my-16 w-[1440px] mx-auto ">
//           <h1 className="text-[65px] text-white font-medium font-sans">why choose us!</h1>
//           <p className="mt-10 text-white font-sans font-normal text-[24px] w-[620px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layoutto using 'making it look like readable English.</p>
//         <div className="flex justify-between mt-20">
//         <IconWithText
//             icon={HiOutlineCheckBadge}
//             title="100+"
//             subtitle="Service complete"
//         />
//             <IconWithText
//             icon={HiOutlineClipboardDocumentCheck}
//             title="100+"
//             subtitle="Project complete"
//         />
//             <IconWithText
//             icon={IoPeopleCircleOutline}
//             title="100+"
//             subtitle="Client satisfaction"
//         />

//         </div>

//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default Choose;

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
      <div className="flex relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image src={male} alt="Background Image" className="h-auto w-32 sm:w-48 md:w-64 mt-6 sm:mt-8 md:mt-10 lg:mt-10" />
        <div className="text-left text-white ml-4 sm:ml-10 md:ml-20 my-8 sm:my-12 md:my-16 lg:my-16 w-full lg:w-[1440px] mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-medium font-sans">Why Choose Us!</h1>
          <p className="mt-4 sm:mt-6 md:mt-10 lg:mt-10 text-sm sm:text-base md:text-lg lg:text-xl w-full max-w-md md:max-w-lg lg:max-w-none">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layoutto using 'making it look like readable English.
          </p>
          <div className="flex flex-col sm:flex-row justify-between mt-10 sm:mt-12 md:mt-20 lg:mt-20 space-y-4 sm:space-y-0 sm:space-x-4">
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
