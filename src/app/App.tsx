import React, { Suspense } from 'react';
import './styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "shared/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";



const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;