import React from "react";

export default class Dock extends React.Component {
    render() {
        return (
            <footer className="dock transparent-card">
                <button className="dock-icon running"></button>
                <button className="dock-icon"></button>
                <button className="dock-icon"></button>
            </footer>
        )
    }
}