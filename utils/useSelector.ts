import { createSelectorHook } from "react-redux";
import { RootState } from "../redux/store";

const useSelector = createSelectorHook<RootState>();

export default useSelector;