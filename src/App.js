import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/views/Login';
import ErrorPage from './components/views/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
