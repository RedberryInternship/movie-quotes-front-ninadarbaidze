export const getValue = (options: any[], field: { value: string }) => {
  if (options) {
    return options.filter(
      (option: { value: string }) => field.value.indexOf(option.value) >= 0
    );
  } else {
    return [];
  }
};
