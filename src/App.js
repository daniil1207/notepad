import React, {useEffect, useState} from "react";
import {NoteList} from "./components/NoteList";
import uuid from "react-uuid";
import {Note} from "./components/Note";
import {Container, Grid} from "@mui/material"
import Header from "./components/Header";

function App() {
    const [notes, setNotes] = useState([])
    const [editedNote, setEditedNote] = useState('')
    const [editedMode, setEditedMode] = useState(false)
    const  [resultNotes, setResultNotes] = useState([])

    function addNewNote(value) {
        const newNote = {id: uuid(), value: value, isEdit: false}
        setNotes([newNote, ...notes])
    }

    function removeNote(id) {
        setNotes(notes.filter(n => n.id !== id))
       if (notes.length === 1) {
            setEditedMode(false)
        }
    }

    function selectEditedNote(id) {
        notes.map(n => n.isEdit = false)
        let note = notes.find(n => n.id === id)
        note.isEdit = true
        setEditedNote(note.value)
        setEditedMode(true)
    }

    function saveEditedNote(value) {
        let note = notes.find(n => n.isEdit)
        note.value = value
        note.isEdit = false
        setEditedMode(false)
        setNotes([...notes])
        setEditedNote('')
        setResultNotes(notes)
    }

    function saveNote(value) {
        !editedMode ? addNewNote(value) : saveEditedNote(value)
    }


    function getResultsNotes(value) {
        let result = notes.filter(n =>
            n.value.toLowerCase().includes(value.toLowerCase())
        )
        setResultNotes(result)
    }

    useEffect(() => {
        setResultNotes(notes)
    }, [notes]);

    return (<>
            <Header
                getResultsNotes={getResultsNotes}
            />
            <Container sx={{mt: 3}} maxWidth="md">
                <Grid container spacing={10}>
                    <Grid item xs={7}>
                        <NoteList
                            notes={resultNotes}
                            removeNote={removeNote}
                            selectEditedNote={selectEditedNote}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Note
                            editedNote={editedNote}
                            saveNote={saveNote}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default App;
