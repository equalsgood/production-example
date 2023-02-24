import React, { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/AppRouter';

const App = () => (
    <Suspense fallback="">
        <Navbar />
        <div className="content-page">
            <Sidebar />
            <AppRouter />
        </div>
    </Suspense>
);

export default App;
