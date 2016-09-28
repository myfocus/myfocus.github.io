<%--
  Created by IntelliJ IDEA.
  User: longjianlin
  Date: 8/16/16
  Time: 11:19 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script src="/assets/js/jquery.min.js"></script>
</head>
<body>
 hello
</body>
<script type="text/javascript">
    $(function () {
        $.ajax({
            url: '/billionmobi/demo',
            type: 'POST',
            data: {
                order:32234,
                app:9923938,
                ad:"iphone6",
                integral:1000,
                sign:832498,
                adid:887888,
                pkg:"com.sljsaf",
                device:"293383778",
                time:3293475283,
                price:888.9,
                day:3,
                other:933
            },
            dataType: 'json',
            timeout: 1000,
            error: function () {
                console.log('add error.')
            },
            success: function (data) {

                 console.log(data);
            }
        });
    });
</script>
</html>
