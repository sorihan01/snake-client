const stdin = process.stdin;
const setupInput = () => {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};
const handleUserInput = stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
});

module.exports = {setupInput};