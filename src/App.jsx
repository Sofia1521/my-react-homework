import { useState } from "react"

import Answer from "./components/Answer"
import Question from "./components/Question"
import Wrap from "./components/Wrap"
import { doneAnswer } from "./data/functions"


function App() {

    const [answer, setAnswer] = useState('Ответ')

    const sAnswer = () => {setAnswer(doneAnswer())}
    
    return <>
        <Wrap>
            <Answer answer={answer} />
            <Question
                onAnswer={sAnswer}
                // onClear={handleClear}
            />
        </Wrap>
    </>
}

export default App
