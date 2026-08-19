import Image from "next/image";
import localFont from "next/font/local";


const poppins = localFont({
  src: "./fonts/Poppins-Extrabold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
    <div className=" flex flex-col gap-4 items-center justify-center">
      <p className={`text-3xl font-bold ${poppins.className}`}>
      The best URL shortener in the Market
      </p>
      <p>
        Transform long URLs into short, powerful links that are easy to share, manage, and remember.
      </p>
    </div>
    <div className=" flex justify-start relative">
    <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true}/>
    </div>
      </section>
    </main>
  );
}
