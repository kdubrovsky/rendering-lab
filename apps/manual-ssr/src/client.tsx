import { hydrateRoot } from 'react-dom/client';
import { App } from './App.js';

const id = location.pathname.split('/')[2]!;

hydrateRoot(document.getElementById('root')!, <App id={id} />);
