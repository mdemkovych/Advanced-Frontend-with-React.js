import axios from 'axios';
import {useState} from 'react';


function AlbumDelete(props) {
    const [albumId, setAlbumId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title"> Album Id: </label>
            <input id="title" type="text" onChange={(e) => setAlbumId(e.target.value)}/>
            <button type='submit'> Delete Album </button>
        </form>
    );
}

export default AlbumDelete;