import React from "react";

function  FormAdmin() {
  return ( 
    <div class="flex justify-center bg-sky-500 h-150 w-full p-6">
    <div class="bg-cyan-200 h-100 w-2/5 rounded-l-lg flex flex-col items-center p-8 ">
    <form className=" flex-col justify-center items-center max-h-full">
                          <p className="mb-4">Veuillez vous connecter à votre compte</p>
                          {/* Username input */}
                          Id
                          <div className="relative mb-4 border border-slate-300 hover:border-indigo-300 " data-te-input-wrapper-init>
                            <input
                              type="password"
                              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                              id="exampleFormControlInput11"
                              placeholder="Password"
                            />
                            <label
                              htmlFor="exampleFormControlInput11"
                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >
                              Id
                            </label>
                          </div>
    
                          {/* Password input */}
                          Mot de passe
                          <div className="relative mb-4 border border-slate-300 hover:border-indigo-300 " data-te-input-wrapper-init>
                            <input
                              type="password"
                              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                              id="exampleFormControlInput11"
                              placeholder="Password"
                            />
                            <label
                              htmlFor="exampleFormControlInput11"
                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >
                              Mot de passe
                            </label>
                          </div>
    
                          {/* Submit button */}
                          <div className="mb-12 pb-1 pt-1 text-center">
                            <button
                              className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-cyan-500 shadow-lg shadow-cyan-500/50"
                              type="button"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                            >
                              Se Connecter
                            </button>
    
                            {/* Forgot password link */}
                            <a href="#!"> Mot de passe oublier?</a>
                          </div>
                        </form>
       </div>
       <div class="bg-white h-100 w-2/5 p-8 rounded-r-lg">
    <img class="h-20 w-20 object-cover rounded-full" src="/src/img/1.png" alt="" />
      <p class="whitespace-pre-line w-1/1">"Modernisez votre processus d'enregistrement des naissances avec iBota : Simplifiez les démarches administratives, renforcez l'efficacité, et contribuez à des débuts de vie en toute authenticité. Inscrivez-vous dès aujourd'hui pour une collaboration fluide entre maternités et mairies."</p>
      <img class="h-30 w-30" src="src/img/775883-removebg-preview.png" alt="" />

    </div>
    </div>
      );
    };

export default FormAdmin ;