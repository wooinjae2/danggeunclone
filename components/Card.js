import Item from "./item";
import styles from './Card.module.css'

const Card = ({
  title = '',
  border = true,
  contentSortType = 'column',
  children,
  more_left = false
}) =>{

  console.log('boder', border);
  
  
  return <div className={`${styles.content_section} ${border ? styles.border : ''}`}>
    <div className={styles.card_header}>
    <div className={styles.title}>{title}</div>
    {more_left ? <div className={styles.haeder_more}> 더 구경하기</div> : null}
    </div>
      
      
        <div className={contentSortType === 'row' ? styles.content_row : styles.content_column}>
        {children}
      </div>
      {!more_left ? <div className={styles.more_btn}> 더 보기</div> : null}
      
  </div>
}


export default Card;