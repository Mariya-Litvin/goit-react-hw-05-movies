import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, LinkActive } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkActive to="/">Home</LinkActive>
          <LinkActive to="/movies">Movies</LinkActive>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
