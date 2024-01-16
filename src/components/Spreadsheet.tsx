import { Box, Grid, GridItem } from '@chakra-ui/react';
import _ from 'lodash';
import React, { useRef, useState } from 'react';

import Cell from 'components/Cell';
import Label from 'components/Label';

const NUM_ROWS = 10;
const NUM_COLUMNS = 10;

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Spreadsheet: React.FC = () => {
  const [spreadsheetState, setSpreadsheetState] = useState(
    _.times(NUM_ROWS, () => _.times(NUM_COLUMNS, () => ({ value: '', ref: useRef() }))),
  );

  return (
    <Box width="full">
      <Grid templateColumns={`repeat(${NUM_COLUMNS + 1}, 1fr)`}>
        {Array.from({ length: NUM_COLUMNS + 1 }).map((ignore, columnIdx) => (
          columnIdx > 0 ? <GridItem w='100%'><Label key={`header/${columnIdx}`} value={ columnIdx } /></GridItem> : <GridItem w='100%' />
        ))}
        {spreadsheetState.map((row, rowIdx) => {
          const gridItems = row.map((cellValue, columnIdx) => (
            <GridItem w='100%'><Cell
              ref={cellValue.ref}
              columnIndex={columnIdx}
              rowIndex={rowIdx}
              key={`${rowIdx}/${columnIdx}`}
              value={cellValue.value}
              onChange={(newValue: string) => {
                const newCell = { 
                  value: newValue, 
                  ref: spreadsheetState[rowIdx][columnIdx].ref 
                };
                const newRow = [
                  ...spreadsheetState[rowIdx].slice(0, columnIdx),
                  newCell,
                  ...spreadsheetState[rowIdx].slice(columnIdx + 1),
                ];
                setSpreadsheetState([
                  ...spreadsheetState.slice(0, rowIdx),
                  newRow,
                  ...spreadsheetState.slice(rowIdx + 1),
                ]);
              }}
              onBlur={(rawValue: string) => {
                let newValue;
                if (rawValue && !Number.isNaN(Number(rawValue))) {
                  newValue = moneyFormatter.format(Number(rawValue));
                }

                const newCell = { 
                  value: newValue, 
                  ref: spreadsheetState[rowIdx][columnIdx].ref 
                };
                const newRow = [
                  ...spreadsheetState[rowIdx].slice(0, columnIdx),
                  newCell,
                  ...spreadsheetState[rowIdx].slice(columnIdx + 1),
                ];
                setSpreadsheetState([
                  ...spreadsheetState.slice(0, rowIdx),
                  newRow,
                  ...spreadsheetState.slice(rowIdx + 1),
                ]);
              }}
              onKeyDown={(key: string) => {
                const c = columnIdx;
                const r = rowIdx;

                if (key === 'ArrowDown' && r < NUM_COLUMNS - 1) {
                  spreadsheetState[r + 1][c].ref.current?.focus();
                } else if (key === 'ArrowUp' && r > 0) {
                  spreadsheetState[r - 1][c].ref.current?.focus();
                } else if (key === 'ArrowLeft' && c > 0) {
                  spreadsheetState[r][c - 1].ref.current?.focus(); 
                } else if (key === 'ArrowRight' && c < NUM_ROWS - 1) {
                  spreadsheetState[r][c + 1].ref.current?.focus(); 
                }
              }}
            /></GridItem>
          ));

          return [
              <GridItem key="rowHeader" w='100%'><Label value={ rowIdx + 1 } /></GridItem>,
              ...gridItems,
          ];
        })}
      </Grid>
    </Box>
  );
};

export default Spreadsheet;
