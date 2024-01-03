import Header from "./components/Header"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid w-full gap-10 pt-8 place-items-center">
        <div className="flex flex-col w-11/12 gap-4">
          <div className="flex gap-2 flex-col text-[#313E51] text-[40px] leading-none font-light dark:text-white">
            <h2>Welcome to the</h2>
            <h1 className="font-medium">Frontend Quiz!</h1>
          </div>
          <h3 className="text-[#626C7F] italic text-[14px] leading-normal">
            Pick a subject to get started.
          </h3>
        </div>
        <div className="flex flex-col w-11/12 gap-3">
          <Link
            href={"/quiz/html"}
            className="flex gap-4 p-3 rounded-[12px] bg-white items-center"
          >
            <div className=" bg-[#FFF1E9] p-[5.7px] rounded-md">
              <Image src="/icon-html.svg" width={28.5} height={28.5} alt="" />
            </div>
            <h2 className="text-[#313E51] text-[18px] font-medium leading-none">
              HTML
            </h2>
          </Link>
          <Link
            href={"/quiz/css"}
            className="flex gap-4 p-3 rounded-[12px] bg-white items-center"
          >
            <div className=" bg-[#E0FDEF] p-[5.7px] rounded-md">
              <Image src="/icon-css.svg" width={28.5} height={28.5} alt="" />
            </div>
            <h2 className="text-[#313E51] text-[18px] font-medium leading-none">
              CSS
            </h2>
          </Link>
          <Link
            href={"/quiz/javascript"}
            className="flex gap-4 p-3 rounded-[12px] bg-white items-center"
          >
            <div className=" bg-[#EBF0FF] p-[5.7px] rounded-md">
              <Image src="/icon-js.svg" width={28.5} height={28.5} alt="" />
            </div>
            <h2 className="text-[#313E51] text-[18px] font-medium leading-none">
              JavaScript
            </h2>
          </Link>
          <Link
            href={"/quiz/accessibility"}
            className="flex gap-4 p-3 rounded-[12px] bg-white items-center"
          >
            <div className=" bg-[#F6E7FF] p-[5.7px] rounded-md">
              <Image
                src="/icon-accessibility.svg"
                width={28.5}
                height={28.5}
                alt=""
              />
            </div>
            <h2 className="text-[#313E51] text-[18px] font-medium leading-none">
              Accessibility
            </h2>
          </Link>
        </div>
      </main>
    </>
  )
}
