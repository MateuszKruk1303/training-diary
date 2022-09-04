import { PropsWithChildren } from 'react';

import { Box, Container } from 'native-base';

interface LayoutProps {}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <Container width="100%" height="100%" bg="white">
      {children}
    </Container>
  );
};

export { Layout };
