import React from "react";
import {IconButton, Stack} from "@mui/material";
import {Delete} from "@mui/icons-material";
import Box from "@mui/material/Box";


export function NoteList(props) {
    return <Box sx={{
        height: 500,
        overflowY: 'auto'
    }}>
        <ul>
            {props.notes.map(n => {
                const handleClick = () => {
                    props.selectEditedNote(n.id)
                }
                const handleRemoveClick = () => {
                    props.removeNote(n.id)
                }
                return <li key={n.id}>
                    <Stack direction="row" spacing={2}
                           sx={{
                               display: 'inline-block',
                               width: '70%',
                               whiteSpace: 'nowrap',
                               overflow: 'hidden',
                               textOverflow: 'ellipsis',
                           }}
                           onClick={handleClick}>{n.value}</Stack>
                    <IconButton aria-label="delete"
                                onClick={handleRemoveClick}>
                        <Delete/>
                    </IconButton>
                </li>
            })}
        </ul>
    </Box>
}