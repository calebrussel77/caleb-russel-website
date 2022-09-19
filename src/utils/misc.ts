export const getNameInitials = (text = '') => {
  const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

  const initials = [...(text && text.matchAll(rgx))] || [];

  const initialsResult = (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
  ).toUpperCase();

  return initialsResult;
};

/**
 *
 * @param str The string about we generate the color
 * @param s the saturation (s) of returned color(a number between 0 and 100)
 * @param l the lightness (l) of returned color(a number between 0 and 100)
 * @returns the hsl pastel color of the string passed
 */
export function stringToHslColor(str = 'random name', s = 50, l = 80) {
  let hash = 0;
  for (let i = 0; i < str?.length; i++) {
    hash = str?.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;

  return `hsl(${h}, ${s}%, ${l}%)`;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#eee" offset="20%" />
      <stop stop-color="#f5f5f5" offset="50%" />
      <stop stop-color="#eee" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#eee" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export const blurDataURL = (width = 700, height = 475) => {
  return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
};
