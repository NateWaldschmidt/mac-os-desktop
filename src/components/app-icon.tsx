import React from "react";

interface TypeProps {};
interface TypeStates {
    appX: number,
    appY: number,
    mouseAppX: number|null,
    mouseAppY: number|null,
};

export default class AppIcon extends React.Component<TypeProps, TypeStates> {
    constructor(props: TypeProps) {
        super(props);

        this.state = {
            appX: window.innerWidth - 120,
            appY: 30,
            mouseAppX: null,
            mouseAppY: null,
        }

        this.moveApp = this.moveApp.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', (e: MouseEvent) => {
            this.setState({
                mouseAppX: e.clientX - this.state.appX,
                mouseAppY: e.clientY - this.state.appY,
            });
        });
        document.addEventListener('mouseup', () => {
            this.setState({
                mouseAppX: null,
                mouseAppY: null,
            });
        });
    }

    moveApp(e: React.MouseEvent<HTMLButtonElement>) {
        if (this.state.mouseAppX && this.state.mouseAppY) {
            this.setState({
                appX: e.clientX - this.state.mouseAppX,
                appY: e.clientY - this.state.mouseAppY,
            });
        }
    }

    render() {
        return (
            <button className="app" onPointerMove={this.moveApp} style={{
                left: this.state.appX,
                top: this.state.appY,
            }}>
                <div className="app-icon abs-center"></div>
                <p className="app-label abs-center">Macintosh HD</p>
            </button>
        );
    }
}