import styles from './RowItem.module.css';

export default function RowItem({data}){
    console.log(data)
    return <div className={styles.item}>
        <div className={styles.item_img}><img src={data.src[0]}/></div>
        <div className={styles.descStyle}>
            <div className={styles.item_title}>{data.title}</div>
            <div className={styles.item_location}>{data.desc}</div>
            <div className={styles.item_location}>{data.location}</div>
            <div className={styles.item_price}>{data.price}</div>
        </div>

    </div>
} 