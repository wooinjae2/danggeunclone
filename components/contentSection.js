import Item from "./item";
import styles from "./contentSection.module.css";
import Card from "./Card";

export default function contentSection() {
  const itemList = [
    {
      src: "car.jpeg",
      title: "자동차 입니다",
      location: "경기도 군포시 당근동",
      price: "25,000원",
    },
    {
      src: "bike.jpeg",
      title: "자전거 입니다",
      location: "경상북도 양산시 당근동",
      price: "30,000원",
    },
    {
      src: "jordan.jpeg",
      title: "조던 입니다",
      location: "서울시 역삼동",
      price: "44,444,000원",
    },
    {
      src: "jordan2.jpeg",
      title: "조던 입니다",
      location: "서울시 영등포구 당근동",
      price: "20,000원",
    },
    {
      src: "applecar.jpeg",
      title: "애플카 입니다",
      location: "서울시 방배동",
      price: "300,000원",
    },
  ];
  return (
    <Card title="중고거래" contentSortType="column">
      {itemList.map((data) => {
        return <Item data={data} />;
      })}
    </Card>
  );
}
