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
  const { name, description, price, image, tags } = productInfo as ProductWithId;
  const tagsList = tags ? tags.split(' ').map((tag) => tag.trim()) : [];

  let productImage = image ? URL.createObjectURL(image) : imgNotFound;

  function formatCurrency(value: number): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.format(value);
  }

  return (
    <div className="flex flex-col items-center gap-4 shadow-md px-8 py-5 h-[506px] w-80 max-sm:w-11/12 max-sm:h-fit max-sm:p-3 max-sm:gap-1 break-words capitalize mb-4">
      {handleDelete && <button onClick={handleDelete}>X</button>}
      <img src={productImage} alt={name} className="h-52 w-52 shrink-0 max-sm:h-40 max-sm:w-40" />
      <h3 title={name} className="h-8 text-center  font-medium p-1 truncate w-5/6 overflow-hidden">{name || 'Produto 1'}</h3>
      <h4 className="font-extrabold">{price ? formatCurrency(price) : 'R$ 0.00'}</h4>
      <ul className="h-20 w-5/6 flex gap-3 justify-center flex-wrap overflow-y-auto max-sm:hidden">
        {
          tagsList.length > 0
            ?
            tagsList.map((tag) => (
              <li
                className="py-2 px-1 h-7 flex items-center justify-center rounded-lg bg-neutral-300 min-w-[50px] text-center text-sm"
                key={tag}
              >
                {tag}
              </li>
            ))
            : (
              <>
                <li className="py-2 px-1 h-7 flex items-center justify-center rounded-lg bg-neutral-300 min-w-[50px] text-center text-sm">Roupas</li>
                <li className="py-2 px-1 h-7 flex items-center justify-center rounded-lg bg-neutral-300 min-w-[50px] text-center text-sm">Acessórios</li>
                <li className="py-2 px-1 h-7 flex items-center justify-center rounded-lg bg-neutral-300 min-w-[50px] text-center text-sm">Moda</li>
              </>
            )
        }
        { }
      </ul>
      <p className="h-20 w-5/6 overflow-y-auto max-sm:hidden">{description || 'Descrição do produto...'}</p>
    </div>
  )
}