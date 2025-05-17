import { Code } from "bright";

export const Example = () => (
  <Code
    lang="tsx"
    title="code"
    children={`
<Carousel>
    <CarouselSlide>Slide 1</CarouselSlide>
    <CarouselSlide>Slide 2</CarouselSlide>
    <CarouselSlide>Slide 3</CarouselSlide>
    <CarouselSlide>Slide 4</CarouselSlide>
</Carousel>
`.trim()}
  />
);
