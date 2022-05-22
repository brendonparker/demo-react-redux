import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateHeader } from "./mainSlice";

export function HeaderEditor() {
  const header = useSelector((state) => state.main.header);
  const dispatch = useDispatch();
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <>
      <input
        type="text"
        value={header}
        onChange={(e) => dispatch(updateHeader({ header: e.target.value }))}
      />
      {renderCount.current}
    </>
  );
}
