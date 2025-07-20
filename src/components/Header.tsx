import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, TreePine, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export const Header = ({ isDark, onThemeToggle }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <TreePine className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Knowledge Tree</h1>
            <p className="text-xs text-muted-foreground">AI-Curated Knowledge Platform</p>
          </div>
          {/* ChatGPT Model Search Logo Spot */}
          <div className="ml-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
            <span className="text-xs font-medium text-primary">ChatGPT Search</span>
          </div>
        </div>

        {/* Stats */}
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <div className="text-center">
            <div className="font-medium text-foreground">5</div>
            <div className="text-xs">General Topics</div>
          </div>
          <div className="text-center">
            <div className="font-medium text-foreground">12</div>
            <div className="text-xs">Main Topics</div>
          </div>
          <div className="text-center">
            <div className="font-medium text-foreground">32</div>
            <div className="text-xs">Subgenres</div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/help">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Help
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            Forum
          </Button>
          <Link to="/our-mission">
            <Button variant="ghost" size="sm">
              Our Mission
            </Button>
          </Link>
          
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onThemeToggle}
            className="rounded-full"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};