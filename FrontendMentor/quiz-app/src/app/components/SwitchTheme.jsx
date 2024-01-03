"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function SwithTheme() {
  const { storageKey, theme, setTheme } = useTheme()
  const [isThemeLoaded, setIsThemeLoaded] = useState(false)

  useEffect(() => {
    if (storageKey) {
      setTheme(storageKey)
    }
  }, [storageKey, setTheme])

  useEffect(() => {
    if (theme) {
      setIsThemeLoaded(true)
    }
  }, [theme])

  const LightSun = "/icon-sun-light.svg"
  const DarkSun = "/icon-sun-dark.svg"
  const LightMoon = "/icon-moon-light.svg"
  const DarkMoon = "/icon-moon-dark.svg"

  if (!isThemeLoaded) {
    return null
  }

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Image
        src={theme === "dark" ? LightSun : DarkSun}
        width={16}
        height={16}
        alt="Light Mode"
        className="w-4 md:w-6"
      />
      <label className="relative inline-block w-8 h-5 md:w-12 md:h-7">
        <input
          type="checkbox"
          name="theme"
          id="theme"
          checked={theme === "dark"}
          onChange={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          className="w-0 h-0 opacity-0 "
        />
        <span
          className={`absolute inset-0 md:w-12 md:h-7 w-8 h-5 duration-300 cursor-pointer rounded-3xl bg-[#A729F5] before:content-[''] before:md:w-5 before:md:h-5 before:ease-out before:absolute before:h-3 before:w-3 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:duration-300 ${
            theme == "dark"
              ? "before:translate-x-3 before:md:translate-x-5"
              : null
          }`}
        />
      </label>
      <Image
        src={theme === "dark" ? LightMoon : DarkMoon}
        width={16}
        height={16}
        alt="Dark Mode"
        className="w-4 md:w-6"
      />
    </div>
  )
}
