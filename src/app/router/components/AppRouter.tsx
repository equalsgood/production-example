import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';
import { routesConfig } from '../config/routesConfig';

export const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routesConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
