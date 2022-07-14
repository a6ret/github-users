import React, { useState, useEffect } from 'react';
import {
    FaUserPlus,
    FaUserFriends,
    FaBox,
    FaTwitter,
    FaGithub,
    FaDoorOpen,
} from 'react-icons/fa';

const Users = (props) => {
    const [user, setUser] = useState([]);

    const reqUsers = async () => {
        const users = await fetch(`https://api.github.com/users/${props.user}`);
        const usersData = await users.json();

        setUser(usersData);
    };

    useEffect(() => {
        reqUsers();
    }, []);

    const handleClick = () => {
        window.location.reload();
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='bg-[#3A4750] flex border-r-5 md:w-1/2 max-w-sm h-auto m-auto my-20 justify-around py-3 shadow-md shadow-[#040c16] rounded-lg'>
                <div className='user-image'>
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        width='150px'
                        className='rounded-full my-5'
                    />
                </div>

                <div className='bg-[#3A4750] border-[#eeeeee] border-l-2 w-1/2 text-left px-4'>
                    <h3 className='text-4xl text-orange-500 '>
                        {user.login}{' '}
                        <span className='text-[#eeeeee] text-lg'>
                            [{user.name}]
                        </span>
                    </h3>
                    <div className='flex items-center'>
                        <FaUserPlus className='text-white mr-2' />
                        <span className='text-[#eeeeee]'>
                            Following: {user.following}
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <FaUserFriends className='text-white mr-2' />
                        <span className='text-[#eeeeee]'>
                            Followers: {user.followers}
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <FaBox className='text-white mr-2' />
                        <span className='text-[#eeeeee]'>
                            Public Repos: {user.public_repos}
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <FaTwitter className='text-white mr-2' />
                        <span className='text-[#eeeeee]'>
                            Twitter:{' '}
                            <a
                                href={
                                    'https://twitter.com/' +
                                    user.twitter_username
                                }
                                className={
                                    user.twitter_username
                                        ? 'visible text-blue-400 hover:underline'
                                        : 'hidden'
                                }
                                target='blank'>
                                @{user.twitter_username}
                            </a>
                            <span
                                className={
                                    user.twitter_username ? 'hidden' : 'visible'
                                }>
                                -
                            </span>
                        </span>
                    </div>
                    <a href={user.html_url} target='blank'>
                        <button className='group flex justify-center items-center p-1 mt-4 border-2 w-full text-[#eeeeee] border-[#fd7014] bg-[#fd7014] hover:bg-[#db6211] hover:border-[#db6211] duration-300'>
                            Go to Profile
                            <FaGithub className='ml-3 group-hover:scale-125 duration-300 mb-1' />
                        </button>
                    </a>
                </div>
            </div>

            <button
                onClick={handleClick}
                className='group flex justify-center items-center p-1 border-2 md:w-1/6 max-w-sm text-[#fd7014] border-[#eeeeee] bg-[#eeeeee] hover:bg-[#fd7014] hover:border-[#eeeeee] hover:text-[#eeeeee] duration-300'>
                Go Back
                <FaDoorOpen className='ml-3 group-hover:scale-125 duration-300 mb-1' />
            </button>
        </div>
    );
};

export default Users;
