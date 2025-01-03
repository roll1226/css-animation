export const PATH = {
  HOME: "/",
  NOT_FOUND: "/404",
};

export const PATHS = {
  [PATH.HOME]: () => import("./pages/home"),
  [PATH.NOT_FOUND]: () => import("./pages/notFound"),
};
