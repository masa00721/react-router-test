import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <p>Page1の詳細Aです</p>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
