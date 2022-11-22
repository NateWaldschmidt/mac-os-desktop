import React from "react";
import AppIcon from "./components/app-icon";
import Dock from "./components/dock";
import StatusBar from "./components/status-bar";

export default class App extends React.Component {
    render() {
        return (
            <div className="desktop">
                <StatusBar />
                <AppIcon />
                <Dock />
            </div>
        )
    }
}
