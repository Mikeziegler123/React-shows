import React from "react";
import { Link } from 'react-router-dom';
import homeComponent from "./Home";
import './../node_modules/bootstrap/dist/css/bootstrap.css';


function WelcomeComponent() {
    return (
        <div className="row mx-auto">
            <div className="content offset-sm-2 col-sm-8">
                <div className="card welcome">
                    <h3 className="text-center">Welcome to iTv</h3>
                        <span style={{marginLeft: '20px', marginRight: '20px'}}>
                            Watch your favorite show everywhere and anywhere. This application breaks the gap between you and your favorite shows, movies, news, and sports by making it available to all.&nbsp;
                           {/*  Anchor Tag Here   */}
                            <a href="/home" Component="HomeComponent">Click Here&nbsp;</a>
                            
                            to view the different categories provided by the application.
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default WelcomeComponent;