import PropTypes from 'prop-types';
import { BsBookmarkCheckFill } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, 
        author_img, reading_time, 
        posted_date, hashtag} = blog;

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`Cover of the title ${title}`} />
            <div className='flex justify-between mt-8'>
                <div className='flex justify-between '>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6 '>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className='text-xl'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick= {() => handleAddToBookmark(blog)}
                        className='ml-2 text-xl'>
                        <BsBookmarkCheckFill></BsBookmarkCheckFill>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl mb-4 ">{title}</h2>
           <p>
           {
                hashtag.map((hash, idx) => <span key={idx}> <a className='mr-1'>{hash}</a></span>)
            }
           </p>
            <button className='text-purple-700 underline font-bold' onClick={() => handleMarkAsRead(id, reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}
export default Blog;