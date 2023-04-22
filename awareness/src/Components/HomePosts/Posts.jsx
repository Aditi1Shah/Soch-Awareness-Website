import DrugAddiction from "../HomeSubComponents/DrugAddiction";
import Post from "../Post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <DrugAddiction post={p} />
      ))}
    </div>
  );
}
