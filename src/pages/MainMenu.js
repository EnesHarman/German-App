import React from 'react'
import { Link } from 'react-router-dom';
import "./MainMenu.css"

const MainMenu = () => {
    return (
        <div className='body'>
            <div>
                <h1 className='title'>Goethe German</h1>
            </div>

            <div className='button-main' style={{backgroundColor:'#FFB84C'}}>
                <Link className='link-main' to="/nouns">İsimler</Link>
            </div>
            <div className='button-main' style={{backgroundColor:'#F266AB'}}>
                <Link className='link-main' to="/verbs">Fiiler</Link>
            </div>
            <div className='button-main' style={{backgroundColor:'#A459D1'}}>
                <Link className='link-main' to="/settings">Ayarlar</Link>
            </div>
            <div className='footer'>
                Enes Harman tarafından hazırlanmıştır. Hakları saklı değildir. Bir backend geliştiricisin ürünü olduğunu unutmayalım :)
            </div>
        </div>
    );
}

export default MainMenu