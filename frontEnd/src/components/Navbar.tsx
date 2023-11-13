import { Link } from 'react-router-dom';
import logo from '../assets/free-icon-bird-789479.png';
import React, { useContext } from "react";
import { AppContext } from "../App";

const Navbar = () => {
    const { isLogin } = useContext(AppContext);
    
    const onLogout = () => {
        // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        sessionStorage.removeItem('id')
        // App 으로 이동(새로고침)
        document.location.href = '/'
    }

    return (
        <header>
            {/* <h1>
                <Link to='/'>관찰하새</Link>
            </h1>
            <div >
                {menus.map((menu) => {
                    return (
                        <Link to={`/${menu.name}`} key={menu.name}>
                            {menu.title}
                        </Link>
                    );
                })}
            </div>
            <Link to='/login'>
                <span>로그인</span>
            </Link> */}
            {/* 스타일링 */}
            <div className="navbar bg-base-100">
                <h1 className=" shrink-0 flex-1 mr-96">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img width="70.5" height="70.5" src={logo} />
                        관찰하새
                    </Link>
                </h1>
                <div className="flex-none ">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/logbook'>탐조이야기</Link></li>
                        <li><Link to='/questions'>질문답변</Link></li>
                        <li>
                            {isLogin ? 
                                <button type='button' onClick={onLogout}>로그아웃</button> 
                                : 
                                <Link to='/login'>로그인</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </header >
    )
}

export default Navbar;

