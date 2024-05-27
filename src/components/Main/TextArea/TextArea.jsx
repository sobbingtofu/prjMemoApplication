import {MemoInputSection} from "../MainSection.styledcomp";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_MEMO} from "../../../redux/modules/memo";

const TextArea = () => {
  const memoList = useSelector((state) => {
    return state.memo.memos;
  });

  const selectedMemoID = useSelector((state) => {
    return state.memo.selectedMemoID;
  });

  const selectedMemo = memoList.find((memo) => {
    return memo.id == selectedMemoID;
  });

  const dispatch = useDispatch();

  const handleMemoChange = (event) => {
    dispatch(UPDATE_MEMO({inputText: event.target.value}));
  };

  return (
    <>
      <MemoInputSection type="text" autoFocus onChange={handleMemoChange} value={selectedMemo?.content || ""} />
    </>
  );
};

export default TextArea;
