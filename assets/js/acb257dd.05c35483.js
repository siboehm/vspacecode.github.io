"use strict";(self.webpackChunkvspacecode_github_io=self.webpackChunkvspacecode_github_io||[]).push([[32],{7323:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return r},toc:function(){return c},default:function(){return p}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),d=["components"],s={id:"menu-customization",title:"Menu Customization"},l=void 0,r={unversionedId:"menu-customization",id:"menu-customization",isDocsHomePage:!1,title:"Menu Customization",description:"There are two ways to customize the menu: incrementally, and from scratch.",source:"@site/docs/menu-customization.md",sourceDirName:".",slug:"/menu-customization",permalink:"/docs/menu-customization",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/menu-customization.md",tags:[],version:"current",frontMatter:{id:"menu-customization",title:"Menu Customization"},sidebar:"docs",previous:{title:"Default Keybindings",permalink:"/docs/default-keybindings"},next:{title:"Major Mode",permalink:"/docs/major-mode"}},c=[{value:"Default bindings",id:"default-bindings",children:[]},{value:"Incrementally",id:"incrementally",children:[{value:"Add/Replace",id:"addreplace",children:[]},{value:"Removal",id:"removal",children:[]}]},{value:"From Scratch",id:"from-scratch",children:[]}],m={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are two ways to customize the menu: incrementally, and from scratch.\nIncrementally is great for when you only need to modify a few bindings from the default. Customizing from scratch is great for total control of the customization."),(0,o.kt)("h2",{id:"default-bindings"},"Default bindings"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./default-keybindings"},"Default Keybindings")," for default bindings."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default menu bindings are subject to change before ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0"),".\nIf you find something that you think it should bind to a particular key by default, or you want a particular command,\nplease open an issue as a feature request."))),(0,o.kt)("h2",{id:"incrementally"},"Incrementally"),(0,o.kt)("p",null,"Using this option will allow to you surgically update the default bindings (",(0,o.kt)("inlineCode",{parentName:"p"},"vspacecode.bindings"),").\nThe extension will override bindings sequentially base on ",(0,o.kt)("inlineCode",{parentName:"p"},"vspacecode.bindingOverrides"),"."),(0,o.kt)("h3",{id:"addreplace"},"Add/Replace"),(0,o.kt)("p",null,"The following json will replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<SPC> g s")," in the same position if the binding exists in ",(0,o.kt)("inlineCode",{parentName:"p"},"vspacecode.bindings"),",\nand append ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," to menu ",(0,o.kt)("inlineCode",{parentName:"p"},"<SPC> g")," if it doesn't exists. This override will only execute if ",(0,o.kt)("inlineCode",{parentName:"p"},"<SPC> g")," menu exists.\nAn optional ",(0,o.kt)("inlineCode",{parentName:"p"},"position")," key can be used to specified index of where the item should be inserted/moved to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "vspacecode.bindingOverrides": [\n    {\n      "keys": "g.s",\n      "name": "Go to line",\n      "type": "command",\n      "command":"workbench.action.gotoLine",\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"The following example will replace/append the whole ",(0,o.kt)("inlineCode",{parentName:"p"},"<SPC> g")," menu with one binding ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "vspacecode.bindingOverrides": [\n    {\n      "keys": "g",\n      "name": "Go...",\n      "type": "bindings",\n      "bindings": [\n        {\n          "key": "s",\n          "name": "Go to",\n          "type": "command",\n          "command": "workbench.action.gotoLine",\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"If the key binding's key uses character ",(0,o.kt)("inlineCode",{parentName:"p"},".")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"<SPC> e ."),", you can target that by using an array in the keys like ",(0,o.kt)("inlineCode",{parentName:"p"},'"keys": ["e", "."]'),"."),(0,o.kt)("h3",{id:"removal"},"Removal"),(0,o.kt)("p",null,"Any negative number in position is denoting a removal operation.\nIn the following example, any item bound to ",(0,o.kt)("inlineCode",{parentName:"p"},"<SPC> g s")," will be remove."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "vspacecode.bindingOverrides": [\n    {\n      "keys": "g.s",\n      "position": -1,\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"from-scratch"},"From Scratch"),(0,o.kt)("p",null,"To customize the menu items from scratch, you can override the menu completely by putting your own ",(0,o.kt)("inlineCode",{parentName:"p"},"vspacecode.bindings")," into your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json"),".\nUsing this option will prevent any update to your own bindings."),(0,o.kt)("p",null,"An example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," file that overrides space menu is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vspacecode.bindings": [\n    {\n      "key": "f",\n      "name": "File...",\n      "type": "bindings",\n      "bindings": [\n        {\n          "key": "f",\n          "name": "Open file",\n          "type": "command",\n          "command": "workbench.action.files.openFileFolder"\n        },\n        {\n          "key": "i",\n          "name": "Indentation...",\n          "type": "bindings",\n          "bindings": [\n            {\n              "key": "i",\n              "name": "Change indentation",\n              "type": "command",\n              "command": "changeEditorIndentation"\n            },\n            {\n              "key": "d",\n              "name": "Detect indentation",\n              "type": "command",\n              "command": "editor.action.detectIndentation"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"The default value can be found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"contributes.configuration.vspacecode.bindings.default")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," in this repo.\nYou can use the default value as an example to craft your own custom menu."))}p.isMDXComponent=!0}}]);