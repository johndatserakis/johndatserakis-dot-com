import styled from '@emotion/styled';
import { colors } from '@mui/joy';
import { ReactNode } from 'react';

const BREAKPOINT = 992;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${BREAKPOINT}px) {
    display: grid;
    gap: 0;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;
  }
`;

const LeftContainer = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
`;

const RightContainer = styled.div`
  background: ${colors.grey[50]};
  height: 100%;
  overflow: auto;
  width: 100%;
`;

interface DualLayout {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export const DualLayout = ({ leftContent, rightContent }: DualLayout) => (
  <Container>
    <LeftContainer>{leftContent}</LeftContainer>
    <RightContainer>{rightContent}</RightContainer>
  </Container>
);
