import React from 'react';
import './Body.css';
import Note from '../../containers/Note/Note';


const body = (props) => {
    return (
        <div className="Body">
            {props.notes.map((note) => {
                return (
                    <Note noteContent={note.noteContent}
                          noteId={note.id}
                          key={note.id}
                          removeNote={props.removeNote}
                    />
                )
            })}
        </div>
    )
};

export default body;