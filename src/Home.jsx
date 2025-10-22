import React from "react";
import "./Home.css"; // Import the CSS file for styling 
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="sidebar">
                <h1><Link to="/additem">Add Item</Link></h1>
                <h1><Link to="/list">Item List</Link></h1>
                <h1><Link to="/Orders">Orders</Link></h1>
            </div>
        </>
    )
}