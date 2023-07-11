import homeIcon from '../images/Home-Icon.svg';
import searchIcon from '../images/search-icon.svg';
import discoveryIcon from '../images/discovery-icon.svg';
import reelIcon from '../images/reels-icon.svg';
import shareIcon from '../images/share-icon.svg';
import heartIcon from '../images/heart-icon.svg';
import plusIcon from '../images/plus-icon.svg';
import ProfileIcon from './ProfileIcon';
import image from '../images/instagramLogo.png';

import '../styles/Menu.scss';

export default function Menu() {
  return (
    <>
      <Option optionName={searchIcon} title="Search" />
      <Option optionName={homeIcon} title="Homepage" />
      <Option optionName={discoveryIcon} title="Khám phá" />
      <Option optionName={reelIcon} title="Reels" />
      <Option optionName={shareIcon} title="Tin nhắn" />
      <Option optionName={heartIcon} title="Thông báo" />
      <Option optionName={plusIcon} title="Tạo post" />
      <ProfileIcon iconSize="small" image={image} title="Trang cá nhân" />
    </>
  );
}

function Option(props) {
  return (
    <a href="wwww">
      <div>
        <img src={props.optionName} alt="" />
        <span>{props.title}</span>
      </div>
    </a>
  );
}
