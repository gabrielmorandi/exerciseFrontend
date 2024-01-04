"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import axios from "axios"
import ProgressBar from "@/app/components/ProgressBar"

export default function QuizOptions({
  quizName,
  setIsFinishTime,
  qntCorrectAnswers,
  setQntCorrectAnswers,
  setQuestionLength,
}) {
  const [data, setData] = useState()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)
  const [submited, setSubmited] = useState(false)
  const [correctIndex, setCorrectIndex] = useState(null)

  const leters = "ABCDE"

  useEffect(() => {
    axios.get("http://localhost:3000/data.json").then((res) => {
      setData(res.data.quizzes.filter((quiz) => quiz.title === quizName))
    })
  }, [quizName])

  useEffect(() => {
    if (data) {
      setCorrectIndex(
        data[0].questions[currentQuestionIndex].options.findIndex(
          (option) => option === data[0].questions[currentQuestionIndex].answer
        )
      )
      setQuestionLength(data[0].questions.length)
    }
  }, [currentQuestionIndex, data])

  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index)
  }

  const handleSubmit = () => {
    if (selectedOptionIndex !== null) {
      setSubmited(true)
    }
    if (selectedOptionIndex === correctIndex) {
      setQntCorrectAnswers(qntCorrectAnswers + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < data[0].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOptionIndex(null)
      setSubmited(false)
    } else {
      setIsFinishTime(true)
    }
  }

  if (data) {
    return (
      <>
        <main className="grid w-full gap-10 pt-12 md:gap-16 place-items-center">
          <div className="flex flex-col w-11/12 gap-3">
            <h3 className="italic leading-normal text-[14px] dark:text-[#ABC1E1] text-[#626C7F] md:text-xl">
              Question {currentQuestionIndex + 1} of {data[0].questions.length}
            </h3>
            <h2 className="text-[#313E51] dark:text-[#fff] text-[20px] leading-6 font-medium md:text-4xl">
              {data[0].questions[currentQuestionIndex].question}
            </h2>
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={data[0].questions.length}
            />
          </div>
          <div className="flex flex-col items-center w-full pb-10">
            <div className="flex flex-col w-11/12 gap-3 md:gap-6">
              {data[0].questions[currentQuestionIndex].options.map(
                (option, index) => (
                  <button
                    key={index}
                    className={`flex items-center w-full gap-8 p-3 focus:border-[#a729f5] bg-white dark:bg-[#3B4D66] rounded-xl md:rounded-3xl outline-none outline-0 border-[3px] border-transparent ${
                      selectedOptionIndex !== null && !submited
                        ? index === selectedOptionIndex
                          ? "border-[#a729f5] [&>div]:bg-[#a729f5] [&>div]:text-white"
                          : null
                        : null
                    } ${
                      submited
                        ? index === selectedOptionIndex
                          ? index === correctIndex
                            ? "border-[#26D782] [&>div]:bg-[#26D782] [&>div]:text-white"
                            : "border-[#EE5454] [&>div]:bg-[#EE5454] [&>div]:text-white"
                          : index === correctIndex
                          ? null
                          : "border-transparent"
                        : "border-transparent"
                    } `}
                    onClick={() => handleOptionClick(index)}
                    disabled={submited}
                  >
                    <div className="grid min-w-10 min-h-10 w-10 h-10 rounded-md place-items-center bg-[#F4F6FA] text-[18px] text-[#626C7F] font-medium leading-none">
                      {leters[index]}
                    </div>
                    <h2 className="text-[18px] w-full text-left text-[#313E51] dark:text-white font-medium leading-none">
                      {option}
                    </h2>
                    {submited ? (
                      index === selectedOptionIndex ? (
                        index === correctIndex ? (
                          <Image
                            src="/icon-correct.svg"
                            width={32}
                            height={32}
                            alt="Correct Answer!"
                          />
                        ) : (
                          <Image
                            src="/icon-error.svg"
                            width={32}
                            height={32}
                            alt="Incorrect Answer!"
                          />
                        )
                      ) : index === correctIndex ? (
                        <Image
                          src="/icon-correct.svg"
                          width={32}
                          height={32}
                          alt="Correct Answer!"
                        />
                      ) : null
                    ) : null}
                  </button>
                )
              )}
              {submited ? (
                <button
                  onClick={handleNext}
                  className="w-full p-[19px] bg-[#A729F5] md:text-[28px] md:p-8 md:rounded-3xl rounded-xl text-[18px] text-white font-medium leading-5 md:mt-2"
                >
                  {currentQuestionIndex < data[0].questions.length - 1
                    ? "Next Question"
                    : "Finish Quiz"}
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="w-full p-[19px] bg-[#A729F5] md:text-[28px] md:p-8 md:rounded-3xl rounded-xl text-[18px] text-white font-medium leading-5  md:mt-2"
                >
                  Submit Answer
                </button>
              )}
            </div>
          </div>
        </main>
      </>
    )
  }
}
