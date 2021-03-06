import styled from 'styled-components';

export const Trow = styled.tr`
  padding: 0px 5px;
  border-bottom: 1px solid #dee2e6;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Cell = styled.td`
  padding: 7px 0px;
  font-size: 16px;
  color: #3b3e43;
  text-align: center;
`;

export const Tdata = Cell.extend`
  min-width: 90px;
`;

// Cell
export const VotesCell = Cell.extend`
  width: 155px;
  min-width: 155px;
`;

export const OrgNameCell = Cell.extend`
  width: 200px;
  min-width: 200px;
`;

export const NameCell = Cell.extend`
  width: 240px;
  min-width: 240px;
  position: sticky !important;
  left: 0;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid #dee2e6;
`;

export const AddressCell = Cell.extend`
  min-width: 180px;
`;

export const VersionCell = Cell.extend`
  font-weight: 600;
  color: ${({ color }) => color || '#3b3e43'};
  min-width: 115px;
`;

export const ArrowCell = Cell.extend`
  padding-right: 10px;
  width: 20px;
  min-width: auto;
  cursor: pointer;

  & svg path {
    fill: #757575;
  }

  &:hover svg path {
    fill: #548afd;
  }
`;

// Ping
export const PingCell = Cell.extend`
  width: 150px;
  min-width: 150px;
`;

export const PingSpan = styled.span`
  font-size: 14px;
  color: ${({ isPingUptated }) => (isPingUptated ? '#000' : '#84878b')};
`;

export const StyledSpan = styled.span`
  color: ${props => props.color};
`;

// time ago
export const TimeAgoCell = Cell.extend`
  width: 100px;
  min-width: 100px;
`;

export const TimeAgoBlock = styled.div`
  white-space: nowrap;
  overflow: hidden;
`;

// Others
export const NameBlock = styled.div`
  display: flex;
`;

export const NameWrapper = styled.div`
  margin-left: 20px;
`;

export const LabelWrapper = styled.div`
  padding-left: 10px;
  max-width: 20px;
`;

export const Index = styled.div`
  padding-left: 10px;
  min-width: 46px;
`;

export const TextSpan = styled.span`
  position: relative;
  bottom: 6px;
  font-size: 14px;
  color: #84878b;
`;

export const DetailsTextSpan = TextSpan.extend`
  position: relative;
  bottom: 6px;
  font-size: 10px;
  color: #3b3e43;
`;

export const TextLink = styled.a`
  display: inline-block;
  padding-right: 5px;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Svg
export const SvgDownArrow = styled.svg`
  width: 12px;
  height: 12px;
  ${({ isArrowClicked }) =>
    isArrowClicked && {
      transform: 'rotate(180deg)',
    }};
`;

export const SvgExternalLink = styled.svg`
  cursor: pointer;
  width: 12px;
  height: 12px;

  & path {
    fill: #757575;
  }

  &:hover path {
    fill: #548afd;
  }
`;
