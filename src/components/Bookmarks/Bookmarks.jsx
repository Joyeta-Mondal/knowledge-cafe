import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 ml-2 bg-gray-300'>
            <div>
                <h3 className='text-2xl mt-4 text-center'>Reading Time : {readingTime} </h3>
            </div>
            <div className="text-2xl my-8 p-4 text-center">
                <h3>Bookmarked Blogs : {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}> </Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime : PropTypes.number
}
export default Bookmarks;