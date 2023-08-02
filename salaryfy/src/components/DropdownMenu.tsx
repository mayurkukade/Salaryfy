import { Button, Menu, MenuItem, ButtonProps  } from "@mui/material";
import { ReactNode, useState } from "react";

export default function DropdownMenu({ className, label, endIcon, variant = 'outlined' }: { className?: string, label: string, endIcon?: ReactNode, variant?: ButtonProps['variant'] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={'flex ' + className}>
      <Button variant={ variant === 'text' ? 'outlined' : variant } sx={{ display: 'flex', flexGrow: '1', justifyContent: 'space-between' }} onClick={handleClick} endIcon={endIcon || <></>}>{label}</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}