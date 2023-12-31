import { Providers } from '/src/webpage/Providers/Providers';
import { Header } from '/src/webpage/Header/Header';
import { Body } from '/src/webpage/Body/Body';
import { Footer } from '/src/webpage/Footer/Footer';
import '/src/styles/Global.css';

export default function App() {
  return (
    <Providers>
      <Header />
      <Body />
      <Footer />
    </Providers>
  );
}
