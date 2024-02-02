import React from "react";
import icon from "../assets/images/c1.png"
import Layout from "../common/Layout";

const Main = () => {
  return (
     // 레이아웃을 사용하는 방법은 아래와 같이 해당 컴포넌트의 리턴값을 감싼다
    <Layout>
      <h1>메인 페이지 화면</h1>
      <img alt="" src={icon} />
      <h3>배포성공 기원</h3>
    </Layout>
  );
};

export default Main;
