import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Songs_for_You: "Songs for You...",
        BASED_ON_RECENT_LISTENING: "BASED ON RECENT LISTENING",
        Click_Image: "Click Image",
        ENJOY_TRENDING_INSTRUMENTAL: "ENJOY...TRENDING-INSTRUMENTAL",
        Remove_From_Playlist: " Remove From Playlist",
        Add_to_Playlist: " Add to Playlist",
        Search__Listed_Songs: "Search Listed Songs",
      },
    },
    jp: {
      translation: {
        Songs_for_You: "あなたのための歌",
        BASED_ON_RECENT_LISTENING: "最近のリスニングに基づく",
        Click_Image: "画像をクリック",
        ENJOY_TRENDING_INSTRUMENTAL: "トレンドのインストゥルメンタルを楽しむ",
        Search__Listed_Songs: "リストされた曲を検索",
        Remove_From_Playlist: "プレイリストから削除",
        Add_to_Playlist: "プレイリストに追加",
      },
    },
  },
  lng: "en",
});
export default i18next;
