import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Career } from './components/Career';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useGitHub } from './hooks/useGitHub';
import { useReveal } from './hooks/useReveal';

function App() {
  const { user, repos, status, isFeatured } = useGitHub();

  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero user={user} repoCount={repos.length} />
        <Skills />
        <Projects repos={repos} status={status} isFeatured={isFeatured} />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
