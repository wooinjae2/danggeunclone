import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Item from "../components/item";
import RowItem from "../components/RowItem";


export default function Home() {

  const [itemList, setItemList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/articles').then((res)=>{
      console.log(res.data);
      setItemList(res.data);
    })
  },[])

  return (
    <div style={{padding: '100px 0px;'}}>
      <Card title="중고거래" contentSortType="column">
        {itemList.map((data) => {
          return <Item key={data.id} data={data} />;
        })}
      </Card>

      <Card title="동네정보" contentSortType="row">
        {itemList.map((data) => {
          return <RowItem key={data.id} data={data} />;
        })}
      </Card>
    </div>
  );
}
