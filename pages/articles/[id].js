import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from '../../components/Card';
import Item from '../../components/item';

export default function articles() {
  const [data, setData] = useState({});
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

  return (
    <div>
      <div className="img_section">
        <div>left</div>
        <img src={`${data.src}`}></img>
        <div>right</div>
      </div>
      <div className="user_info_section">
        <div className="userInfo_left">
        <div><img src={`${data.src}`}></img></div>
        <div>단대민턴</div>
        <div>성남시 수정구 태평동</div>
        </div>
        <div className="userInfo_right">
            48.4
        </div>

      </div>

      <div className="desc_section">
          <div className="desc_header"><h1>성남용달 성남용달 성남용달</h1></div>
          <div>지역업체 소개 : 24시간 전</div>
          <div> 30,000원</div>
          <div className="content">당근용달 성남용달 성남이사
모든물건 소중히 안전하고
신속하게 운송해 드립니다
010-4710-2433 010-8885-3584</div>

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
