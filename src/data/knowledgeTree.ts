import { KnowledgeNode } from '../types/knowledge';

export const knowledgeTree: KnowledgeNode[] = [
  {
    id: 'science',
    title: 'Science & Technology',
    description: 'Systematic study of the natural world and technological advancement',
    level: 'general',
    children: [
      {
        id: 'physics',
        title: 'Physics',
        description: 'Fundamental laws governing matter, energy, and the universe',
        level: 'topic',
        parentId: 'science',
        children: [
          {
            id: 'quantum-mechanics',
            title: 'Quantum Mechanics',
            description: 'Behavior of matter and energy at the quantum scale',
            level: 'subgenre',
            parentId: 'physics',
            content: 'Quantum mechanics revolutionized our understanding of reality at the smallest scales...'
          },
          {
            id: 'astrophysics',
            title: 'Astrophysics',
            description: 'Physics of celestial objects and cosmic phenomena',
            level: 'subgenre',
            parentId: 'physics'
          },
          {
            id: 'particle-physics',
            title: 'Particle Physics',
            description: 'Study of fundamental particles and their interactions',
            level: 'subgenre',
            parentId: 'physics'
          }
        ]
      },
      {
        id: 'neuroscience',
        title: 'Neuroscience',
        description: 'Scientific study of the nervous system and brain',
        level: 'topic',
        parentId: 'science',
        children: [
          {
            id: 'cognitive-neuroscience',
            title: 'Cognitive Neuroscience',
            description: 'Neural mechanisms underlying cognition and behavior',
            level: 'subgenre',
            parentId: 'neuroscience'
          },
          {
            id: 'neuroplasticity',
            title: 'Neuroplasticity',
            description: 'Brain\'s ability to reorganize and form new connections',
            level: 'subgenre',
            parentId: 'neuroscience'
          },
          {
            id: 'consciousness-studies',
            title: 'Consciousness Studies',
            description: 'Scientific and philosophical study of consciousness',
            level: 'subgenre',
            parentId: 'neuroscience'
          }
        ]
      },
      {
        id: 'ai-ml',
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Intelligent systems and computational learning',
        level: 'topic',
        parentId: 'science',
        children: [
          {
            id: 'deep-learning',
            title: 'Deep Learning',
            description: 'Neural networks with multiple layers for complex pattern recognition',
            level: 'subgenre',
            parentId: 'ai-ml'
          },
          {
            id: 'natural-language-processing',
            title: 'Natural Language Processing',
            description: 'AI understanding and generation of human language',
            level: 'subgenre',
            parentId: 'ai-ml'
          },
          {
            id: 'computer-vision',
            title: 'Computer Vision',
            description: 'AI interpretation and understanding of visual information',
            level: 'subgenre',
            parentId: 'ai-ml'
          }
        ]
      }
    ]
  },
  {
    id: 'psychology',
    title: 'Psychology & Human Behavior',
    description: 'Scientific study of mind, behavior, and human experience',
    level: 'general',
    children: [
      {
        id: 'cognitive-psychology',
        title: 'Cognitive Psychology',
        description: 'Mental processes including perception, memory, and decision-making',
        level: 'topic',
        parentId: 'psychology',
        children: [
          {
            id: 'memory-systems',
            title: 'Memory Systems',
            description: 'How information is encoded, stored, and retrieved',
            level: 'subgenre',
            parentId: 'cognitive-psychology'
          },
          {
            id: 'decision-making',
            title: 'Decision Making',
            description: 'Cognitive processes behind choices and judgments',
            level: 'subgenre',
            parentId: 'cognitive-psychology'
          },
          {
            id: 'attention-focus',
            title: 'Attention & Focus',
            description: 'Mechanisms of selective attention and concentration',
            level: 'subgenre',
            parentId: 'cognitive-psychology'
          }
        ]
      },
      {
        id: 'social-psychology',
        title: 'Social Psychology',
        description: 'How social factors influence behavior and cognition',
        level: 'topic',
        parentId: 'psychology',
        children: [
          {
            id: 'group-dynamics',
            title: 'Group Dynamics',
            description: 'Behavior patterns in social groups and teams',
            level: 'subgenre',
            parentId: 'social-psychology'
          },
          {
            id: 'social-influence',
            title: 'Social Influence',
            description: 'Persuasion, conformity, and social pressure mechanisms',
            level: 'subgenre',
            parentId: 'social-psychology'
          }
        ]
      }
    ]
  },
  {
    id: 'philosophy',
    title: 'Philosophy & Wisdom Traditions',
    description: 'Fundamental questions about existence, knowledge, and ethics',
    level: 'general',
    children: [
      {
        id: 'metaphysics',
        title: 'Metaphysics',
        description: 'Nature of reality, existence, and the fundamental structure of being',
        level: 'topic',
        parentId: 'philosophy',
        children: [
          {
            id: 'consciousness-philosophy',
            title: 'Philosophy of Consciousness',
            description: 'Hard problem of consciousness and subjective experience',
            level: 'subgenre',
            parentId: 'metaphysics'
          },
          {
            id: 'free-will',
            title: 'Free Will & Determinism',
            description: 'Debate over human agency and causal determinism',
            level: 'subgenre',
            parentId: 'metaphysics'
          }
        ]
      },
      {
        id: 'eastern-philosophy',
        title: 'Eastern Philosophy',
        description: 'Philosophical traditions from Asia including Buddhism, Taoism, Hinduism',
        level: 'topic',
        parentId: 'philosophy',
        children: [
          {
            id: 'buddhist-philosophy',
            title: 'Buddhist Philosophy',
            description: 'Buddhist teachings on suffering, impermanence, and enlightenment',
            level: 'subgenre',
            parentId: 'eastern-philosophy'
          },
          {
            id: 'taoism',
            title: 'Taoism',
            description: 'Chinese philosophy emphasizing harmony with the natural order',
            level: 'subgenre',
            parentId: 'eastern-philosophy'
          }
        ]
      }
    ]
  },
  {
    id: 'esoteric',
    title: 'Esoteric & Metaphysical Studies',
    description: 'Alternative knowledge systems and consciousness exploration',
    level: 'general',
    children: [
      {
        id: 'consciousness-expansion',
        title: 'Consciousness Expansion',
        description: 'Practices and studies for expanding human consciousness',
        level: 'topic',
        parentId: 'esoteric',
        children: [
          {
            id: 'meditation-traditions',
            title: 'Meditation Traditions',
            description: 'Various contemplative practices across cultures',
            level: 'subgenre',
            parentId: 'consciousness-expansion'
          },
          {
            id: 'psychedelic-research',
            title: 'Psychedelic Research',
            description: 'Scientific study of consciousness-altering substances',
            level: 'subgenre',
            parentId: 'consciousness-expansion'
          },
          {
            id: 'lucid-dreaming',
            title: 'Lucid Dreaming',
            description: 'Conscious awareness and control within dreams',
            level: 'subgenre',
            parentId: 'consciousness-expansion'
          }
        ]
      },
      {
        id: 'energy-systems',
        title: 'Energy Systems & Healing',
        description: 'Traditional and alternative understanding of life energy',
        level: 'topic',
        parentId: 'esoteric',
        children: [
          {
            id: 'chakra-systems',
            title: 'Chakra Systems',
            description: 'Energy centers in various spiritual traditions',
            level: 'subgenre',
            parentId: 'energy-systems'
          },
          {
            id: 'acupuncture-meridians',
            title: 'Acupuncture & Meridians',
            description: 'Traditional Chinese medicine energy pathways',
            level: 'subgenre',
            parentId: 'energy-systems'
          }
        ]
      }
    ]
  },
  {
    id: 'history',
    title: 'History & Civilizations',
    description: 'Human development, cultures, and historical events',
    level: 'general',
    children: [
      {
        id: 'ancient-civilizations',
        title: 'Ancient Civilizations',
        description: 'Early human societies and their achievements',
        level: 'topic',
        parentId: 'history',
        children: [
          {
            id: 'egyptian-civilization',
            title: 'Egyptian Civilization',
            description: 'Ancient Egypt: pharaohs, pyramids, and cultural achievements',
            level: 'subgenre',
            parentId: 'ancient-civilizations'
          },
          {
            id: 'mesopotamian-civilizations',
            title: 'Mesopotamian Civilizations',
            description: 'Sumerian, Babylonian, and Assyrian cultures',
            level: 'subgenre',
            parentId: 'ancient-civilizations'
          }
        ]
      }
    ]
  }
];

// Helper functions for tree manipulation
export const findNodeById = (nodes: KnowledgeNode[], id: string): KnowledgeNode | null => {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children) {
      const found = findNodeById(node.children, id);
      if (found) return found;
    }
  }
  return null;
};

export const getAllNodes = (nodes: KnowledgeNode[]): KnowledgeNode[] => {
  const result: KnowledgeNode[] = [];
  
  const traverse = (nodeList: KnowledgeNode[]) => {
    for (const node of nodeList) {
      result.push(node);
      if (node.children) {
        traverse(node.children);
      }
    }
  };
  
  traverse(nodes);
  return result;
};

export const getNodePath = (nodes: KnowledgeNode[], targetId: string): KnowledgeNode[] => {
  const path: KnowledgeNode[] = [];
  
  const findPath = (nodeList: KnowledgeNode[], target: string): boolean => {
    for (const node of nodeList) {
      path.push(node);
      
      if (node.id === target) {
        return true;
      }
      
      if (node.children && findPath(node.children, target)) {
        return true;
      }
      
      path.pop();
    }
    return false;
  };
  
  findPath(nodes, targetId);
  return path;
};