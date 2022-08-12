import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import settings from 'config';

import Template from '..';

describe('<Template />', () => {
    const mockedOpen = jest.fn();
    const originalOpen = window.open;

    beforeAll(() => {
        window.open = mockedOpen;
    });

    afterAll(() => {
        // Restore original
        window.open = originalOpen;
    });

    it('should navigate to repository', async () => {
        const user = userEvent.setup();

        render(<Template />, { wrapper: MemoryRouter });

        const repositoryButton = screen.getByText(/button.repository/i);
        expect(repositoryButton).toBeInTheDocument();

        await user.click(repositoryButton);
        expect(mockedOpen).toHaveBeenCalledTimes(1);
        expect(mockedOpen).toHaveBeenCalledWith(
            settings.repositoryUrl,
            '_blank'
        );
    });

    it('should render the Template', () => {
        const { container } = render(<Template />, { wrapper: MemoryRouter });

        expect(container.firstChild).toMatchSnapshot();
    });
});
