import React from 'react';
import styled from 'styled-components';

const Search = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <input defaultChecked className="checkbox" type="checkbox" /> 
        <div className="mainbox">
          <div className="iconContainer">
            <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
          </div>
          <input className="search_input" placeholder="search" type="text" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
:root {
  --bg: #fffaf2;
  --surface: #ffffff;
  --text: #333333;
  --accent: #ffa751;
  --highlight: #ffe259;
}

[data-theme='dark'] {
  --bg: #1c1c1c;
  --surface: #2a2a2a;
  --text: #f5f5f5;
  --accent: #ffa751;
  --highlight: #ffe259;
}
  .container {
    position: relative;
    box-sizing: border-box;
    width: fit-content;
    }
    
    .mainbox {
    box-sizing: border-box;
    position: relative;
    width: 230px;
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    border-radius: 160px;
    background-color: var(--accent);
    transition: all 0.3s ease;
  }

  .checkbox:focus {
    border: none;
    outline: none;
  }

  .checkbox:checked {
    right: 10px;
  }

  .checkbox:checked ~ .mainbox {
    width: 50px;
  }

  .checkbox:checked ~ .mainbox .search_input {
    width: 0;
    height: 0px;
  }

  .checkbox:checked ~ .mainbox .iconContainer {
    padding-right: 8px;
  }

  .checkbox {
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 17px;
    top: 10px;
    z-index: 9;
    cursor: pointer;
    appearance: none;
  }

  .search_input {
    box-sizing: border-box;
    height: 100%;
    width: 170px;
    background-color: transparent;
    border: none;
    outline: none;
    padding-bottom: 4px;
    padding-left: 10px;
    font-size: 1em;
    color:var(--text);
    transition: all 0.3s ease;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .search_input::placeholder {
    color:var(--text);
  }

  .iconContainer {
    box-sizing: border-box;
    padding-top: 5px;
    width: fit-content;
    transition: all 0.3s ease;
    color:var(--text);
  }

  .search_icon {
    box-sizing: border-box;
    fill: var(--text);
    font-size: 1.3em;
  }`;

export default Search;
