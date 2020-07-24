import AdSense from "react-adsense";

import React from "react";

export const Horizontal = () => {
  return (
    <AdSense.Google
      client="ca-pub-6783984672265911"
      slot="3501815130"
      style={{ display: "block" }}
      layout="in-article"
      format="fluid"
    />
  );
};

export const Square = () => {
  return (
    <AdSense.Google
      client="ca-pub-6783984672265911"
      slot="5570694833"
      style={{ display: "block" }}
      layout="in-article"
      format="fluid"
    />
  );
};

export const InArticle = () => {
  return (
    <AdSense.Google
      client="ca-pub-6783984672265911"
      slot="2621097869"
      style={{ display: "block" }}
      layout="in-article"
      format="fluid"
    />
  );
};
