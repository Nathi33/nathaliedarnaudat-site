import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOSProvider from './AOSProvider'; 

export const metadata = {
  title: 'Nathalie Darnaudat',
  description: 'Assistante administrative indépendante',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
