import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cards = ({ image, description, title, id }) => {
    const navigate = useNavigate()
    const showSingleProduct = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">
            <figure><img className='w-[20%] h-auto mt-2' src={image} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title ">{title.slice(0, 20)}...</h2>
                <p>{description.slice(0, 70)}...</p>
                <div className="card-actions justify-end">
                    <button onClick={() => { showSingleProduct(id) }} className="btn btn-primary">Show Product</button>
                </div>
            </div>
        </div>
    )
}

export default Cards