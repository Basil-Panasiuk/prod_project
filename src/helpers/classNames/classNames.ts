export const classNames = (
  cls: string,
  mods: Record<string, string | boolean>,
  additional: string[],
): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
