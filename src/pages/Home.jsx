import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <div>
    <MainStyle>
        <img src='https://www.campusn.co.kr/data/photos/20200940/art_1601253273981_c6fa66.jpg'/>
        <div>
            <h3>Believe_this?</h3>
            저희는 세상에 다양한 소식들을 필터 없이 가져옵니다.
        </div>
    </MainStyle>
    </div>
  )
}

const MainStyle = styled.div`
    display:block;
    background: url("") no-repeat;
    opacity: 0.8;
    width:100%;
    height:100%;
    text-align:center;
    color:white;
    img{
        z-index:2;
        position:absolute;
        top: 50%;
        left: 50%;
        z-index:-2;
        transform: translate(-50%, -50%);
    }
    div{
        margin:auto;
        
    }
    h3{
        z-index:1;
        font-size:40px;
        color:white
    }
`