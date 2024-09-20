'use client';

import estiloLogin from './pglogin.module.css';
import Image from 'next/image';
import login from '../app/public/login.png'
import loginPerfil from '../app/public/loginperfil.png'
import loginNuvem from '../app/public/loginnuvem.png'
import axios from 'axios';




import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation'; /*para importar o useRouter no React e navegar nas rotas*/ 


const urlCadastro = 'http://localhost:8000/cadastrar'

const urlLogar = 'http://localhost:8000/logar'

export default function Login() {

    const router = useRouter()  /* para utilzar o router */


    const [hello, sethello] = useState(estiloLogin.helloDireita)

    const [txHello, setTxHello] = useState(estiloLogin.txOn)

    const [txHello2, setTxHello2] = useState(estiloLogin.tx2Off)

    const [txEscondido, setTxEscondido] = useState(estiloLogin.txEscondidoOff)

    const [txFormulario, setTxFormulario] = useState(estiloLogin.txEscondidoOn)

    const [resposta, setResposta] = useState('')
    const [respostaLogar, setRespostaLogar] = useState('')


    const [txMailLogar, setTxMailLogar] = useState('')
    const [txSenhaLogar, setTxSenhaLogar] = useState('')

    const [txNomeCriar, setTxNomeCriar] = useState('')
    const [txMailCriar, setTxMailCriar] = useState('')
    const [txSenhaCriar, setTxSenhaCriar] = useState('')


    const [labelMailLogar, setLabelMailLogar] = useState('')
    const [labelSenhaLogar, setLabelSenhaLogar] = useState('')

    const [labelNomeCriar, setLabelNomeCriar] = useState('')
    const [labelMailCriar, setLabelMailCriar] = useState('')
    const [labelSenhaCriar, setLabelSenhaCriar] = useState('')

    const [nomeInput, setNomeInput] = useState('')
    const [mailInput, setMailInput] = useState('')
    const [senhaInput, setSenhaInput] = useState('')


    function teste(ev) {

        ev.preventDefault()
        sethello(hello => hello == estiloLogin.helloDireita ? estiloLogin.helloEsquerda : estiloLogin.helloDireita)

        setTxHello(txHello => txHello === estiloLogin.txOn ? estiloLogin.txOff : estiloLogin.txOn)
        setTxHello2(txHello2 => txHello2 === estiloLogin.tx2Off ? estiloLogin.txOn : estiloLogin.tx2Off)

        setTxEscondido(txEscondido === estiloLogin.txEscondidoOff ? estiloLogin.txEscondidoOn : estiloLogin.txEscondidoOff)

        setTxFormulario(txFormulario === estiloLogin.txEscondidoOn ? estiloLogin.txFormularioOff : estiloLogin.txEscondidoOn)

        setTxNomeCriar('')
        setTxMailCriar('')
        setTxSenhaCriar('')
        setTxMailLogar('')
        setTxSenhaLogar('')
        setRespostaLogar('')
        setNomeInput(estiloLogin.corAcerto)
        setSenhaInput(estiloLogin.corAcerto)
        setMailInput(estiloLogin.corAcerto)
        setResposta('')
    }



    function Focar(nome) {


        if (nome === 'mail') {



            if (txMailLogar.length >= 0) {

                setLabelMailLogar(estiloLogin.mailFocar)

            }
        }

        if (nome === 'senha') {



            if (txSenhaLogar.length >= 0) {

                setLabelSenhaLogar(estiloLogin.mailFocar)
            }
        }


        if (nome === 'nomeCriar') {

            setNomeInput(nome === 'nomeCriar' ? estiloLogin.corAcerto : null)

            if (txNomeCriar.length >= 0) {


                setLabelNomeCriar(estiloLogin.mailFocar)
            }

        }

        if (nome === 'mailCriar') {

            setMailInput(nome === 'mailCriar' ? estiloLogin.corAcerto : null)

            if (txMailCriar.length >= 0) {

                setLabelMailCriar(estiloLogin.mailFocar)
            }

        }

        if (nome === 'senhaCriar') {

            setSenhaInput(nome === 'senhaCriar' ? estiloLogin.corAcerto : null)

            if (txSenhaCriar.length >= 0) {

                setLabelSenhaCriar(estiloLogin.mailFocar)
            }
        }


    }



    function Desfocar(nome) {


        if (nome === 'mail') {


            if (txMailLogar.length === 0) {

                setLabelMailLogar(estiloLogin.mailDesfocar)
            }

        }

        if (nome === 'senha') {

            if (txSenhaLogar.length === 0) {

                setLabelSenhaLogar(estiloLogin.mailDesfocar)
            }
        }


        if (nome === 'nomeCriar') {

            if (txNomeCriar.length === 0) {

                setLabelNomeCriar(estiloLogin.mailDesfocar)
            }

        }

        if (nome === 'mailCriar') {

            if (txMailCriar.length === 0) {

                setLabelMailCriar(estiloLogin.mailDesfocar)
            }
        }

        if (nome === 'senhaCriar') {

            if (txSenhaCriar.length == 0) {

                setLabelSenhaCriar(estiloLogin.mailDesfocar)
            }
        }

    }


    useEffect(() => {

        Focar()

        return () => {

            Desfocar()
        }

    }, [])





    async function CadastrarUsuario(ev) {

        function validacao() {

            if (!txNomeCriar) {

                setNomeInput(estiloLogin.corErro)
                setResposta('preencha corretamente os campos')
                return false
            }

            if (!txMailCriar) {
                setMailInput(estiloLogin.corErro)
                setResposta('preencha corretamente os campos')
                return false
            }

            if (!txSenhaCriar) {

                setSenhaInput(estiloLogin.corErro)
                setResposta('preencha corretamente os campos')
                return false
            }

            // if(!txNomeCriar || !txMailCriar || !txSenhaCriar){

            //     setNomeInput(estiloLogin.corErro)
            //     setMailInput(estiloLogin.corErro)
            //     setSenhaInput(estiloLogin.corErro)

            //     if(txNomeCriar){

            //         setNomeInput(estiloLogin.corAcerto)


            //     }else if(txMailCriar){

            //         setMailInput(estiloLogin.corAcerto)

            //     }else if(txSenhaCriar){

            //         setSenhaInput(estiloLogin.corAcerto)
            //     }

            //     setResposta('Preencha todos os campos corretamente')

            //  return false

            // }


            if (!/^(?=.{4,})([a-zA-Zà-üÀ-Ü' -]+(?:\s[a-zA-Zà-üÀ-Ü' -]+)*)$/.test(txNomeCriar)) {
                setResposta('Nome Inválido')
                setNomeInput(estiloLogin.corErro)

                if (txNomeCriar.length > 0 && /^(?=.{4,})([a-zA-Zà-üÀ-Ü' -]+(?:\s[a-zA-Zà-üÀ-Ü' -]+)*)$/.test(txNomeCriar)) {

                    setNomeInput(estiloLogin.corAcerto)
                }

                return false


            }


            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(txMailCriar)) {

                setMailInput(estiloLogin.corErro)
                setResposta('Email Inválido')

                if (txMailCriar.length > 0 && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(txMailCriar)) {

                    setMailInput(estiloLogin.corAcerto)
                }

                return false
            }

            if (!/^(?=.*[\W_])[a-zA-Z0-9à-üÀ-Ü\W_]{6,}$/.test(txSenhaCriar)) {
                setSenhaInput(estiloLogin.corErro)
                setResposta('A senha deve ter mais de 5 caracteres e caractere especial "@","_", etc...')

                if (txSenhaCriar.length > 0 && /^(?=.*[\W_])[a-zA-Z0-9à-üÀ-Ü\W_]{6,}$/.test(txSenhaCriar)) {

                    setSenhaInput(estiloLogin.corAcerto)
                }

                return false
            }

        }




        ev.preventDefault()

        const vl = {

            nome: txNomeCriar,
            email: txMailCriar,
            senha: txSenhaCriar
        }






        if (validacao() !== false) {


            setResposta('cadastro realizado com sucesso')

            setTimeout(() => {

                setResposta('')
            }, 2000)


            setTxNomeCriar('')
            setTxMailCriar('')
            setTxSenhaCriar('')
            setLabelNomeCriar(estiloLogin.mailDesfocar)
            setLabelMailCriar(estiloLogin.mailDesfocar)
            setLabelSenhaCriar(estiloLogin.mailDesfocar)
            setNomeInput(estiloLogin.corAcerto)
            setMailInput(estiloLogin.corAcerto)
            setSenhaInput(estiloLogin.corAcerto)

        }






        try {

            await axios.post(urlCadastro, vl)


        } catch (error) {

            console.log(error.status)

        }


    }


    async function LogarUser(ev) {

        

        ev.preventDefault(ev)

        const vl2 = {

            mailLogar: txMailLogar,
            senhaLogar: txSenhaLogar


        }


        if (!txMailLogar || !txSenhaLogar) {

            setRespostaLogar('preencha todos os campos')

        } else {

            setRespostaLogar('')
        }


        try {

            const response = await axios.post(urlLogar, vl2)

            if (response.data === 'usuario nao encontrado' || response.data === '') {

                setRespostaLogar('usuario nao encontrado')

                

                setTimeout(()=>{

                    setRespostaLogar('')
                },1000)

            } else {

                setRespostaLogar('ola , seja bem vindo')
                setTimeout(()=>{

                    router.push("./router/pgTeste")
    
                    },1500)
                
            }


        } catch (error) {

            console.log(`erro ${error.status}`)
        }



    }



    return (


        <section className={estiloLogin.boxPai}>


            <div className={estiloLogin.boxFilho}>


                <div className={estiloLogin.boxMoldura}>

                    <section className={estiloLogin.boxFormulario}>

                        <section className={`${estiloLogin.boxOverflow} ${txFormulario}`}>

                            <h1>Entrar</h1>

                            <div className={estiloLogin.bxImg}>

                                <Image alt='imagem' className={estiloLogin.icon} src={login} />
                                <Image alt='imagem' className={estiloLogin.icon} src={loginNuvem} />
                                <Image alt='imagem' className={estiloLogin.icon} src={loginPerfil} />
                            </div>

                            <p className={estiloLogin.p1}>use sua conta</p>

                            <form action="">

                                <div className={estiloLogin.bxMail}>
                                    <input onFocus={() => Focar('mail')} onBlur={() => Desfocar('mail')} onChange={(ev) => setTxMailLogar(ev.target.value)} value={txMailLogar} type="text" name="mail" id="idmail" autoComplete='off' />
                                    <label className={labelMailLogar} htmlFor="idmail">Email</label>
                                </div>

                                <div className={estiloLogin.bxSenha}>

                                    <input onFocus={() => Focar('senha')} onBlur={() => Desfocar('senha')} onChange={(ev) => setTxSenhaLogar(ev.target.value)} value={txSenhaLogar} type="password" name="senha" id="idsenha" autoComplete='off' />
                                    <label className={labelSenhaLogar} htmlFor="idsenha">Senha</label>
                                </div>


                            </form>

                            <p className={estiloLogin.respostaLogar}>{respostaLogar}</p>

                            <button onClick={LogarUser}>ENTRAR</button>

                        </section>


                    </section>


                    <section className={estiloLogin.boxFormEscondido}>

                        <section className={`${estiloLogin.boxOverflow2} ${txEscondido}`}>

                            <h1>Criar Conta</h1>
                            <div className={estiloLogin.bxImgEscondido}>
                                <Image alt='imagem1' className={estiloLogin.icon} src={login} />
                                <Image alt='imagem2' className={estiloLogin.icon} src={loginNuvem} />
                                <Image alt='imagem3' className={estiloLogin.icon} src={loginPerfil} />
                            </div>
                            <p>ou use seu email para cadastro</p>
                            <form action="">
                                <div className={estiloLogin.bxInputEscondido}>
                                    <input className={nomeInput} onFocus={() => Focar('nomeCriar')} onBlur={() => Desfocar('nomeCriar')} onChange={(ev) => setTxNomeCriar(ev.target.value)} type="text" name="nome2" id="idnome2" value={txNomeCriar} autoComplete='off' />
                                    <label className={labelNomeCriar} htmlFor="idnome2">Nome</label>
                                </div>
                                <div className={estiloLogin.bxInputEscondido}>
                                    <input className={mailInput} onFocus={() => Focar('mailCriar')} onBlur={() => Desfocar('mailCriar')} onChange={(ev) => setTxMailCriar(ev.target.value)} type="email" name="mail2" id="idmail2" value={txMailCriar} autoComplete='off' />
                                    <label className={labelMailCriar} htmlFor="idmail2">Email</label>
                                </div>
                                <div className={estiloLogin.bxInputEscondido}>
                                    <input className={senhaInput} onFocus={() => Focar('senhaCriar')} onBlur={() => Desfocar('senhaCriar')} onChange={(ev) => setTxSenhaCriar(ev.target.value)} type="password" name="senha2" id="idsenha2" value={txSenhaCriar} autoComplete='off' />
                                    <label className={labelSenhaCriar} htmlFor="idsenha2">Senha</label>
                                </div>
                            </form>

                            <p className={estiloLogin.resposta}>{resposta}</p>

                            <button onClick={CadastrarUsuario}>INSCREVER</button>

                        </section>

                    </section>


                    <section className={`${estiloLogin.boxHello} ${hello}`}>

                        <div className={`${estiloLogin.boxTx} ${txHello}`}>

                            <h1>Ola  Amigos!!</h1>
                            <p>Digite seus dados pessoais e começe  <br /> sua jornada conosco</p>

                            <button onClick={teste}>INSCREVA-SE</button>

                        </div>

                        <div className={`${estiloLogin.bxTxEscondido} ${txHello2}`}>

                            <h1>Bem vindo de volta</h1>

                            <p>para continuar conectado conosco  <br /> faça login com suas informações pessoais</p>

                            <button onClick={teste}>ENTRAR</button>

                        </div>


                    </section>


                </div>



            </div>



        </section>
    )


}