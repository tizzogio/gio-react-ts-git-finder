import React from 'react';
import { UserProps } from '../types/user';
import { BiMapPin } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import classes from './User.module.css';

function User({login, avatar_url, location, followers, following}: UserProps) {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt='Login'/>
      <h2>{login}</h2>
      { location && (
        <p className={classes.location}>
          <BiMapPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div >
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver meus projetos</Link>
    </div>
  );
}

export default User;
