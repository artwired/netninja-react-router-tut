import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About() {

    const [user, setUser] = useState('Dave')

    if (!user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className="about">
            <h2>About Us</h2>
            <p>Qui tardius moveri, brid eof reanimator sed in magna copia sint 
               terribiles undeath legionis. Alii missing oculis aliorum sicut 
               serpere crabs nostram. Putridi braindead odores kill and infect, aere
               implent left four dead.</p>
            <p>Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof 
               darkness ulnis witchcraft missing carnem armis Kirkman Moore and 
               Adlard caeruleum in locis. Romero morbo Congress amarus in auras. 
               Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival 
               portenta.</p>
            <p>The unleashed virus est, et iam zombie mortui ambulabunt super terram. 
               Souless mortuum glassy-eyed oculos attonitos indifferent back zom 
               bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere 
               Clairvius Narcisse, an ante? Is bello mundi z?</p>
               <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}