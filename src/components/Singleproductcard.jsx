import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../config/redux/reducers/cartSlice'

const Singleproductcard = ({ image, title, description, id }) => {
    // useselector
    const selector = useSelector(state => state.cartItems)
    const dispatch = useDispatch()
    const addCart = () => {
        dispatch(addToCart({
            title: title,
            image: image,
            description: description,
            id: id
        }))

}
console.log(selector);
return (
    <div className='flex justify-center mt-20'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">
            <figure><img className='w-[20%] h-auto mt-2' src={image} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title ">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={addCart} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Singleproductcard