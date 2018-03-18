import React from 'react';
import './Footer.css';
import NoteForm from '../../containers/NoteForm/NoteForm';


const footer = (props) => {
    return (
        <div className="Footer">
            <NoteForm addNote={props.AddNote}/>
        </div>
    )
};

export default footer;