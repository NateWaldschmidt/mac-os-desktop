import React from "react";
import StatusBarGroup from "./status-bar/status-bar-group";

interface TypeProps {

}

interface TypeStates {
    date: string,
    time: string,
}

export default class StatusBar extends React.Component<TypeProps, TypeStates> {

    constructor(props: TypeProps) {
        super(props);

        const date = new Date();
        this.state = {
            date: this.getDate(date),
            time: this.getTime(date),
        }
    }

    componentDidMount() {
        setInterval(() => {
            const date = new Date();
            this.setState({
                date: this.getDate(date),
                time: this.getTime(date),
            })
        }, 1000)
    }

    getDate(date: Date): string {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'July',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
        ];
        const weekDays = [
            'Sun',
            'Mon',
            'Tues',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
        ];

        return `${weekDays[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`;
    }

    getTime(date: Date): string {
        let indicator = 'AM';
        let hour = date.getHours();

        if (hour > 12) {
            hour -= 12;
            indicator = 'PM';
        }

        return `${hour}:${date.getMinutes()} ${indicator}`;
    }

    async battery() {
        // No type support.
        const nav: any = window.navigator;

        if (nav.getBattery) {
            console.log(nav.getBattery());

        } else {
            console.warn('The Battery Status API is not supported.');
        }
    }

    render() {
        return (
            <header className="status-bar transparent">
                <div className="status-bar-left">
                    <StatusBarGroup />
                    <button className="status-bar-item bold">Finder</button>
                    <button className="status-bar-item">File</button>
                    <button className="status-bar-item">Edit</button>
                    <button className="status-bar-item">View</button>
                    <button className="status-bar-item">Go</button>
                    <button className="status-bar-item">Window</button>
                    <button className="status-bar-item">Help</button>
                </div>
                <div className="status-bar-right">
                    <button className="status-bar-item">BatteryIcon</button>
                    <button className="status-bar-item">Wifi Connection</button>
                    <button className="status-bar-item">Finder Search</button>
                    <button className="status-bar-item">
                        <span className="status-bar-date">{this.state.date}</span>
                        <span className="status-bar-time">{this.state.time}</span>
                    </button>
                </div>
            </header>
        )
    }
}