import { FaRegCopyright } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <div className="w-full bg-primary text-white">
      <div className="flex justify-center space-x-28 py-20">
        <div>
          <p className="text-xl font-semibold mb-4">PRECISA DE AJUDA?</p>
          <div className="text-lg pt-2">
            <p>Telefone:</p>
            <p className="font-semibold">+055 21 1234-5678</p>
          </div>
          <div className="text-lg pt-2">
            <p>Email:</p>
            <p className="font-semibold">info@example.com</p>
          </div>
          <div className="text-lg pt-2">
            <p>Endereço:</p>
            <p className="font-semibold">Botafogo, 232 - Rio de Janeiro</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">EMPRESA</p>
          <div className="text-lg">
            <p className="mb-2 hover:text-secondary">Centro de Ajuda</p>
            <p className="mb-2 hover:text-secondary">Resgatar Vale</p>
            <p className="mb-2 hover:text-secondary">Contato</p>
            <p className="mb-2 hover:text-secondary">Denunciar Abuso</p>
            <p className="mb-2 hover:text-secondary">Sobre Nós</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">SUPORTE</p>
          <div className="text-lg">
            <p className="mb-2 hover:text-secondary">Suporte 24h</p>
            <p className="mb-2 hover:text-secondary">Licença</p>
            <p className="mb-2 hover:text-secondary">Satisfação</p>
            <p className="mb-2 hover:text-secondary">Precisão</p>
            <p className="mb-2 hover:text-secondary">Pagamento</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">NOSSO TRABALHO</p>
          <div className="text-lg">
            <p className="mb-2 hover:text-secondary">Portfifolio</p>
            <p className="mb-2 hover:text-secondary">Informações da Conta</p>
            <p className="mb-2 hover:text-secondary">Trabalhe Conosco</p>
            <p className="mb-2 hover:text-secondary">Políticas e Regras</p>
            <p className="mb-2 hover:text-secondary">Encontre Nosso Time</p>
          </div>
        </div>
      </div>
      <div className="w-full border border-solid border-[#303F58]"></div>
      <div className="flex justify-between px-20 py-10 text-lg">
        <div className="flex items-center justify-between gap-1">
          <FaRegCopyright />
          <p>Copyright 2022</p>
        </div>
        <div className="flex gap-6 ">
          <BsFacebook className="text-white hover:text-secondary" />
          <BsTwitter className="text-white hover:text-secondary"/>
          <BsYoutube className="text-white hover:text-secondary"/>
          <BsInstagram className="text-white hover:text-secondary"/>
          <BsLinkedin className="text-white hover:text-secondary"/>
        </div>
      </div>
    </div>
  )
}

export default Footer