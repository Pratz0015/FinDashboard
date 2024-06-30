import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ( ) => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span className={styles.title}>Total Users</span>
                <span className={styles.number}>10.273</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>
                        12%  
                    </span>more than previous week
                </span>
                </div>
            </div>
            <div className={styles.item}>
                <MdSupervisedUserCircle size={24} />
                <div className={styles.texts}>
                    <span className={styles.title}>Stocks</span>
                    <span className={styles.number}>8.236</span>
                    <span className={styles.detail}>
                        <span className={styles.negative}>
                            2%
                        </span>less than previous week
                    </span>
                </div>
            </div>
            <div className={styles.item}>
                <MdSupervisedUserCircle size={24} />
                <div className={styles.texts}>
                    <span className={styles.title}>Revenue</span>
                    <span className={styles.number}>6.642</span>
                    <span className={styles.detail}>
                        <span className={styles.positive}>
                            18%
                        </span>more than previous week
                    </span>
                </div>
            </div>
        </div>

    );


};

export default Card;