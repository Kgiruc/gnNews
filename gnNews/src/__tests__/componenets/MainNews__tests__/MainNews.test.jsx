import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MainNews from '../../../components/MainNews/MainNews';

describe('MainNews component', () => {
  it('renders loading message and no results message', async () => {
    const store = configureStore()({ view: { viewState: 'list' } });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/country/US']} initialIndex={0}>
          <Routes>
            <Route path="/country/:countryId" element={<MainNews setResult={() => {}} />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => screen.getByText('loadingnews...'));

    expect(screen.getByText('loadingnews...')).toBeInTheDocument();

    await waitFor(() => screen.getByText('no results...'));

    expect(screen.getByText('no results...')).toBeInTheDocument();
  });
});