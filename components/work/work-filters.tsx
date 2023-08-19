import { WorkFiltersPayload } from "@/models";
import { Search } from "@mui/icons-material";
import { Box, Button, InputAdornment, debounce } from "@mui/material";
import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { InputField } from "../form";

export interface WorkFiltersProps {
  initialValues?: WorkFiltersPayload;
  onSubmit?: (payload: WorkFiltersPayload) => void;
}

export function WorkFilters({ initialValues, onSubmit }: WorkFiltersProps) {
  const { control, handleSubmit } = useForm<WorkFiltersPayload>({
    defaultValues: {
      search: "",
      ...initialValues,
    },
    mode: "onChange",
  });

  async function handleSearchSubmit(values: WorkFiltersPayload) {
    await onSubmit?.(values);
  }

  const debounceSearchChange = debounce(handleSubmit(handleSearchSubmit), 500);

  return (
    <Box component="form" onSubmit={handleSubmit(handleSearchSubmit)}>
      <InputField
        control={control}
        name="search"
        placeholder="Search work by title"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          debounceSearchChange();
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
