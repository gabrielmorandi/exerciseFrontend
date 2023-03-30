import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './css/header.css'

import Logo from '../../assets/images/Logo.svg'
import ArrowDown from '../../assets/images/icon-arrow-down.svg'

const Header = () => {
  // toggle theme
  const body = document.querySelector('body')
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light')

  if (theme === 'light') {
    body?.classList.add('light')
    body?.classList.remove('dark')
    console.log(body?.className)
  } else {
    body?.classList.remove('light')
    body?.classList.add('dark')
    console.log(body?.className)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      setTheme(savedTheme)
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
    setSelectedFont(fontLabel)
    setIsOpen(false)
    document.body.style.fontFamily = `${fontValue}`
  };

  return (
    <header>
      <div className="container-grid">
        <nav>
          <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
          <div className="switches">
            <div className={`dropdown ${isOpen ? "is-active" : ""}`}>
              <div className="dropdown-trigger">
                <button
                  aria-haspopup="true"
                  aria-controls="dropdown-menu2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className='font-selected'>{selectedFont}</span>
                  <span className="icon is-small">
                    <img src={ArrowDown} alt="ArrowDown" />
                  </span>
                </button>
              </div>
              <div className={`dropdown-menu ${isOpen ? "is-active" : ""}`} id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                  {fontOptions.map((font, index) => (
                    <a
                      key={index}
                      className={`dropdown-item ${selectedFont === font.label ? "is-active" : ""} ${font.value}`}
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