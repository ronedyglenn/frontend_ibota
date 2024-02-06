import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Connexion from './pages/Login/Connexion'
import Sage from './pages/Login/Sage'
import Agent from './pages/Login/agent'
import Tableau from './pages/Dashboard/Tableau'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ < Home/> } />
        <Route path="Connexion" element={ <Connexion/> } />
       <Route path="Sage" element={ <Sage/> }  /> 
       <Route path="Agent" element={<Agent/>} />
       <Route path="Agent/Tableau" element={<Tableau/>} />
       <Route path='Agent/Tableau/Fiche' element={<File/>}/>
      </Routes>    
    </BrowserRouter>
  );
  
}
export default App;



