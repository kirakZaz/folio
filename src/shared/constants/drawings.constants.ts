// =============================================================================
// DRAWINGS DATA
// =============================================================================
// To add a drawing: put image in /public/images/drawings/ and add object here.

export interface DrawingItem {
  id:       string;
  imageUrl: string;
  label?:   string;
}

export const DRAWINGS_DATA: DrawingItem[] = [
  { id: 'drawing-01', imageUrl: '/images/drawings/drawing-01.jpg', label: 'Warrior — pencil & colour' },
  { id: 'drawing-02', imageUrl: '/images/drawings/drawing-02.jpg', label: 'Anime cat-girl — marker' },
  { id: 'drawing-03', imageUrl: '/images/drawings/drawing-03.jpg', label: 'Realistic eye — pencil' },
  { id: 'drawing-04', imageUrl: '/images/drawings/drawing-04.jpg', label: 'Wolf portrait — pencil' },
  { id: 'drawing-05', imageUrl: '/images/drawings/drawing-05.jpg', label: 'Elf with harp — pencil' },
  { id: 'drawing-06', imageUrl: '/images/drawings/drawing-06.jpg', label: 'Steampunk robot — ink' },
  { id: 'drawing-07', imageUrl: '/images/drawings/drawing-07.jpg', label: 'Owl — ink' },
  { id: 'drawing-08', imageUrl: '/images/drawings/drawing-08.jpg', label: 'Elf portrait — colour pencil' },
  { id: 'drawing-09', imageUrl: '/images/drawings/drawing-09.jpg', label: 'Dolphin on black — chalk' },
  { id: 'drawing-10', imageUrl: '/images/drawings/drawing-10.jpg', label: 'Face study — charcoal' },
  { id: 'drawing-11', imageUrl: '/images/drawings/drawing-11.jpg', label: 'Eagle — ballpoint pen' },
  { id: 'drawing-12', imageUrl: '/images/drawings/drawing-12.jpg' },
  { id: 'drawing-13', imageUrl: '/images/drawings/drawing-13.jpg' },
  { id: 'drawing-14', imageUrl: '/images/drawings/drawing-14.jpg' },
  { id: 'drawing-15', imageUrl: '/images/drawings/drawing-15.jpg' },
];
