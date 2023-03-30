import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainContent from '../../components/MainContent';
import { store } from '../../app/store';

describe('MainContent component', () => {
  it('renders correct text', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MainContent />
      </Provider>
    );

    expect(getByText(/wybierz kraj/i)).toBeInTheDocument();
  });
});