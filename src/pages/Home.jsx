import React from 'react'
import { Link } from 'react-router-dom'
export default function App() {



    return (
      <>
          <div class="flex justify-center bg-sky-500 h-150 w-full p-6">
    <div class="bg-white h-100 w-2/5 p-8">
    <img class="h-20 w-20 object-cover rounded-full" src="/src/img/1.png" alt="" />
    <img class="h-30 w-30" src="/src/img/8071253-removebg-preview.png" alt="" />
      <p class="whitespace-pre-line w-1/1">Découvrez iBota : Facilitant le Dialogue Entre Maternités et Mairies  
      pour une Émission de Certificats de Naissance Emplie de Tendresse et Authentifié.</p>
    </div>
    <div class="bg-cyan-200 h-100 w-2/5 rounded-l-lg flex flex-col items-center p-8 ">
      <h1 class="font-Fira-sans text-2xl">Bienvenue sur Ibota</h1>
      <p class="whitespace-pre-line w-1/1">L’application de collaboration 
      harmonieuse entre les mairies et les hôpitaux
       qui assure une procédure fluide pour  des certificats de naissance.</p>
       <div class="flex flex-col  gap-4 ">
       <Link to="Connexion"><button class=" bg-sky-500/100 text-white w-36 h-14 rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" >Admin</button></Link> 
       <Link to="Agent"><button  class="  bg-sky-500/100 text-white w-36 h-14 rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" >Agent municipal</button></Link>
       <Link to="Sage"><button  class="  bg-sky-500/100 text-white w-36 h-14 rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" >Sage femme</button></Link>
       
       </div>
    </div>
  </div>
      </>
    )
  }