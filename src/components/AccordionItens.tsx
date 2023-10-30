import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import styles from '../../styles/AccordionItens.module.css'

function AccordionItens() {
  const contentAjuda =
  <div>
  <div>
      <ul style={{ width: "75%" }}>
          <li>Telefone: <a href="tel:+055 21 1234-5678"><br /> <b>+055 21 1234-5678</b></a></li>
          <li>Email: <a href="mailto:info@example.com"><br /> <b>info@example.com</b></a></li>
          <li>Endereço: <br /> <b>Botafogo, 232 - Rio de Janeiro</b></li>
      </ul>
  </div>
  </div>;

  const contentEmpresa = 
  <div>
  <ul>
      <li><a href="#">Centro de Ajuda</a></li>
      <li><a href="#">Resgatar Vale</a></li>
      <li><a href="#">Contato</a></li>
      <li><a href="#">Denunciar Abuso</a></li>
      <li><a href="#">Sobre Nós</a></li>
  </ul>
</div>

const contentSuporte = 
<div>
<ul>
    <li><a href="#">Suporte 24h</a></li>
    <li><a href="#">Licença</a></li>
    <li><a href="#">Satisfação</a></li>
    <li><a href="#">Precisão</a></li>
    <li><a href="#">Pagamento</a></li>
</ul>
</div>

const contentTrabalho =
<div>
<ul>
    <li><a href="#">Portifólio</a></li>
    <li><a href="#">Informações da Conta</a></li>
    <li><a href="#">Trabalhe Conosco</a></li>
    <li><a href="#">Políticas e Regras</a></li>
    <li><a href="#">Encontre Nosso Time</a></li>
</ul>
</div>

  return (
    <Accordion variant="light" selectionMode="multiple" className={styles.Accordion}>
      <AccordionItem classNames={{
        title: styles.title,
        subtitle: styles.subtitle,
      }}  key="1" aria-label="Accordion 1" title="Precisa de Ajuda?">
        {contentAjuda}
      </AccordionItem>
      <AccordionItem classNames={{
        title: styles.title,
        subtitle: styles.subtitle,
      }} key="2" aria-label="Accordion 2" title="Empresa">
        {contentEmpresa}
      </AccordionItem>
      <AccordionItem classNames={{
        title: styles.title,
        subtitle: styles.subtitle,
      }} key="3" aria-label="Accordion 3" title="Suporte">
        {contentSuporte}
      </AccordionItem>
      <AccordionItem classNames={{
        title: styles.title,
        subtitle: styles.subtitle,
      }} key="4" aria-label="Accordion 3" title="Nosso trabalho">
        {contentTrabalho}
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionItens