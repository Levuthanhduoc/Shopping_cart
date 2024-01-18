import { useEffect,useState } from "react";
import starIcon from '../assets/star.svg'
import starHalfIcon from '../assets/star-half.svg'
import PropTypes from 'prop-types';
import { useOutletContext } from "react-router-dom";


function Star({number}){
    const a = Math.floor(number);
    const b = number - a;
    let arr = []
    let state = null
    for(let i = 0; i<a;i++){
        state = ((b >= 0.5 && i == a - 1 )?starHalfIcon: starIcon); 
        arr.push(<img key={i} className="icon" src={state} alt="star"/>)
        
    }
    
    return (
        <>
            {arr}
        </>
        
    )
}
Star.propTypes={
    number:PropTypes.number,
}

function ShowCase({item,cartItem}){
    const [cart,setCart] = cartItem;
    let oldArr = [...cart];
    let isExist = false;
    const onClickBuy = ()=>{
        cart.map((i,index)=>{
            if(item.id === cart[index].id){
                oldArr[index] = {...i,count:Number(i.count) + 1}
                setCart(oldArr);
                isExist = true;
            }
        })
        if(!isExist){setCart([...cart,
            {
                id:item.id,
                title:item.title,
                price:item.price,
                count:1,
            }
        ])}
    }

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
                <button onClick={onClickBuy}>Add to cart</button>
            </div>
        </div>
    )
}
ShowCase.propTypes={
    item:PropTypes.object,
    cartItem:PropTypes.array,
}

export default function Product(){
    const [productData,setProductData] = useState(null);
    const [loading,setloading] = useState(true);
    const [error,setErorr] = useState(null);
    const [cartItem,setCartItem] = useOutletContext()

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products",{mode:'cors'})
        .then((res)=>{
            if(res.status >= 400){
                throw new Error("server error");
            }
            return res.json();
        }).then((item)=>setProductData(item))
        .catch((error)=>{
            setErorr(error);
        })
        .finally(()=>setloading(false));
    },[])

    if(error !==null){
        return (<p>{error}</p>)
    }

    if(loading){
        return (<p>Loading...</p>)
    }

    if(productData ===null){
        return (<p>ERROR,please try again.</p>)
    }
    return productData.map((item)=>
        <ShowCase key={item.id} item={item} cartItem={[cartItem,setCartItem]}/>
    )
    
}