import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards'
import axios from 'axios'

const Home = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data);
                setAllProducts(res.data)

            }).catch((err) => {
                console.log(err);

            })
    }, [])
    return (
        <>
            <div className='flex justify-evenly flex-wrap gap-[5px] '>
                {allProducts.length > 0 ? allProducts.map((item, index) => {
                    return <Cards key={index} image={item.image} title={item.title} description={item.description} id={item.id} />
                }) : <h2>loading...</h2>}
            </div>
        </>
    )
}

export default Home