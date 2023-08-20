import { atom } from "recoil";

// 메인페이지 어디인지
export const isMainPage = atom({
    key: "isMainPage",
    default: 1,
});

export const isBack = atom({
    key: "isBack",
    default: false,
});


export const isRun = atom({
    key: "isRun",
    default: 0,
})

// 현재 전화를 건 상태인지?
export const isCall = atom({
    key: "isCall",
    default: false,
});

// 현재 전화 중인가?
export const isCalling = atom({
    key: "isCalling",
    default: 0, // 0: 전화 검, 1: 전화 중, 2: 전화 종료
});


// 처음 접속한 유저인가?
export const isFirst = atom({
    key: "isFirst",
    default: false, 
});


// Create 페이지 어디인지
export const isCreate = atom({
    key: "isCreate",
    default: 0,
    // 0 : start 페이지
    // 1: name
    // 2: phone
    // 3: ch
    // 4: 최종
});

// Create 페이지 이름
export const isCreateNick= atom({
    key: "isCreateNick",
    default: "",
});

// Create 페이지 phone
export const isCreatePhone= atom({
    key: "isCreatePhone",
    default: "",
});

// Create 페이지 캐릭터
export const isCreateCh= atom({
    key: "isCreateCh",
    default: true,
});

// DB에서 받아온 유저 정보
export const isData = atom({
    key:"isData",
    default:null,
})