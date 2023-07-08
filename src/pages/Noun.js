import React from "react";
import "./Noun.css"
import { AiOutlineEyeInvisible, AiOutlineEye, AiTwotoneEye } from 'react-icons/ai';
const Noun = () => {
    return (
        <div className='body'>
            <div className='content content_german'>
                der Bruder
            </div>

            <div className='content content_translate content_plural' style={{ marginBottom: '50px'}}>
                Erkek Kardeş
            </div>

            <div className='buttons row'>
                <div className='next_button col-7'>Sıradaki</div>
                <div className='info_button col-3'>
                    <AiOutlineEye></AiOutlineEye>
                </div>
            </div>
        </div>
    );
};


export default Noun;