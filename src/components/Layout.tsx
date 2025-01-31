import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div className="App">
          <header>
        <ul>
            <li>
              <a href="/home" >Inicio</a>
              
            </li>
            <li>
              <a href="/about " >Acerca de mi</a>
              
              </li>
            <li>
              <a href="/exitCases" >Casos de exito</a>
              
              </li>
            <li>
              <a href="/contact" >Contacto</a>
              
              </li>
        </ul>
          </header>
    
          <section className="hero">
            <Container>
              <Row>
                  <Outlet/> 
              </Row>
            </Container>
          </section>
    
          <footer>
            {/* Información de contacto y enlaces */}
          </footer>
        </div>
      );
};
