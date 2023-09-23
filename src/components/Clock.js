import React, {useEffect, useState} from "react";
import {Typography} from "@mui/material";

export function Clock() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        setInterval(() =>
            setTime(new Date()), 30000)
    }, []);

    return <Typography variant='h5'>
        {time.toLocaleString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            hour24: true,
        })}
    </Typography>
}