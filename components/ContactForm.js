import styles from './ContactForm.module.scss'
// import TextBlock from '../components/TextBlock'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedContact, setSelectedContact] = useState('contato')

  const contactInfo = {
    contato: {
      serviceId: 'service_nlxssga',
      templateId: 'template_cnykivm',
      userId: 'user_OAavZ5dDxwZK8IIPGspfh'
    },
    agenda: {
      serviceId: 'service_e0fob3s',
      templateId: 'template_ry25oyz',
      userId: 'user_R7nz3sZNaogQfrmFY2U6I'
    },
    diretoria: {
      serviceId: 'service_jebf79j',
      templateId: 'template_onypiad',
      userId: 'user_2VyA5Sypn4p1aVW6xyhb7'
    },
    pub: {
      serviceId: 'service_lhiwf7b',
      templateId: 'template_sv0b22k',
      userId: 'user_8TLa866ahK9uoWqghpBZz'
    }
  }

  const handleSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault()

    emailjs.sendForm(
      `${contactInfo[`${selectedContact}`].serviceId}`,
      contactInfo[`${selectedContact}`].templateId,
      e.target,
      contactInfo[`${selectedContact}`].userId
    ).then((result) => {
      console.log({ result })
      setIsSent(true)
      setIsLoading(false)
    }, (error) => {
      console.log({ error })
      setIsLoading(false)
    })
  }

  const handleContactChange = (e) => {
    setSelectedContact(e.target.value)
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>FALE CONOSCO</span>
      <form onSubmit={handleSubmit}>
        {!isSent && <>
          <input type="hidden" name="to_name" value="Casa de Espetáculos"></input>
          <input placeholder="Nome" name="user_name" type="text" className={styles.formInput}></input>
          <input placeholder="Email" name="from_name" type="text" className={styles.formInput}></input>
          <select
            placeholder="Motivo"
            type="text"
            className={styles.formInput}
            onChange={handleContactChange}
          >
            <option value="contato">Contato</option>
            <option value="agenda">Agendamentos</option>
            <option value="pub">Pub</option>
            <option value="diretoria">Diretoria</option>
          </select>
          <textarea placeholder="Sua mensagem" name="message" className={styles.formInput}></textarea>
        </>
        }

        {!isLoading && !isSent &&
        <button type="submit">
          ENVIAR
        </button>
        }
        {!isLoading && isSent &&
        <>
          <span style={{fontFamily: "Merienda"}}>Mensagem enviada :)</span>
          <button onClick={() => setIsSent(false)}>Enviar outra mensagem</button>
        </>
        }
        {isLoading &&
        <span>is loading</span>
        }
      </form>
      {/* <TextBlock text="instagram" classes="black"/> */}
    </div>
  )
}

export default ContactForm
