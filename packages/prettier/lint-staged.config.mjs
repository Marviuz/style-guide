function lint(files) {
  return `eslint --fix ${files.join(' ')}`;
}

export default {
  '**/*.(c|m)?js': ['prettier --write', lint],
};
