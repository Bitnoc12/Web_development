<!DOCTYPE html>
<html lang="en">
  <head>
    <title>getdata</title>
    <link href="style.css" rel="stylesheet" />
    <script defer src="script.js"></script>
  </head>
  <body>
    <!-- insert data(name and score) -->
    <%
      set conn=Server.CreateObject("ADODB.Connection")
      conn.Provider="Microsoft.Jet.OLEDB.4.0"
      conn.Open"C:\Users\Alvin Ang\Desktop\WebProject-小学期\Web lab4\webdata\score.mdb"

      sql="INSERT INTO score(s_name,s_score)"
      sql=sql & " VALUES "
      sql=sql & "('" & Request.QueryString("s_name") & "',"
      sql=sql & "'" & Request.QueryString("s_score") & "')"

      on error resume next
      conn.Execute sql,recaffected

      if err<>0 then
        Response.Write("<h3>No update permissions!</h3>")
      else
        Response.Write("<h3> recorded! </h3>")
      end if
      conn.close
    %>
    <button><a style="text-decoration:none;color:#000" href="onlinetest.html">Back to Form</button>
    <button><a style="text-decoration:none;color:#000" href="history.asp">History</button>
  </body>
</html>
