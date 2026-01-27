import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Nathalie Darnaudat',
  description: 'Assistante administrative indépendante',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
