import { Provider } from 'react-redux';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';
import { store } from '../../app/store';

describe('Header component', () => {
  it('renders logo', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    expect(getByText(/gnNews/i)).toBeInTheDocument();
  });

  it('toggles view state when button clicked', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    const button = getByTestId('change-view-button');
    fireEvent.click(button);

    expect(store.getState().view.viewState).toBe(true);
  });
});