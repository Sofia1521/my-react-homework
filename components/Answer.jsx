import styles from "./Answer.module.css"

export default function Answer({ answer = "Ответ" }) {
    return (
        <div className={styles.answerBlock}>
            <div className={styles.orbit}>
                <div className={styles.answer}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}
