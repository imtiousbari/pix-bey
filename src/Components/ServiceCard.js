import Image from "next/image";

const ServiceCard = ({ imageUrl, title, text }) => {
  return (
    <div className="m-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden px-11 py-6 w-72 ">
        <div className="flex justify-center items-center  bg-white rounded-lg">
          <Image
            className="h-auto w-24 object-cover object-center"
            src={imageUrl}
            alt="Card Image"
            width={96}
            height={96}
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-left" >{text}</p>
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