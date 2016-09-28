<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<c:if test="${activityList ne null}">
    <c:forEach items="${activityList.result}" var="list">
        <a href="/api/web/activity/getdetail?activityId=${list.activityId}">
            <div class="list_content">
                <div class="icon fl">
                    <img class="fl" src="${list.icon}"/>
                    <div class="fl list_no">
                        <p class="fl title">${list.activityName}</p>
                        <p class="list_text">${list.activityDesc}</p>
                    </div>
                </div>
                <div class="text fr">
                    <span class=" people_number"><span class="peonum">${list.virtualJoinPeoples }</span>人参加</span>
                </div>
            </div>
        </a>
    </c:forEach>
</c:if>
