// Slide Size Boundaries
const slideMinWidth = 150;
const slideMaxWidth = 200;

// Calculate for each width how many slides would fit in the container given that the last slide has a 50% peek effect
export const containerQueries = (() => {
  const optimalSlideWidth = (slideMinWidth + slideMaxWidth) / 2;
  const stepSize = 20;

  let currentContainerQueryMinWidth = 0;
  let currentOptimalSlideCount = 0;
  let css = "--slide-count: 1;";

  for (
    let containerWidth = 320;
    containerWidth <= 1200;
    containerWidth += stepSize
  ) {
    const slideCounts = [
      Math.floor(containerWidth / optimalSlideWidth) + 0.5,
      Math.floor(containerWidth / slideMaxWidth) - 0.5,
      Math.floor(containerWidth / slideMinWidth) + 0.5,
    ];

    const distanceToOptimal = slideCounts.map((count) => {
      return Math.abs(
        (containerWidth + stepSize / 2) / count - optimalSlideWidth,
      );
    });

    const optimalIndex = distanceToOptimal.indexOf(
      Math.min(...distanceToOptimal),
    );
    const optimalSlideCount = slideCounts[optimalIndex];
    if (optimalSlideCount !== currentOptimalSlideCount) {
      if (currentOptimalSlideCount !== 0) {
        currentContainerQueryMinWidth = containerWidth;
      }
      currentOptimalSlideCount = optimalSlideCount;
      css += `
            @container (min-width: ${currentContainerQueryMinWidth}px) {
                --slide-count: ${currentOptimalSlideCount};
            }
        `;
    }
  }

  css += `
    --slide-width: calc(100cqw / var(--slide-count));
  `;

  return css;
})();
