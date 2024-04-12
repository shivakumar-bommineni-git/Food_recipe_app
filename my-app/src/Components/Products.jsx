import React from 'react'
import './Products.css';

const Products = ({data}) => {
    return (
        <div>
            {console.log(data)}
            <div>
                {data.map(data =>  
                
                    <div>
                    <img  src={data.recipe.image} alt="image" />
                    <div>
                    <center>
                        <h5 className='shiva'>{data.recipe.label}</h5>
                        <p style={{fontFamily:'sans-serif',fontSize:'large'}}>Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                        <a href="#" className="button1">Buy</a>
                    </center>
                    </div>
                    </div>
            
                )}
            </div>
        </div>
    )
}

export default Products