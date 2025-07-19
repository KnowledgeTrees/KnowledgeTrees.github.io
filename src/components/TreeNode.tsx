import { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Lightbulb, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { KnowledgeNode } from '../types/knowledge';
import { cn } from '@/lib/utils';

interface TreeNodeProps {
  node: KnowledgeNode;
  isExpanded: boolean;
  isSelected: boolean;
  onToggle: (nodeId: string) => void;
  onSelect: (nodeId: string) => void;
  searchQuery?: string;
  depth?: number;
}

const getNodeIcon = (level: string) => {
  switch (level) {
    case 'general':
      return <Brain className="h-5 w-5 text-primary" />;
    case 'topic':
      return <BookOpen className="h-4 w-4 text-accent" />;
    case 'subgenre':
      return <Lightbulb className="h-4 w-4 text-muted-foreground" />;
    default:
      return <BookOpen className="h-4 w-4" />;
  }
};

const highlightText = (text: string, searchQuery: string) => {
  if (!searchQuery) return text;
  
  const regex = new RegExp(`(${searchQuery})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? (
      <mark key={index} className="bg-search-highlight text-foreground rounded px-1">
        {part}
      </mark>
    ) : part
  );
};

export const TreeNode = ({ 
  node, 
  isExpanded, 
  isSelected, 
  onToggle, 
  onSelect, 
  searchQuery = '',
  depth = 0 
}: TreeNodeProps) => {
  const hasChildren = node.children && node.children.length > 0;
  const indentLevel = depth * 20;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      onToggle(node.id);
    }
  };

  const handleSelect = () => {
    onSelect(node.id);
  };

  return (
    <div className="select-none">
      <div
        className={cn(
          "flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors duration-200",
          "hover:bg-tree-node-hover",
          isSelected && "bg-tree-node-active text-primary-foreground",
          !isSelected && "bg-tree-node"
        )}
        style={{ marginLeft: `${indentLevel}px` }}
        onClick={handleSelect}
      >
        {/* Expand/Collapse button */}
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0 hover:bg-transparent"
          onClick={handleToggle}
        >
          {hasChildren ? (
            isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )
          ) : (
            <div className="h-4 w-4" />
          )}
        </Button>

        {/* Node icon */}
        <div className="flex-shrink-0">
          {getNodeIcon(node.level)}
        </div>

        {/* Node content */}
        <div className="flex-1 min-w-0">
          <div className={cn(
            "font-medium truncate",
            node.level === 'general' && "text-base",
            node.level === 'topic' && "text-sm",
            node.level === 'subgenre' && "text-sm"
          )}>
            {highlightText(node.title, searchQuery)}
          </div>
          {node.description && (
            <div className="text-xs text-muted-foreground truncate mt-1">
              {highlightText(node.description, searchQuery)}
            </div>
          )}
        </div>

        {/* Level indicator */}
        <div className={cn(
          "text-xs px-2 py-1 rounded-full flex-shrink-0",
          node.level === 'general' && "bg-primary/20 text-primary",
          node.level === 'topic' && "bg-accent/20 text-accent",
          node.level === 'subgenre' && "bg-muted text-muted-foreground"
        )}>
          {node.level}
        </div>
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="ml-2 border-l border-tree-connection">
          {node.children!.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              isExpanded={isExpanded}
              isSelected={isSelected}
              onToggle={onToggle}
              onSelect={onSelect}
              searchQuery={searchQuery}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};