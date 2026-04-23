import axios from 'axios';
import React, {useEffect, useState} from 'react';

function AlbumList(props) {
    const [albums, setAlbums] = useState([]); // why not a component

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicod  e.com/albums')
            .then(res =>
                setAlbums(res.data))
    }, [])

    return (
        <>
            <ul>
                {albums.map(album => <li key={album.id}>{album.title}</li>)}
            </ul>
        </>
    );
}

export default AlbumList;