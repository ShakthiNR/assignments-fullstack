import { useState } from "react"
import './footer.css'

const Footer = () => {
    const [footer] = useState({

        version: '1.0.0',
        developedBy: 'Shakthi NR',
    })
    return (
        <>

            <footer className="App-footer">
                <p>Version: {footer.version}</p>
                <p>Developed by {footer.developedBy}</p>
            </footer>

        </>
    )
}

export default Footer