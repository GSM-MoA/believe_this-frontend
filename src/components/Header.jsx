import React from 'react'
import { Link } from 'react-router-dom'
import  styled  from 'styled-components'
export default function Header() {
  return (
    <>
        <HeaderStyle> 
                <Link to='/'>
                    <h3>Believe_this?</h3>
                </Link>
            <HeaderListStyle>
                <ul>
                    <li>
                        <Link to="/">
                            홈
                        </Link>
                    </li>
                    <li>
                        <Link to='/board'>
                            뉴스
                        </Link>
                    </li>
                    <li>
                        <Link to='/mypage'>
                            마이페이지
                        </Link>
                    </li>
                </ul>
                </HeaderListStyle>
            </HeaderStyle>
         </>
  )
}

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  flex-wrap: wrap;
  background-color: snow;
  a{
    text-decoration: none;
  }
 h3{
    font-size: 30px;
    padding:0.7rem;
    
 }
`

const HeaderListStyle = styled.div`  
  display:flex;
  line-height: 4rem;
  margin-left: auto;
  margin-right: 1rem;
  ul{
    display:flex;
    list-style:none;
    font-size:20px;
    li{ 
        padding-left: 1rem;
    }
  }
  a{
    text-decoration: none;
  }
`

