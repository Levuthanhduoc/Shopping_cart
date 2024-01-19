import '../style/purchase-page.css';
import { useOutletContext } from "react-router-dom";

export default function Purchase(){
    const [cart,setCart] = useOutletContext();
    let total = 0;

    const onChange = (e)=>{
        const index = e.target.dataset.id;
        let newArr = [...cart];
        let oldArr = cart[index];
        newArr[index] = {...oldArr,count:e.target.value.replace(/\D+/g, '')}
        setCart(newArr);
    }

    const onClickRemove = (e)=>{
        const index = e.target.dataset.id;
        let newArr = [...cart];
        newArr.splice(index,1);
        setCart(newArr);
    }
    
    return(
        <>
            <div className="purchase-page">
                <p>You Cart:</p>
                <ul>
                    {cart.map((item,index)=>{
                        total= item.price * item.count + total;
                        return (
                            <li className="purchase-item"  key={item.id}>
                                <div>{item.title}</div>
                                <div>
                                    {" : " + (item.price)+ "$" + " * "}
                                    <input inputMode="numeric" type="number" value={item.count} data-id={index} onChange={onChange}/>
                                    <button className='remove-item' data-id={index} onClick={onClickRemove}>-</button>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
                <p className="money-total">Total: {total + "$"} </p>
               <button>Purchase</button>
            </div>
        </>
    )
}