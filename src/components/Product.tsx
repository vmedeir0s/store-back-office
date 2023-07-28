import { ProductType, ProductWithId } from "../types";
import imgNotFound from '../assets/imgNotFound.png'

type Props = {
  handleDelete?: (() => void) | undefined;
  productInfo: ProductWithId | ProductType;
}

export default function Product({
  handleDelete = undefined,
  productInfo,
}: Props) {
  const { name, description, price, image, tags, id } = productInfo as ProductWithId;
  const tagsList = tags ? tags.split(',').map((tag) => tag.trim()) : [];

  let productImage = image ? URL.createObjectURL(image) : imgNotFound;

  return (
    <div>
      {handleDelete && <button onClick={handleDelete}>X</button>}
      <img src={productImage} alt={name} className="h-44" />
      <h3>{name}</h3>
      <h4>{`R$ ${price}`}</h4>
      <ul>
        {tagsList.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <p>{description}</p>
    </div>
  )
}