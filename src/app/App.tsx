import '../styles/index.scss'
import '../styles/reset.scss'
import { Link, Route, Routes } from 'react-router-dom';
import MainPageAsync from '../pages/main/MainPage.async';
import AboutPageAsync from '../pages/about/AboutPage.async';
import { Suspense } from 'react';
import { useTheme } from '../theme/useTheme';
import { classNames } from '../helpers/classNames/classNames';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {},[theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      
      <Suspense fallback={<div>'loading...'</div>}>
        <Routes>
            <Route path={'/'}  element={<MainPageAsync/>}/>
            <Route path={'/about'} element={<AboutPageAsync/> }/>
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;