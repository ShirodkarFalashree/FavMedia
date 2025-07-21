import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Templates from './pages/Templates';
import Contact from './pages/Contact';
import ChatBotWidget from './components/ChatBotWidget ';
import CursorTrail from './components/CursorTrail';
import BlogDetail from './pages/BlogDetail';
import TemplateDetails from './pages/TemplateDetails';

const Layout = () => {
  return (
    <div className='font-inter bg-mainbg min-h-screen text-white'>
      <CursorTrail/>
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
        path:"/blog/:slug",
        element:<BlogDetail />
      },
      {
        path: '/templates',
        element: <Templates />,
      },
      {
        path: '/template/:id',
        element: <TemplateDetails />,
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