import { ProductWithId } from "../types";
import Product from "./Product";

type Props = {
  products: ProductWithId[];
  handleDelete: (() => void);
}

export default function ListProducts({ products, handleDelete }: Props) {
  return (
    <main className="grow w-full flex flex-col justify-center items-center">
      {
        products.length === 0
          ?
          <div className="w-[80%] flex flex-col gap-2">
            <h1 className="text-center text-emerald-500 text-3xl max-md:text-xl font-semibold uppercase tracking-widest">
              Nenhum produto
              <br />foi encontrado
            </h1>
            <p className="text-center text-neutral-500 text-xl max-md:text-lg font-normal">Visite a seção <strong>Cadastrar</strong> e realize um primeiro registro</p>
          </div>
          :
          <h1>tem produto</h1>

      }
    </main >
  )
}