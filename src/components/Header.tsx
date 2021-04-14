import React from 'react';
import { Box } from '../styles/Box';
import { H2 } from '../styles/Box/Typography/Typography';
import { PrimaryButton } from '../styles/Button/Button.base';
import styled from 'styled-components'

interface ViewHeaderProps {
  handledAddColumn: () => void;
}

const Header: React.FC<ViewHeaderProps> = (({ handledAddColumn }: ViewHeaderProps) => (
  <Box display="flex" direction="row" justify="space-between" p="10px">
    <H2 textAlign="center">Ticket management</H2>
    <ColumnAddButton onClick={handledAddColumn}>Add column</ColumnAddButton>
  </Box>
));

const ColumnAddButton = styled(PrimaryButton)`
  background-color: #ededed;

`

export default Header;