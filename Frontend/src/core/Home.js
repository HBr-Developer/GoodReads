import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import { getProducts } from './ApiCore';
import Card from './Card';
import Search from './Search'
import avatar from '../assets/images/avatar.png'
import Carousel from 'react-bootstrap/Carousel';
import f11 from '../assets/images/a3.jpg'
import f12 from '../assets/images/a1.jpg'

import f13 from '../assets/images/a4.png'


function Home() {

    const [productsBestSellers, setProductsBestSellers] = useState([])
    const [productsArrivals, setProductsArrivals] = useState([])

    const loadBestSellers = () => {
        getProducts({sortBy: 'sold', order: 'desc', limit: 6})
            .then(products => setProductsBestSellers(products))
    }

    const loadArrivals = () => {
        getProducts({sortBy: 'createdAt', order: 'desc', limit: 3})
            .then(products => setProductsArrivals(products))
    }

    useEffect(() => {
        loadArrivals()
        loadBestSellers()
    }, [])

    return (
        <div>
            <Layout
                title="Home Page" 
                description="Ecommerce WebSite"
                className="container"
            >
                       <div>
                       <h1 class="text-center" style={{float:'left',textDecorationColor:'ActiveBorder',color:'#2c5949',fontFamily:'fantasy',fontStyle:'revert'}}>Bienvenue⚜️</h1>
                       <p className="text-base text-textColor text-center md:text-left md:w-[80%]" style={{float:'left'}}>
                       Bienvenue sur notre site de commerce électronique dédié aux livres ! Nous sommes fiers de proposer une large sélection de livres de tous genres pour satisfaire les goûts de tous les lecteurs. Que vous soyez passionné de fiction, de non-fiction, de romans classiques ou de livres pour enfants, vous trouverez sûrement votre bonheur sur notre site.⚜️⚜️

        </p>
<div>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f11}
          alt="First slide"
          style={{height:' 400px',width: '70%;'
           } }
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f12}
          alt="Second slide"
          style={{height:' 400px',width: '70%;'
        } }
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f13}
          alt="Third slide"
          style={{height:' 400px',width: '70%;'
        } }
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
</div>
                <Search />
        


                       </div>
                <h2 className='text-center' style={{backgroundColor:"#2c5949", color: "white", padding: '20px', borderRadius: '11px', fontSize: '25px',fontweight: '900;',textAlign:'center',textDecorationLine:"none",fontStyle:'italic',fontWeight:'bold'}}>Meilleures Ventes</h2>
                <div className="row mt-3 mb-5">
                    {productsArrivals.map((product, i) => (
                    <div key={product._id} className="col-md-4">
                            <Card product={product} showViewBtn={true} showDesc={false}></Card> 
                    </div>  
                    ))}
                </div>
                <h2 className='text-center' style={{ backgroundColor:"#2c5949", color: "white", padding: '20px', borderRadius: '11px', fontSize: '25px',fontweight: '900;',textAlign:'center',textDecorationLine:"none",fontStyle:'italic',fontWeight:'bold'}}>Tous les Livres</h2>
                <div className="row mt-3 mb-5">
                        {productsBestSellers.map((product, i) => (
                        <div  key={product._id} className="col-md-4">
                            <Card product={product} showViewBtn={true} showDesc={false}></Card> 
                        </div>  
                        ))}
                    </div>

            </Layout>
        </div>
        
    )
}

export default Home
