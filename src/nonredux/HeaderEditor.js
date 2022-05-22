import { useContext, useRef } from "react";
import { MainContext } from "./Store";

export function HeaderEditor() {
  const { state, dispatch } = useContext(MainContext);
  const onChange = (e) =>
    dispatch({ type: "HEADER_UPDATE", header: e.target.value });
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <>
      <input type="text" value={state.header} onChange={onChange} />
      {renderCount.current}
    </>
  );
}
