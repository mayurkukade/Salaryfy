import { Autocomplete, TextField } from "@mui/material";
import { ChangeEvent } from "react";

export function TextFieldDropDown({ options, onOptionClick, onTextInput, value }: { options: Array<string>, onOptionClick?: (v: string | null) => void, onTextInput?: (v: string) => void, value: string | null }) {
  function onTextInput$(event: ChangeEvent<HTMLInputElement>) {
    if (onTextInput) { onTextInput(event.currentTarget.value); }
  }
  function onFieldChange(_event: React.ChangeEvent<object>, newValue: string | null): void {
    if (onOptionClick) { onOptionClick(newValue); }
  }
  return (
    <Autocomplete options={options} value={value?.length ? value : null}
      style={{ color: 'red' }} onChange={onFieldChange} size="small"
      renderInput={(params) => <TextField {...params} InputProps={{ sx: { fontWeight: 500, fontFamily: 'Lexend', lineHeight: '27px', fontSize: '18px' } }} onChange={onTextInput$} />} />
  );
}