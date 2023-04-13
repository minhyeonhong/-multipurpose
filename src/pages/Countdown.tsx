import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const Countdown = () => {
    const history = createBrowserHistory();
    history.listen((response: any) => {
        ReactGA.set({ page: response.location.pathname });
        ReactGA.pageview(response.location.pathname);
    });
    return (
        <div>Countdown</div>
    );
};

export default Countdown;