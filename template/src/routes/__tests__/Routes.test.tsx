import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Routes from '..';

const renderWithRouter = (
    ui: Parameters<typeof render>[0],
    { route = '/' } = {}
) => {
    window.history.pushState({}, 'Test page', route);

    return {
        user: userEvent.setup(),
        ...render(ui)
    };
};

describe('<Routes />', () => {
    it('should renders Home page', () => {
        renderWithRouter(<Routes />);

        // verify page content for expected route
        expect(screen.getByText(/title.homePage/i)).toBeInTheDocument();
    });

    it('should landing on a bad page', () => {
        renderWithRouter(<Routes />, {
            route: '/not-match'
        });

        expect(screen.getByText(/404/i)).toBeInTheDocument();
    });
});
