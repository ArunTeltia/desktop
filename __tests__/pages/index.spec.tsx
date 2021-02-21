import { render } from '@testing-library/react';
import Index from 'pages/index';

test('renders index page', () => {
  const { getByText } = render(<Index />);
  const helloWorldElement = getByText('Hello World');

  expect(helloWorldElement).toBeInTheDocument();
});
