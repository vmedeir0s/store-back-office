import React, { useState } from "react"
import { ProductType } from "../types";
import Product from "./Product";

export default function RegisterProduct() {
  const [formData, setFormData] = useState<ProductType>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
    tags: "",
  })

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value, type } = event.target;

    if (type === "number") {
      const valueAsNumber = parseFloat(value).toFixed(2);
      setFormData({
        ...formData,
        [id]: valueAsNumber
      });
    } else if (type === 'file') {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];
      setFormData({
        ...formData,
        [id]: selectedFile
      });
    } else {
      setFormData({
        ...formData,
        [id]: value
      });
    }
  }

  function handleTextareaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  return (
    <main className="grow w-full flex flex-col justify-center items-center">
      <div className="flex flex-col grow gap-1 items-center w-full">
        <h1 className="text-emerald-500 mt-5 text-2xl font-medium">Cadastrar novo produto</h1>
        <div className="flex items-center justify-around border-2 border-red-500 w-4/5 h-full max-sm:flex-col-reverse">
          <form onSubmit={onSubmit} className="flex font-medium flex-col gap-2 shadow-md px-8 pt-6 h-fit pb-8 mb-4 w-80">
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="name">
                Nome
              </label>
              <input
                className="bg-gray-200 py-2 px-3 shadow border rounded appearance-none focus:outline-emerald-500 focus:bg-white"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="description">
                Descrição
              </label>
              <textarea
                className="bg-gray-200 h-24 py-2 px-3 shadow border rounded appearance-none focus:outline-emerald-500 focus:bg-white resize-none"
                id="description"
                rows={2}
                value={formData.description}
                onChange={handleTextareaChange}
                defaultValue={''}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="price">
                Preço
              </label>
              <input
                className="bg-gray-200 py-2 px-3 shadow border rounded appearance-none focus:outline-emerald-500 focus:bg-white"
                type="number"
                id="price"
                placeholder="R$ 9,99"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="image">
                Imagem
              </label>
              <div className="flex">
                <label htmlFor="image" className="bg-gray-200 cursor-pointer text-center w-full py-2 px-3 shadow border border-dashed rounded-lg border-gray-600/25 appearance-none focus:outline-emerald-500 focus:bg-white hover:bg-gray-100">
                  Escolher Arquivo
                  <input
                    className="hidden"
                    type="file"
                    id="image"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="tags">
                Tags
              </label>
              <input
                className="bg-gray-200 py-2 px-3 shadow border rounded appearance-none focus:outline-emerald-500 focus:bg-white"
                type="text"
                id="tags"
                value={formData.tags}
                onChange={handleInputChange}
                required
              />
            </div>
            <button className="self-center bg-emerald-500 py-3 px-4 rounded-md shadow-sm text-white font-semibold
            hover:bg-emerald-400
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600" type="submit">Salvar</button>
          </form>
          <Product productInfo={formData} />
        </div>
      </div>
    </main>
  )
}