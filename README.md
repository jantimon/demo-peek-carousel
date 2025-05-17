# Demo Peek Carousel

A React Next.js implementation of a carousel where the last slide is always 50% visible ("peek" effect).
This demo showcases a responsive carousel that maintains consistent minimum and maximum slide dimensions while adapting to different screen sizes.

## Concept

```
+-------------------------------------------+
|                                           |
|  +--------+  +--------+  +--------+  +----|
|  |        |  |        |  |        |  |    |
|  | Slide 1|  | Slide 2|  | Slide 3|  | Slide 4
|  |        |  |        |  |        |  |    |
|  +--------+  +--------+  +--------+  +----|
|                                           |
+-------------------------------------------+
    |    <---- Visible Area ---->      | <- Peek ->|
```

## Api

```tsx
<Carousel>
  <CarouselSlide>Slide 1</CarouselSlide>
  <CarouselSlide>Slide 2</CarouselSlide>
  <CarouselSlide>Slide 3</CarouselSlide>
  <CarouselSlide>Slide 4</CarouselSlide>
</Carousel>
```

## Features

- ✨ 50% peek effect for the last visible slide
- 🔄 Consistent slide dimensions with responsive behavior
- 📱 Works across different screen sizes
- 🎯 Touch/swipe and button navigation support
- 🚫 No JavaScript for layout calculations
- 🎨 Styled with [next-yak](https://yak.js.org/) (zero-runtime CSS-in-JS)

## Live Demo

[View the live demo](https://peek-carousel.vercel.app/)

## Technology Stack

- **Framework**: Next.js with React
- **Node Version**: 22+
- **Styling**: next-yak (Zero-runtime CSS-in-JS powered by Rust)
- **Languages**: TypeScript, CSS

## Installation

Make sure you have Node.js 22+ installed on your system.

```bash
# Clone the repository
git clone https://github.com/jantimon/demo-peek-carousel.git
cd demo-peek-carousel

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`
