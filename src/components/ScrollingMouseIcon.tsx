import styled from '@emotion/styled';
import { colors } from '@mui/joy';
import { RefObject, useEffect, useState } from 'react';

interface UseScrolledToBottomOpts {
  ref: RefObject<HTMLDivElement>;
}

export const useScrolledToBottom = ({ ref }: UseScrolledToBottomOpts) => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const div = ref.current;

    if (!div) return;

    const handleScroll = () => {
      const { scrollTop, offsetHeight, scrollHeight } = div;
      const isBottom = scrollTop + offsetHeight >= scrollHeight;

      setIsScrolledToBottom(isBottom);
    };

    div.addEventListener('scroll', handleScroll);

    return () => {
      div.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isScrolledToBottom;
};

interface ScrollingMouseIconProps {
  className?: string;
  isVisible: boolean;
}

const Mouse = styled.div<ScrollingMouseIconProps>`
  border-radius: 15px;
  border: 1px solid #000;
  bottom: 20px;
  height: 34px;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  position: absolute;
  right: 20px;
  transition: opacity 0.2s ease-in-out;
  width: 20px;
`;

const ScrollIcon = styled.div`
  animation: scroll-animation 1s infinite;
  background: ${colors.grey[900]};
  border-radius: 4px;
  height: 3px;
  margin: 6px auto;
  width: 3px;

  @keyframes scroll-animation {
    0% {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateY(22px);
    }
  }
`;

export const ScrollingMouseIcon = ({ className, isVisible }: ScrollingMouseIconProps) => (
  <Mouse className={className} isVisible={isVisible}>
    <ScrollIcon />
  </Mouse>
);
