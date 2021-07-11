import FormControl from "./FormControl/FormControl";

import classes from "./NewPost.module.scss";

const NewPost = ({
  newPostFields,
  validationMsgs,
  msgId,
  onDataChange,
  post,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className={classes.NewPost}>
      <h2>New Post</h2>
      {msgId !== -1 && (
        <div className={classes.validationMsgs}>{validationMsgs[msgId]}</div>
      )}
      <div className={classes.controlsContainer}>
        {newPostFields.map(({ type, label, alias }, ndx) => (
          <FormControl
            key={ndx}
            type={type}
            label={label}
            alias={alias}
            value={post[label]}
            onDataChange={post[label] && onDataChange}
            classes={classes}
          />
        ))}
      </div>
    </form>
  );
};
export default NewPost;
