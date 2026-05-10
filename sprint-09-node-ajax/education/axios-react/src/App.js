import AlbumList from "./components/AlbumList";
import AlbumPost from "./components/AlbumPost";
import AlbumDelete from "./components/AlbumDelete";
import './App.css';

function App() {
  return <>
    <AlbumPost />
    <AlbumDelete />
    <AlbumList />
  </>
}

export default App;
