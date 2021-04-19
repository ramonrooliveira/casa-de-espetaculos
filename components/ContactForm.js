import styles from './ContactForm.module.scss'
// import TextBlock from '../components/TextBlock'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = ({}) => {
  
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e) => {
    console.log("submiiiiit")
    
    e.preventDefault()

    emailjs.sendForm("service_13n34df","template_8re6gma", e.target, "user_GtSDoCP2kLWvfunbPwpaB")
      .then((result) => {
        console.log({result})
        setIsSent(true)
      }, (error) => {
        console.log({error})
      })
  }


  return (
    <div className={styles.container}>
      <span className={styles.title}>FALE CONOSCO</span>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="to_name" value="Casa de Espetáculos"></input>
        <input placeholder="Nome" name="user_name" type="text" className={styles.formInput}></input>
        <input placeholder="Email" name="from_name" type="text" className={styles.formInput}></input>
        <select placeholder="Motivo" type="text" className={styles.formInput}>
          <option>Contato</option>
          <option>Agendamentos</option>
          <option>Pub</option>
          <option>Diretoria</option>
        </select>
        <textarea placeholder="Sua mensagem" name="message" className={styles.formInput}></textarea>

        <button type="submit">ENVIAR</button>
      {/* {isSent &&
        <button onClick={() => setIsSent(false)}>Enviar outra mensagem</button>
      } */}
      </form>
      {/* <TextBlock text="instagram" classes="black"/> */}
      <div className={styles.socialLinks}>
        <span>instagram</span>
        <span>email</span>
      </div>
    </div>
  )
}

export default ContactForm
