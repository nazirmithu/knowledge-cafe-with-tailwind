import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleData.css'

const SingleData = ({ cart, addToCart, handleReadTime }) => {

    const { cover_picture, blog_title, name, picture, publish_in, min_read, read_time } = cart;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-full' src=
                    {cover_picture} alt="Shoes" /></figure>
                <div className="flex flex-1 gap-4 items-center mt-6">
                    <div className="flex flex-1 gap-4 items-center mt-6">
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <div className="avatar">
                                <div className="lg:w-24 w-16 rounded-full">
                                    <img src={picture} />
                                </div>
                            </div>
                            <div>
                                <h2 className='font-bold text-xl'>{name}</h2>
                                <p>{publish_in}</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h1 onClick={() => addToCart(cart)} className=''>{min_read}
                            <FontAwesomeIcon icon={faBookmark} /></h1>
                    </div>
                </div>
                <div className="">
                    <h2 className="card-title font-bold text-lg lg:text-2xl">{blog_title}</h2>
                </div>
                <div className='flex'>
                    <p onClick={() => handleReadTime(read_time)}>Mark as read</p>
                </div>

            </div>
        </div>
    );
};

export default SingleData;
