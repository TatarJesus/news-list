import { useState } from "react";
import { styled } from "styled-components";
import parse from "html-react-parser";

// interface ReplieProps {
//   $level: number;
// }

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Replie = styled.div<{ $level: number }>`
  margin: 10px 0px 10px ${props => props.$level * 35 + 'px'};
  width: 700px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #313131;
`;

const AllReplies = styled.span`
  transition: 0.3s;
  color: #0f00df;
  &&:hover {
    transition: 0.3s;
    cursor: pointer;
    color: #493fdb;
  }
`;

interface OptionsElemComment {
  comments_count: number;
  content: string;
  id: number;
  level: number;
  time?: number;
  time_ago?: string;
  type?: string;
  url?: string;
  user: string;
  comments: OptionsElemComment[];
}

export const Comment = (props: OptionsElemComment) => {
  const [allReplies, setAllReplies] = useState(false);

  const getAllReplies = () => {
    setAllReplies(!allReplies);
  };

  return (
    <Container>
      <Replie $level={props.level}>
        <span style={{ color: "#6251ff", fontWeight: 600 }}>{props.user}</span>
        {parse(props.content)}
        {props.comments_count === 0 ? null : (
          <AllReplies onClick={getAllReplies}>
            {allReplies ? "Hidden All Replies" : "Show All Replies"}
          </AllReplies>
        )}
      </Replie>
      {allReplies
        ? props.comments.map((comment: OptionsElemComment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              level={comment.level}
              user={comment.user}
              content={comment.content}
              comments_count={comment.comments_count}
              comments={comment.comments}
            />
          ))
        : null}
    </Container>
  );
};
