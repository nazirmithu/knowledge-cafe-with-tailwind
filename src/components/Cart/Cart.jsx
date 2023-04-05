import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import './Cart.css'
import BookMark from '../BookMark/BookMark';
import { addToDb, getShoppingCart } from '../../db/Db';
import { toast } from 'react-hot-toast';
const Cart = () => {
    const [carts, setCarts] = useState([]);
    const [addCart, setAddCart] = useState([]);
    const [readTime, setReadTime] = useState("");
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        for (const id in storedCart) {

            const addedCart = carts.find(product => product.id === id);
            if (addedCart) {
                const quantity = storedCart[id];
                addedCart.quantity = quantity;
                savedCart.push(addedCart);
            }
        }
        setAddCart(savedCart);
    }, [carts])

    const addToCart = (cart) => {
        let newCart = [];
        const exists = addCart.find(item => item.id === cart.id);
        if (!exists) {
            addCart.quantity = 1;
            newCart = [...addCart, cart]
            toast.success('Bookmark Added!');
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = addCart.filter(item => item.id !== cart.id);
            newCart = [...remaining, exists];
            toast.success('Already Bookmark!');
        }

        setAddCart(newCart);
        addToDb(cart.id)
    }

    const handleReadTime = (time) => {
        const previousReadTime = JSON.parse(localStorage.getItem('readTime'));
        if (previousReadTime) {
            const sum = previousReadTime + time;
            localStorage.setItem('readTime', sum);
            setReadTime(sum)
        }
        else {
            localStorage.setItem('readTime', time);
            setReadTime(time)
        }
    }

    return (
        <div className=''>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-4">
                    {
                        carts.map(cart => <SingleData
                            key={cart.id}
                            cart={cart}
                            addToCart={addToCart}
                            handleReadTime={handleReadTime}
                            readTime={readTime}
                        ></SingleData>)
                    }
                </div>
                <div className="cart mt-10 text-xl font-bold bg-slate-200 rounded-3xl">
                    <div>
                        <BookMark addCart={addCart}
                            readTime={readTime}
                        ></BookMark>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;