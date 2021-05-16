import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from './users.module.css';


export default function user() {

    const [userInfo, setUserInfo] = useState({});
        const router = useRouter();
    // const {id} = router.query;
    // console.log(router.query, id);

    useEffect(async() => {
        console.log('asdasdas', id, router.query);
        const id = router.query.id;
        if(id){
            const res = await axios.get(`http://localhost:4000/users/${id}`);
            console.log(res.data);
            setUserInfo(res.data);
        }
    },[])

//     dealReview: [{…}]
// id: 3
// location: "화성시 안녕동"
// satisfaction: 100
// temp: 36.5
// userImg: "/image/profile.jpg"
// userName: "홍길동3"

    return(<div className={styles.userInfo_Wrapper}>
        <div className={styles.userInfo_section}>
          <img src={userInfo.userImg}></img>
          <div>{userInfo.userName}</div>
          <div>{userInfo.location}</div>
          <div>{userInfo.temp}</div>
          <div>{`${userInfo.satisfaction}%`}</div>
        </div>
        <div >
            <div>
                <div>{`판매물품`}</div>
                <div>{`거래후기`}</div>
                <div>{`매너칭찬`}</div>
            </div>
        </div>
        <div>
            {}
        </div>
    </div>)
}