
import React from 'react'
import "./Settings.css"
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className='body'>
            <h1>Hazırlanıyor...</h1>
            <div className='buttons row' style={{width:'72%', marginTop:'30px'}}>
                <div className='main-menu' >
                    <Link className='link' to="/">Ana Menü</Link>
                </div>
            </div>
        </div>
  )
}

export default Settings