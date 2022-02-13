import { ComponentPublicInstance } from 'vue';

interface DinkieIconProps {
  icon: String;
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | null;
}

declare const DinkieIcon: ComponentPublicInstance<DinkieIconProps>;
