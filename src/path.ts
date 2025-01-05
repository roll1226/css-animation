export const PATH = {
  HOME: "/",
  ANIMATION1: "/animation1",
  ANIMATION2: "/animation2",
  ANIMATION3: "/animation3",
  EXAMPLE: "/example",
  NOT_FOUND: "/404",
};

export const PATHS = {
  [PATH.HOME]: () => import("./pages/home"),
  [PATH.ANIMATION1]: () => import("./pages/animation1"),
  [PATH.ANIMATION2]: () => import("./pages/animation2"),
  [PATH.ANIMATION3]: () => import("./pages/animation3"),
  [PATH.EXAMPLE]: () => import("./pages/example"),
  [PATH.NOT_FOUND]: () => import("./pages/notFound"),
};
