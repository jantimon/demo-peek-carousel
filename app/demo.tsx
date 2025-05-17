import { css } from "next-yak";
import { Carousel, CarouselSlide } from "../components/carousel/carousel";

export function Demo({children}: {children: React.ReactNode}) {
  // Sample carousel items
  const items = [
    {
      id: 1,
      title: "Slide 1",
      description: "Minimalist design",
      color: "#264653",
    },
    {
      id: 2,
      title: "Slide 2",
      description: "Simple elegance",
      color: "#2a9d8f",
    },
    {
      id: 4,
      title: "Slide 3",
      description: "Sleek interface",
      color: "#f4a261",
    },
    {
      id: 5,
      title: "Slide 4",
      description: "Bold simplicity",
      color: "#e76f51",
    },
    { id: 6, title: "Slide 5", description: "Clean lines", color: "#264653" },
    {
      id: 7,
      title: "Slide 6",
      description: "Timeless design",
      color: "#2a9d8f",
    },
    {
      id: 9,
      title: "Slide 7",
      description: "Contemporary look",
      color: "#f4a261",
    },
    {
      id: 10,
      title: "Slide 8",
      description: "Chic and modern",
      color: "#e76f51",
    },
  ];

  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        padding: 4rem 1rem;
        background-color: #fafafa;
        font-family: var(--font-geist-sans);
      `}
    >
      <h1
        css={css`
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #333;
        `}
      >
        Demo Peek Carousel
      </h1>
      <p
        css={css`
          max-width: 640px;
          text-align: center;
          margin-bottom: 3rem;
          color: #666;
          line-height: 1.6;
        `}
      >
        A responsive carousel with consistent slide dimensions and a 50% peek
        effect for the last visible slide.
      </p>

      <h2
        css={css`
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        `}
      >
        Code
      </h2>
      {children}

      <h2
        css={css`
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        `}
      >
        Carousel Example
      </h2>

      <div
        css={css`
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        `}
      >
        <Carousel>
          {items.map((item) => (
            <CarouselSlide key={item.id} color={item.color}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>


      <div
        css={css`
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 4rem auto 0;
        `}
      >
        <Carousel>
          {items.map((item) => (
            <CarouselSlide key={item.id} color={item.color}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>

      <div
        css={css`
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 4rem auto 0;
        `}
      >
        <Carousel>
          {items.map((item) => (
            <CarouselSlide key={item.id} color={item.color}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>

      <footer
        css={css`
          margin-top: 4rem;
          padding: 1rem;
          font-size: 0.875rem;
          color: #888;
          text-align: center;
        `}
      >
        <p>Built with Next.js and next-yak</p>
        <a
          href="https://github.com/jantimon/demo-peek-carousel"
          css={css`
            font-family: var(--font-geist-mono);
            margin-top: 0.5rem;
          `}
        >
          github.com/jantimon/demo-peek-carousel
        </a>
      </footer>
    </main>
  );
}
