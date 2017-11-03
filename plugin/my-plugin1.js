$.fn.swapClass = function(class1, class2){
    // this는 엘리먼트가 아니다. jQuery결과 집합 객체다.
    this.removeClass(class1).addClass(class2);
    return this;
}

$.fn.table = function(obj){
    var htmlContent = "";
    
    // table header 만들기
    htmlContent += "<thead>";
    htmlContent += "<tr>";
    
    $.each(obj.headers, function(index, item){
       htmlContent += "<th>"+item+"</th>";
    });
    htmlContent += "</tr>";
    htmlContent += "</thead>";
    
    // table body 만들기
    htmlContent += "<tbody>";
    $.each(obj.data, function(index, item){ // item ->> {name:"홍길동",phone:"",}
        htmlContent += "<tr>";
        
        $.each(obj.names,function(index, name){ // name ->> "name" 혹은 "phone" 혹은 "email"
            htmlContent += "<td>"+item[name]+"</td>";
        })
        
        htmlContent += "</tr>";
    })
    
    
    htmlContent += "</tbody>";
    
    
    this.html(htmlContent);
    
    return this;
}