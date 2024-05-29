// import ServiceCard from "@/Components/ServiceCard";
// import graphiccard from "../Images/graphicdesign.png";

// function Services() {
//   return (
//     <div className=" w-[1440px] mx-auto h-auto my-14">
//       <div>
//         <p className="font-sans font-medium text-[65px] text-center	mx-60">
//           We provide various kind of service for you
//         </p>
//       </div>
//       <div className="flex justify-center items-center">
//         <ServiceCard
//           imageUrl={graphiccard}
//           title="Graphic Design"
//           text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in"
//         />
//         <ServiceCard
//           imageUrl={graphiccard}
//           title="App Design"
//           text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in"
//         />
//         <ServiceCard
//           imageUrl={graphiccard}
//           title="Web Design"
//           text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in"
//         />
//       </div>
//     </div>

//   );
// }

// export default Services;
import ServiceCard from "@/Components/ServiceCard";
import graphiccard from "../Images/graphicdesign.png";

function Services() {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto my-14 px-4">
      <div>
        <p className="font-sans font-medium text-[22px] sm:text-[30px] md:text-[48px] lg:text-[65px] text-center mx-4 sm:mx-5 md:mx-5 lg:mx-60">
          We provide various kind of service for you
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-4 lg:gap-6">
        <ServiceCard
          imageUrl={graphiccard}
          title="Graphic Design"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in"
        />
        <ServiceCard
          imageUrl={graphiccard}
          title="App Design"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in"
        />
        <ServiceCard
          imageUrl={graphiccard}
          title="Web Design"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in"
        />
      </div>
    </div>
  );
}

export default Services;


