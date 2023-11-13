import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from "axios";

const SignUp = () => {
    const idJoinRef = useRef();
    const pwJoinRef = useRef();
    const usernameJoinRef = useRef();
    
    const handleSignUp = () => {
        if (idJoinRef.current.value === "" || idJoinRef.current.value === undefined) {
            alert("아이디를 입력하세요.");
            idJoinRef.current.focus();
            return false;
        }
        if (pwJoinRef.current.value === "" || pwJoinRef.current.value === undefined) {
            alert("패스워드를 입력하세요.");
            pwJoinRef.current.focus();
            return false;
        }
        if (usernameJoinRef.current.value === "" || usernameJoinRef.current.value === undefined) {
            alert("닉네임을 입력하세요.");
            usernameJoinRef.current.focus();
            return false;
        }

        axios
            .post("http://localhost:8081/signup", {
                id: idJoinRef.current.value,
                pw: pwJoinRef.current.value,
                username: usernameJoinRef.current.value,
            })
            .then((res) => {
                console.log("handleSignUp =>", res);
                if (idJoinRef.current.value) {
                    alert("가입이 완료되었습니다");
                    navigate("/Index");
                } else {
                    alert("중복된 아이디 입니다");
                    idJoinRef.current.value = "";
                    navigate("/");
                }
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className='font-semibold mb-5'>회원가입</h2>
            <div className='mb-3'>
                <label className="text-left" htmlFor="singup-input-id">아이디</label>
                <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    name="id"
                    placeholder="아이디"
                    id="singup-input-id"
                    ref={idJoinRef}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="singup-input-password">비밀번호</label>
                <input
                    className="input input-bordered w-full max-w-xs"
                    type="password"
                    placeholder="비밀번호"
                    id="singup-input-password"
                    ref={pwJoinRef}
                />
            </div>
            <div>
                <label htmlFor="singup-input-username">닉네임</label>
                <input
                    className="input input-bordered w-full max-w-xs mb-5"
                    type="text"
                    name="username"
                    placeholder="닉네임"
                    id="singup-input-username"
                    ref={usernameJoinRef}
                />
            </div>
            <button
                className="btn btn-wide btn-info mb-10 text-white"
                type="submit"
                value="로그인"
                onClick={handleSignUp}
            >
                가입하기
            </button>
        </div>
    )
}

export default SignUp