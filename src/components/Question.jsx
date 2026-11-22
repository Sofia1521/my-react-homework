import styles from "./Question.module.css"
import stylesBtn from "./Btn.module.css"

export default function Question({nameBtn1 = "Узнай судьбу", nameBtn2 = "Очистить", onAnswer}){
    
    const doAnsw= (event) => {
        event.preventDefault()
        onAnswer()
    }

    return <form className={styles.form} onSubmit={doAnsw}>
        <input className={styles.magicInput} type="text" name="question" placeholder="Задайте ваш вопрос..."/>
        <div className={styles.formBtn}>
            <button className={stylesBtn.magicBtn}  type='submit'>{nameBtn1}</button>
            <button className={stylesBtn.magicBtn} type='reset'>{nameBtn2}</button>
        </div>
    </form>
}
