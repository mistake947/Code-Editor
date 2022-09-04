 const htmlEditor =codeMirror(document.querySelector(".editor .code .html-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"xml"
 });

 const cssEditor =codeMirror(document.querySelector(".editor .code .css-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"css"
 });

 const jsEditor =codeMirror(document.querySelector(".editor .code .js-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"javascript"
 });

//  document.querySelectorAll("#run-btn").addEventListener("click",function(){
//   let htmlCode=htmlEditor.getValue();
//   let cssCode="<style>"+ cssEditor.getValue() + "</style>" ;
//   let jsCode = "<script" + "pt>" + jsEditor.getValue() +"</scri" +"pt>";
//   let previewWindow= Document.querySelector("#preview-window").contentWindow.document;
//   previewWindow.open();
//   previewWindow.write(htmlCode+cssCode+jsCode);
//   previewWindow.close();
//  });