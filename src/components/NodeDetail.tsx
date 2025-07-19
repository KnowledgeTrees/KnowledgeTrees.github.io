import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { KnowledgeNode } from '../types/knowledge';
import { Brain, BookOpen, Lightbulb, Clock, Tag } from 'lucide-react';
import { getNodePath } from '../data/knowledgeTree';

interface NodeDetailProps {
  node: KnowledgeNode;
  allNodes: KnowledgeNode[];
}

const getLevelColor = (level: string) => {
  switch (level) {
    case 'general':
      return 'bg-primary/20 text-primary border-primary/30';
    case 'topic':
      return 'bg-accent/20 text-accent border-accent/30';
    case 'subgenre':
      return 'bg-muted/50 text-muted-foreground border-muted';
    default:
      return 'bg-muted/50 text-muted-foreground border-muted';
  }
};

const getLevelIcon = (level: string) => {
  switch (level) {
    case 'general':
      return <Brain className="h-4 w-4" />;
    case 'topic':
      return <BookOpen className="h-4 w-4" />;
    case 'subgenre':
      return <Lightbulb className="h-4 w-4" />;
    default:
      return <BookOpen className="h-4 w-4" />;
  }
};

export const NodeDetail = ({ node, allNodes }: NodeDetailProps) => {
  const nodePath = getNodePath(allNodes, node.id);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="h-full overflow-auto">
      <Card className="m-4">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl flex items-center gap-2">
                {getLevelIcon(node.level)}
                {node.title}
              </CardTitle>
              {node.description && (
                <p className="text-muted-foreground mt-2">{node.description}</p>
              )}
            </div>
            <Badge variant="outline" className={getLevelColor(node.level)}>
              {node.level}
            </Badge>
          </div>

          {/* Breadcrumb Path */}
          {nodePath.length > 1 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
              <span>Path:</span>
              {nodePath.map((pathNode, index) => (
                <span key={pathNode.id} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  <span className="hover:text-foreground cursor-pointer">
                    {pathNode.title}
                  </span>
                </span>
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent>
          {/* Main Content */}
          {node.content ? (
            <div className="prose prose-sm max-w-none">
              <p>{node.content}</p>
            </div>
          ) : (
            <div className="text-muted-foreground italic">
              Content for this topic is being curated. Check back soon for comprehensive information.
            </div>
          )}

          {/* Tags */}
          {node.tags && node.tags.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {node.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Children Overview */}
          {hasChildren && (
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Sub-topics ({node.children!.length})</h4>
              <div className="grid gap-2">
                {node.children!.map((child) => (
                  <div 
                    key={child.id} 
                    className="p-3 rounded-lg bg-tree-node border border-border hover:bg-tree-node-hover transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {getLevelIcon(child.level)}
                      <span className="font-medium text-sm">{child.title}</span>
                      <Badge variant="outline" className={`text-xs ${getLevelColor(child.level)}`}>
                        {child.level}
                      </Badge>
                    </div>
                    {child.description && (
                      <p className="text-xs text-muted-foreground mt-1">{child.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              {node.createdAt && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Created: {new Date(node.createdAt).toLocaleDateString()}
                </span>
              )}
              {node.updatedAt && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Updated: {new Date(node.updatedAt).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};