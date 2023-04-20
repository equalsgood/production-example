import React, {
    memo, Suspense, useCallback, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/AppRouter/components/RequireAuth';
import { AppRoutesProps, routesConfig } from '../config/routesConfig';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <div className="page-wrapper">
                {route.element}
            </div>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routesConfig).map(renderWithWrapper)}
                {/* {Object.values(routesConfig).map(({ path, element }) => ( */}
                {/*   <Route */}
                {/*       key={path} */}
                {/*       path={path} */}
                {/*       element={( */}
                {/*           <div className="page-wrapper"> */}
                {/*               {element} */}
                {/*           </div> */}
                {/*       )} */}
                {/*   /> */}
                {/* ))} */}
            </Routes>
        </Suspense>
    );
});
