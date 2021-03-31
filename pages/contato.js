import ContactForm from '../components/ContactForm'
import Map from '../components/Map'

export default function Contato () {
  return (
    <div className="contact-container">
      <ContactForm />
      <Map height="100%" width="80%" />
    </div>
  )
}
