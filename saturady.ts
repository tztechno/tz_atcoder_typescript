type MainFn = () => void;
const main: MainFn = () => {
  const { s } = readConsole();
  console.log(nextSaturDay(s));
};

type NextSaturDayFn = (s: string) => number;
export const nextSaturDay: NextSaturDayFn = (s) => {
  switch (s) {
    case "Monday":
      return 5;
    case "Tuesday":
      return 4;
    case "Wednesday":
      return 3;
    case "Thursday":
      return 2;
    case "Friday":
      return 1;
    default:
      throw new Error("Invalid input");
  }
}

type InputType = {
  s: string;
};
type ReadConsoleFn = (path?: string) => InputType;
export const readConsole: ReadConsoleFn = (path = "/dev/stdin") => {
  const decoder = new TextDecoder("utf-8");
  const input = decoder.decode(
    Deno.readFileSync(path),
  ).split("\n")[0];
  return { s: input };
};

if (import.meta.main) {
  main();
}
