import React from 'react';
import {
  BookOpen,
  Brain,
  CircleCheckBig,
  ClipboardList,
  Database,
  Globe,
  House,
  Monitor,
  Search,
  Shield,
  Smartphone,
  User,
  Bell,
  X,
  Sun,
  Moon,
} from 'lucide-react-native';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  'book-open': BookOpen,
  'clipboard-list': ClipboardList,
  'circle-check-big': CircleCheckBig,
  smartphone: Smartphone,
  database: Database,
  brain: Brain,
  globe: Globe,
  shield: Shield,
  monitor: Monitor,
  house: House,
  user: User,
  search: Search,
  bell: Bell,
  x: X,
  sun: Sun,
  moon: Moon,
};

interface Props {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function Icon({name, size = 22, color = '#000', strokeWidth = 1.8}: Props) {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} color={color} strokeWidth={strokeWidth} />;
}
