import React from 'react';
import './styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "shared/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./router";
import {Navbar} from "widgets/Navbar";



const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;