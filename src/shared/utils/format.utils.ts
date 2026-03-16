/**
 * Pads a number with a leading zero for display (e.g. 1 → "01").
 */
export const formatSectionNumber = (sectionNumber: number): string =>
  String(sectionNumber).padStart(2, '0');
