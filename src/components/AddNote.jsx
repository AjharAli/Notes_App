import React from "react";
import { useState } from "react";
const AddNote=({handleAddNote})=>{
  const [noteText, setNoteText]= useState('');
  const charcterLimit=300;
  const handleChange=(event)=>{
    if(charcterLimit-event.target.value.length>=0){
      setNoteText(event.target.value)
    }
  };
  const handleSaveClick=()=>{
    if(noteText.trim().length>0){
      handleAddNote(noteText)
      setNoteText('')
    }
   
  }
  return(
    <>
        <div className="note new">
        <textarea  placeholder="Type to add note..." cols="10" rows="8" onChange={handleChange} value={noteText}></textarea>
        <div className="note-footer">
            <small>{charcterLimit-noteText.length}  Characters Remaining</small>
            <button className="save" onClick={handleSaveClick}> Save </button>
      </div>
      </div>
    </>

  );
};
export default AddNote;