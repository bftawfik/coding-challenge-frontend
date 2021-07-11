import FormControl from "./FormControl/FormControl";

const NewPost = ({
  newPostFields,
  validationMsgs,
  msgId,
  onDataChange,
  post,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      NewPost
      <div>{validationMsgs[msgId]}</div>
      {newPostFields.map(({ type, label, alias }, ndx) => (
        <FormControl
          key={ndx}
          type={type}
          label={label}
          alias={alias}
          value={post[label]}
          onDataChange={post[label] && onDataChange}
        />
      ))}
    </form>
  );
};
export default NewPost;
