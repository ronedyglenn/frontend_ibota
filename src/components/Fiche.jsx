import React from "react";


function Fiche() {

    return (
        <>
        
        <div className="w-96 h-96 bg-white border-2 border-black p-4">
      <div className="text-center font-bold text-lg mb-4">CERTIFICAT DE NAISSANCE</div>
      <div className="flex justify-between mb-4">
        <div className="w-1/2">
          <div className="text-sm mb-1">Commune de</div>
          <input type="text" className="border-b-2 border-black w-full" />
        </div>
        <div className="w-1/2">
          <div className="text-sm mb-1">Maternité de</div>
          <input type="text" className="border-b-2 border-black w-full" />
        </div>
      </div>
      <div className="mb-4">
        <div className="text-sm mb-1">N DU PRESENT REGISTRE</div>
        <input type="text" className="border-b-2 border-black w-full" />
      </div>
      <div className="mb-4">
        <div className="text-sm mb-1">Je soussigné(e)</div>
        <input type="text" className="border-b-2 border-black w-full" />
        <div className="text-sm mb-1">Docteur / Sage femme certifie que Mme</div>
        <input type="text" className="border-b-2 border-black w-full" />
        <div className="text-sm mb-1">A accouché à la maternité de</div>
        <input type="text" className="border-b-2 border-black w-full" />
        <div className="text-sm mb-1">un enfant de sexe</div>
        <input type="text" className="border-b-2 border-black w-full" />
        <div className="text-sm mb-1">Le</div>
        <input type="text" className="border-b-2 border-black w-full" />
        <div className="text-sm mb-1">à</div>
        <input type="text" className="border-b-2 border-black w-full" />
      </div>
      <div className="text-right">
        <div className="text-sm mb-1">Signature</div>
        <input type="text" className="border-b-2 border-black w-1/2" />
      </div>
    </div>
          
        
        </>
    )
    
}