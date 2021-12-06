type Global = {
  name: string;
  theme: "light" | "dark";
  loading: boolean;
  error: string;
};

export type ApplicationState = {
  global: Global;
};
