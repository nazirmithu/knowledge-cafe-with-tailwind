import React, { useEffect, useState } from 'react';

const BookMark = ({ addCart, readTime }) => {

    const [time, setTime] = useState(readTime);

    useEffect(() => {
        const getTimeLocalStorage = localStorage.getItem("readTime");
        setTime(getTimeLocalStorage)

    }, [readTime])

    return (
        <div>
            <h4>Spent time on read: {time ? time : 0}</h4>
            <h4>Bookmarked Blogs : {addCart.length}</h4>
            {
                addCart.map((item) => <h3>{item.blog_title}</h3>)
            }
        </div>
    );
};

export default BookMark;