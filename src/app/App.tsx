import React, { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMounted, userActions } from 'entities/User';
import { AppRouter } from './providers/AppRouter';

const App = () => {
    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <Suspense fallback="">
            <Navbar />
            <div className="content-page">
                <Sidebar />
                {mounted && <AppRouter />}
            </div>
        </Suspense>
    );
};

export default App;
