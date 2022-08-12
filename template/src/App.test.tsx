import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';

import App from './App';

describe('<App />', () => {
    it('should renders Home page as default', () => {
        render(<App />);

        // verify page content for expected route
        expect(screen.getByText(/title.homePage/i)).toBeInTheDocument();
    });

    it('should renders without crashing', () => {
        const container = document.createElement('div');
        const root = createRoot(container!);
        root.render(<App />);

        root.unmount();
    });
});
