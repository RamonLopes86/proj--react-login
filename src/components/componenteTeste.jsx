"use client"
import estiloComponenteTeste from './componenteTeste.module.css';
import Image from 'next/image';
import sair from '../app/public/login.png'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Teste(){

    // const [msg , setMsg] = useState('')

    const router = useRouter()


    function backHome(){

      

      setTimeout(()=>{

        router.push('/')

      }, 1000)

    }

    return(

        <>

          <header className={estiloComponenteTeste.boxPai}>

              <h1>pagina teste</h1>

              <div onClick={backHome} className={estiloComponenteTeste.boxBtn}>

                  <p>sair</p>

                  <div>
                      <Image className={estiloComponenteTeste.img} src={sair}/>
                  </div>
              </div>

          </header>
        
        </>
    )
}