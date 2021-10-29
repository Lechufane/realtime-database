import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Alert from '@mui/material/Alert'

const socket = io.connect('http://localhost:5000');

function Notificaciones() {

    const [friends, setFriends] = useState([])

    socket.off('data').on('data', (data) => {
        setFriends([...friends, data])
    })

    useEffect(() => { console.log(friends) }, [friends])

    return (
        <>
            <div className="titu-box">
            <p className="titulo">Notificaciones</p>
            </div>
            {
                friends?.map((friend,key) =>
                <div className="notif-box">
                    <Alert key={key} severity="info">{friend.viejo_nombre} ahora es {friend.nuevo_nombre}</Alert>
                </div>
                   
                )
            }
        </>

    )


}

export default Notificaciones;
