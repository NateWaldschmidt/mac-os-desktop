import React from "react";

interface TypeProps {}
interface TypeState {
    listVisible: boolean,
}

export default class StatusBarGroup extends React.Component<TypeProps, TypeState> {
    constructor(props: TypeProps) {
        super(props);

        this.state = {
            listVisible: false,
        }
    }

    showList() {

    }

    render() {
        return (
            <div className="status-bar-group">
                <button
                className="status-bar-item"
                onFocus={() => this.setState({listVisible: true})}
                onBlur={() => this.setState({listVisible: false})}
                >Apple</button>

                <ul className="status-bar-list transparent-card" hidden={!this.state.listVisible}>
                    <li className="status-bar-list-divider">About this Mac</li>
                    <li>System Settings...</li>
                    <li className="status-bar-list-divider">App Store...</li>
                    <li className="status-bar-list-divider">Recent Items</li>
                    <li className="status-bar-list-divider">Force Quit</li>
                    <li className="">Sleep</li>
                    <li className="">Restart...</li>
                    <li className="status-bar-list-divider">Shutdown...</li>
                    <li>Lock Screen</li>
                    <li>Log Out</li>
                </ul>
            </div>
        )
    }
}