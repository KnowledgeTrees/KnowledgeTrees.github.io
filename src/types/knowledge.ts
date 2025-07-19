export interface KnowledgeNode {
  id: string;
  title: string;
  description?: string;
  level: 'general' | 'topic' | 'subgenre';
  parentId?: string;
  children?: KnowledgeNode[];
  isExpanded?: boolean;
  content?: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SearchResult {
  node: KnowledgeNode;
  path: KnowledgeNode[];
  relevanceScore: number;
  matchedText: string;
}

export interface TreeViewState {
  expandedNodes: Set<string>;
  selectedNode: string | null;
  searchQuery: string;
  filteredNodes: KnowledgeNode[];
}