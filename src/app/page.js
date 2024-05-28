import Banner from "./Container/Banner";
import Services from "./Container/Services";
import Choose from "./Container/Choose";
import Review from "./Container/review";
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      //  <main className="">
      <main className="flex flex-col bg-gray-100 ">
       <Banner/>
       <Services/>
       <Choose/>
       <Review/>
    </main>
  );
}
