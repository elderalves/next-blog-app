import PropTypes from 'prop-types'

export function CreatePost({ createPostAction }) {
  return (
    <form action={createPostAction}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea id="contents" name="contents" required></textarea>
      </div>
      <br/><br/>
      <button type="submit">Create Post</button>
    </form>
  )
}

CreatePost.propTypes = {
  createPostAction: PropTypes.func.isRequired
}