import {  useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime+time ;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }


  return (
    <>
    <div className='max-w-7xl mx-auto'>
    <Header></Header>
    <div className='md:flex'>
    <Blogs handleMarkAsRead ={handleMarkAsRead} 
    handleAddToBookmark ={handleAddToBookmark}></Blogs>
    <Bookmarks bookmarks={bookmarks}
    readingTime = {readingTime}
    ></Bookmarks>
    </div>
    </div>
    </>
  )
}

export default App
