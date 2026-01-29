import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOSProvider from './AOSProvider';
import BootstrapJSLoader from '../components/BootstrapJSLoader';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
        </AOSProvider>
        <BootstrapJSLoader />
      </body>
    </html>
  );
}
