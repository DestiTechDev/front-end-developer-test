import React, { useState } from "react";
import image1 from "../../images/Rectangle27.png";

const ContactUs = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mensagem enviada");
  };

  return (
    <div
      className="max-w-screen-xl mt-8 bg-black flex justify-center items-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="p-6 mt-16 mb-16 w-3/5 bg-white shadow-md">
        <div className="flex justify-center flex-col items-center mb-8">
          <h2 className="uppercase font-bold p-3 text-xl">
            Entre em contato conosco
          </h2>
          <div className="border-b border-blue-500 w-8 border-2"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 border rounded bg-slate-50"
              required
              placeholder="Seu nome"
            />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row">
            <div className="w-full mb-4 sm:mb-0 sm:mr-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded bg-slate-50"
                required
                placeholder="Seu email"
              />
            </div>
            <div className="w-full">
              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full p-2 border rounded bg-slate-50"
                required
                placeholder="Telefone"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              value={mensagem}
              placeholder="Escreva sua mensagem (opcional)"
              onChange={(e) => setMensagem(e.target.value)}
              className="w-full p-2 border rounded bg-slate-50"
            />
          </div>
          <button
            type="submit"
            className="mb-4 w-full bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-600"
          >
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
