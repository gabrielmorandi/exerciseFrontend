const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100

  return (
    <div className="w-full bg-white border-4 border-white border-solid rounded-full mt-3 md:mt-8 dark:border-[#3B4D66] dark:bg-[#3B4D66]">
      <div
        className="p-1 md:p-2 text-xs font-medium text-center text-blue-100 bg-[#A729F5] rounded-full duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
