"use client";

import { useState } from "react";
import styles from "./Input.module.css";

export default function Input({
  command,
  onSubmit,
  inputRef,
  history = [],
  suggestions = [],
}) {
  const [_command, setCommand] = useState(command ? command : "");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [draftCommand, setDraftCommand] = useState("");
  const [autocompleteMatches, setAutocompleteMatches] = useState(null);
  const [autocompleteIndex, setAutocompleteIndex] = useState(-1);

  const normalizeCommand = (value) => value.trim().toLowerCase();

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistoryIndex(-1);
    setDraftCommand("");
    setAutocompleteMatches(null);
    setAutocompleteIndex(-1);
    setCommand("");
    return onSubmit(_command);
  };

  const handleHistoryNav = (event) => {
    if (command || history.length === 0) return;
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();

    if (historyIndex === -1) {
      setDraftCommand(_command);
    }

    const nextIndex =
      event.key === "ArrowUp"
        ? historyIndex === -1
          ? history.length - 1
          : Math.max(0, historyIndex - 1)
        : historyIndex === -1
          ? -1
          : Math.min(history.length - 1, historyIndex + 1);

    if (nextIndex === -1) {
      setCommand(draftCommand);
    } else {
      setCommand(history[nextIndex]);
    }
    setAutocompleteMatches(null);
    setAutocompleteIndex(-1);
    setHistoryIndex(nextIndex);
  };

  const handleAutocomplete = (event) => {
    if (event.key !== "Tab" || command) return;
    if (!suggestions.length) return;
    event.preventDefault();

    const inputValue = _command;
    const normalizedInput = normalizeCommand(inputValue);
    const matches = suggestions.filter((item) =>
      normalizeCommand(item).startsWith(normalizedInput)
    );

    if (!matches.length) return;

    if (autocompleteMatches?.length) {
      const nextIndex = (autocompleteIndex + 1) % autocompleteMatches.length;
      setAutocompleteIndex(nextIndex);
      setCommand(autocompleteMatches[nextIndex]);
      return;
    }

    if (matches.length === 1) {
      setCommand(matches[0]);
      return;
    }

    setAutocompleteMatches(matches);
    setAutocompleteIndex(0);
    setCommand(matches[0]);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="command">
        <span style={{ color: "#ff9e64" }}>λ</span> ::{" "}
        <span style={{ color: "var(--primary)" }}>~</span>{" "}
        <span style={{ color: "var(--secondary)" }}>&gt;&gt;</span>
      </label>

      <input
        type="text"
        className={styles.input}
        value={_command}
        onChange={(e) => {
          setCommand(e.target.value);
          if (historyIndex !== -1) setHistoryIndex(-1);
          setAutocompleteMatches(null);
          setAutocompleteIndex(-1);
        }}
        onKeyDown={(event) => {
          handleHistoryNav(event);
          handleAutocomplete(event);
        }}
        disabled={command ? true : false}
        ref={(input) => {
          if (inputRef) {
            inputRef.current = input;
          }
          if (input && !command) {
            input.focus();
          }
        }}
        autoFocus={command === ""}
      />
    </form>
  );
}
