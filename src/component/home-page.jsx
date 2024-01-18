import Product from "./product-menu"
import '../style/home-page.css'
export default function Home(){
    return (
        <>
            <div className="home-page">
                <div className="product-menu">
                    <Product/>
                </div>
            </div>
        </>
    )
}