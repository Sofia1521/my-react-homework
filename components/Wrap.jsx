import styles from "./Wrap.module.css"

export default function Wrap({ children }) {
    return (
        <div className={styles.wrap}>
            <div className={styles.stars}></div>
                <span className={styles.star1}>✦</span>
                <span className={styles.star2}>✧</span>
                <span className={styles.star3}>·</span>
                <span className={styles.star4}>✦</span>
                <span className={styles.star5}>✧</span>
                <span className={styles.star6}>✧</span>
                <span className={styles.star7}>✦</span>
                <span className={styles.star8}>✧</span>
                <span className={styles.star9}>✦</span>
                <span className={styles.star10}>✧</span>
                <span className={styles.star11}>✦</span>
                <span className={styles.star12}>✧</span>
            {children}
        </div>
    )
}
