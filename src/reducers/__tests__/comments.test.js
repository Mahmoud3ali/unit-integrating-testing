import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

const action = {
  type: SAVE_COMMENT,
  payload: "new comment",
};

it("handles actions of type save_comment", () => {
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["new comment"]);
});

it("handles actions with unknown type", () => {
  const newState = commentsReducer([], {
    type: "SAVE_COMMENT",
    payload: "here",
  });
  expect(newState).toEqual([]);
});

it("persist changed state", () => {
  const newState = commentsReducer(["first comment"], action);
  expect(newState).toEqual(["first comment", "new comment"]);
});
