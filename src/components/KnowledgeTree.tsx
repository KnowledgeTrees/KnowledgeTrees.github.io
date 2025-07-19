import { useState, useMemo } from 'react';
import { TreeNode } from './TreeNode';
import { SearchBar } from './SearchBar';
import { KnowledgeNode } from '../types/knowledge';
import { getAllNodes } from '../data/knowledgeTree';

interface KnowledgeTreeProps {
  nodes: KnowledgeNode[];
  onNodeSelect?: (node: KnowledgeNode) => void;
}

export const KnowledgeTree = ({ nodes, onNodeSelect }: KnowledgeTreeProps) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter nodes based on search query
  const filteredNodes = useMemo(() => {
    if (!searchQuery) return nodes;

    const allNodes = getAllNodes(nodes);
    const matchingNodes = allNodes.filter(node =>
      node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Auto-expand parent nodes of matching results
    const nodesToExpand = new Set<string>();
    matchingNodes.forEach(node => {
      let currentParentId = node.parentId;
      while (currentParentId) {
        nodesToExpand.add(currentParentId);
        const parentNode = allNodes.find(n => n.id === currentParentId);
        currentParentId = parentNode?.parentId;
      }
    });

    if (nodesToExpand.size > 0) {
      setExpandedNodes(prev => new Set([...prev, ...nodesToExpand]));
    }

    return nodes;
  }, [nodes, searchQuery]);

  const handleToggle = (nodeId: string) => {
    setExpandedNodes(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(nodeId)) {
        newExpanded.delete(nodeId);
      } else {
        newExpanded.add(nodeId);
      }
      return newExpanded;
    });
  };

  const handleSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    if (onNodeSelect) {
      const allNodes = getAllNodes(nodes);
      const selectedNode = allNodes.find(node => node.id === nodeId);
      if (selectedNode) {
        onNodeSelect(selectedNode);
      }
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const renderNodes = (nodeList: KnowledgeNode[], depth = 0) => {
    return nodeList.map(node => {
      // Filter children based on search if needed
      const shouldShowNode = !searchQuery || 
        node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (node.children && hasMatchingChildren(node.children, searchQuery));

      if (!shouldShowNode) return null;

      return (
        <TreeNode
          key={node.id}
          node={node}
          isExpanded={expandedNodes.has(node.id)}
          isSelected={selectedNodeId === node.id}
          onToggle={handleToggle}
          onSelect={handleSelect}
          searchQuery={searchQuery}
          depth={depth}
        />
      );
    });
  };

  const hasMatchingChildren = (children: KnowledgeNode[], query: string): boolean => {
    return children.some(child =>
      child.title.toLowerCase().includes(query.toLowerCase()) ||
      child.description?.toLowerCase().includes(query.toLowerCase()) ||
      (child.children && hasMatchingChildren(child.children, query))
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Search Bar */}
      <div className="p-4 border-b border-border">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Tree View */}
      <div className="flex-1 overflow-auto p-4 space-y-1">
        {filteredNodes.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <p>No results found for "{searchQuery}"</p>
          </div>
        ) : (
          renderNodes(filteredNodes)
        )}
      </div>
    </div>
  );
};

// Helper function to check if any children match the search
const hasMatchingChildren = (children: KnowledgeNode[], query: string): boolean => {
  return children.some(child =>
    child.title.toLowerCase().includes(query.toLowerCase()) ||
    child.description?.toLowerCase().includes(query.toLowerCase()) ||
    (child.children && hasMatchingChildren(child.children, query))
  );
};