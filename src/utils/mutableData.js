function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function cloneMutableValue(value) {
  if (Array.isArray(value)) {
    return value.map(cloneMutableValue);
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        cloneMutableValue(nestedValue),
      ]),
    );
  }

  return value;
}

export function syncMutableValue(target, source) {
  if (Array.isArray(source)) {
    if (!Array.isArray(target)) {
      return cloneMutableValue(source);
    }

    target.splice(0, target.length, ...source.map(cloneMutableValue));
    return target;
  }

  if (!isPlainObject(source)) {
    return source;
  }

  Object.keys(target).forEach((key) => {
    if (!(key in source)) {
      delete target[key];
    }
  });

  Object.entries(source).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      if (!Array.isArray(target[key])) {
        target[key] = [];
      }

      syncMutableValue(target[key], value);
      return;
    }

    if (isPlainObject(value)) {
      if (!isPlainObject(target[key])) {
        target[key] = {};
      }

      syncMutableValue(target[key], value);
      return;
    }

    target[key] = value;
  });

  return target;
}
