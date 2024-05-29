import Image from "next/image";
import faq from "../Images/faq.jpeg";
function ContactUs() {
  return (
    <div className="w-[1440px] mx-auto ">
      <p className="font-sans text-center text-[65px] leading-[65px] pb-10 ">
        get in touch and contact with us!
      </p>
      <p className="font-sans text-center text-[22px] leading-[22px] text-gray-500 mx-80">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      <div className="flex flex-col md:flex-row justify-center  bg-gray-100 p-6 my-10 ">
        <div className="w-full md:w-1/2 p-5 ">
          {/* <h2 className="text-3xl font-bold mb-6">Contact Us</h2> */}
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  id="first-name"
                  placeholder="first name"
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  id="last-name"
                  placeholder="last name"
                  className="mt-1 block w-full p-4 border border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="mt-1 block w-full p-4 border border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <textarea
                id="message"
                rows="8"
                placeholder="message"
                className="mt-1 block w-full p-4 border border-gray-300 rounded-3xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-1/4 mt-8 py-4 px-4 bg-indigo-600 text-white font-medium rounded-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                send message
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 ">
          <Image src={faq} alt="Contact Us" className="rounded-lg h-[500px] pt-5"  />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
