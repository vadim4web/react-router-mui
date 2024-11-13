import { createElement } from "react";

const renderHTMLspan = (rawHTML) => createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

export default renderHTMLspan;