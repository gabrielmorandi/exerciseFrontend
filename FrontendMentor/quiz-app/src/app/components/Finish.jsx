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
    <div className="grid w-full gap-10 pt-12 place-items-center">
      <div className="flex flex-col w-11/12 gap-4">
        <div className="flex gap-2 flex-col text-[#313E51] text-[40px] leading-none font-light dark:text-white">
          <h2>Quiz completed</h2>
          <h3 className="font-medium">You scored...</h3>
        </div>
      </div>
      <div className="grid w-11/12 gap-3 place-items-center">
        <div className="flex flex-col items-center w-full gap-4 p-8 bg-white rounded-xl dark:bg-[#3B4D66]">
          {quizName === "html" ? (
            <div className="flex items-center gap-4 ">
              <div className=" bg-[#FFF1E9] p-[5.7px] rounded-md">
                <Image src="/icon-html.svg" width={28.5} height={28.5} alt="" />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none">
                HTML
              </h2>
            </div>
          ) : quizName === "css" ? (
            <div className="flex items-center gap-4 ">
              <div className=" bg-[#E0FDEF] p-[5.7px] rounded-md">
                <Image src="/icon-css.svg" width={28.5} height={28.5} alt="" />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none">
                CSS
              </h2>
            </div>
          ) : quizName === "javascript" ? (
            <div className="flex items-center gap-4 ">
              <div className=" bg-[#EBF0FF] p-[5.7px] rounded-md">
                <Image src="/icon-js.svg" width={28.5} height={28.5} alt="" />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none">
                JavaScript
              </h2>
            </div>
          ) : quizName === "accessibility" ? (
            <div className="flex items-center gap-4 ">
              <div className=" bg-[#F6E7FF] p-[5.7px] rounded-md">
                <Image
                  src="/icon-accessibility.svg"
                  width={28.5}
                  height={28.5}
                  alt=""
                />
              </div>
              <h2 className="text-[#313E51] dark:text-[#fff] text-[18px] font-medium leading-none">
                Accessibility
              </h2>
            </div>
          ) : null}
          <h2 className="text-[88px] text-[#313E51] font-medium leading-none dark:text-white">
            {qntCorrectAnswers}
          </h2>
          <h3 className="font-[18px] leading-none text-[#626C7F] dark:text-[#ABC1E1]">
            out of {questionLength}
          </h3>
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
  )
}
