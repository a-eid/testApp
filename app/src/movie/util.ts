export function getPosterUri(path, size = 185) {
  return `http://image.tmdb.org/t/p/w${size}${path}`;
}
