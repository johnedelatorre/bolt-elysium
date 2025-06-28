import React from "react";
import { PageBodySubsection } from "./sections/PageBodySubsection/PageBodySubsection";
import { PageSideNavSubsection } from "./sections/PageSideNavSubsection";

export const IntegrationsLanding = (): JSX.Element => {
  return (
    <div className="flex h-screen items-stretch bg-coredarkthemedarktheme-background overflow-hidden">
      <PageSideNavSubsection />
      <PageBodySubsection />
    </div>
  );
};