
import Link from 'next/link';
import styles from './header.module.css';

function header(){
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <header className={styles.header}>
            <div className={styles.header_left}>
                <Link href="/">
                  <img src='/logo.svg'/>
                </Link>
                <div>
                <input className={styles.searchInput} type="text" placeholder="Search.." name="search"/>
                <button className={styles.searchButton} type="submit"><i className="fa fa-search"></i></button>
                </div>
            </div>
            <div>
                <button className={styles.btn}>
                    <img style={{paddingRight: '7px'}} src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-3a664174124650d63cae365bc55586fc5ff27b822b1b97788fc4af77d73d00c8.svg"></img>
                    App Store</button>
                <button className={styles.btn}><img style={{paddingRight: '7px'}} src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-c9ad0fc573cd01e2b982df5de6709a3d8d7cec8d9b58a5c08db7da0b92a32a75.svg"></img>Google Play</button>
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