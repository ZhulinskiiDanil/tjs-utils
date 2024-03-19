export function getTimeFormatUnitByTimestamp(timestamp: number) {
  const timestamps = [
    [1000 * 60 * 60 * 24 * 30 * 12, 'year'] as const,
    [1000 * 60 * 60 * 24 * 30 * 3, 'quarter'] as const,
    [1000 * 60 * 60 * 24 * 30, 'month'] as const,
    [1000 * 60 * 60 * 24 * 7, 'week'] as const,
    [1000 * 60 * 60 * 24, 'day'] as const,
    [1000 * 60 * 60, 'hour'] as const,
    [1000 * 60, 'minute'] as const,
    [1000, 'second'] as const
  ];

  return (
    timestamps.find((elm) => elm[0] <= timestamp)?.[1] ||
    'second'
  );
}
