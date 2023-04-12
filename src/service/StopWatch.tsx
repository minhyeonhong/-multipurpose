import { ZERO_SET, TStopwatch } from "../types/stopwatch";

export class StopWatch {

    private timer: TStopwatch<number>;
    private strTimer: TStopwatch<string>;

    public printTimer: string;
    private setPrintTimer;

    private printRapTimers: string[];
    private setPrintRapTimers;

    private intervalID: NodeJS.Timer;
    private setIntervalID;

    constructor(
        timer: TStopwatch<number>,
        setTimer: React.Dispatch<React.SetStateAction<TStopwatch<number>>>,
        printTimer: string,
        setPrintTimer: React.Dispatch<React.SetStateAction<string>>,
        printRapTimers: string[],
        setPrintRapTimers: React.Dispatch<React.SetStateAction<string[]>>,
        intervalID: NodeJS.Timer,
        setIntervalID: React.Dispatch<React.SetStateAction<NodeJS.Timer | undefined>>
    ) {
        this.timer = {
            hour: 0,
            min: 0,
            sec: 0,
            min_sec: 0
        }
        this.strTimer = {
            hour: "",
            min: "",
            sec: "",
            min_sec: ""
        }
        this.printTimer = printTimer;
        this.printRapTimers = printRapTimers;
        this.setPrintTimer = setPrintTimer;
        this.setPrintRapTimers = setPrintRapTimers;
        this.intervalID = intervalID
        this.setIntervalID = setIntervalID;
    }

    start = () => {
        this.intervalID = setInterval(() => {
            //    this.setIntervalID (setInterval(() => {
            this.timer.min_sec++;
            //min_sec
            if (this.timer.min_sec === 100) {
                this.timer.sec++;
                this.timer.min_sec = 0;
            }
            //sec
            if (this.timer.sec === 60) {
                this.timer.min++;
                this.timer.sec = 0;
            }
            //min
            if (this.timer.min === 60) {
                this.timer.hour++;
                this.timer.min = 0;
            }

            this.strTimer.min_sec = this.timer.min_sec < 10 ? "0" + this.timer.min_sec : String(this.timer.min_sec);
            this.strTimer.sec = this.timer.sec < 10 ? "0" + this.timer.sec : String(this.timer.sec);
            this.strTimer.min = this.timer.min < 10 ? "0" + this.timer.min : String(this.timer.min);
            this.strTimer.hour = this.timer.hour < 10 ? "0" + this.timer.hour : String(this.timer.hour);

            this.printTimer = this.strTimer.hour + ":" + this.strTimer.min + ":" + this.strTimer.sec + ":" + this.strTimer.min_sec;

            //this.setPrintTimer(this.printTimer);
        }, 10)

        //this.setIntervalID(this.intervalID);

    }

    reset = () => {
        this.printTimer = ZERO_SET;

        this.setPrintTimer(this.printTimer);
        this.setPrintRapTimers([]);
        this.timer = {
            hour: 0,
            min: 0,
            sec: 0,
            min_sec: 0
        }
    }

    rap = () => {
        this.printRapTimers.push(this.printTimer);
        if (typeof this.printRapTimers === 'string')
            this.setPrintTimer(this.printRapTimers);
    }

    stop = () => {
        console.log("stop intervalID", this.intervalID);
        if (this.intervalID !== undefined) {
            console.log("stop intervalID not undefind");
            clearInterval(this.intervalID);
        }
    }

}
