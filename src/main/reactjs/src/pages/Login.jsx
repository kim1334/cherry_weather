import React from 'react';
import { useRecoilState } from 'recoil';
import { LoginAtom } from '../recoil/LoginAtom';
import { Cookies } from 'react-cookie';
import Layout from '../common/Layout';

const Login = () => {
    // 쿠키 선언
    const cookie = new Cookies();

    // recoil Atom으로 전역상태가 된 isLogin을 가져온다.
    const [isLogin, setIsLogin] = useRecoilState(LoginAtom)

    // 로그인 버튼 이벤트로 쿠키에 accessToken을 저장하고 isLogin을 true로 변경한다.
    const handleLogin = () => {
        cookie.set('accessToken', '1234', { path: '/' })
        setIsLogin(true)
    }
    // 로그아웃 버튼 이벤트로 쿠키에 저장된 accessToken을 삭제하고 isLogin을 false로 변경한다.
    const handleLogout = () => {
        cookie.remove('accessToken', { path: '/' })
        setIsLogin(false)
    }

    // 전역 상태가 정상적으로 변환되는지 확인한다.
    console.log(isLogin)

    return (
        <Layout>
            <button onClick={handleLogin}>로그인</button>

            <button onClick={handleLogout}>로그아웃</button>
            
        </Layout>
    );
};

export default Login;