import React from "react";
import "./Cards.css";
import banana from "../assets/react.svg";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-top">
          <img src={card1} alt="" />
        </div>
        <div className="card-text">
          <h2>Hello</h2>
          <p className="card-text-scrollable">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque
            quos sunt, reiciendis cum sequi. Incidunt temporibus laborum fugiat
            deleniti ducimus quo aut nisi facilis enim. Hic quae ea consequuntur
            vel dolore veritatis temporibus at voluptatum alias odit, nulla,
            tempore saepe voluptatibus harum dolores asperiores provident esse
            mollitia dolorum accusamus quia laborum repellat facilis? Non minima
            temporibus repudiandae ullam commodi.
          </p>
        </div>
        <div className="card-bottom">
          <button>Hello</button>
        </div>
      </div>
      <div className="card">
        <div className="card-top">
          <img src={card2} alt="" />
        </div>
        <div className="card-text">
          <h2>Hello</h2>
          <p className="card-text-scrollable">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus laboriosam, iure tenetur eveniet aut voluptas labore
            expedita aspernatur explicabo corporis quia accusamus dolor aperiam
            repellat libero tempora eaque cumque rerum esse ipsam blanditiis
            sunt. Porro officia possimus, odio ipsam iste atque expedita in
            eligendi aliquam suscipit modi! Ab, praesentpora eaque cumque rerum
            nditiis sunt. Porro officia possimus, odio ipsam iste atque expedita
            in eligendi aliquam suscipit modi! Ab, praesentium culpa.
          </p>
        </div>
        <div className="card-bottom">
          <button>Hello</button>
        </div>
      </div>
      <div className="card">
        <div className="card-top">
          <img src={card3} alt="" />
        </div>
        <div className="card-text">
          <h2>Hello</h2>
          <p className="card-text-scrollable">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus laboriosam, iure tenetur eveniet aut voluptas labore
            expedita aspernatur explicabo corporis quia accusamus dolor aperiam
            repellat libero tempora eaque cumque rerum esse ipsam blanditiis
            sunt. Porro officia possimus, odio ipsam iste atque expedita in
            eligendi aliquam suscipit modi! Ab, praesentpora eaque cumque rerum
            nditiis sunt. Porro officia possimus, odio ipsam iste atque expedita
            in eligendi aliquam suscipit modi! Ab, praesentium culpa.
          </p>
        </div>
        <div className="card-bottom">
          <button id="work">Hello</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
