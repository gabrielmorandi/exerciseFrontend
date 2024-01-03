"use client"

import { useState, useEffect } from "react"
import { redirect } from "next/navigation"
import axios from "axios"

import Header from "@/app/components/Header"
import ProgressBar from "@/app/components/ProgressBar"

export default function Quiz({ params }) {
  const [data, setData] = useState()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const quizName = params.quizName

  const leters = "ABCDE"

  useEffect(() => {
    axios.get("http://localhost:3000/data.json").then((res) => {
      setData(res.data.quizzes.filter((quiz) => quiz.title === quizName))
    })
  }, [quizName])

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Trate o fim do quiz aqui
    }
  }

  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index)
  }

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)
  if (data) {
    let currentQuestion = data[0].questions[currentQuestionIndex]

    return (
      <>
        <Header quizName={quizName} />
        <main className="grid w-full gap-10 pt-12 place-items-center">
          <div className="flex flex-col w-11/12 gap-3">
            <h3 className="italic leading-normal text-[14px] dark:text-[#ABC1E1] text-[#626C7F]">
              Question {currentQuestionIndex + 1} of {data[0].questions.length}
            </h3>
            <h2 className="text-[#313E51] dark:text-[#fff] text-[20px] leading-6 font-medium">
              {data[0].questions[currentQuestionIndex].question}
            </h2>
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={data[0].questions.length}
            />
          </div>
          <div className="flex flex-col items-center w-full pb-10">
            <div className="flex flex-col w-11/12 gap-3">
              {data[0].questions[currentQuestionIndex].options.map(
                (option, index) => (
                  <button
                    key={index}
                    className="flex [&>div]:focus:bg-[#A729F5] [&>div]:focus:text-white items-center w-full gap-4 p-3 bg-white rounded-xl outline-none outline-0 border-transparent border-solid border-[2px] focus:border-[#A729F5] ]"
                    onClick={() => handleOptionClick(index)}
                  >
                    <div className="grid group-focus:bg-black w-10 h-10 rounded-md place-items-center bg-[#F4F6FA] text-[18px] text-[#626C7F] font-medium leading-none">
                      {leters[index]}
                    </div>
                    <h2 className="text-[18px] text-left text-[#313E51] font-medium leading-none">
                      {option}
                    </h2>
                  </button>
                )
              )}
              <button className="w-full p-[19px] bg-[#A729F5] rounded-xl text-[18px] text-white font-medium leading-5">
                Submit Answer
              </button>
            </div>
          </div>
        </main>
      </>
    )
  }
}
