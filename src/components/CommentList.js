import React, { useCallback } from "react";
import { connect } from "react-redux";

const CommentList = ({ comments }) => {
  const renderComments = useCallback(() => {
    return comments.map((c) => <li key={c}> {c} </li>);
  }, [comments]);
  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({ comments: state.comments });

export default connect(mapStateToProps)(CommentList);
