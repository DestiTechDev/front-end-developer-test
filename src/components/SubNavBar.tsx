function SubNavBar() {
  return (
    <div className="bg-primary w-screen h-10 flex items-center justify-end">
      <div className="flex justify-between w-[459px] mx-72">
        <p className="text-sm text-white hover:text-secondary">tour.support@gmail.com</p>
        <p className="text-sm text-white">|</p>
        <p className="text-sm text-white hover:text-secondary">Sobre nós</p>
        <p className="text-sm text-white">|</p>
        <p className="text-sm text-white hover:text-secondary">Contato</p>
        <p className="text-sm text-white">|</p>
        <p className="text-sm text-white hover:text-secondary">Fotos</p>
      </div>
    </div>
  )
}

export default SubNavBar