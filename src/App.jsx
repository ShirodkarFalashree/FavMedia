import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Templates from './pages/Templates';
import Contact from './pages/Contact';
import ChatBotWidget from './components/ChatBotWidget ';

const Layout = () => {
  return (
    <div className='font-inter bg-mainbg min-h-screen text-white'>
      <Navbar />
      <Outlet />
      <ChatBotWidget/>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Navigate to="/#services" replace />, // Redirect to home with hash
      },
      {
        path: '/about-us',
        element: <About />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/templates',
        element: <Templates />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;