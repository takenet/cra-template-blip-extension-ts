import { render } from '@testing-library/react';

import Home from '..';

describe('<Home />', () => {
    it('should render the Home', () => {
        const { container } = render(<Home />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
