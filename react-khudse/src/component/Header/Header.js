import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MenuComponents } from '../Utils/Constants';
import useClickOutside from '../../hooks/useClickOutside';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    let navigate = useNavigate();
    const [nestedMenuOpen, setNestedMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleMoveForward = (ele) => {
        navigate(MenuComponents[ele].path);
        setMenuOpen(false);
    }
    useClickOutside(menuOpen, toggleMenu, { id: 'menu-transform' });

    const toggleNestedMenu = () => {
        setNestedMenuOpen(!nestedMenuOpen);
    };

    return (
        <header className=" text-white header-color shadow-lg">
            <nav className="flex items-center justify-between p-4">
                <Link to="/" className="text-lg font-bold cursor-pointer">
                    Mediocre Project
                </Link>
                <ul className="flex items-center space-x-4">
                    <li>
                        <button
                            onClick={toggleMenu}
                            className="flex flex-col justify-center items-center w-8 h-8  rounded-lg focus:outline-none"
                        >
                            <span className="block w-6 h-0.5 bg-white mb-1"></span>
                            <span className="block w-6 h-0.5 bg-white mb-1"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </button>
                    </li>
                </ul>
            </nav>

            {menuOpen && (
                <ul
                    id={'menu-transform'}
                    role="menu"
                    className="absolute menu-transform right-0 header-color z-10 min-w-[280px] overflow-auto rounded-b-sm  bg-gray-800 p-3 text-sm font-normal text-white shadow-lg focus:outline-none"
                >
                    {Object.keys(MenuComponents).map((ele, ixx) => (
                        <div
                            role="menuitem"
                            key={ixx}
                            className="block w-full cursor-pointer select-none rounded-md px-3 py-2 text-start leading-tight transition-all hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white active:bg-gray-700 active:text-white"
                            onClick={() => { handleMoveForward(ele) }}
                        >
                            {MenuComponents[ele].title}
                        </div>
                    ))}

                    {/* Nested Menu */}
                    {nestedMenuOpen && (
                        <ul
                            role="menu"
                            className="absolute left-full top-0 z-10 min-w-[180px] mt-2 ml-2 overflow-auto rounded-md border border-gray-700 bg-gray-800 p-3 font-sans text-sm font-normal text-white shadow-lg focus:outline-none"
                        >
                            <li
                                role="menuitem"
                                className="block w-full cursor-pointer select-none rounded-md px-3 py-2 text-start leading-tight transition-all hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white active:bg-gray-700 active:text-white"
                            >
                                Nested Menu Item 1
                            </li>
                        </ul>
                    )}
                </ul>
            )}
        </header>
    );
}

export default Header;
