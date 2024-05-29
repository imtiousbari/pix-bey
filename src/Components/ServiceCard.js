// import Image from "next/image";

// const ServiceCard = ({ imageUrl, title, text }) => {
//   return (
//     <div className="m-10">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden px-11 py-6 w-72 ">
//         <div className="flex justify-center items-center  bg-white rounded-lg">
//           <Image
//             className="h-auto w-24 object-cover object-center"
//             src={imageUrl}
//             alt="Card Image"
//             width={96}
//             height={96}
//           />
//         </div>
//         <div className="text-center mt-4">
//           <h3 className="text-lg font-semibold mb-2">{title}</h3>
//           <p className="text-gray-600 text-left" >{text}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;
import Image from "next/image";

const ServiceCard = ({ imageUrl, title, text }) => {
  return (
    <div className="mx-auto my-4 sm:my-6 md:my-4 lg:my-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 sm:px-8 sm:py-6 md:px-6 md:py-5 lg:px-11 lg:py-6 w-full sm:w-72 md:w-72 lg:w-80">
        <div className="flex justify-center items-center bg-white rounded-lg">
          <Image
            className="h-auto w-16 sm:w-20 md:w-20 lg:w-24 object-cover object-center"
            src={imageUrl}
            alt="Card Image"
            width={96}
            height={96}
          />
        </div>
        <div className="text-center mt-2 sm:mt-4 md:mt-3 lg:mt-4">
          <h3 className="text-base sm:text-lg md:text-lg lg:text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base md:text-sm lg:text-base text-left">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;



// const IconWithText = ({ icon: Icon, title, subtitle }) => {
//     return (
//       <div className="flex items-center p-4 bg-gray-100 rounded-md shadow-md">
//         <div className="text-blue-500 mr-4">
//           <Icon size={40} />
//         </div>
//         <div>
//           <h2 className="text-xl font-bold">{title}</h2>
//           <p className="text-gray-600">{subtitle}</p>
//         </div>
//       </div>
//     );
//   };
// export default IconWithText;