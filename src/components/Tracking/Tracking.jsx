import ReactGA from 'react-ga';

const Tracking = (trackingID) => {
    return ReactGA.initialize(trackingID);
}

export default Tracking;
