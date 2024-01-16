import { Input, Box } from '@chakra-ui/react';
import React, { forwardRef, useCallback } from 'react';

interface Props {
  value: string;
  onChange: (newValue: string) => void;
  onBlur: (newValue: string) => void;
  onKeyDown: (key: string) => void;
  rowIndex: number;
  columnIndex: number
}

const Cell: React.FC<Props> = forwardRef(({ value, onChange, onBlur, onKeyDown, rowIndex, columnIndex }, ref) => {
  const onChangeHandler = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (ev) => {
      onChange(ev.target.value);
    },
    [onChange],
  );
  const onBlurHandler = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (ev) => {
      onBlur(ev.target.value);
    },
    [onBlur],
  );
  const onKeyDownHandler = useCallback<React.KeyboardEventHandler<HTMLInputElement>>(
    (ev) => {
      onKeyDown(ev.key);
    },
    [onKeyDown],
  );

  return (
    <Box>
      <Input
        aria-label={`cell in row ${rowIndex} and column ${columnIndex}`}
        ref={ref}
        value={value} 
        borderRadius={0} 
        width="full" 
        onChange={onChangeHandler} 
        onBlur={onBlurHandler}
        onKeyDown={onKeyDownHandler} />
    </Box>
  );
});

export default Cell;
