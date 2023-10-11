import React from 'react'
import { Link } from 'react-router-dom'
import '../Projects/projects.css'

const portifolio = () => {
  return (
    <div>
            <header className='header'>
                <div className='logo'>
                    <Link to="/" className="logo" >DDN.</Link>
                </div>
                <div className='navbar'>
                <Link  to="/">
                        Início
                    </Link>
                    <Link to="/about">
                        Sobre
                    </Link>
                    <Link className="active" to="/projects">
                        Projetos
                    </Link>
                    <Link to="/skills">
                        Habilidades
                    </Link>
                </div>

            </header>

            <section className="about">
                <div className="about-content">
                    <p>Me chamo Danillo Dias Nascimento, tenho formação em Ciência da Computação pela Universidade Estadual de Maringá.</p>
                    
                    <p>Como meu primeiro contato profissional na área, atuei como estagiário na criação e desenvolvimento de um projeto web na 
                    Universidade Estadual de Maringá, onde encontrei minha vocação para atuar nesse segmento. A partir dessa experiência, venho 
                    me especializando em cursos de desenvolvimento web, com foco na tecnologia React. </p>
                    
                   <p> Atualmente, estou em busca de 
                    oportunidades de emprego como desenvolvedor web full stack, com o objetivo de agregar valor e evoluir junto com a empresa.</p>
                </div>
            </section>


        </div>
  )
}

export default portifolio