import Hero from "../../components/Hero section/Hero"
import contact from "../../assets/contact.png"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

function Contact() {
  const data = useContext(UserContext)
  return (
    <div>
      <Hero
      bg={contact}
      title={'Connected Globally. Available Locally.'}
      desc={"With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."}
      />
      <div>
        <p>{data.name}</p>
        <p>{data.age}</p>
      </div>
    </div>
  )
}

export default Contact
