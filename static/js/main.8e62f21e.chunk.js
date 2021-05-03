(this.webpackJsonpemployee_react_np=this.webpackJsonpemployee_react_np||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(12),s=n.n(r),c=(n(23),n(24),n(25),n(0));var o=function(e){return Object(c.jsx)("main",{className:"wrapper",children:e.children})},i=n(13),l=n(14),u=n(18),b=n(16),m=n(15),d=n.n(m),h=function(){return d.a.get("https://randomuser.me/api/?results=50&inc=picture,name,email,phone,dob")};var j=function(e){var t=e.format,n=e.headings,a=e.rows;return Object(c.jsxs)("table",{className:"table ".concat(t||"table-striped"),children:[Object(c.jsx)("thead",{children:Object(c.jsx)("tr",{children:n.map((function(t){return Object(c.jsx)("th",{scope:"col",onClick:e.onClick,children:t})}))})}),Object(c.jsx)("tbody",{children:a.map((function(e){return Object(c.jsx)("tr",{children:e.map((function(e){return Object(c.jsx)("td",{children:e})}))})}))})]})},f=n(17);var p=function(e){var t=Object(a.useState)(""),n=Object(f.a)(t,2),r=n[0],s=n[1],o=e.onSubmit;return Object(c.jsx)("div",{children:Object(c.jsxs)("nav",{class:"navbar navbar-dark bg-dark justify-content-between",children:[Object(c.jsx)("span",{class:"navbar-brand",children:"Employee Database"}),Object(c.jsxs)("form",{class:"form-inline",onSubmit:o,value:r,children:[Object(c.jsx)("input",{id:"search",class:"form-control mr-sm-2",type:"search",placeholder:"Search by name","aria-label":"Search",onChange:function(e){var t=e.target.value;s(t)}}),Object(c.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})})},v=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={rows:[[]],headings:["Picture","Name","Email","Phone","DOB"],format:"",search:"",filteredUsers:[{}],backupRows:[[]],nameSort:1},e.componentDidMount=function(){e.searchEmployee()},e.searchEmployee=function(){h().then((function(t){var n=t.data.results.map((function(e){return[Object(c.jsx)("img",{src:e.picture.medium,className:"rounded-circle",alt:e.name}),"".concat(e.name.first," ").concat(e.name.last),e.email,e.phone,new Date(e.dob.date).getMonth()+1+"/"+new Date(e.dob.date).getDate()+"/"+new Date(e.dob.date).getFullYear()]}));e.setState({rows:n,filteredUsers:t.data,backupRows:n})})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault();var n=t.target.getAttribute("value");if(""!==n){var a=e.state.backupRows;a=a.filter((function(e){return e[1].includes(n)})),e.setState({rows:a})}else e.setState({rows:e.state.backupRows})},e.handleNameSort=function(t){if(t.preventDefault(),"Name"===t.target.innerHTML)if(1===e.state.nameSort){var n=e.state.rows.sort();e.setState({rows:n,nameSort:2})}else{var a=e.state.rows.reverse();e.setState({rows:a,nameSort:1})}},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(o,{children:[Object(c.jsx)(p,{onSubmit:this.handleFormSubmit,rows:this.state.rows}),Object(c.jsx)(j,{headings:this.state.headings,rows:this.state.rows,format:this.state.format,onClick:this.handleNameSort})]})}}]),n}(a.Component);var O=function(){return Object(c.jsx)(o,{children:Object(c.jsx)(v,{})})};n(45);s.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.8e62f21e.chunk.js.map