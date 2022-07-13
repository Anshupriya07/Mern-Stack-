const  table = document.getElementsByTagName('table')[0];
for(let i = 0;i<5;i++){
    document.write(table.rows[i].cells[1].innerHTML + '&nbsp' + '&nbsp' + '&nbsp'+ '&nbsp');
    document.write(table.rows[i].cells[3].innerHTML);
    document.write("<br>");
}
