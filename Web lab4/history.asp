<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>history</title>
    <link href="style.css" rel="stylesheet" />
    <script defer src="script.js"></script>
  </head>
  <body>
    <% 
      set conn=Server.CreateObject("ADODB.Connection")
      conn.Provider="Microsoft.Jet.OLEDB.4.0"
      conn.Open "C:\Users\Alvin Ang\Desktop\WebProject-小学期\Web lab4\webdata\score.mdb"


      set rs=Server.CreateObject("ADODB.recordset")
      sql="SELECT DISTINCT s_name FROM score ORDER BY s_name"
      rs.Open sql,conn


      name1=request.QueryString("nameScan")
    %>
  <center>
    <form method="get">
    <legend><strong>用户历史记录</strong><legend>
    <br />
    你的名字:
    <input name="nameScan" type="text">
    <input name="showScore" type="submit">
    </form>
    <br />
    <br />

    <%
      sql="SELECT s_name,s_score FROM score WHERE s_name='" & name1 & "'"
      set rs=Server.CreateObject("ADODB.Recordset")
      rs.Open sql,conn
    %>

    <table width="80%" Border="1" >

    <tr>
    <th>name</th> <th>score</th>
    </tr>
    
    <%
      do until rs.EOF
      response.write("<tr>")
      response.write("<td>" & rs.fields("s_name") & "</td>")
      response.write("<td>" & rs.fields("s_score") & "</td>")
      response.write("</tr>")
      rs.MoveNext
      loop
      
      rs.close
      conn.Close
      
      set rs=Nothing
      set conn=Nothing
    %>

    </table>
  </center>
     <button><a style="text-decoration:none;color:#000" href="onlinetest.html">再答一次</a></button>
  
    
   
  </body>
</html>
