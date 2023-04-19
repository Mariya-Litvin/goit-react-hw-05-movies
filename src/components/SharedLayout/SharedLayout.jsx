import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, LinkActive, Loading } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkActive to="/">Home</LinkActive>
          <LinkActive to="/movies">Movies</LinkActive>
        </nav>
      </Header>
      <Suspense fallback={<Loading>Loading page...</Loading>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
