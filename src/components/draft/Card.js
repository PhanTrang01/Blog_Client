import '../styles/Card.scss';
import Profile from './ProfileIcon';
import { ReactComponent as CardButton } from '../images/menu-icon.svg';
import CardMenu from './CardMenu';
import Comment from './Comment';

function Card(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;

  //   const ccomments = [
  //     {
  //       user: 'dadatlacak',
  //       text: 'Love this!',
  //       id: 5,
  //     },
  //     {
  //       user: 'dadatlacak',
  //       text: 'Love this!',
  //       id: 4,
  //     },
  //   ];

  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{' '}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">Post</div>
      </div>
    </div>
  );
}

export default Card;
