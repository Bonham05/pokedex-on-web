// フォントスタイル定義ファイル
import localFont from "next/font/local";
import { Inter, DotGothic16 } from "next/font/google";

// google font
// const inter = Inter({ subsets: ["latin"] });
// const dotGothic16 = DotGothic16({
//     weight: "400",
//     subsets: ["latin"],
// });

// 通常の文字、文章等
const pokeFont = localFont({
    // src: "./styles/fonts/Arcadepix_Plus.ttf",
    src: "./fonts/Pokemon_Classic.ttf",
    // weight: "800",
    // style: "Regular",
});

// アイコン、特殊文字など
const pokeFontStrict = localFont({
    // src: "./fonts/Arcadepix_Plus.ttf",
    src: "./../styles/fonts/pkmn_s.ttf",
    // weight: "1000",
    // style: "normal",
    // display: "swap",
});


export { pokeFont, pokeFontStrict }
