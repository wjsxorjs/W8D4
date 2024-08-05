
export default function Product(props) {
    const {name, price, img_url} = props.product;

    const index = props.index;
    const img_src = `/fruit_img/fruit${index}.png`;

  return (
    <div className="box">
        <header>
            <img className="fruit_img" src={img_src} />
            <div className="txt">
                <h4>{name}</h4>
                <p>{price}원</p>
            </div>
        </header>
    </div>
  )
}
