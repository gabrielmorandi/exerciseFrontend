import Header from "./components/Header"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid w-full gap-10 pt-8 place-items-center lg:pt-24">
        <div className="flex flex-col justify-between w-11/12 gap-10 lg:flex-row md:gap-16 max-w-[1160px]">
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-2 flex-col text-[#313E51] text-[40px] md:text-[64px] leading-none font-light dark:text-white">
              <h2>Welcome to the</h2>
              <h1 className="font-medium">Frontend Quiz!</h1>
            </div>
            <h3 className="text-[#626C7F] italic text-[14px] md:text-[20px] leading-normal">
              Pick a subject to get started.
            </h3>
          </div>
          <div className="flex flex-col w-full gap-3 md:gap-6">
            <Link
              href={"/quiz/html"}
              className="flex gap-8 p-3 rounded-[12px] md:rounded-[24px] bg-white items-center dark:bg-[#3B4D66] lg:p-5 "
            >
              <div className=" bg-[#FFF1E9] p-[5.7px] lg:p-2 rounded-md md:rounded-xl">
                <Image
                  src="/icon-html.svg"
                  width={28.5}
                  height={28.5}
                  alt=""
                  className="md:h10 md:w-10"
                />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-[28px]">
                HTML
              </h2>
            </Link>
            <Link
              href={"/quiz/css"}
              className="flex gap-8 p-3 rounded-[12px] md:rounded-[24px] bg-white items-center dark:bg-[#3B4D66] lg:p-5 "
            >
              <div className=" bg-[#E0FDEF] p-[5.7px] lg:p-2 rounded-md md:rounded-xl">
                <Image
                  src="/icon-css.svg"
                  width={28.5}
                  height={28.5}
                  alt=""
                  className="md:h10 md:w-10"
                />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-[28px]">
                CSS
              </h2>
            </Link>
            <Link
              href={"/quiz/javascript"}
              className="flex gap-8 p-3 rounded-[12px] md:rounded-[24px] bg-white items-center dark:bg-[#3B4D66] lg:p-5 "
            >
              <div className=" bg-[#EBF0FF] p-[5.7px] lg:p-2 rounded-md md:rounded-xl">
                <Image
                  src="/icon-js.svg"
                  width={28.5}
                  height={28.5}
                  alt=""
                  className="md:h10 md:w-10"
                />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-[28px]">
                JavaScript
              </h2>
            </Link>
            <Link
              href={"/quiz/accessibility"}
              className="flex gap-8 p-3 rounded-[12px] md:rounded-[24px] bg-white items-center dark:bg-[#3B4D66] lg:p-5 "
            >
              <div className=" bg-[#F6E7FF] p-[5.7px] lg:p-2 rounded-md md:rounded-xl">
                <Image
                  src="/icon-accessibility.svg"
                  width={28.5}
                  height={28.5}
                  alt=""
                  className="md:h10 md:w-10"
                />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-[28px]">
                Accessibility
              </h2>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
