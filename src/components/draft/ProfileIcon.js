import '../styles/ProfileIcon.scss';

export default function ProfileIcon(props) {
  const { iconSize, storyBorder, image, title } = props;
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomId = getRandom(1, 70);

  let profileImage = image
    ? image
    : `https://i.pravatar.cc/150?img=${randomId}`;

  return (
    <div className={storyBorder ? 'storyBorder' : ''}>
      <img
        className={`profileIcon ${iconSize}`}
        src={profileImage}
        alt="profile"
      />
      <span>{title ? `${title}` : ''} </span>
    </div>
  );
}
