import { useState } from "react";
const AddNote = ({ handleAddNote }) => {
  const [noteText, SetNoteText] = useState("");
  const [remaining, Setremaining] = useState(200);
  const handleChange = (e) => {
    SetNoteText(e.target.value);
    Setremaining(200 - noteText.trim().length);
  };
  const handleSave = () => {
    if (noteText.trim().length <= 200 && noteText.trim().length>0) {
      handleAddNote(noteText);
      SetNoteText("");
      Setremaining(200);
    }
  };
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add note..."
        onChange={(e) => handleChange(e)}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>Characters remaining:{remaining}</small>
        <button className="save" onClick={() => handleSave()}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
