import Navbar from '../Navbar/Navbar';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <div>Logo</div>
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;