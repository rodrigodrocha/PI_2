export const PostCard = ({post}) => {
  return (
    // ctrl + k ctrl + c para descomentar é ctrl + k ctrl + u
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h1> {post.title}</h1>
        <p> {post.body}</p>
      </div>
    </div>
  );
};
