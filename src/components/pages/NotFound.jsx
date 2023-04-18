import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <b>
        Not found this page. Go to
        <Link to="/"> Home</Link>
      </b>
    </main>
  );
};

export default NotFound;
