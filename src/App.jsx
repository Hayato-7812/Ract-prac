import { React, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    //stateを更新する関数(変数(num)に設定したい値を書く)
    setNum(num + 1);
  };
  // 配列の分割代入で
  // 1.stateとして使用する変数名
  // 2. stateを変更する関数
  // をuseStateから取り出す(引数はnumの初期値)
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* コンポーネントに対して適当な名前をつけて、要素を渡していく */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <p>{num}</p>
    </>
  );
};

export default App;
