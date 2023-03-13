const ejs = require("ejs");

const str = `
 <div>
   <% if (user) {%>
     <span><%= user.name %></span>
     <%} else {%>
        <span>登录</span>
    <% } %>
 </div> 
`;

let template = ejs.compile(str, {});
// 渲染模版数据，根据用户状态渲染不同的视图
// const data = { user: null };
const data = { user: { name: "killian" } };
console.log(template(data));
