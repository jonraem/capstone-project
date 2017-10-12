const files = [ // Not the optimal way obviously
  '20171009_145642.mp4',
  '20171011_221758.mp4',
  '20171011_221821.mp4',
  '20171011_221838.mp4',
  '20171011_221859.mp4',
  '20171011_221919.mp4',
  '20171011_222346.mp4',
  '20171011_222544.mp4',
  '20171011_222710.mp4',
  '20171011_222730.mp4',
];

export const getFilesLength = () => (files.length);

export function getVideoPath(newIndex) {
  return files[newIndex];
}
