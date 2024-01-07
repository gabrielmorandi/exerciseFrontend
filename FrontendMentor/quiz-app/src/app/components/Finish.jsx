"use client"

import Image from "next/image"

export default function Finish({
  quizName,
  qntCorrectAnswers,
  questionLength,
  setIsFinishTime,
  setQntCorrectAnswers,
}) {
  return (
    <div className="grid w-full pt-12 lg:pt-24 place-items-center">
      <div className="flex flex-col w-11/12 gap-10 md:gap-16 lg:flex-row max-w-[1160px]">
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-2 flex-col text-[#313E51] text-[40px] leading-none font-light dark:text-white lg:text-[64px]">
            <h2>Quiz completed</h2>
            <h3 className="font-medium">You scored...</h3>
          </div>
        </div>
        <div className="grid w-full gap-3 lg:gap-8 place-items-center">
          <div className="flex flex-col items-center w-full gap-4 p-8 bg-white rounded-xl dark:bg-[#3B4D66] md:p-12 lg:gap-10">
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
                <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-3xl">
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
                <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-3xl">
                  CSS
                </h2>
              </div>
            ) : quizName === "javascript" ? (
              <div className="flex items-center gap-4 md:gap-6">
                <div className=" bg-[#EBF0FF] p-[5.7px] md:p-2 rounded-md">
                  <Image
                    src="/icon-js.svg"
                    HTML
                    width={28.5}
                    height={28.5}
                    alt=" JavaScript"
                    className="md:h10 md:w-10"
                  />
                </div>
                <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-3xl">
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
                    alt="Accessibility"
                    className="md:h10 md:w-10"
                  />
                </div>
                <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none md:text-3xl">
                  Accessibility
                </h2>
              </div>
            ) : null}
            <div className="flex flex-col gap-4">
              <h2 className="text-[88px] lg:text-[144px] text-[#313E51] font-medium leading-none dark:text-white">
                {qntCorrectAnswers}
              </h2>
              <h3 className="font-[18px] lg:text-[24px] leading-none text-[#626C7F] dark:text-[#ABC1E1]">
                out of {questionLength}
              </h3>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <button
              onClick={() => [setIsFinishTime(false), setQntCorrectAnswers(0)]}
              className="w-full p-[19px] bg-[#A729F5] md:text-[28px] md:p-8 md:rounded-3xl rounded-xl text-[18px] text-center text-white font-medium leading-5"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
