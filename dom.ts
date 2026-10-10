console.log("DOM.js");
var headingEle=document.querySelector('h1')!    // "!" means it will always present in the html
var anchor=document.querySelector('a')
var anchorEle=document.querySelector('.anchorStyle')! as HTMLAnchorElement
var headingElementHeading=document.querySelector(".heee")! as HTMLHeadingElement

console.log(headingEle?.classList);
console.log(anchor?.href);
console.log(headingElementHeading);
console.log(anchorEle?.href);

