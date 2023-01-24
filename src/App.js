import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DataInput from './views/DataInput';
import ErrorPage from './views/ErrorPage';
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
