import picture9 from '../assets/picture-9.png'

function Contact() {
  return (
    <div>
      <div className="w-screen relative mt-20">
        <img className="w-screen" src={picture9} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white w-2/3 items-center justify-center">
            <div className="w-full flex items-center justify-center mt-10">
              <div>
                <p className="text-4xl font-semibold">ENTRE EM CONTATO CONOSCO</p>
                <div className="w-10 border-2 border-solid border-secondary mx-auto my-4"></div>
              </div>
            </div>
            <div className="w-full mx-auto flex flex-col items-center justify-center mt-2 mb-12 gap-6 px-8">
              <input className="w-full bg-gray-100 rounded-sm p-3 text-base" placeholder='Seu nome'>
              </input>
              <div className="flex gap-6 w-full">
                <input className="w-full bg-gray-100 rounded-sm p-3 text-base" placeholder='Seu email'>
                </input>
                <input className="w-full bg-gray-100 rounded-sm p-3 text-base" placeholder='Telefone'>
                </input>
              </div>
              <textarea className="w-full h-40 bg-gray-100 rounded-base p-3 resize-none text-base" placeholder='Escreva sua mensagem (opcional)'/>
              <button className="w-full h-20 bg-secondary text-white text-xl font-semibold rounded-sm p-3">ENVIAR MENSAGEM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact