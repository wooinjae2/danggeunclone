import styles from './item.module.css';

export default function item({data}){
    console.log(data)
    return <div className={styles.item}>
        <div className={styles.item_img}><img src={data.src}/></div>
        <div className={styles.item_title}>{data.title}</div>
        <div className={styles.item_location}>{data.location}</div>
        <div className={styles.item_price}>{data.price}</div>
    </div>
} 