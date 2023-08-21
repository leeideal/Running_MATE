import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./router/Main";
import Login from "./router/Login";
import { PrivateRoutes } from "./PrivateRoutes";

import RunningFriend from "./router/RunningFriend";
import RunningFriendIng from "./router/RunningFriendIng";
import RunningFriendMusic from "./router/RunningFriendMusic";
import RunningFriendFinish from "./router/RunningFriendFinish";
import RunningFriendResult from "./router/RunningFriendResult";

import RunningMate from "./router/RunningMate";
import RunningMateIng from "./router/RunningMateIng";
// import RunningMateMusic from "./router/RunningMateMusic";
import RunningMateFinish from "./router/RunningMateFinish";
import RunningMateResult from "./router/RunningMateResult";

import RunningAlone from "./router/RunningAlone";
import RunningAloneIng from "./router/RunningAloneIng";
import RunningAloneFinish from "./router/RunningAloneFinish";
import RunningAloneResult from "./router/RunningAloneResult";
import Insta from "./router/Insta";
import InstaAlone from "./router/InstaAlone";
import InstaMate from "./router/InstaMate";
import Create from "./router/Create";
import Tutorial from "./router/Tutorial";
import Story from "./router/Story";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 로그인하고 접속해야하는 페이지들 */}
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Main />} exact />  {/* 메인페이지 */}
                    
                    <Route path="/running/alone" element={<RunningAlone />} exact /> {/*러닝 - 혼자 페이지(목표설정)*/}
                    <Route path="/running/alone/ing" element={<RunningAloneIng />} exact /> {/*러닝중 - 혼자페이지 */}
                    <Route path="/running/alone/finish" element={<RunningAloneFinish />} exact /> {/* 러닝끝 -혼자페이지 */}
                    <Route path="/running/alone/finish/result" element={<RunningAloneResult />} exact />{/*러닝결과 - 친구페이지*/}
                    <Route path="/running/alone/finish/result/insta" element={<InstaAlone />} exact />

                    <Route path="/running/friend/music" element={<RunningFriendMusic />} exact /> { /* 러닝 -친구페이지(플레이리스트 추천) */}
                    <Route path="/running/mate" element={<RunningMate />} exact /> {/*러닝 - 메이트페이지(목표설정)*/}
                    <Route path="/running/mate/ing" element={<RunningMateIng />} exact /> {/*러닝중 - 메이트페이지 */}
                    <Route path="/running/mate/finish" element={<RunningMateFinish />} exact /> {/*러닝끝 - 메이트페이지*/} 
                    <Route path="/running/mate/finish/result" element={<RunningMateResult />} exact />{/*러닝결과 - 메이트페이지*/}
                    <Route path="/running/mate/finish/result/insta" element={<InstaMate />} exact />

                    <Route path="/running/friend/music" element={<RunningFriendMusic />} exact /> { /* 러닝 -친구페이지(플레이리스트 쌓기) */}
                    <Route path="/running/friend" element={<RunningFriend />} exact />  {/* 러닝 - 친구페이지(목표설정) */}
                    <Route path="/running/friend/ing" element={<RunningFriendIng />} exact />{/* 러닝중 - 친구페이지 */}
                    <Route path="/running/friend/finish" element={<RunningFriendFinish />} exact />{/* 러닝끝 -친구페이지 */}
                    <Route path="/running/friend/finish/result" element={<RunningFriendResult />} exact />{/*러닝결과 - 친구페이지*/}
                    <Route path="/running/friend/finish/result/insta" element={<Insta />} exact /> {/*인스타 다운로드할 사진 */} 

                    <Route path="/create"  element ={<Create />} exact /> {/* 캐릭터 생성 페이지 */} 

                    <Route path="/tutorial" element={<Tutorial />} exact /> {/* 튜토리얼 페이지 */} 

                    <Route path="/story" element={<Story />} exact /> {/* 스토리 페이지 */} 

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