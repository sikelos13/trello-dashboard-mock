import React from 'react';
import { Input } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Box, FormLabel } from '@material-ui/core';
import { SortType } from "../containers/MoviesView";
import { Pagination } from "../api/types/Pagination";

interface ViewHeaderProps {
  handleSearch: (event: any) => void;
  handleSortChange: (event: any) => void;
  sortMoviesBy: SortType;
  searchTerm: string;
  isSearching: boolean;
  pagination: Pagination;
}

const Header: React.FC<ViewHeaderProps> = (({ handleSearch, sortMoviesBy, isSearching, pagination, handleSortChange, searchTerm }: ViewHeaderProps) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Box component="h2" fontWeight="500" fontSize="2rem" color="#3569b8">Ticket management</Box>
    <Box display="flex" width="100%" flexDirection="row" alignItems="center" justifyContent="space-around" p={1} className="Header_Actions">
      {pagination.total_pages > 0 &&
        <Box className="SortHeader_Action" mt="10px">
        <Box component={FormLabel} mr="10px">Sort by</Box>
          <NativeSelect
              value={sortMoviesBy}
              onChange={handleSortChange}
              disabled={isSearching}
          >
              <option value="">Default</option>
              <option value="highest_vote_average">By highest score</option>
              <option value="lowest_vote_average">By lowest score</option>
          </NativeSelect>
        </Box>
      }
    </Box>
  </Box>
));

export default Header;