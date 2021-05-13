import Item from "./item";
import styles from './contentSection.module.css'

export default function Card(props) {
  
  
  return <div className={styles.content_section}>
      <div className={styles.title}>{props.title}</div>
        <div className={props.contentSortType === 'row' ? styles.content_row : styles.content_column}>
        {props.children}
      </div>
      <div className={styles.more_btn}> 더 보기</div>
  </div>
}


