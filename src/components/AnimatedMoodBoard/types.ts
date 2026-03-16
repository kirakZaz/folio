export interface MoodBoardItem {
  id:           string;
  imageUrl?:    string;
  label?:       string;
  aspectRatio?: 'square' | 'landscape' | 'portrait';
}

export interface AnimatedMoodBoardProps {
  items?:            MoodBoardItem[];
  placeholderCount?: number;
}
