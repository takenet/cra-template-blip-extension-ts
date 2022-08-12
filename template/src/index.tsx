import ReactDOM from 'react-dom/client';
import { defineCustomElements } from 'blip-ds/loader';
import { IframeMessageProxy } from 'iframe-message-proxy';
import { ResizeObserver } from 'resize-observer';

import reportWebVitals from 'reportWebVitals';

import 'assets/scss/main.scss';
import 'i18n';

import { setHeight } from 'services/common-service';
import { track } from 'services/analytics-service';
import Events from 'constants/tracking-events';

import App from './App';

const root = document.getElementById('root')!;

// Blip-DS Web Component
defineCustomElements(window);

// handle communication through browser post messages
IframeMessageProxy.listen();

// Resize app in the Portal
const observer = new ResizeObserver(() => {
    setHeight(root.scrollHeight);
});
observer.observe(root);

// segment tracking - extension opened
track(Events.EXTENSION_OPENED);

ReactDOM.createRoot(root).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
