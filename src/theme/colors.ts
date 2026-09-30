
export interface ThemeColors {
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  primary: string;
  border: string;
  searchBg: string;
  navBg: string;
  navActive: string;
  navInactive: string;
  progressBg: string;
  avatarBg: string;
}

export const LightTheme: ThemeColors = {
  background: '#F2F5FA',
  card: '#FFFFFF',
  text: '#1A1A2E',
  textSecondary: '#7B8794',
  primary: '#4A6CF7',
  border: '#E8ECF2',
  searchBg: '#FFFFFF',
  navBg: '#FFFFFF',
  navActive: '#4A6CF7',
  navInactive: '#A0AEC0',
  progressBg: '#E8ECF2',
  avatarBg: '#4A6CF7',
};

export const DarkTheme: ThemeColors = {
  background: '#0F172A',
  card: '#1E293B',
  text: '#F1F5F9',
  textSecondary: '#94A3B8',
  primary: '#6C8CFF',
  border: '#334155',
  searchBg: '#1E293B',
  navBg: '#1E293B',
  navActive: '#6C8CFF',
  navInactive: '#64748B',
  progressBg: '#334155',
  avatarBg: '#6C8CFF',
};
