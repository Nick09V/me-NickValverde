import { useAnalytics } from './hooks/useAnalytics';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home, HomeSpecialties, About, Technologies, Projects, Trajectory, Contact } from './sections';

function App() {
  // Initialize Google Analytics
  useAnalytics();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content" className="flex-1 flex flex-col w-full" role="main">
        <Home />
        <HomeSpecialties />
        <About />
        <Technologies />
        <Projects />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;