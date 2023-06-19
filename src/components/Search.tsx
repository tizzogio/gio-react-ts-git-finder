import React from 'react';
// import { BsSearch } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent } from 'react';
import classes from './Search.module.css';

type SearcProps = {
  loadUser: (userName: string) => Promise<void>
}


function Search({loadUser}: SearcProps) {
  const [userName, setUserName] = useState<string>('');

  //forma 1 de declarar
  const handleKyeDown = (e: KeyboardEvent) => {
    if(e.key === 'Enter'){
      loadUser(userName);
    }
  };

  //forma 2 de declarar
  function handleKyeDown2(e: KeyboardEvent) {
    if(e.key === 'Enter'){
      loadUser(userName);
    }
  }


  return (
    <div className={classes.search}>
      <h2>Busque um user</h2>
      <p>Conhecer meus repos</p>
      <div className={classes.search_container}>
        <input type='text' placeholder='Digite um username' onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKyeDown2} />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
