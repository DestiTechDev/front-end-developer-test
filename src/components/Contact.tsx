import styles from '../../styles/Contact.module.css';

function Contact() {
    return (
        <div className={`${styles.bg_contact}`}>
            <div className={`${styles.bg_form_contact}`}>
                <h2>Entre em contato conosco</h2>
                <hr className={`division_h2`} />

                <form className='grid grid-cols-12 gap-5'>
                    <div className="col-span-12">
                        <input type="text" name="nome" placeholder='Seu nome' required />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <input type="email" name="email" placeholder='Seu email' required />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <input type="tel" name="telefone" placeholder='Telefone' required />
                    </div>
                    <div className="col-span-12">
                        <textarea placeholder='Escreva sua mensagem (opcional)' name="mensagem" rows={6} required />
                    </div>
                    
                    <div className="col-span-12">
                        <button type='submit'>Enviar Mensagem</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;