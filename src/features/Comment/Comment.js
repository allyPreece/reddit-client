import moment from 'moment';
import { MarkdownText } from './MarkdownText';
import './Comment.css'
export function Comment({ comment }) {
    return (
        <div className='comment'>
            <p className='comment-author'>{comment.author}</p>
            <span className='time'>{moment.unix(comment.created).fromNow()}</span>
            <MarkdownText body={comment.body} />
            {comment.replies &&
                comment.replies.data.children.filter(reply => {
                    return reply.kind !== 'more';
                }).map(reply => {
                    return <Comment key={reply.data.id} comment={reply.data} />
                })
            }
        </div>
    )
}