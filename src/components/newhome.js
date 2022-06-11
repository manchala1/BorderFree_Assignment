import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/newhome.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../components/assets/1.jpg";
import image2 from "../components/assets/2.jpg";
import image3 from "../components/assets/3.jpg";

function Newhome() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <Carousel>
        <div>
          <img src={image1} alt="" className="image" />
        </div>
        <div>
          <img src={image2} alt="" className="image" />
        </div>
        <div>
          <img src={image3} alt="" className="image" />
        </div>
      </Carousel>
      <div class="row">
        {users.map((users) => (
          <div className="card col-md-4 mt-3">
            <a href="/subhome">
              <img
                className="card-img-top image-main"
                src={users.image}
                alt="Card cap"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">{users.title}</h5>
              <p className="card-text">{users.price}</p>
              <p className="card-text">{users.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newhome;
