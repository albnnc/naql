export const separate = (source: string, separator: string): string[] => {
  const splits = source.split(separator);
  if (splits.length > 2) {
    const first = splits.shift();
    return [first, splits.join(separator)];
  }
  return splits;
};
