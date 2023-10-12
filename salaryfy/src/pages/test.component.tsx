import { useDispatch, useSelector } from "react-redux"
import { testSlice } from "../store/app.reducer";


export default function TestComponent(): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storeValue: any = useSelector((state) => state);
  const dispatch = useDispatch();

  (storeValue)

  function addValue() {
    ('hehrehr');
    dispatch( testSlice.actions.setValue(5) );
  }
  return (
    <div>
      This is a test component

      <button className="bg-[red] text-[2em]" onClick={addValue} >Add</button>
      <div className="text-[5em]">{ storeValue.root.test }</div>
    </div>
  );
}