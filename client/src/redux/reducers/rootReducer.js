import { combineReducers } from "redux";
import catReducer from "./catReducer";
import dogReducer from "./dogReducer";
import disReducer from "./DisReducer";
import likeReducer from "./LikeReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  cats: catReducer,
  dogs: dogReducer,
  counterLike:likeReducer,
  counterDisLike: disReducer,
  themeIsDark: themeReducer,
});

export default rootReducer;
