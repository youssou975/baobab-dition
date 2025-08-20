import React from 'react';
import dakar from '../assets/case.gif';
//import ddl from '../assets/ddl.png';

import aes  from '../assets/aes.png';
import ase from '../assets/ase.png';
import apnet from '../assets/apnet.png';
import ipa from '../assets/ipa.png';
import ddl from '../assets/ddl.png';
import patrimoine from '../assets/patrimoine.png';

import aied from '../assets/aied.png';

const partenaires = [
 // ddl,
dakar,
ddl,
aes,
ase,
apnet,
patrimoine,
ipa,
aied
];

const Partenaire = () => {
  return (
    <div className="partenaire-container">
      <h2>Nos partenaires - Baobab Édition</h2>
      <div className="slider">
        <div className="slide-track">
          {partenaires.concat(partenaires).map((src, index) => (
           <div className="slide" key={index}>
              <img src={src} alt={`Partenaire ${index + 1}`} />
            

            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partenaire;
