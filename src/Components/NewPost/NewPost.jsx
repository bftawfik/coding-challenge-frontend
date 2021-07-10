import FormControl from "./FormControl/FormControl";

const newPostFields = [
  {
    type: "input",
    label: "title",
  },
  {
    type: "input",
    label: "body",
    alias: "post"
  },
  {
    type: "submit",
    label: "submit",
  },
];

const NewPost = ({ onDataChange, post, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      NewPost
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
