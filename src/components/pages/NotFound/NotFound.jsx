import { Link } from 'react-router-dom';
import { WrapperNotFound } from './NotFound.styled';

const NotFound = () => {
  return (
    <main>
      <WrapperNotFound>
        Not found this page. Go to
        <Link to="/"> Home</Link>
      </WrapperNotFound>
    </main>
  );
};

export default NotFound;
