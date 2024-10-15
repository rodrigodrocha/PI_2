import "./styles.css";

import { PostCard } from "../PostCard";

export const Posts = ({posts}) => (
  <div className="posts">
    {posts.map((post) => (
      //SEMPRE QUE TEM UM MAP TEMOS QUE USAR O KEY
      <PostCard
        post={post}
        key={post.id}
      />
    ))}
  </div>
);
