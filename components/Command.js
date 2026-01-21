import Input from "./Input";
import Output from "./Output";

export default function Command({ command, output, onSubmit, inputRef }) {
  return (
    <div>
      <Input
        command={command}
        onSubmit={(command) => onSubmit(command)}
        inputRef={inputRef}
      />
      {output && <Output output={output} />}
    </div>
  );
}
