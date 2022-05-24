import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './contexts/ContextProvider';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<ContextProvider>
		<App/>
 	</ContextProvider>
);