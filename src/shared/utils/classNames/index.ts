export function classNames(
  mainClasses: string,
  dynamicClasses: Record<string, unknown> = {},
  additionalClasses: string[] = []
): string {

  const activeDynamicClasses =
    Object.entries(dynamicClasses)
      .reduce((result: string[], [className, condition]) => {
        if (condition) result.push(className);
        return result;
      }, []);

  return [
    mainClasses,
    ...activeDynamicClasses,
    ...additionalClasses
  ].join(' ');
}

export { classNames as cn };
