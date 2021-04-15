import React from 'react';
import { Box, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

interface ViewHeaderProps {
  handledAddColumn: () => void;
  handleClearBoard: () => void;
}

const Header: React.FC<ViewHeaderProps> = (({ handledAddColumn, handleClearBoard }: ViewHeaderProps) => (
  <AppBar position="static" style={{ backgroundColor: '#f7f8fb' }}>
    <Box display="flex" flexDirection="row" justifyContent="space-between" p="5px 15px" alignItems="center">
    <Box component={'h2'} textAlign="center" color="#6775c3">Ticket management</Box>
    <Box>
      <Button
          size="small"
          color="primary"
          onClick={handledAddColumn}>
          Add column
      </Button>
      <Button
          size="small"
          color="secondary"
          onClick={handleClearBoard}>
          Clear board
      </Button>
    </Box>
  </Box>
</AppBar>

));

export default Header;