import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MobileMenu from '../../../components/Menu/MobileMenu';

describe('MobileMenu', () => {
  it('renders the mobile menu with open and close icons', () => {
    const countries = [
      {
        cca2: 'PL',
        name: { common: 'Poland' },
        flags: { png: '/path/to/poland/flag.png' },
      },
      {
        cca2: 'DE',
        name: { common: 'Germany' },
        flags: { png: '/path/to/germany/flag.png' },
      },
    ];

    render(
      <BrowserRouter>
        <MobileMenu countrydata={countries} />
      </BrowserRouter>
    );

    const openIcon = screen.getByAltText('menu mobile');
    expect(openIcon).toBeInTheDocument();
    fireEvent.click(openIcon); // symulujemy kliknięcie na ikonę otwierającą menu
    const closeIcon = screen.getByAltText('menu mobile close');
    expect(closeIcon).toBeInTheDocument();
  });
});