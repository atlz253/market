import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
)
