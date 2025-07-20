import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { TreePine, Search, MousePointer, BookOpen, Network, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Help = () => {
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
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Encyclopedia
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <div className="mb-4 p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto flex items-center justify-center">
              <TreePine className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">How to Use Our Encyclopedia</h1>
            <p className="text-muted-foreground text-lg">
              Master the art of knowledge navigation with our comprehensive guide
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TreePine className="h-5 w-5 text-primary" />
                Navigating the Knowledge Tree
              </CardTitle>
              <CardDescription>
                Explore our hierarchical knowledge structure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Click on any topic node to explore its content</li>
                <li>• Expand/collapse branches using the arrow icons</li>
                <li>• See connections between related topics</li>
                <li>• Navigate through parent-child relationships</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Smart Search Features
              </CardTitle>
              <CardDescription>
                Find information quickly and efficiently
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Use the search bar for instant topic lookup</li>
                <li>• Try AI-powered search for complex queries</li>
                <li>• Search results show topic hierarchy</li>
                <li>• Filter by categories and difficulty levels</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MousePointer className="h-5 w-5 text-primary" />
                Interactive Features
              </CardTitle>
              <CardDescription>
                Make the most of our interactive elements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Hover over nodes for quick previews</li>
                <li>• Use the detail panel for in-depth information</li>
                <li>• Follow cross-references between topics</li>
                <li>• Bookmark important sections for later</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Learning Paths
              </CardTitle>
              <CardDescription>
                Structured approaches to knowledge acquisition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Follow suggested learning sequences</li>
                <li>• Start with fundamentals before advanced topics</li>
                <li>• Use the prerequisite system effectively</li>
                <li>• Track your progress through different domains</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5 text-primary" />
              Advanced Tips
            </CardTitle>
            <CardDescription>
              Pro techniques for power users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-2">Navigation Shortcuts</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Use breadcrumbs to trace your path</li>
                  <li>• Right-click for context menus</li>
                  <li>• Use keyboard shortcuts for quick navigation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Customization Options</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Switch between light and dark themes</li>
                  <li>• Adjust tree visualization settings</li>
                  <li>• Configure search preferences</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;