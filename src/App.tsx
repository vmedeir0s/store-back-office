import { useState } from "react"
import ListProducts from "./components/ListProducts"
import RegisterProduct from "./components/RegisterProduct"
import './styles/App.css'
import Title from "./components/Title";

function App() {
  const [navOption, setNavOption] = useState('list');

  function handleButtonRegister() {
    setNavOption('register');
  }

  function handleButtonList() {
    setNavOption('list');

  }

  return (
    <div className="bg-neutral-100 min-h-screen max-sm:h[calc(100dvh)] flex items-center flex-col">
      <header className="w-full h-32 bg-blue-700 flex justify-center gap-4 items-center flex-col">
        <Title />
        <div className="flex gap-2">
          <button
            className={`font-semibold shadow-sm shadow-slate-800 p-2 rounded ${navOption == 'register' ? 'bg-neutral-100' : 'bg-neutral-300 hover:bg-neutral-100 '}`}
            onClick={handleButtonRegister}
          >
            Cadastrar
          </button>
          <button
            className={`font-semibold shadow-sm shadow-slate-800 p-2 rounded ${navOption == 'list' ? 'bg-neutral-100' : 'bg-neutral-300 hover:bg-neutral-100 '}`}
            onClick={handleButtonList}
          >
            Ver Produtos
          </button>
        </div>
      </header>
      {
        navOption == 'register'
          ? <RegisterProduct />
          : <ListProducts products={[]} />
      }

    </div >
  )
}

export default App
