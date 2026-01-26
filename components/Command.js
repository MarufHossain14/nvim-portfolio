import Input from "./Input";
import Output from "./Output";

export default function Command({
  command,
  output,
  onSubmit,
  inputRef,
  history,
  suggestions,
}) {
  return (
    <div>
      <Input
        command={command}
        onSubmit={(command) => onSubmit(command)}
        inputRef={inputRef}
        history={history}
        suggestions={suggestions}
      />
      {output && <Output output={output} />}
    </div>
  );
}
