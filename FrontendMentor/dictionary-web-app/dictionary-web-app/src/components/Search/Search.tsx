// @ts-nocheck
import React, { useState, useRef, useEffect } from "react"
import { useParams, useLocation } from 'react-router-dom'
import axios from "axios"
import { Link } from "react-router-dom"

import './css/search.css'

import IconSearch from '../../assets/images/icon-search.svg'
import IconPlay from '../../assets/images/icon-play.svg'
import IconNewWindow from '../../assets/images/icon-new-window.svg'

interface Props { }

const Search: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [shouldUpdate, setShouldUpdate] = useState<boolean>(false)
  const [found, setFound] = useState<boolean>(true)
  const [validation, setValidation] = useState<boolean>(true)
  const [searchResult, setSearchResult] = useState<any>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { word } = useParams<{ word: string }>()
  const location = useLocation()
  

  // input validation
  const notValid = () => {
    setValidation(false)
  }
  // search
  const handleSearch = async () => {
    if (searchTerm) {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
        )
        setValidation(true)
        setFound(true)
        setSearchResult(response.data)
      } catch (error) {
        setValidation(true)
        setFound(false)
        console.error(error)
      }
    }
  }
  // audio
  const handlePlay = () => {
    audioRef.current?.play()
  }
  // att /word/:word
  useEffect(() => {
    setSearchTerm(word || "")
  }, [word])
  // auth updatepage
  useEffect(() => {
    setShouldUpdate(true)
  }, [location.pathname])
  // att page
  useEffect(() => {
    if (shouldUpdate) {
      handleSearch()
      setShouldUpdate(false)
    }
  }, [searchTerm, shouldUpdate])

  return (
    <div id="search">
      <div className="container-flex">
        <div className="search">
          <input
            className={validation ? '' : 'error'}
            type="text"
            placeholder="Search for any word…"
            value={searchTerm}
            name="inputSearch"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch()
                if(searchTerm === '') {
                  notValid()
                }
              }
            }}
          />
          <span className={validation ? '' : 'error'}>Whoops, can’t be empty…</span>
          <button onClick={searchTerm.length > 0 ? handleSearch : notValid}>
            <img src={IconSearch} alt="IconSearch" />
          </button>
        </div>
        {searchResult && found === true ? (
          <div className="result">
            <div className="result-header">
              <div>
                <h2>{searchResult[0].word}</h2>
                <h3>{searchResult[0].phonetic ? searchResult[0].phonetic : (searchResult[0].phonetics ? searchResult[0].phonetics[searchResult[0].phonetics.length - 1]?.text : null)}</h3>
              </div>
              <audio ref={audioRef} muted={searchResult[0].phonetics.length > 0 ? false : true} src={searchResult[0].phonetics ? searchResult[0].phonetics[searchResult[0].phonetics.length - 1]?.audio : null} />
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" onClick={handlePlay}>
                <g fill="#A445ED" fill-rule="evenodd">
                  <circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/>
                  <path d="M29 27v21l21-10.5z"/>
                </g>
              </svg>
            </div>
            <div className="result-content">
              {searchResult[0].meanings.map((meaning: { partOfSpeech: string, definitions: [], synonyms: [], example: string }, index: React.Key) => (
                <div className="meaning" key={index}>
                  <h2>{meaning.partOfSpeech}</h2>
                  <div>
                    <h3>Meaning</h3>
                    <ul>
                      {meaning.definitions.map((definition: { definition: string }, index: React.Key) => (
                        <li key={index}>
                          <div className="circle"></div>
                          {definition.definition}
                        </li>
                      ))}
                    </ul>
                    {meaning.synonyms.length > 0 ? (
                      <div className="synonyms">
                        <h3>Synonyms</h3>
                        <div>
                          {meaning.synonyms.map((synonym: string, index: React.Key) => (
                            <Link to={`/word/${synonym}`} className="syn" key={index} onClick={() => {
                              setSearchTerm(synonym)
                              setShouldUpdate(true)
                              handleSearch()
                            }}>
                              {synonym}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {meaning.definitions.length > 0 && meaning.definitions[0]?.example ? (
                      <div className="example" key={index}>
                        <h3>{`“${meaning.definitions[0]?.example}”`}</h3>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="result-footer">
              <h2>Source</h2>
              {searchResult[0].sourceUrls.map((url: string) => (
                <a href={url}>{url} <img src={IconNewWindow} alt="IconNewWindow" /></a>
              ))}
            </div>
          </div>
        ) : (!found) ? (
          <div className="not-found">
            <h2 className="bad">😕</h2>
            <h2>No Definitions Found</h2>
            <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Search
