import Product from "@/component/Product"

export default function page() {

    let p_ar = [
        {name:"딸기", price:'12000'},
        {name:"라임", price:'9000'},
        {name:"바나나", price:'15000'},
    ]

    return (
        <div>
            <h1 className="title">제품들</h1>
            <hr/>
            {p_ar.map((product, index)=>(
                <Product key={index} product={product} index={index} />
            ))}
        </div>
    )
}
