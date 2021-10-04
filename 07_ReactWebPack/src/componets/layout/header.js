import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component{
    render() {
        return (
            <header>
                <h1>Welcome to Site!</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/np">Новая почта</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}