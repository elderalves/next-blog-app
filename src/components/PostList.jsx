import { Fragment } from "react";
import PropTypes from 'prop-types';
import { Post } from "./Post.jsx";

export function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Fragment key={`post-${post._id}`}>
            <Post _id={post._id} title={post.title} author={post.author} />
            <hr/>
          </Fragment>
        )
      })}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(Post.propTypes)
  ).isRequired,
}