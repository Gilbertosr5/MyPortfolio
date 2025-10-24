import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Career } from './components/Career';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
