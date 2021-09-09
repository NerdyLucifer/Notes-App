import { MdDeleteForever } from "react-icons/md";
const Note = ({ note, handleDeleteNode }) => {
  const { id, text, date } = note;
  return (
    <div className="note">
      <span className="text-area">{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.8rem"
          onClick={() => {
            handleDeleteNode(id);
          }}
        ></MdDeleteForever>
      </div>
    </div>
  );
};
export default Note;
