import { useEffect,useState } from "react";
import starIcon from '../assets/star.svg'
import starHalfIcon from '../assets/star-half.svg'


function Star({number}){
    const a = Math.floor(number);
    const b = number - a;
    let arr = []
    let state = null
    console.log(b)
    for(let i = 0; i<a;i++){
        state = ((b >= 0.5 && i == a - 1 )?starHalfIcon: starIcon); 
        arr.push(<img className="icon" src={state} alt="star"/>)
        
    }
    
    return (
        <>
            {arr}
        </>
        
    )
}

function ShowCase({item}){
    return(
        <div className="product-box">
            <div className="img-box"><img src={item.image} alt="product image" /></div>
            <p className="product-tile">{item.tile}</p>
            <div className="product-tag">{item.category}</div>
            <div className="product-des">{item.description}</div>
            <div className="produc-rating">
                <Star number={item.rating.rate}/>
                {"("+item.rating.rate+" / " + item.rating.count +")"}
            </div>
            <div className="product-bottom">
                <p>{item.price}</p>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default function Product(){
    const [productData,setProductData] = useState(null);
    const [loading,setloading] = useState(true);
    const [error,setErorr] = useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products",{mode:'cors'})
        .then((res)=>{
            if(res.status >= 400){
                throw new Error("server error");
            }
            return res.json();
        }).then((item)=>setProductData(item))
        .catch((error)=>setErorr(error))
        .finally(()=>setloading(false));
    },[])

    if(error !==null){
        return (<p>{error}</p>)
    }

    if(loading){
        return (<p>Loading...</p>)
    }
    
    return productData.map((item)=>
        <ShowCase key={item.id} item={item}/>
    )
    
}