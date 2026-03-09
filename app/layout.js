import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';

import { Playfair_Display, Montserrat, Great_Vibes } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-title',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-signature',
});

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOSProvider from './AOSProvider';
import BootstrapJSLoader from '../components/BootstrapJSLoader';

import { organizationStructuredData } from '../lib/structuredData';

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable}`}>
      <body>
        {/* JSON-LD global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />

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
