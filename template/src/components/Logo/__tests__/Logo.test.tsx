import { render, screen } from '@testing-library/react';

import Logo from '..';

describe('<Logo />', () => {
    it('should render the medium Logo as default', () => {
        const { container } = render(<Logo />);

        expect(screen.getByRole('img', { name: /blip/i })).toBeInTheDocument();

        expect(container.firstChild).toHaveClass('App-logo h-40');

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render the small Logo', () => {
        const { container } = render(<Logo size="small" />);

        expect(screen.getByRole('img', { name: /blip/i })).toBeInTheDocument();

        expect(container.firstChild).toHaveClass('App-logo h-32');

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render the medium Logo', () => {
        const { container } = render(<Logo size="medium" />);

        expect(screen.getByRole('img', { name: /blip/i })).toBeInTheDocument();

        expect(container.firstChild).toHaveClass('App-logo h-40');
    });

    it('should render the large Logo', () => {
        const { container } = render(<Logo size="large" />);

        expect(screen.getByRole('img', { name: /blip/i })).toBeInTheDocument();

        expect(container.firstChild).toHaveClass('App-logo h-48');

        expect(container.firstChild).toMatchSnapshot();
    });
});
