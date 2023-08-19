import { TextField, TextFieldProps } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
export type InputFieldProps<T extends FieldValues> = TextFieldProps & {
  name: Path<T>;
  control: Control<T>;
};

export function InputField<T extends FieldValues>({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,
  // khi cố tình truyền value cx sẽ kh bị ghi đè vì đổi sang biến khác r
  ...rest
}: InputFieldProps<T>) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return (
    <TextField
      fullWidth
      size="small"
      name={name}
      margin="normal"
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        externalOnChange?.(event);
      }}
      onBlur={onBlur}
      error={!!error}
      helperText={error?.message || ""}
      inputRef={ref}
      {...rest}
    />
  );
}
