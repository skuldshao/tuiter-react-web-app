


function add(){
    console.log("ADD")
    const aDom = document.getElementById("a")
    const bDom = document.getElementById("b")
    const a = parseInt(aDom.value);
    const b = parseInt(bDom.value);
    console.log(a,b);
    const cDom = document.getElementById("c");
    cDom.value = a + b;
}


const hi = document.getElementById("welcome");
hi.style.color = "red";
hi.innerHTML ="Welcome to Web Dev";
hi.style.display = "none";

//alert("Hello World!");
// console.log("Hello World");
document.write("<h2>How are you?</h2>");
const grades = [90,67,78];

document.write("<h2>Table of Grades</h2>")

function tableRow(grade){
    return(
        `<tr>
                  <td>Grades:</td><td>${grade}</td>
                 </tr>`
    )
}

document.write(`<table border="1">${tableRow(grades[0])}
                                ${tableRow(grades[1])}
                                ${tableRow(grades[2])}
                        </table>`);



const tableRows =  (grades) =>
    grades.map((grade) => tableRow(grade)).join('');
/*for( i = 0; i < grades.length ; i++){
   row = row + `<tr><td>Grades:</td><td>${grades[i]}</td></tr>`;
}
*/


document.write(`<table border="1">
                            ${tableRows(grades)}
                        </table>`)

document.write(`<label>${grades.length}</label>`);

document.write("<h2>Hardcoded List</h2>")
document.write(`<ul>`);
document.write(`<li>${grades[0]}</li>`);
document.write(`<li>${grades[1]}</li>`);
document.write(`<li>${grades[2]}</li>`);
document.write(`</ul>`);

document.write("<h2>List using template List</h2>");
document.write(`<ul>
                        <li>${grades[0]}</li>
                        <li>${grades[1]}</li>
                        <li>${grades[2]}</li>
                    </ul>`)

document.write("<h2>List using a for loop</h2>");
document.write(`<ul>`);
for(let i = 0; i < grades.length; i ++){
    document.write(`<li>${grades[i]}</li>`)
}
document.write(`</ul>`);

let average = 0;
let total = 0;
for(let i = 0; i < grades.length; i ++){
    total = total+ grades[i];
    document.write(`<li>${grades[i]}</li>`)
}
document.write(`</ul>`);
average = total / grades.length;
document.write(`Average:${average}`)
