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