import { Outlet } from 'react-router-dom';
import classes from './App.module.css';

//Componente outlet do react router dom abriga todo conteúdo da página

function App() {

  return (
    <div className={classes.app}>
      <h1>Git hub finder gio</h1>
      <Outlet />

    </div>
  );
}

export default App;

