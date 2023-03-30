import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Footer from '../../components/Footer';
import { store } from '../../app/store';

test('displays results if greater than 0', () => {
  // Ustaw stan wyników na 0
  store.dispatch({ type: 'results/setResultsState', payload: 0 });

  // Renderuj komponent wraz z dostawcą
  render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );

  // Sprawdź, czy początkowo nie wyświetla się stan wyników
  const resultsElement = screen.queryByText('results: 0');
  expect(resultsElement).not.toBeInTheDocument();
});