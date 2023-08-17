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