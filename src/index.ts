import { loadScript } from './loader';

loadScript(encodeURIComponent(decodeURI(location.pathname.slice(1))));
