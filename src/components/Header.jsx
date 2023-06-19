import React from 'react'
import { NavLink } from 'react-router-dom'
import  styled  from 'styled-components'
export default function Header() {
  return (
    <>
        <HeaderStyle> 
                <NavLink to='/'>
                    <h3>Believe_this?</h3>
                </NavLink>
            <HeaderListStyle>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => (isActive ? "active" : 'none')}>
                            홈
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/board' className={({isActive}) => (isActive ? "active" : 'none')}>
                            뉴스
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/mypage' className={({isActive}) => (isActive ? "active" : 'none')}>
                            마이페이지
                        </NavLink>
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
  a.active {
    font-weight: 600; 
    border-bottom: 2px solid #22b8cf; 
    color: #22b8cf;
    &:hover{
      color: #3bc9db;
    }
  }
`

