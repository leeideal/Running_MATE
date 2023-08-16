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