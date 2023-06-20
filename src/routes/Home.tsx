import React from 'react';
import Search from '../components/Search';
import { useState } from 'react';
import { UserProps } from '../types/user';
import User from '../components/User';
import Error from '../components/Error';

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false);

  const loadUser = async(userName: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    if(res.status == 404){
      setError(true);
      return;
    }

    const data = await res.json();
    console.log(data);

    const {avatar_url, login, location, followers, following} = data;
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {
        user &&
        <User {...user} />
      }

      {error && <Error />}
    </div>
  );
};

export default Home;



// function home() {
//   return (
//     <div>

//     </div>
//   );
// }

// export default home;
