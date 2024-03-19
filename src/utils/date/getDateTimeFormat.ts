export function getDateTimeFormat(
  locales: string | string[],
  at?: Date | string | number | null,
  options?: Intl.DateTimeFormatOptions
) {
  if (!at) return '';
  const date = new Date(at);
  const opts = options || {};

  return new Intl.DateTimeFormat(locales, {
    dateStyle: 'long',
    timeStyle: 'short',

    ...opts
  }).format(date);
}
