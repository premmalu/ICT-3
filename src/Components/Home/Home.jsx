import React, { useState, useEffect } from "react";
import Axios from "axios";
import openview from "../viewmore/opernview";

function Home() {
  const [data, setData] = useState([]);
  const loadData = () => {
    Axios.get("https://jsonblob.com/api/976791543507861504")
      .then((response) => setData(response.data.books))
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(loadData, []);
  console.log(data);

  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let booksData = data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  const openview = (book) => {
    alert(book.title);
  };
  return (
    <div className="container my-5">
      <section className="text-center">
        <div className="container pd-5">
          <input
            className="search-bar my-5"
            type="text"
            onChange={searchText.bind(this)}
            value={filter}
            placeholder="Search Here"
          />
        </div>
      </section>
      <div className="row">
        {booksData.map((book) => (
          <div className="text-center d-flex m-3">
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={book.cover}
                style={{ height: "300px" }}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{book.title}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Author : {book.author}</li>
                <li class="list-group-item">Genere : {book.genre}</li>
                <li class="list-group-item">Year :{book.year}</li>
              </ul>
              <div class="card-body">
                <button
                  onClick={() => openview(book)}
                  className="btn btn-warning"
                  style={{ marginRight: "3px" }}
                >
                  Read More
                </button>
                <button className="btn btn-success">Add to Favourite</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
