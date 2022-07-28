import { React } from "react";

const ColorfulMessage = (props) => {
  // 親コンポーネント(App)から子コンポーネント(ColorfulMessage)にprops(color,message)が渡ってくる
  // console.log(props);
  const { color, children } = props;
  const contentStyle = {
    // 変数名とプロパティの名前が一致しているときは変数の記載を以下のように　して省略することができる。
    color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
