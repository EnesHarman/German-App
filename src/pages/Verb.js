import React from 'react';
import "./Verb.css"
import { Link } from 'react-router-dom';

const Verb = () => {
  return (
    <div className='body'>
      <div className='content content_german' style={{ border: 'none' }}>
        sein
      </div>
      <div className='content content_translate' style={{ marginBottom: '10px', border: 'none' }}>
        olmak
      </div>

      <div className='forms'>
        <div className='row'>
          <div className='form col-5' style={{ backgroundColor: '#101116', color: 'white' }}>
            ich
          </div>
          <div className='form col-5' style={{ backgroundColor: '#2F3148', color: 'white' }}>
            du
          </div>
        </div>
        <div className='row'>
          <div className='form col-5' style={{ backgroundColor: '#3F5576', color: 'white' }}>
            er/sie/es
          </div>
          <div className='form col-5' style={{ backgroundColor: '#587099', color: 'white' }}>
            wir
          </div>
        </div>
        <div className='row'>
          <div className='form col-5' style={{ backgroundColor: 'rgb(82 111 153)', color: 'white' }}>
            ihr
          </div>
          <div className='form col-5' style={{ backgroundColor: '#8689AC', color: 'white' }}>
            sie/Sie
          </div>
        </div>
      </div>

      <div className='buttons row' style={{ margin: '30px 0px 15px 0' }}>
        <div className='next_button '>Sıradaki</div>
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