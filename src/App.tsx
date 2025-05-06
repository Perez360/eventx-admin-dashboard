import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import ThemeToggleProvider from 'assets/theme/ThemeContext';
import { CssBaseline } from '@mui/material';



function App() {
  return (
    <ThemeToggleProvider >
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeToggleProvider>
  );
}

export default App;
