export interface Subject {
  id: string;
  name: string;
  icon: string;
  totalLessons: number;
  completedLessons: number;
  progress: number;
}

export interface StatCard {
  id: string;
  icon: string;
  value: number;
  label: string;
  color: string;
}

export const STUDENT = {
  name: 'Nguyễn Lưu Nhật Duy',
  initials: 'D',
};

export const STATS: StatCard[] = [
  { id: 's1', icon: 'book-open', value: 8, label: 'Môn học', color: '#6366F1' },
  { id: 's2', icon: 'clipboard-list', value: 12, label: 'Bài tập', color: '#F59E0B' },
  { id: 's3', icon: 'circle-check-big', value: 3, label: 'Hoàn thành', color: '#10B981' },
];

export const SUBJECTS: Subject[] = [
  { id: 'm1', name: 'Lập trình di động', icon: 'smartphone', totalLessons: 15, completedLessons: 15, progress: 100 },
  { id: 'm2', name: 'Cơ sở dữ liệu', icon: 'database', totalLessons: 12, completedLessons: 8, progress: 67 },
  { id: 'm3', name: 'Trí tuệ nhân tạo', icon: 'brain', totalLessons: 10, completedLessons: 4, progress: 40 },
  { id: 'm4', name: 'Mạng máy tính', icon: 'globe', totalLessons: 14, completedLessons: 14, progress: 100 },
  { id: 'm5', name: 'An toàn thông tin', icon: 'shield', totalLessons: 11, completedLessons: 6, progress: 55 },
  { id: 'm6', name: 'Phát triển Web', icon: 'monitor', totalLessons: 16, completedLessons: 2, progress: 13 },
];

export const NAV_ITEMS = [
  { id: 'n1', icon: 'house', label: 'Trang chủ' },
  { id: 'n2', icon: 'book-open', label: 'Môn học' },
  { id: 'n3', icon: 'clipboard-list', label: 'Bài tập' },
  { id: 'n4', icon: 'user', label: 'Cá nhân' },
];
