import React from 'react';
import './Searchbar.css';

function Searchbar({lightTheme, darkTheme, darkMode}) {
  const colorScheme = {
    '--rad': '30px',
    '--dur': '0.3s',
    '--color-bg': darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default,
    '--font-fam': 'Google Sans, Roboto Flex, sans-serif',
    '--height': '35px',
    '--btn-width': '3rem',
    '--bez': 'cubic-bezier(0, 0, 0.43, 1.49)',
    '--font-color': darkMode ? darkTheme.palette.primary.text : lightTheme.palette.primary.text
  };

  return (
    <>
      <form id="searchForm" role="search" style={colorScheme}>
        <label id="searchLabel" htmlFor="search">Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." autoFocus required />
        <button id="searchButton" type="submit">Go</button>    
      </form>
    </>
  );
}

export default Searchbar;
