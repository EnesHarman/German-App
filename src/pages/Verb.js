import React, { useEffect, useState } from "react";
import "./Verb.css"
import { Link } from 'react-router-dom';
import VerbFile from '../data/Verbs.js'

const Verb = () => {
  const [verbs, setVerbs] = useState([...VerbFile]);
  const [currentVerb, setCurrentVerb] = useState({});
  
  const [descModeIch, setDescModeIch] = useState(false);
  const [descModeDu, setDescModeDu] = useState(false);
  const [descModeErSieEs, setDescModeErSieEs] = useState(false);
  const [descModeWir, setDescModeWir] = useState(false);
  const [descModeIhr, setDescModeIhr] = useState(false);
  const [descModesieSie, setDescModesieSie] = useState(false);

  useEffect(() => {
    getRandomVerb();
  }, [])

  const getRandomVerb = () => {
    if (verbs.length === 1) {
      setVerbs([...VerbFile])
    }

    const randomIndex = Math.floor(Math.random() * verbs.length);
    const selectedVerb = verbs.splice(randomIndex, 1)[0];
    setDescModesFalse();
    setCurrentVerb(selectedVerb);
  }

  const setDescModesFalse = () => {
    setDescModeIch(false);
    setDescModeDu(false);
    setDescModeErSieEs(false);
    setDescModeWir(false);
    setDescModeIhr(false);
    setDescModesieSie(false);
  }


  return (
    <div className='body'>
      <div className='content content_german' style={{ border: 'none' }}>
        {currentVerb.basic}
      </div>
      <div className='content content_translate' style={{ marginBottom: '10px', border: 'none' }}>
        {currentVerb.turkhish}
      </div>

      <div className='forms'>
        <div className='row'>
          <div className='form col-5' style={{ backgroundColor: '#101116', color: 'white' }} onClick={() => setDescModeIch(!descModeIch)}>
            {descModeIch == true ? currentVerb.ich : "ich"}
          </div>
          <div className='form col-5' style={{ backgroundColor: '#2F3148', color: 'white' }} onClick={() => setDescModeDu(!descModeDu)}>
            {descModeDu == true ? currentVerb.du : "du"}
          </div>
        </div>
        <div className='row'>
          <div className='form col-5' style={{ backgroundColor: '#3F5576', color: 'white' }} onClick={() => setDescModeErSieEs(!descModeErSieEs)}>
            {descModeErSieEs == true ? currentVerb.ersiees : "er/sie/es"}
          </div>
          <div className='form col-5' style={{ backgroundColor: '#587099', color: 'white' }} onClick={() => setDescModeWir(!descModeWir)}>
            {descModeWir == true ? currentVerb.wir : "wir"}
          </div>
        </div>
        <div className='row'>
          <div className='form col-5' style={{ backgroundColor: 'rgb(82 111 153)', color: 'white' }} onClick={() => setDescModeIhr(!descModeIhr)}>
            {descModeIhr == true ? currentVerb.ihr : "ihr"}
          </div>
          <div className='form col-5' style={{ backgroundColor: '#8689AC', color: 'white' }} onClick={() => setDescModesieSie(!descModesieSie)}>
            {descModesieSie == true ? currentVerb.sieSie : "sie/Sie"}
          </div>
        </div>
      </div>

      <div className='buttons row' style={{ margin: '30px 0px 15px 0' }}>
        <div className='next_button ' onClick={() => getRandomVerb()}>Sıradaki</div>
      </div>
      <div className='buttons row'>
        <div className='main-menu'>
          <Link className='link' to="/">Ana Menü</Link>
        </div>
      </div>
    </div>
  );
};

export default Verb;