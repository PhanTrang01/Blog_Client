import '../styles/Navigation.scss';
import image from '../images/instagramLLogo.svg';
// import searchIcon from '../images/search-icon.png'
import Menu from './Menu.js';

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <a href="http//abc">
          <img className="logo" src={image} alt="ins logo" />
        </a>
        <Menu />
      </div>
    </div>
  );
}
