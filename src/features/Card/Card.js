import { Link } from "react-router-dom";
import moment from 'moment';
import './Card.css'
import Comment from '../../assets/comment.svg'
import Rating from '../../assets/score.svg'
export function Card({ post, showSubreddit }) {
  let content;
  if (post.post_hint === 'image') {
    content = (
      <div className="post-image">
        <img src={post.url} alt="media preview"></img>
      </div>
    )
  }
  else {
    content = post.thumbnail && post.thumbnail !== 'default' ? (<a href={post.url} target="_blank"><img src={post.thumbnail} alt="media preview"></img></a>) : (<a className="post-link" href={post.url} target="_blank">{post.url}</a>)
  }
  let thumbnailClass = post.post_hint === 'image' && post.thumbnail && post.thumbnail !== 'default' ? 'thumbnail' : ""
  return (
    <div className='reddit-card'>
      {showSubreddit && <Link className='subreddit-link' to={`/${post.subreddit}`}>{post.subreddit}</Link>}
      <span className='post-time'>{moment.unix(post.created_utc).fromNow()}</span>
      <div className={thumbnailClass}>
        <Link data-testid={post.id} to={`/${post.subreddit}/${post.id}`}>
          <h2 className='post-title'>{post.title}</h2>
        </Link>
        {post.is_self || content}
      </div>
      <div className='post-panel'>
        <span className='info button'><img src={Rating} alt="score"></img>{post.score}</span>
        <Link className='info button' to={`/${post.subreddit}/${post.id}#comments`}>
          <img src={Comment} alt='comments icon' />
          <span>{post.num_comments} {post.num_comments === 1 ? 'comment' : 'comments'}</span>
        </Link>
      </div>
    </div>
  );
}