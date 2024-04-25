/* eslint-disable no-unused-vars */
// import  { useState, useEffect } from "react";
// import React from "react";
// import NoteList from "./components/NoteList";
// import {nanoid} from 'nanoid';
// import Search from "./components/Search";
// import Header from "./components/Header";
// const App = () => {
//   const [notes, setNotes]=useState([{
//     id:nanoid(),
//     text:" ",
//     date:" "
//   },

// ]);
// const [searchText, setSearchText]=useState("");
// const [darkMode,setDarkMode]=useState(false);
// useEffect(()=>{
//   const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data')
//   );
//   if(savedNotes){
//     setNotes(savedNotes)
//   }
// },[]);
// useEffect(()=>{
//   localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
// },[notes]);
// const addNote=(text)=>{
//   const date=new Date();
//   const newNote={
//     id:nanoid(),
//     text:text,
//     date:date.toLocaleDateString()
//   }
//   const newNotes=[...notes, newNote];
//   setNotes(newNotes);
// };
// const deleteNote=(id)=>{
//  const newNotes=notes.filter((note)=>note.id!==id)
//  setNotes(newNotes)

// }
//   return(
//     <div className={`${darkMode && 'dark-mode'}`}>
//         <div className="container">
//     <Header handleToggleDarkMode={setDarkMode}/>
//     <Search handleSearchNote={setSearchText}/>
//     <NoteList 
//      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText)
//       )} 
//      handleAddNote={addNote}
//      handleDeleteNote={deleteNote} 
//     />
//     </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList';
import Search from './components/Search';
import Header from './components/Header';
import './App.css'

const App = () => {
	const [notes, setNotes] = useState([
		{id:nanoid(),
    text:" ",
    date:" "}
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(()=>{
  const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data')
  );
	console.log(savedNotes)
  if(savedNotes){
    setNotes(savedNotes)
  }
},[]);

	
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(newNotes)
		);
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(newNotes)
		);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header darkMode={darkMode} handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NoteList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;

