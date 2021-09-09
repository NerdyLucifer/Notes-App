import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({ notes, handleAddNote,handleDeleteNode }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note note={note} handleDeleteNode={handleDeleteNode}/>;
      })}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
};
export default NotesList;
