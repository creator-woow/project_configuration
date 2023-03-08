export function classNames(defaultClasses: string, dynamicClasses: Record<string, unknown>): string {

  const appliedClasses = Object.entries(dynamicClasses).reduce((result: string[], [className, condition]) => {
    if (condition) result.push(className);
    return result;
  }, []);

  return [
    defaultClasses,
    ...appliedClasses
  ].join(' ')
}