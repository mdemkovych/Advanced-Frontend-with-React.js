import axios from 'axios';
import {useState} from 'react';


function AlbumPost(props) {
    const [albumName, setAlbumName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const album = {
            title: albumName
        }

        axios.post('https://jsonplaceholder.typicode.com/albums', album)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title"> Album Title: </label>
            <input id="title" type="text" onChange={(e) => setAlbumName(e.target.value)}/>
            <button type='submit'> Add Album </button>
        </form>
    );
}

export default AlbumPost;