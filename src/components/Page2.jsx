import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <p>2ページ目です</p>
      <Link to="/page2/100">URL Parameter</Link>
      <br />
      <Link to="/page2/100?name=hoge">Query Parameter</Link>
    </div>
  );
};
