import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [value, setValue] = useState([]);

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    //const ongName = localStorage.getItem('ongName');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        } catch (err) {
            alert('Error New Case');
        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src= {logoImg} alt="Be The Hero" />
                    <h1>New Case</h1>
                    <p>Register the cases of your ONG.</p>
                    <Link className="back-link"  to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Title Case"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="US$"
                        valeu={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Enter</button>

                </form>
            </div>
        </div>
    );
}