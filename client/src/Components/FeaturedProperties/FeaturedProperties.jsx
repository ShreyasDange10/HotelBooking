import React from 'react'
import "./FeaturedProperties.css"
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const FeaturedProperties = () => {
    const { data, loading, error} = useFetch(`${import.meta.env.VITE_BASE_URL}/hotel/get-all?featured=true`)
    console.log(data.data, "feat")

    const navigate = useNavigate()
  return (
    <div className='fp'>
        { loading ? ("Loading...") : (
            <> 
                {Array.isArray(data.data) && data.data.map((item) =>(
                    <div className="fp-item" key={item._id} onClick={()=>{
                        navigate('/hotels',{
                            state:{
                                destination: item.city,
                                hotel: item.name 
                            }
                        })
                    }}>
                        <img src={item.photos.length>0?item.photos[0]:"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-19-600x400.png"} alt="" className="fp-image" />
                        <span className="fp-name">{item.name}</span>
                        <span className="fp-city">{item.city}</span>
                        <span className="fp-price">Starting from {item.cheapestPrice}</span>
                         <div className="fp-rating">
                            <button>{item.rating?item.rating:'4.5'}</button>
                            <span>Excellent</span>
                        </div> 
                    </div>
                ))}
            </> )    
        }
    </div>
  )
}

export default FeaturedProperties