import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/ui/button';
import { TreePine, Target, Users, Lightbulb, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurMission = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={isDark} onThemeToggle={handleThemeToggle} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Encyclopedia
            </Button>
          </Link>

          <div className="mb-12">
            <div className="mb-6 p-6 rounded-full bg-primary/10 w-24 h-24 mx-auto flex items-center justify-center">
              <TreePine className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Democratizing knowledge through intelligent organization and AI-powered discovery
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Organize Knowledge</h3>
              <p className="text-muted-foreground">
                We structure human knowledge into interconnected trees, making complex information accessible and navigable.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Community</h3>
              <p className="text-muted-foreground">
                We foster collaborative learning through forums, study circles, and peer-to-peer knowledge sharing.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enable Discovery</h3>
              <p className="text-muted-foreground">
                We leverage AI to help learners discover connections, find relevant content, and personalize their learning journey.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where knowledge is not siloed but interconnected, where learning is not passive but collaborative, 
              and where discovery is not overwhelming but guided by intelligent systems that understand both content and context.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Feature Roadmap</h2>
            
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Phase 1: Core Taxonomy & Citations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ingest 1,000 top-level topics, 10,000 sub-genres</li>
                  <li>• Build multi-source citation layer, cross-linking</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Phase 2: AI & Personalization</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Launch "Discover" feed, AI Coach, and nav-button customizer</li>
                  <li>• Implement FlashForge & Challenge engines</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Phase 3: Community & Collaboration</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Roll out Chat, Forums, Study Circles, and Events scheduler</li>
                  <li>• Gamify fact-checking reputation and micro-article contributions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Phase 4: Expansion & Integrations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mobile apps, voice-search, API for third-party embed and LMS integration</li>
                  <li>• Plugin marketplace for custom tree visualizations and data exports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;