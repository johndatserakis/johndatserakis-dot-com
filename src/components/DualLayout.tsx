import styled from '@emotion/styled';
import { colors } from '@mui/joy';
import { ReactNode, useRef } from 'react';

import { ScrollingMouseIcon, useScrolledToBottom } from 'src/components/ScrollingMouseIcon';
import { BREAKPOINT, BREAKPOINT_EXTRA_LARGE } from 'src/contants/style';

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

  @media (min-width: ${BREAKPOINT_EXTRA_LARGE}px) {
    grid-template-columns: 0.4fr 1fr;
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
  width: 100%;
  overflow: auto;
`;

const StyledScrollingMouseIcon = styled(ScrollingMouseIcon)`
  display: none;

  @media (min-width: ${BREAKPOINT}px) {
    display: block;
  }
`;

interface DualLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export const DualLayout = ({ leftContent, rightContent }: DualLayoutProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const isScrolledToBottom = useScrolledToBottom({ ref: divRef });

  return (
    <Container>
      <LeftContainer>{leftContent}</LeftContainer>
      <RightContainer ref={divRef}>
        {rightContent}
        <StyledScrollingMouseIcon isVisible={!isScrolledToBottom} />
      </RightContainer>
    </Container>
  );
};
