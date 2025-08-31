import React from "react";
import autre from '../assets/autre.jpg';
import soldat from '../assets/soldat.jpg';
import noeud from '../assets/noeud.jpg';
import gourou from '../assets/gourou.jpg';
import camp from '../assets/camp.jpg'
import souffle from '../assets/souffle.jpg'
import cherif from '../assets/cherif.jpg'
import coeur from '../assets/coeur.jpg'



const Bookshelf = () => {
  const books = [
    { id: 1, title: "L'Autre Raison", img: autre },
    { id: 2, title: "Le soldat inconnu mon héros", img: soldat },
    { id: 3, title: "Les noeuds du destin", img: noeud },
    { id: 4, title: "La république des GOUROUS", img: gourou },
    { id: 5, title: "CAMP BOIRO", img: camp },
    { id: 6, title: "Le souffle de Mame Mindiss ", img: souffle },
    { id: 7, title: "Mon coeur déclame", img: coeur },
    { id: 8, title: "Le pélerin du savoir", img: cherif },
  ];

  // Découper les livres en groupes de 4
  const chunkedBooks = [];
  for (let i = 0; i < books.length; i += 4) {
    chunkedBooks.push(books.slice(i, i + 4));
  }

  return (
    <div className="bookshelf-container">
      <h2 className="bookshelf-title">Livres édités</h2>
      {chunkedBooks.map((group, index) => (
        <div key={index}>
          <div className="shelf">
            {group.map((book) => (
              <div className="book" key={book.id}>
                <img src={book.img} alt={book.title} />
                <p>{book.title}</p>
              </div>
              
            ))}
          </div>
          <div className="shelf-base"></div>
        </div>
      ))}
  <button className="voir-plus">VOIR PLUS</button>
    </div>
  );
};

export default Bookshelf;
