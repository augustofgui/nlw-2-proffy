import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

interface TeacherItemProps {

}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMNUOxhaF3oC5jzOxLCn0AwNcw1rlBNeJbLQ&usqp=CAU"
          alt="Professor Mlalucao"
        />
        <div>
          <strong>Programador maluco</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        pariatur vitae ratione recusandae repudiandae? Expedita sunt velit,
        omnis debitis quos voluptatum vel eligendi quis non quam facilis vitae
        sint eum!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, fugiat.
        Optio, fuga ipsam ducimus eveniet eaque fugiat praesentium doloremque
        aut eos doloribus, quae, et hic nam pariatur possimus accusantium rerum!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
