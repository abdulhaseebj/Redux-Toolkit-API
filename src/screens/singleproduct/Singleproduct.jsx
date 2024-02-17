import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Singleproductcard from '../../components/Singleproductcard'

const Singleproduct = () => {
  const params = useParams()
  const [singleProduct, setAllSingleProduct] = useState(null)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setAllSingleProduct(res.data)

      }).catch((err) => {
        console.log(err);

      })
  }, [])
  return (
    <div>
      {singleProduct ? <Singleproductcard title={singleProduct.title} image={singleProduct.image} description={singleProduct.description} id={singleProduct.id} /> : <h2>loading...</h2>}
    </div>
  )
}

export default Singleproduct