import React from 'react'
import { Link } from 'react-router-dom';
import "./MainMenu.css"

const MainMenu = () => {
    return (
        <div className='body'>
            <div>
                <h1 className='title'>Goethe German</h1>
            </div>

            <div className='button'>
                <Link className='link' to="/nouns">İsimler</Link>
            </div>
            <div className='button'>
                <Link className='link' to="/verbs">Fiiler</Link>
            </div>
            <div className='button'>
                <Link className='link' to="/settings">Ayarlar</Link>
            </div>
            <div className='footer'></div>
        </div>
    );
}

export default MainMenu