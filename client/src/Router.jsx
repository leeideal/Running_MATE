import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./router/Main";
import Login from "./router/Login";
import { PrivateRoutes } from "./PrivateRoutes";
import RunningFriend from "./router/RunningFriend";
import RunningFriendIng from "./router/RunningFriendIng";
import RunningFriendMusic from "./router/RunningFriendMusic";
import RunningFriendFinish from "./router/RunningFriendFinish";
import RunningFriendResult from "./router/RunningFriendResult";

function Router() {
    return (
    <BrowserRouter>
        <Routes>
            {/* 로그인하고 접속해야하는 페이지들 */}
            <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Main />} exact />  {/* 메인페이지 */}
                
                <Route path="/running/friend/music" element={<RunningFriendMusic />} exact />{ /* 러닝 -친구페이지(플레이리스트 쌓기) */}
                <Route path="/running/friend" element={<RunningFriend />} exact />  {/* 러닝 - 친구페이지(목표설정) */}
                <Route path="/running/friend/ing" element={<RunningFriendIng />} exact />{/* 러닝중 - 친구페이지 */}
                <Route path="/running/friend/finish" element={<RunningFriendFinish />} exact />{/* 러닝끝 -친구페이지 */}
                <Route path="/running/friendfinish/result" element={<RunningFriendResult />} exact />{/*러닝결과 - 친구페이지*/}
            </Route>

            {/* 로그인할 필요 없이 접근 가능한 페이지들 */}
            <Route path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
    );
}

/*
<PrivateRoute> : 접근권한이 있는 사람만 접근 가능한 라우터
<Route> : 일반 라우터
*/

export default Router;