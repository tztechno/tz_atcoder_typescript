{
  const main = (input: string) => {
    const str = input.slice(0, 3);
    console.log('0' + str);
  };

  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  main(input);
}
