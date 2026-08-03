import { Outlet } from 'react-router';
import { Header, Footer } from '@/components';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
