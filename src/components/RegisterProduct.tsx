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
    const { id, value, valueAsNumber, type } = event.target;

    if (type === "number") {
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
    } else if (id === 'tags') {
      setFormData({
        ...formData,
        [id]: value
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

  function handleNumberKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    const maxLength = 8;

    if (value.length >= maxLength && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

  return (
    <main className="grow w-full flex flex-col justify-center items-center">
      <div className="flex flex-col grow gap-1 items-center w-full">
        <h1 className="text-emerald-500 mt-5 text-3xl font-semibold max-sm:text-2xl text-center">Cadastrar novo produto</h1>
        <div className="flex items-center justify-around w-4/5 h-full max-sm:flex-col-reverse max-sm:w-11/12">
          <form onSubmit={onSubmit} className="flex font-medium flex-col gap-4 shadow-md px-8 py-5 mb-4 w-80 max-sm:px-5 max-sm:w-11/12">
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="name">
                Nome<span className={`font-extrabold text-red-500 ${formData.name && 'hidden'}`}>*</span>
              </label>
              <input
                className="bg-gray-200 py-1 px-3 shadow border rounded appearance-none focus:outline-emerald-500 focus:bg-white"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Produto 1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="description">
                Descrição<span className={`font-extrabold text-red-500 ${formData.description && 'hidden'}`}>*</span>
              </label>
              <textarea
                className="bg-gray-200 h-16 py-1 px-3 shadow border rounded appearance-none focus:outline-emerald-500 focus:bg-white resize-none"
                id="description"
                rows={2}
                value={formData.description}
                onChange={handleTextareaChange}
                placeholder="Descrição do Produto..."
                maxLength={90}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="price">
                Preço<span className={`font-extrabold text-red-500 ${formData.price && 'hidden'}`}>*</span>
              </label>
              <input
                className="bg-gray-200 py-1 px-3 shadow border rounded appearance-none focus:outline-emerald-500 focus:bg-white"
                type="number"
                step="any"
                id="price"
                placeholder="R$ 9.99"
                onChange={handleInputChange}
                onKeyDown={handleNumberKeyDown}
                max={1000000}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="image">
                Imagem
              </label>
              <div className="flex">
                <label htmlFor="image" className="bg-gray-200 cursor-pointer text-center w-full py-1 px-3 shadow border border-dashed rounded-lg border-gray-600/25 appearance-none focus:outline-emerald-500 focus:bg-white hover:bg-gray-100">
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
                className="bg-gray-200 py-1 px-3 shadow border rounded appearance-none focus:outline-emerald-500 focus:bg-white"
                type="text"
                id="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="Roupas Acessórios Moda..."
                maxLength={60}
              />
            </div>
            <button className="self-center bg-emerald-500 py-3 px-4 rounded-md shadow-sm text-white font-semibold
            hover:bg-emerald-400
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 w-28 max-sm:w-2/3" type="submit">Salvar</button>
          </form>
          <Product productInfo={formData} />
        </div>
      </div>
    </main>
  )
}