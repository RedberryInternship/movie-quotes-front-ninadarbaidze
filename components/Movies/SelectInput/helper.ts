export const getValue = (options: any[], field: { value: string | any[] }) => {
  if (options) {
    return options.filter(
      (option: { value: any }) => field.value.indexOf(option.value) >= 0
    );
  } else {
    return [];
  }
};
