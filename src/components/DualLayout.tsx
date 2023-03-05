import styled from '@emotion/styled';
import { colors } from '@mui/joy';
import { ReactNode, useState } from 'react';

import { ScrollingMouseIcon } from 'src/components/ScrollingMouseIcon';
import { BREAKPOINT } from 'src/contants/style';

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
  width: 100%;
  overflow: auto;
`;

interface DualLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export const DualLayout = ({ leftContent, rightContent }: DualLayoutProps) => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const castedEventTarget = e.target as HTMLDivElement;
    const isBottom =
      castedEventTarget.scrollHeight - castedEventTarget.clientHeight <=
      castedEventTarget.scrollTop;

    setIsScrolledToBottom(isBottom);
  };

  return (
    <Container>
      <LeftContainer>{leftContent}</LeftContainer>
      <RightContainer onScroll={onScroll}>
        {rightContent}
        <ScrollingMouseIcon isVisible={!isScrolledToBottom} />
      </RightContainer>
    </Container>
  );
};
