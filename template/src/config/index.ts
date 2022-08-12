import production from './appsettings.json';
import { Settings } from './types';

let settings: Settings = {};

try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dev = require('./appsettings.development.json');
    settings = process.env.NODE_ENV !== 'development' ? production : dev;
} catch {
    settings = production;
}

export default settings;
