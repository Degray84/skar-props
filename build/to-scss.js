import fs from "fs";

export const buildPropsScss = (
  { filename, props },
  { genTheme = false, prefix }
) => {
  const file = fs.createWriteStream("../src/scss/" + filename);

  let appendedMeta = "";

  Object.entries(props).forEach(([prop, val]) => {
    if (prop.includes("-@")) return;

    if (prefix) prop = `$` + prop.slice(2);

    file.write(`${prop}: ${val};\n`);
  });

  console.log(filename,props)
  genBreakpointMixin(file, props, "md");

  file.end(appendedMeta);
};

function genBreakpointMixin(file, breakpoints, def) {
  file.write(`@mixin breakpoint($size:${def}) {\n`);
  Object.keys(breakpoints).forEach((pointKey, index) => {
    if (index) {
      file.write(`@if $size== ${pointKey.slice(2)} {
  @media (min-width: ${breakpoints[pointKey]}) {
    @content;
  }
}\n`);
    } else {
      file.write(`@if $size== ${pointKey.slice(2)} {
  @media (max-width: ${breakpoints[pointKey]}) {
    @content;
  }
}\n`);
    }
  });
  file.write("}\n");
}
