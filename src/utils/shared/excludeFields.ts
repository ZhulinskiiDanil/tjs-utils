// =========== UTILS ===========

const isObject = (obj: any) => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    !Array.isArray(obj)
  );
};

type FlattenKeys<T> = T extends object
  ? {
      [K in keyof T]: K | FlattenKeys<T[K]>;
    }[keyof T]
  : never;

// =========== CODE ===========

export function excludeFields<T extends Record<string, unknown>>(
  value: T,
  ...args:
    | FlattenKeys<typeof value>[]
    | [FlattenKeys<typeof value>[]]
) {
  const keys = (
    Array.isArray(args[0]) ? args[0] : args
  ) as FlattenKeys<typeof value>[];
  const deepCopy = JSON.parse(JSON.stringify(value));

  if (isObject(deepCopy)) {
    for (const key of keys) {
      if ((key as keyof typeof deepCopy) in deepCopy) {
        Reflect.deleteProperty(deepCopy, key);
      }
    }
  }

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      value[i] = excludeFields(value[i], ...args);
    }

    return value;
  }

  for (let key in deepCopy) {
    const elm = deepCopy[key];

    if (isObject(elm) || Array.isArray(elm)) {
      deepCopy[key] = excludeFields(elm, ...args);
    }
  }

  return deepCopy;
}
