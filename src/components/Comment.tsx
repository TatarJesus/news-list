import { useState } from "react";
import parse from "html-react-parser";
import { OptionsElemComment } from "../interface/interface";
import { Container, Replie, AllReplies } from "../styles/components/Comment";

export const Comment = (props: OptionsElemComment) => {
  const [allReplies, setAllReplies] = useState(false);

  const getAllReplies = () => {
    setAllReplies((prevState) => !prevState);
  };

  return (
    <Container>
      <Replie $level={props.level}>
        <span style={{ color: "#6251ff", fontWeight: 600 }}>{props.user}</span>
        {parse(props.content)}
        {props.comments_count !== 0 && (
          <AllReplies onClick={getAllReplies}>
            {allReplies ? "Hidden All Replies" : "Show All Replies"}
          </AllReplies>
        )}
      </Replie>
      {allReplies &&
        props.comments.map((comment: OptionsElemComment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            level={comment.level}
            user={comment.user}
            content={comment.content}
            comments_count={comment.comments_count}
            comments={comment.comments}
          />
        ))}
    </Container>
  );
};
