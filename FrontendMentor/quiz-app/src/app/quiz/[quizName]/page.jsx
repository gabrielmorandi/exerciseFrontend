"use client"
import { useState } from "react"
import QuizOptions from "@/app/components/QuizOptions"
import Header from "@/app/components/Header"
import Finish from "@/app/components/Finish"

export default function Quiz({ params }) {
  const [isFinishTime, setIsFinishTime] = useState(false)
  const [qntCorrectAnswers, setQntCorrectAnswers] = useState(0)
  const [questionLength, setQuestionLength] = useState(0)
  const [submitedAlert, setSubmitedAlert] = useState(false)

  return (
    <>
      <Header quizName={params.quizName} />
      <main className="grid w-full place-items-center">
        {!isFinishTime ? (
          <QuizOptions
            quizName={params.quizName}
            setIsFinishTime={setIsFinishTime}
            qntCorrectAnswers={qntCorrectAnswers}
            setQntCorrectAnswers={setQntCorrectAnswers}
            setQuestionLength={setQuestionLength}
            submitedAlert={submitedAlert}
            setSubmitedAlert={setSubmitedAlert}
          />
        ) : (
          <Finish
            quizName={params.quizName}
            qntCorrectAnswers={qntCorrectAnswers}
            questionLength={questionLength}
            setIsFinishTime={setIsFinishTime}
            setQntCorrectAnswers={setQntCorrectAnswers}
          />
        )}
      </main>
    </>
  )
}
