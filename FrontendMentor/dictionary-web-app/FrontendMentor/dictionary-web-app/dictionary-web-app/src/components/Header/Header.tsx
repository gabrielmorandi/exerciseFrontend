import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './css/header.css'

import Logo from '../../assets/images/Logo.svg'
import ArrowDown from '../../assets/images/icon-arrow-down.svg'

const Header = () => {
  // toggle theme
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    } else {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedFont = localStorage.getItem('selectedFont')
    
    if (savedTheme) {
      setTheme(savedTheme)
    }
  
    if (savedFont) {
      setSelectedFont(savedFont)
      document.body.style.fontFamily = `${savedFont}`
    }
  }, [])
  
  // toggle font
  const fontOptions = [
    { value: "Inter", label: "Sans Serif" },
    { value: "Lora", label: "Serif" },
    { value: "Inconsolata", label: "Mono" }
  ]
  const [selectedFont, setSelectedFont] = useState<string>(
    localStorage.getItem("selectedFont") || fontOptions[0].label
  )
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    localStorage.setItem("selectedFont", selectedFont)
  }, [selectedFont])

  const handleFontSelect = (fontValue: string, fontLabel: string) => {
    setSelectedFont(fontValue)
    setIsOpen(false)
    document.body.style.fontFamily = `${fontValue}`
  }

  {fontOptions.map((font, index) => (
    <a
      key={index}
      className={`dropdown-item ${selectedFont === font.value ? "is-active" : ""} ${font.value}`}
      onClick={() => handleFontSelect(font.value, font.label)}
    >
      {font.label}
    </a>
  ))}
  
  return (
    <header>
      <div className="container-grid">
        <nav>
          <a href='/' ><img src={Logo} alt="Logo" /></a>
          <div className="switches">
            <div className={`dropdown ${isOpen ? "is-active" : ""}`}>
              <div className="dropdown-trigger">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className='font-selected'>{fontOptions.map((font: { value: string, label: string }) => (font.value === selectedFont ? font.label : null))}</span>
                  <span className="icon is-small">
                    <img src={ArrowDown} alt="ArrowDown" />
                  </span>
                </button>
              </div>
              <div className={`dropdown-menu ${isOpen ? "is-active" : ""}`}>
                <div className="dropdown-content">
                  {fontOptions.map((font, index) => (
                    <a
                      key={index}
                      className={`dropdown-item ${selectedFont === font.value ? "is-active" : ""} ${font.value}`}
                      onClick={() => handleFontSelect(font.value, font.label)}
                    >
                      {font.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className='theme'>
              <label className='switch'>
                <input type="checkbox" checked={theme === 'light' ? false : true} onClick={toggleTheme} />
                <span className="slider"></span>
              </label>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                <path fill="none" stroke={theme === 'light' ? '#838383' : '#a445ed'} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header