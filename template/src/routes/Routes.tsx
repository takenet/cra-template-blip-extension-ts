import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Template from 'components/Template';
import Home from 'pages/Home';
import ErrorPage from 'pages/ErrorPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<Template />}>
                <Route index element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
