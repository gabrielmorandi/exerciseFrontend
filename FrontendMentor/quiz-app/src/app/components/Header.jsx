import SwithTheme from "./SwitchTheme"
import Image from "next/image"

export default function Header({ quizName }) {
  if (!quizName) {
    return (
      <header className="grid w-full place-items-center pt-[26px] md:pt-10 lg:pt-24">
        <div className="flex flex-row-reverse w-11/12 place-items-center max-w-[1160px]">
          <SwithTheme />
        </div>
      </header>
    )
  } else {
    return (
      <header className="grid w-full place-items-center pt-[26px] md:pt-10 lg:pt-24">
        <div className="flex flex-row-reverse justify-between w-11/12 place-items-center max-w-[1160px]">
          <SwithTheme />
          {quizName === "html" ? (
            <div className="flex items-center gap-4 md:gap-6">
              <div className=" bg-[#FFF1E9] p-[5.7px] md:p-2 rounded-md">
                <Image
                  src="/icon-html.svg"
                  width={28.5}
                  height={28.5}
                  alt="HTML"
                  className="md:h10 md:w-10"
                />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-3xl ">
                HTML
              </h2>
            </div>
          ) : quizName === "css" ? (
            <div className="flex items-center gap-4 md:gap-6">
              <div className=" bg-[#E0FDEF] p-[5.7px] md:p-2 rounded-md">
                <Image
                  src="/icon-css.svg"
                  width={28.5}
                  height={28.5}
                  alt="CSS"
                  className="md:h10 md:w-10"
                />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-3xl ">
                CSS
              </h2>
            </div>
          ) : quizName === "javascript" ? (
            <div className="flex items-center gap-4 md:gap-6">
              <div className=" bg-[#EBF0FF] p-[5.7px] md:p-2 rounded-md">
                <Image
                  src="/icon-js.svg"
                  width={28.5}
                  height={28.5}
                  alt="JAVASCRIPT"
                  className="md:h10 md:w-10"
                />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-3xl ">
                JavaScript
              </h2>
            </div>
          ) : quizName === "accessibility" ? (
            <div className="flex items-center gap-4 md:gap-6">
              <div className=" bg-[#F6E7FF] p-[5.7px] md:p-2 rounded-md">
                <Image
                  src="/icon-accessibility.svg"
                  width={28.5}
                  height={28.5}
                  alt="ACCESSIBILITY"
                  className="md:h10 md:w-10"
                />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-3xl ">
                Accessibility
              </h2>
            </div>
          ) : null}
        </div>
      </header>
    )
  }
}
