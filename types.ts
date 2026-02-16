
import type { ReactElement } from 'react';

export interface Template {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Prompt {
  id: number;
  title: string;
  prompt: string;
  category: string;
}

export interface Tool {
  id: number;
  name: string;
  description: string;
  icon: ReactElement;
  link: string;
}

export interface ProductIdea {
  name: string;
  description: string;
  targetAudience: string;
}
