import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card";
import Item from "../../components/item";
import styles from "./article.module.css";

export default function articles() {
  const [data, setData] = useState({});
  const [imgIndex, setImgIndex] = useState(0);
  let slideRef = useRef();

  const [hotDataList, setHotDataList] = useState([]);
  const router = useRouter();

  const { id } = router.query;
  console.log("id출력1 :", id);
  useEffect(() => {
    let { id } = router.query;
    console.log("id 출력2 : ", id);
    id = id ? id : "1";
    axios.get(`http://localhost:4000/articles/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });

    axios.get(`http://localhost:4000/articles`).then((res) => {
      console.log(res.data);
      setHotDataList(res.data);
    });
  }, []);

  const onClickMove = (param) => {
      if(param==='left'){
          if(imgIndex > 0){
              setImgIndex(imgIndex-1);
          }
      }else{
          if(imgIndex < data.src.length-1){
              setImgIndex(imgIndex+1);
          }
      }
    console.log(param);
  }

  useEffect(() => {
      if(slideRef.current){
          console.log('asddddddd');
          slideRef.current.style.transition = "all 0.5s ease-in-out";
          slideRef.current.style.transform = `translateX(-${imgIndex}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
      }
  }, [imgIndex]);


  

  console.log(imgIndex)

  return (
    <div className={styles.article_wrapper}>
      <div className={styles.img_section}>
        <div
          className={styles.move}
          style={{
            background:
              "url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-left-4c0e713bfa2cd12bd959e6dd9ef456cd6fc094953c41e605f6b9a59bc1680686.svg) no-repeat",
            width: "5%",
            height: "30px",
            marginRight: "10px",
          }}
          onClick={() => {
            onClickMove("left");
          }}
        ></div>
        <div className={styles.slideWrapper}>
          <div ref={slideRef} className={styles.slider}>
            <img
              className={styles.main_img}
              src={`${data.src ? data.src[1] : ""}`}
            ></img>
            <img
              className={styles.main_img}
              src={`${data.src ? data.src[0] : ""}`}
            ></img>
            <img
              className={styles.main_img}
              src={`${data.src ? data.src[2] : ""}`}
            ></img>
          </div>
        </div>
        <div
          className={styles.move}
          style={{
            background:
              "url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-right-134c53f44716c3bef227ec30da385b4b09c9c068d339a617a23093718f379d02.svg) no-repeat",
            width: "5%",
            height: "30px",
            marginLeft: "10px",
          }}
          onClick={() => {
            onClickMove("right");
          }}
        ></div>
      </div>
      <div className={styles.user_info_section}>
        <div className={styles.userInfo_left}>
          <div>
            <img src={`${data.src ? data.src[0] : null}`}></img>
          </div>
          <div>
            <div>단대민턴</div>
            <div>성남시 수정구 태평동</div>
          </div>
        </div>
        <div className="userInfo_right">48.4</div>
      </div>

      <div className={styles.desc_section}>
        <div className="desc_header">
          <h1>성남용달</h1>
        </div>
        <div>지역업체 소개 : 24시간 전</div>
        <div> 30,000원</div>
        <div className="content">
          <p>당근용달 성남용달 성남이사 모든물건 소중히 안전하고 신속하게 운송해
          드립니다
          </p>
        </div>

        <div>채팅 0 관심 0 조회 0</div>
      </div>

      <Card title="당근마켓 인기중고" contentSortType="column">
        {hotDataList.map((data) => {
          return <Item key={data.id} data={data} />;
        })}
      </Card>
    </div>
  );
}
