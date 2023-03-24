import React from 'react'

const Searchbar = () => {
  return (
    <div>
      <div>
        <img
          className="logo"
          src="/images/devflicks-logo/png/logo-no-background.png"
          alt="DevFlicks Logo"
        />
      </div>
      <form className="searchForm">
        <input className="searchBar" type="text" />
        <button className="sumbitButton" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-slate-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default Searchbar
