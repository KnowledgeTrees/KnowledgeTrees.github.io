import { useState, useEffect } from 'react';
import { TreePine, GraduationCap } from 'lucide-react';
import { Header } from '../components/Header';
import { KnowledgeTree } from '../components/KnowledgeTree';
import { NodeDetail } from '../components/NodeDetail';
import { SearchBar } from '../components/SearchBar';
import { Button } from '../components/ui/button';
import { knowledgeTree, getAllNodes } from '../data/knowledgeTree';
import { KnowledgeNode } from '../types/knowledge';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedNode, setSelectedNode] = useState<KnowledgeNode | null>(null);

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

  const handleNodeSelect = (node: KnowledgeNode) => {
    setSelectedNode(node);
  };

  const handleSearch = (query: string) => {
    // Basic search functionality
    console.log('Searching for:', query);
  };

  const handleAISearch = (query: string) => {
    // AI search with ChatGPT API
    const apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
      const key = prompt('Enter your OpenAI API key to use AI search:');
      if (key) {
        localStorage.setItem('openai_api_key', key);
        performAISearch(query, key);
      }
    } else {
      performAISearch(query, apiKey);
    }
  };

  const performAISearch = async (query: string, apiKey: string) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are a knowledge assistant. Help find relevant information in our knowledge tree.'
            },
            {
              role: 'user',
              content: query
            }
          ],
          max_tokens: 500
        })
      });
      
      const data = await response.json();
      console.log('AI Response:', data.choices[0].message.content);
    } catch (error) {
      console.error('AI Search error:', error);
    }
  };

  const allNodes = getAllNodes(knowledgeTree);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={isDark} onThemeToggle={handleThemeToggle} />
      
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Tree Panel */}
        <div className="w-1/2 border-r border-border bg-card">
          <div className="p-4 border-b border-border">
            <SearchBar 
              onSearch={handleSearch}
              onAISearch={handleAISearch}
              placeholder="Search topics or ask AI..."
            />
          </div>
          <KnowledgeTree 
            nodes={knowledgeTree} 
            onNodeSelect={handleNodeSelect}
          />
        </div>

        {/* Detail Panel */}
        <div className="w-1/2 bg-background">
          {selectedNode ? (
            <NodeDetail node={selectedNode} allNodes={allNodes} />
          ) : (
            <div className="h-full flex items-center justify-center p-8">
              <div className="text-center max-w-md">
                <div className="mb-4 p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto flex items-center justify-center">
                  <TreePine className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Welcome to the Knowledge Tree</h2>
                <p className="text-muted-foreground mb-4">
                  Explore our curated collection of interconnected knowledge. 
                  Select any topic from the tree on the left to begin your journey.
                </p>
                <div className="text-sm text-muted-foreground mb-6">
                  <p>🌲 Navigate through hierarchical topics</p>
                  <p>🔍 Search across all knowledge domains</p>
                  <p>🧠 Discover connections between ideas</p>
                </div>
                <Button className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Tutorial
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
