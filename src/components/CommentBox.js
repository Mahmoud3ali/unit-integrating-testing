import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState("");
  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveComment(comment);
          setComment("");
        }}
      >
        <h4> Add a Comment </h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button> Submit </button>
        </div>
      </form>
      <button className="fetch-comments" onClick={() => fetchComments()}>
        Fetch Comment
      </button>
    </React.Fragment>
  );
};

export default connect(null, actions)(CommentBox);
