import excursion from "../assets/excursion-logo.svg"

function NavBar() {
  return (
    <div className="bg-white w-screen h-20 py-4 space-x-10">
      <div className="flex justify-between items-center  mx-72">
        <img className="mr-10" src={excursion}></img>
        <div className="flex justify-between items-center w-[603px]">
          <p className="text-base text-[#2A2146] font-semibold hover:text-secondary">IDIOMA</p>
          <p className="text-base text-[#2A2146] font-semibold hover:text-secondary">CARRINHO</p>
          <p className="text-base text-[#2A2146] font-semibold hover:text-secondary">AJUDA</p>
          <p className="text-base text-[#2A2146] font-semibold hover:text-secondary">LOGIN</p>
          <button className="bg-secondary w-40 h-12 rounded-3xl flex items-center justify-center hover:bg-primary">
            <p className="text-base text-white font-semibold">CRIAR CONTA</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar