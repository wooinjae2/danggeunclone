
import styles from './header.module.css';

function header(){
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <header className={styles.header}>
            <div className={styles.header_left}>
                <img src='/logo.svg'/>
                <div>
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i className="fa fa-search"></i></button>
                </div>
            </div>
            <div>
                <button className={styles.btn}>App Store</button>
                <button className={styles.btn}>Google Play</button>
            </div>
        </header>
        <div className={styles.recommend_list}>
            <div><span>추천</span></div>
            <div>죽전 자전거</div>
            <div>분당 유모차</div>
            <div>인천 노트북</div>
            <div>자전거</div>
        </div>
        </>
    )
}

export default header;