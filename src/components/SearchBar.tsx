import { useState } from 'react';
import { Search, X, Bot } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onAISearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({ 
  onSearch,
  onAISearch,
  placeholder = "Search the knowledge tree...", 
  className = "" 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10 bg-background border-border"
        />
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex gap-1">
          {onAISearch && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onAISearch(query)}
              className="h-8 w-8 p-0"
              title="AI Search"
            >
              <Bot className="h-4 w-4" />
            </Button>
          )}
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};