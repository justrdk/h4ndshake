import styled from 'styled-components';
import { Item } from 'semantic-ui-react';

const StyledItem = styled(Item)`
  padding: 15px !important;
  cursor: pointer;
  &:hover {
    background-color: #F0F0F0 !important;
  }
`;

export default StyledItem;
