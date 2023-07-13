export const formatClassnames = (...args: any[]) => {
  const classnames: string[] = [];

  for (var i = 0; i < args.length; i++) {
    if (args[i]) {
      classnames.push(args[i]);
    }
  }

  return classnames.join(' ');
};
