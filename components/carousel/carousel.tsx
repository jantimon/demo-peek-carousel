import { styled } from "next-yak";
import { containerQueries } from "./containerQueries.yak";
import { ScrollBy } from "./scrollBy";

export const Carousel = ({ children }) => {
  return (
    <ScrollWrapper>
      <SlideButtonPrev amount={-400} />
      <CarouselContainer>{children}</CarouselContainer>
      <SlideButtonNext amount={400} />
    </ScrollWrapper>
  );
};

export const CarouselSlide = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <CarouselSlideWrapper
      style={{
        backgroundColor: color,
      }}
    >
      {children}
    </CarouselSlideWrapper>
  );
};

const ScrollWrapper = styled("peek-carousel" as "div")`
  display: block;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  container: scroll-wrapper / inline-size;
  scrollbar-width: none;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const CarouselContainer = styled.ul`
  display: flex;
  scroll-snap-align: start;
  list-style: none;
  ${containerQueries};
`;

const CarouselSlideWrapper = styled.li`
  padding: 1rem;
  margin: 0;
  box-sizing: border-box;
  flex: 0 0 auto;
  overflow: hidden;
  width: var(--slide-width);
  scroll-snap-align: start;
`;

const SlideButton = styled(ScrollBy)`
  min-width: 0px;
  background: transparent;
  width: 0;
  container-type: scroll-state;
  position: sticky;
  top: 50%;
  border: none;
  &::before {
    width: 1em;
    height: 1em;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    aspect-ratio: 1;
    color: white;
    padding: 0.5em;
    cursor: pointer;
    z-index: 1;
    opacity: 1;
    transition:
      opacity 0.3s ease,
      translate 0.3s ease;
    text-box-trim: trim-both;
    text-box-edge: cap alphabetic;
  }
`;

const SlideButtonPrev = styled(SlideButton)`
  left: 0;
  transform: translateX(10px);
  &::before {
    display: block;
    content: "←" / "Previous slide";
    @container not scroll-state(stuck: left) {
      translate: -200% 0;
      opacity: 0;
    }
  }
`;

const SlideButtonNext = styled(SlideButton)`
  right: 0;
  transform: translateX(-10px);
  margin-left: -40px;
  &::before {
    display: block;
    content: "→" / "Next slide";
    translate: -100% 0;
    @container not scroll-state(stuck: right) {
      translate: 200% 0;
      opacity: 0;
    }
  }
`;
