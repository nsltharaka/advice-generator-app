import button_icon from "./images/icon-dice.svg"
import pattern_divider from "./images/pattern-divider-mobile.svg"
import pattern_divider_desktop from "./images/pattern-divider-desktop.svg"
import { useEffect, useState } from "react"

function App() {

    const [slip, setSlip] = useState({});

    const getSlip = () => {
        fetch(`https://api.adviceslip.com/advice`)
            .then(res => res.json())
            .then(data => setSlip(data.slip))
            .catch(err => console.error(err))
    }

    useEffect(() => getSlip(), [])

    return (
        <div className="container">
            <div className="advice_card">
                <span className="advice_id_text">ADVICE {`#${slip.id}`}</span>
                <p className="advice_content">"{slip.advice}"</p>
                <picture>
                    <source media="(min-width: 600px)" srcSet={pattern_divider_desktop} />
                    <img className="divider" src={pattern_divider} alt="" />
                </picture>
            </div>
            <button
                onClick={() => getSlip()}
                className="next_advice_button">
                <img src={button_icon} alt="" />
            </button>
        </div>

    )
}

export default App