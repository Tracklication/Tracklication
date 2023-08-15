import React from 'react';

function Note(props) {
  if (!props.noteOpen) return;
  return (
    <div>
      <div className='pop-up popupbackground'></div>
      <div className='pop-up note'>
        <div>
          <h1>Update Notes</h1>
          <button
            onClick={() => {
              props.toggleNote(false);
            }}
          >
            X
          </button>
        </div>
        <textarea rows='10' cols='50'></textarea>
        <button type='submit'>Update</button>
      </div>
    </div>
  );
}

export default Note;
