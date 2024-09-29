import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="navbar">

            <div className="title">polina</div>

            <button>
                <a href="https://www.linkedin.com/in/polinakrasn" target="_blank" rel="noopener noreferrer">
                    linkedin
                </a>
            </button>

            <button>
                <a href="mailto:p.a.krasnoyartseva@gmail.com" target="_blank" rel="noopener noreferrer">
                    mail
                </a>
            </button>

            <button>
                <a href="https://github.com/souvlakiGirl013" target="_blank" rel="noopener noreferrer">
                    git
                </a>
            </button>

            <button>
                <a href="https://www.instagram.com/polinakrasn/" target="_blank" rel="noopener noreferrer">
                    insta
                </a>
            </button>

            <button>
                <a href="https://x.com/polinakrasn" target="_blank" rel="noopener noreferrer">
                    x
                </a>
            </button>

        </div>
    )
}

export default Header;