import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuList from '../../../components/Menu/MenuList';

describe('MenuList', () => {
  it('renders the list of countries', () => {
    const countries = [
      { 
        cca2: 'PL',
        name: { common: 'Poland' },
        flags: { png: '/path/to/poland/flag.png' }
      },
      { 
        cca2: 'DE',
        name: { common: 'Germany' },
        flags: { png: '/path/to/germany/flag.png' }
      }
    ];
    render(
      <MemoryRouter>
        <MenuList countrydata={countries} />
      </MemoryRouter>
    );
    const linkElements = screen.getAllByRole('link');
    expect(linkElements).toHaveLength(countries.length);
  });
});