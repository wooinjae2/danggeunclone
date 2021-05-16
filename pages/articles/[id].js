import axios from "axios";
import { useRouter } from "next/router";
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card";
import Item from "../../components/item";
import styles from "./article.module.css";

export default function articles() {
  const [data, setData] = useState({});
  const [imgIndex, setImgIndex] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  let slideRef = useRef();

  const [hotDataList, setHotDataList] = useState([]);
  const router = useRouter();

  const { id } = router.query;
  console.log("id출력1 :", id);
  useEffect(async () => {
    let { id } = router.query;
    console.log("id 출력2 : ", id);
    id = id ? id : "1";
    const res = await axios.get(`http://localhost:4000/articles/${id}`).then((res) => {
      setData(res.data);
      return res.data;
    });

    

    if(res){
        await axios.get(`http://localhost:4000/users/${res.userId}`).then((res) => {
          console.log('user Info user Info ', res.data);
        });
    }
    

    axios.get(`http://localhost:4000/articles`).then((res) => {
      console.log(res.data);
      setHotDataList(res.data);
    });
  }, []);

  useEffect(async ()=>{
    if(id){
        const res = await axios.get(`http://localhost:4000/articles/${id}`).then((res) => {
            console.log('ddddddddddsadasdasdasd', res.data);
            setData(res.data);
            setImgIndex(0);
            return res.data;
          });
        console.log('dddddddddddddddd');
        if(res){
            await axios.get(`http://localhost:4000/users/${res.userId}`).then((res) => {
            console.log('idChange user Info user Info ', res.data);
            setUserInfo(res.data);
        });
        }
    }
    
  }, id)

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
            {data.src
              ? data.src.map((src, idx) => (
                  <img key={idx} className={styles.main_img} src={src}></img>
                ))
              : null}
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
        <Link href={`/users/${userInfo.id}`}>
          <div className={styles.userInfo_left}>
            <div>
              {/* <img src={`${data.src ? data.src[0] : null}`}></img> */}
              <img src={userInfo.userImg}></img>
            </div>
            <div>
              <div>{userInfo.userName}</div>
              <div>{userInfo.location}</div>
            </div>
          </div>
        </Link>

        <div className="userInfo_right">{userInfo.temp}</div>
      </div>

      <div className={styles.desc_section}>
        <div className="desc_header">
          <h1>{data.title}</h1>
        </div>
        <div>지역업체 소개 : 24시간 전</div>
        <div className={styles.item_price}> 30,000원</div>
        <div className="content">
          <p>
            당근용달 성남용달 성남이사 모든물건 소중히 안전하고 신속하게 운송해
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
