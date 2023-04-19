import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" style={{ marginRight: '20px' }}>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
