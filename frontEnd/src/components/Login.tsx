import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import axios from "axios";

const Login = () => {
    const idRef = useRef();
    const pwRef = useRef();

    const navigate = useNavigate();

    const handleLogin = () => {
        if (idRef.current.value === "" || idRef.current.value === undefined) {
            alert("아이디를 입력하세요.");
            idRef.current.focus();
            return false;
        }
        if (pwRef.current.value === "" || pwRef.current.value === undefined) {
            alert("패스워드를 입력하세요.");
            pwRef.current.focus();
            return false;
        }

        console.log(
            "Login:window.sessionStorage(login_id) =>",
            window.sessionStorage.getItem("id")
        );

        axios
            .post("http://localhost:8081/login", {
                id: idRef.current.value,
                pw: pwRef.current.value,
            })
            .then((res) => {
                console.log("handleLogin =>", res);
                if (idRef.current.value) {
                    window.sessionStorage.setItem("id", idRef.current.value);
                    navigate("../components/Index", { replace: true});
                } else {
                    alert("아이디, 패스워드가 정확하지 않습니다.");
                    idRef.current.value = "";
                    pwRef.current.value = "";
                    navigate("/");
                }
            })
            .catch((e) => {
                console.error(e);
            });
    };

    // const handleMemberForm = () => {
    //     navigate("/member"); // 해당 url로 바로 이동
    // };

    return (
        <div className="flex flex-col items-center">
            <span className='font-semibold mb-3'>로그인</span>
            <input
                className="input input-bordered w-full max-w-xs mt-3"
                type="text"
                name="id"
                placeholder="아이디"
                ref={idRef}
            />
            <input
                className="input input-bordered w-full max-w-xs mb-3"
                type="password"
                placeholder="비밀번호"
                ref={pwRef}
            />
            <button
                className="btn btn-wide btn-info mb-10 w-80 text-white"
                type="submit"
                value="로그인"
                onClick={handleLogin}
            >
                로그인
            </button>
            <p className="text-slate-500 text-sm">아직 계정이 없나요?</p>
            <button
                className="btn bg-transparent border-0 py-1"
                value="회원가입"
            >
                <Link to='/SignUp'>회원가입</Link>
            </button>
        </div>
    )
}

export default Login;