import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

export default function BelieveThis() {
  return (
    <div>
      <Header/>
      <MainStyle>
        <div>
          <img
            src="https://www.campusn.co.kr/data/photos/20200940/art_1601253273981_c6fa66.jpg"
            alt="news_view"
          />
          <div className="believe-this-text">
            <h3>Believe_this?</h3>
            <div>
              저희는 세상에 다양한 소식들을 거짓과 사실을 구별하지 않은채로
              가져옵니다.
            </div>
          </div>
        </div>
      </MainStyle>
    </div>
  );
}

const MainStyle = styled.div`
  display: block;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  text-align: center;

  img {
    position: absolute;
    z-index: 2;
    opacity: 33%;
    top: 50%;
    left: 50%;
    z-index: -2;
    transform: translate(-50%, -50%);
  }
  .believe-this-text{
    display: inline-block;
    padding-top: 250px;

  }
  div div{
    padding: 30px;
  }
  h3 {
    z-index: 1;
    font-size: 40px;
    color: black;
  }
`;
