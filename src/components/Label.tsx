import { Box } from '@chakra-ui/react';
import React from 'react';

interface Props {
  value: number;
}

const Label: React.FC<Props> = ({ value }) => {
  return (
    <Box className="runway-label">
      { value }
    </Box>
  );
};

export default Label;
