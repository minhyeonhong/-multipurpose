import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StopWatch } from '../service/StopWatch';
import { ZERO_SET } from "../types/stopwatch";
import { Helmet } from 'react-helmet-async';
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import Button from '../components/ui/Button';

const Home = () => {
    const history = createBrowserHistory();
    history.listen((response: any) => {
        ReactGA.set({ page: response.location.pathname });
        ReactGA.pageview(response.location.pathname);
    });
    interface Stopwatch<T> {
        hour: T;
        min: T;
        sec: T;
        min_sec: T;
    }

    const [timer, setTimer] = useState<Stopwatch<number>>({
        hour: 0,
        min: 0,
        sec: 0,
        min_sec: 0
    });
    let strTimer: Stopwatch<string> = {
        hour: "",
        min: "",
        sec: "",
        min_sec: ""
    }

    const [printTimer, setPrintTimer] = useState<string>(ZERO_SET);
    const [printRapTimer, setPrintRapTimer] = useState<string[]>([]);


    const [toggle, setToggle] = useState<boolean>(false);
    const [intervalID, setIntervalID] = useState<NodeJS.Timer>();

    const timerStart = () => {
        setToggle(true);
        setIntervalID(
            setInterval(function () {
                timer.min_sec++;
                //min_sec
                if (timer.min_sec === 100) {
                    timer.sec++;
                    timer.min_sec = 0;
                }
                //sec
                if (timer.sec === 60) {
                    timer.min++;
                    timer.sec = 0;
                }
                //min
                if (timer.min === 60) {
                    timer.hour++;
                    timer.min = 0;
                }

                strTimer.min_sec = timer.min_sec < 10 ? "0" + timer.min_sec : String(timer.min_sec);
                strTimer.sec = timer.sec < 10 ? "0" + timer.sec : String(timer.sec);
                strTimer.min = timer.min < 10 ? "0" + timer.min : String(timer.min);
                strTimer.hour = timer.hour < 10 ? "0" + timer.hour : String(timer.hour);

                setPrintTimer(strTimer.hour + ":" + strTimer.min + ":" + strTimer.sec + ":" + strTimer.min_sec);
            }, 10)
        )

    }

    const timerReset = () => {
        setPrintTimer(ZERO_SET);
        setPrintRapTimer([]);
        setTimer({
            hour: 0,
            min: 0,
            sec: 0,
            min_sec: 0
        })
    }

    const timerRap = () => {
        setPrintRapTimer(e => [...e, printTimer]);
    }

    const timerStop = () => {
        setToggle(false);
        if (intervalID !== undefined) {
            clearInterval(intervalID);
        }
    }


    const [test, setTest] = useState<string>("00:00:00.00");
    const [test2, setTest2] = useState<string[]>([]);
    const [test3, setTest3] = useState<any>();
    const stopwatch = new StopWatch(timer, setTimer, test, setTest, test2, setTest2, test3, setTest3);

    // useEffect(() => {
    //     console.log("dd", stopwatch.printTimer);
    // }, [stopwatch.printTimer])

    return (
        <div>
            {/* <Helmet>
                <title>{printTimer} Stop Watch</title>
                <meta
                    name="description"
                    content="Stop Watch 스톱워치"
                />
                <meta name="keywords" content="Stop Watch, 스톱워치, rap time, 랩타임, mhh스톱워치" />
            </Helmet> */}
            <div>
                <h1>{printTimer}</h1>
                {!toggle ?
                    <StButtonWrap>
                        <Button text='초기화' isOn={true} onClick={timerReset} />
                        <Button text='시작' isOn={true} onClick={timerStart} />
                    </StButtonWrap>
                    :
                    <StButtonWrap>
                        <Button text='랩' isOn={true} onClick={timerRap} />
                        <Button text='중지' isOn={true} onClick={timerStop} />
                    </StButtonWrap>
                }
            </div>
            <div>
                {printRapTimer.length > 0 &&
                    printRapTimer.map((rap, i) => {
                        return (
                            <h2 key={rap}>{"Rap" + (++i) + ". " + rap}</h2>
                        )
                    })
                }
            </div>
            {/* <div>
                {test}
                <button onClick={stopwatch.start}>start</button>
                <button onClick={stopwatch.stop}>stop</button>
            </div> */}
        </div>
    );
};

export default Home;

const StButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`