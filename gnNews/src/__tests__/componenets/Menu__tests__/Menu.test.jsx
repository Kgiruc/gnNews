import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../../../components/Menu/Menu';

describe('Menu', () => {
    it('renders the menu component', () => {
        render(<Menu />);
        expect(screen.queryByText('loading...')).toBeInTheDocument()
    });

    it('hides the mobile menu by default', async () => {
        render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );
        await waitFor(() => expect(screen.queryByText('loading...')).not.toBeInTheDocument(), { timeout: 5000 });
        await waitFor(() => expect(screen.queryByTestId('mobile-list')).not.toBeInTheDocument());
    });
});