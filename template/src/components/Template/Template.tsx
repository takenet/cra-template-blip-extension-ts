import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { page } from 'services/analytics-service';
import Header from './Header';

function Template() {
    const { pathname, state } = useLocation();

    // Analytics
    useEffect(() => {
        page({ pathname, state });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <div className="relative">
            <Header />
            <Outlet />
        </div>
    );
}

export default Template;
