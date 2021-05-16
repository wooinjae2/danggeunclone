import styles from './item.module.css';
import Link from 'next/link'

export default function item({data}){
    return <Link href={`/articles/${data.id}`}>
    <div className={styles.item}>
        <div className={styles.item_img}><img src={data.src[0]}/></div>
        <div className={styles.item_title}>{data.title}</div>
        <div className={styles.item_location}>{data.location}</div>
        <div className={styles.item_price}>{data.price}</div>
    </div>
    </Link>
}