import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoginPayload } from "@/models";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export interface LoginFromProps {
  onSubmit?: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFromProps) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter username")
      .min(4, "Username is required to have at least 4 characters"),
    password: yup
      .string()
      .required("Please enter password")
      .min(6, "password is required to have at least 4 characters"),
  });

  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  async function handleLoginSubmit(values: LoginPayload) {
    await onSubmit?.(values);
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField control={control} name="username" label="Username" />
      <InputField
        type={showPassword ? "text" : "password"}
        control={control}
        name="password"
        label="Password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        disabled={isSubmitting}
        startIcon={isSubmitting ? <CircularProgress /> : null}
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
      >
        Login
      </Button>
    </Box>
  );
}
