import React from "react";

export interface PageNameModel {
  pageName: string;
  setPageName: (pageName: string) => void;
}

export const PageNameContext = React.createContext<PageNameModel>({
  pageName: "",
  setPageName: () => undefined,
});

export const PageNameProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [pageName, setPageName] = React.useState<string>("company");
  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      {children}
    </PageNameContext.Provider>
  );
};
