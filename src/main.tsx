import { createRoot } from 'react-dom/client'
import { ProfileProvider } from './contexts/ProfileContext.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <ProfileProvider>
    <App />
  </ProfileProvider>
);
