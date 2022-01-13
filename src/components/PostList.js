import { useContext } from "react";
import PostContext from "../Store/PostContext";
const PostList = () => {
  const post = useContext(PostContext);
  return (
    <>
      <div className="px-6 mb-4">
        <div className="border border-chalfal_border hover:border-chalfal_text bg-chalfal_color-brighter p-2 rounded-md cursor-pointer">
          <h5 className="text-sm text-chalfal_text-darker mb-1">
            Posted by {post.author} 5 hours ago {post.postedAt}
          </h5>
          <h2 className="text-xl mb-3">{post.title}</h2>
          <div className="text-sm leading-6">
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
