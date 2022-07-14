import React, { useState } from 'react';
import Users from './Components/Users';
import { FaGithub } from 'react-icons/fa';
import './Styles/App.css';

const App = () => {
    const [username, setUsername] = useState('none');

    const getUser = (e) => {
        const user = document.getElementById('inputUser').value;
        e.preventDefault();
        setUsername(user);
    };

    if (username === 'none') {
        return (
            <div className='text-center'>
                <div className='title'>
                    <FaGithub className='githubIcon' />
                    <h3 className='text-7xl font-medium mt-5'><span className='userText'>Github</span> User</h3>
                </div>
                <hr />

                <form
                    className='chooseUser-area mt-4'
                    onSubmit={(e) => getUser(e)}>
                    <input
                        className='text-2xl'
                        type='text'
                        placeholder='input username'
                        id='inputUser'
                        required
                    />
                    <input
                        type='submit'
                        className='text-2xl'
                        id='btnSearch'
                        value='Search'
                    />
                </form>
            </div>
        );
    }

    return (
        <div className='text-center'>
            <Users user={username} />
        </div>
    );
};

export default App;
