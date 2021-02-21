import HelloWorld from 'components/apps/HelloWorld';
import type { ReactElement } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  text-align: center;
`;

export default function Home(): ReactElement {
  return <HelloWorld />;
}
