import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem } from '../config/redux/reducers/cartSlice'

const Cartproduct = () => {
    const selector = useSelector(state => state.cartItems.cartItems)
    console.log(selector);
    const dispatch = useDispatch()
    const deleteItem = (index) => {
        console.log(index);
        dispatch(removeCartItem({
            index:index
        }))
    }
    return (
        <>
            {selector.length > 0 ? selector.map((item, index) => {
                return <div key={item.id} className="flex w-full mt-5 p-5 items-center cursor-pointer bg-base-200 shadow-xl">
                    <div>
                        <figure><img src={item.image} className='w-[100px]' alt="" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title"> {item.title}</h2>
                        <p> {item.description}</p>
                    </div>
                    <div>
                        <button onClick={()=>{deleteItem(index)}}>Delete</button>
                    </div>
                </div >

            }) : <h1 className='mt-5'> No Items in Cart </h1>}
        </>
    )
}

export default Cartproduct