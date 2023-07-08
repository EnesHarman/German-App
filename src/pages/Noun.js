import React, { useEffect, useState } from "react";
import "./Noun.css"
import { AiOutlineEyeInvisible, AiOutlineEye, AiTwotoneEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NounsFile from '../data/Nouns.js';
const Noun = () => {
    const [nouns, setNouns] = useState([...NounsFile]);
    const [currentNoun, setCurrentNoun] = useState({});
    const [descMode, setDescMode] = useState("plural");
    useEffect(() => {
        getRandomName();
    }, [])

    const getRandomName = () => {
        if (nouns.length === 1) {
            setNouns([...NounsFile])
        }

        const randomIndex = Math.floor(Math.random() * nouns.length);
        const selectedName = nouns.splice(randomIndex, 1)[0];
        selectedName.artikel = checkNameArtikel(selectedName.german);
        setCurrentNoun(selectedName);
    }

    const checkNameArtikel = (name) => {
        return name.slice(0, 3);
    }
    
    const changeDescMode = () => {
        let mode = descMode === "translate" ? "plural" : "translate";
        setDescMode(mode);
    }


    return (
        <div className='body'>
            <div className={'content-noun content_german ' + currentNoun.artikel}>
                {currentNoun.german}
            </div>


            {descMode === "translate" &&
                <div className='content-noun content_translate' style={{ marginBottom: '50px' }}>
                    {currentNoun.turkish}
                </div>
            }

            {descMode === "plural" &&
                <div className='content-noun content_plural' style={{ marginBottom: '50px' }}>
                    {currentNoun.plural}
                </div>
            }

            <div className='buttons row'>
                <div className='next_button col-7' onClick={() => getRandomName()}>Sıradaki</div>
                <div className='info_button col-3' onClick={() => changeDescMode()}>
                    {descMode == "translate" && <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}
                    {descMode == "plural" && <AiOutlineEye></AiOutlineEye>}
                </div>
            </div>
            <div className='buttons row' style={{ width: '72%', marginTop: '30px' }}>
                <div className='main-menu' >
                    <Link className='link' to="/">Ana Menü</Link>
                </div>
            </div>
        </div>
    );
};


export default Noun;