import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "./types";

const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

const fetchComments = async () => {
  const response = await axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response.data,
  };
};

export { saveComment, fetchComments };
