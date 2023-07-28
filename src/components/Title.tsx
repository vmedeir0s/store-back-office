import pageIcon from '../assets/shop.png'

export default function Title() {
  return (
    <div className="flex gap-3 justify-center items-center">
      <img src={pageIcon} alt="page-icon" className="h-12 max-md:h-8" />
      <h1 className="text-white text-4xl max-md:text-2xl font-bold uppercase">Store Back Office</h1>
    </div>
  )
}