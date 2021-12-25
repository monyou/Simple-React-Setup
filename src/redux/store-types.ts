type Global = {
  name: string;
  theme: "light" | "dark";
  loading: boolean;
  error: string;
  pageTitle: string;
};

export type ApplicationState = {
  global: Global;
};
