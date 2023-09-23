import React, {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";


export function Note(props) {
    const [note, setNote] = useState('')
    const [error, setError] = useState('')
    const handleChange = (e) => {
        setNote(e.currentTarget.value)
        setError('')
    }
    const handleClick = () => {
        saveNote(note.trim())
        setNote('')
    }

    useEffect(() => {
        setNote(props.editedNote)
        setError('')
    }, [props.editedNote]);

    function saveNote(value) {
        if (!note.trim()) {
            setError('note required')
        } else {
            props.saveNote(value)
        }
    }

    return <>
        <TextField fullWidth value={note}
                   onChange={handleChange}
                   id="outlined-multiline-static"
                   label="Note"
                   multiline
                   rows={20}
                   placeholder="Enter text"
                   error={!!error}
                   helperText={error}
        />

        <Button variant={"outlined"} sx={{mt: 1}} fullWidth
                onClick={handleClick}>save and clear</Button>
    </>
}
