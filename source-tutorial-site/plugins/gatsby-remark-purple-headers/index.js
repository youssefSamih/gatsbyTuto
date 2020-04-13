const visit = require("unist-util-visit");
const ToString = require("mdast-util-to-string");

module.exports = ({ markdownAST }, pluginOptions) => {
  // Manipulate AST
  visit(markdownAST, "heading", node => {
    //Do stuff with heading nodes
    let { depth } = node;
    if(depth !== 1) return

    //Grab the innerText of the heading node
    let text = ToString(node);

    const html = `
      <h1 style="color: rebeccapurple">
        ${text}
      </h1>
    `

    node.type = "html";
    node.children = undefined;
    node.value = html;
  })
  return markdownAST;
}