"use client";

import { Creative } from "./elements/creative";
import { Finance } from "./elements/finance";
import { Marketing } from "./elements/marketing";

export const Recruitment = () => {
  return (
    <div className="mx-auto px-4 my-12 max-w-5xl flex flex-col gap-12">
      <h1 className="text-4xl text-center">Recruitment is open!</h1>
      <Creative />
      <Marketing />
      <Finance />
    </div>
  );
}
