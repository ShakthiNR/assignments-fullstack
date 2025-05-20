import { useState } from "react"
import './title.css'
const Title = () => {
    const [title] = useState({
        name: 'Interview Question generator',
        description: 'Generate technical interview questions and answers for any topic'
    })

    return (
        <>
            <header className="App-header">
                <h1>{title.name} <img src="/ai.png" alt="logo" className="App-logo" height={30} width={30} /></h1>
                <p>{title.description}</p>
            </header>
        </>
    )
}

export default Title