
function tableCreation(){
    const myTable = document.querySelector("#myTable");
    const table = document.createElement('table');
    myTable.appendChild(table);
    table.border = '1';
    document.body.style.backgroundColor = 'rgb(98 220 160)'

    for(let i=0;i<4;i++){
        const tr = document.createElement('tr');
        tr.style.height = '30px';
        table.appendChild(tr);
        for(let j=0;j<5;j++){
            if(i == 0){
                const th = document.createElement('th');
                tr.appendChild(th);
                th.appendChild(document.createTextNode(`row${i} col${j}`));
            }
            else{
                const td = document.createElement('td');
                tr.appendChild(td);
                td.appendChild(document.createTextNode(`row${i} col${j}`));
                td.style.width = '200px';
            }
            
        }
    }
}

tableCreation();
