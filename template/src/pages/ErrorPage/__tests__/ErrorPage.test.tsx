import { render } from '@testing-library/react';

import ErrorPage from '../ErrorPage';

describe('<ErrorPage />>', () => {
    it('should render the Error Page', () => {
        const { container } = render(<ErrorPage />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
