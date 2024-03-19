export function getDefaultDate(
  locales: Intl.LocalesArgument,
  at: string | null | undefined,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateAt = at ? new Date(at) : new Date();
  const localeDate = dateAt.toLocaleDateString(locales);
  const localeTime = dateAt.toLocaleTimeString(locales, {
    timeStyle: 'short',
    ...(options || {})
  });
  const exactTime = `${localeDate} ${localeTime}`;

  return exactTime;
}
