import styles from './ContactForm.module.scss'
// import TextBlock from '../components/TextBlock'

const ContactForm = ({}) => {
  
  const handleSubmit = () => {
    console.log("submiiiiit")
  }


  return (
    <div className={styles.container}>
      <span className={styles.title}>FALE CONOSCO</span>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" type="text" className={styles.formInput}></input>
        <input placeholder="Email" type="text" className={styles.formInput}></input>
        <input placeholder="Motivo" type="text" className={styles.formInput}></input>
        <input placeholder="Título" type="text" className={styles.formInput}></input>
        <textarea placeholder="Sua mensagem" className={styles.formInput}></textarea>

        <button type="submit">ENVIAR</button>
      </form>
      {/* <TextBlock text="instagram" classes="black"/> */}
    </div>
  )
}

export default ContactForm
