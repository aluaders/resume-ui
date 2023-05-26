import React, { FC } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
 
export const Button: FC<MuiButtonProps> = ({ children, ...args }) => (
  <MuiButton {...args}>{children}</MuiButton>
);