import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { SocketContext, data } from './providers/SocketContext.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <StrictMode>
    <FluentProvider theme={webLightTheme}>
      <SocketContext value={data}>
        <App />
      </SocketContext>
    </FluentProvider>,
  </StrictMode>,

)
