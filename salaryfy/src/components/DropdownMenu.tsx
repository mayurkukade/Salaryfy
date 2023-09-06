import { Button, Menu, MenuItem, ButtonProps  } from "@mui/material";
import { ReactNode, useState } from "react";
import { CommonUtilities } from "../utils/common.utilities";

export default function DropdownMenu({ onOptionClick, options, className, label, endIcon, variant = 'outlined' }: { onOptionClick?: (value: string) => void, options?: Array<string>, className?: string, label: string, endIcon?: ReactNode, variant?: ButtonProps['variant'] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!options?.length) return;
    setAnchorEl(event.currentTarget);
  };

  function optionClicked(option:string): void {
    if(option && onOptionClick) { onOptionClick(option) }
    handleClose();
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={'flex ' + (className || '')}>
      <Button variant={ variant === 'text' ? 'outlined' : variant } sx={{ display: 'flex', flexGrow: '1', justifyContent: 'space-between' }} onClick={handleClick} endIcon={endIcon || <></>}>{label}</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {
          options?.map((option: string) => <MenuItem key={CommonUtilities.generateRandomString(10)} onClick={() => optionClicked(option)}>{option}</MenuItem>)
        }
      </Menu>
    </div>
  );
}