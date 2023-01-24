import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DataInput from './components/views/DataInput';
import ErrorPage from './components/views/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <DataInput />,
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
