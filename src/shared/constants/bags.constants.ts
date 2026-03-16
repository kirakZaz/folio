// =============================================================================
// BAGS DATA
// =============================================================================
// To add a new bag: put image in /public/images/bags/ and add object here.

export interface BagItem {
  id:       string;
  imageUrl: string;
  label?:   string;
}

export const BAGS_DATA: BagItem[] = [
  { id: 'bag-01', imageUrl: '/images/bags/bag-01.jpg', label: 'Dark brown envelope clutch with strap' },
  { id: 'bag-02', imageUrl: '/images/bags/bag-02.jpg', label: 'Dark brown envelope clutch' },
  { id: 'bag-03', imageUrl: '/images/bags/bag-03.jpg', label: 'Tan suede mini crossbody' },
  { id: 'bag-04', imageUrl: '/images/bags/bag-04.jpg', label: 'Tan suede bag with cat clasp' },
  { id: 'bag-05', imageUrl: '/images/bags/bag-05.jpg', label: 'Tan suede flat bag with chain' },
  { id: 'bag-06', imageUrl: '/images/bags/bag-06.jpg', label: 'Tan suede envelope with dark patch' },
  { id: 'bag-07', imageUrl: '/images/bags/bag-07.jpg', label: 'Natural leather bifold wallet' },
  { id: 'bag-08', imageUrl: '/images/bags/bag-08.jpg', label: 'Natural distressed leather fold-over clutch' },
  { id: 'bag-09', imageUrl: '/images/bags/bag-09.jpg', label: 'Tan suede & natural leather duo' },
  { id: 'bag-10', imageUrl: '/images/bags/bag-10.jpg', label: 'Cognac biker wallet with chain' },
  { id: 'bag-11', imageUrl: '/images/bags/bag-11.jpg', label: 'Caramel leather wallet bag with gold ring' },
  { id: 'bag-12', imageUrl: '/images/bags/bag-12.jpg', label: 'Dark brown structured bag, handmade tag' },
  { id: 'bag-13', imageUrl: '/images/bags/bag-13.jpg', label: 'Brown leather barrel bag with green lining' },
  { id: 'bag-14', imageUrl: '/images/bags/bag-14.jpg', label: 'Yellow & brown two-tone suede crossbody' },
  { id: 'bag-15', imageUrl: '/images/bags/bag-15.jpg', label: 'Yellow suede structured crossbody with chain' },
  { id: 'bag-16', imageUrl: '/images/bags/bag-16.jpg', label: 'Tan suede flap bag with buckle closure' },
  { id: 'bag-17', imageUrl: '/images/bags/bag-17.jpg', label: 'Tan suede square bag back panel' },
  { id: 'bag-18', imageUrl: '/images/bags/bag-18.jpg', label: 'Handmade tag detail close-up' },
  { id: 'bag-19', imageUrl: '/images/bags/bag-19.jpg', label: 'Leather strips and raw materials' },
];
