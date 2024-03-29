import React, { Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LoginAtom } from "../recoil/LoginAtom";
//import { lazy } from "react";
//일반적인 임포트
import Login from "../pages/Login"; 
import Main from "../pages/Main";   
import Group from "../pages/Group"; 

// 레이즈 라우터 임포트 방법
// const Login = lazy(() => import("../pages/Login"));
// const Main = lazy(() => import("../pages/Main"));
// const Group = lazy(() => import("../pages/Group"));

// 레이즈 라우터를 사용하기 위해선 위와같은 임포트 방식을 사용하여야 한다
// 일반적인 라우터와 레이즈 라우터의 차이점은
// 일반적인 라우터는 컴포넌트를 불러오는 시점에 컴포넌트를 불러오지만
// 레이즈 라우터는 컴포넌트를 불러오는 시점에 컴포넌트를 불러오지 않고
// 라우터에 접근했을 때 컴포넌트를 불러온다

// Suspense 컴포넌트는 레이즈 라우터를 사용할 때 필수 사용을 권장한다.
// Suspense 컴포넌트는 fallback 속성을 가지고 있는데
// fallback 속성은 레이즈 라우터를 사용할 때 컴포넌트를 불러오는 시점에
// 사용자에게 보여줄 컴포넌트를 지정하는 속성이다
// fallback 속성에는 일반적으로 로딩 컴포넌트를 넣어준다
// fallback 속성에 넣어준 컴포넌트는 레이즈 라우터를 사용할 때
// 컴포넌트를 불러오는 시점에 사용자에게 보여준다
// fallback 속성에 넣어준 컴포넌트는 Suspense 컴포넌트가 사라지면
// 같이 사라진다

const Router = () => {

    const isLogin = useRecoilValue(LoginAtom); // 로그인 여부를 저장하는 상태

  return (

    <BrowserRouter>
    <Suspense fallback={<div>로딩중..잠만기달...</div>}> 
    {/* Suspense는 레이즈 라우터 사용시 컴포넌트가 로드되는 동안 표시하는 화면을 출력할 수 있다*/} 
      <Routes>

        {/* 로그인 여부와 상관없이 접근할 수 있는 페이지  */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />

        {/* 로그인 상태가 true여야 접근할 수 있는 페이지 */}
        {isLogin && 
        <Route path="/group" element={<Group />} /> 
        }
        
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;