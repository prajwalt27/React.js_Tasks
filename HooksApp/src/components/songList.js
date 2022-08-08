import React, {  useState , useEffect} from "react";
import {v1 as uuidv1} from 'uuid'
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "ohoho ", id: 1 },
    { title: "ohoho oj ", id: 2 },
    { title: "ohoho ojoj ", id: 3 },
  ]);

  const [age, setAge]= useState(20);

  const key1= uuidv1();
  const addSong=(title)=>{
      setSongs([...songs,{title, id:key1}]);
  }

  useEffect(()=>{
    console.log('useEffect hook ran',songs);
  }, [songs])
  useEffect(()=>{
    console.log('useEffect hook ran',age);
  }, [age])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song=>{
            return (<li key={song.id}>{song.title}</li>)
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
      <button onClick={()=>setAge(age+1)}>Add 1 to Age : {age}</button>
    </div>
  );
};

export default SongList;
