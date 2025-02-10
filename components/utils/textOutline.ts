interface OutlineOptions {
  color: string;
  thickness?: string;
}

/**
 * Generate a text outline using CSS filter property
 *
 * @param {OutlineOptions} options - The options to generate the text outline
 *
 * @example
 * generateTextOutline({ color: "white" });
 * // => "drop-shadow(1px 1px white) drop-shadow(1px -1px white) drop-shadow(-1px 1px white) drop-shadow(-1px -1px white)"
 *
 * NOTE: thickness > 1px will cause the text to be blurry
 * */
export const generateTextOutline = ({
  color,
  thickness = "1px",
}: OutlineOptions) => {
  return `
    drop-shadow(${thickness} ${thickness} ${color})
    drop-shadow(${thickness} -${thickness} ${color})
    drop-shadow(-${thickness} ${thickness} ${color})
    drop-shadow(-${thickness} -${thickness} ${color})
  `;
};
