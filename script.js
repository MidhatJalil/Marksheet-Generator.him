    function generate(){
    
    let sub1 = document.getElementById('input1').value;
    let sub2 = document.getElementById('input2').value;
    let sub3 = document.getElementById('input3').value;
    

    let mathMarks = +document.getElementById('mark1').value;
    let sciMarks = +document.getElementById('mark2').value;
    let engMarks = +document.getElementById('mark3').value;

    let result = document.getElementById('result');

    var total = 100*3;
    var obMarks = mathMarks + sciMarks + engMarks;
    var perMath = (mathMarks*100)/100;
    var perSci = (sciMarks*100)/100;
    var perEng = (engMarks*100)/100;

    var percent = (obMarks*100)/total;

     result.innerHTML = (` <table><tr>  <th> <h4>Subjects</th><td> <th>Total Marks</th></td> <td> <th>Obtained Marks</th></td> <td><th>Percentage</th> </td></h4></tr>
      <tr><td>${sub1}  </td><td><td>100 </td></td><td><td> ${mathMarks}   </td></td><td><td> ${perMath}%</td></td></tr><br>
      <tr><td> ${sub2} </td><td><td>100 </td></td><td><td>  ${sciMarks}   </td></td><td><td> ${perSci}%</td></td></tr><br>
      <tr><td>${sub3} </td><td><td>100 </td></td><td><td>  ${engMarks}   </td></td><td><td> ${perEng}%</td></td></tr><br>
      <tr><td colspan="3"><h5>${total}</td><td><td>${obMarks}</td></td><td><td> ${percent}% </h5></td></td></tr></table>`);
     }

     function reset(){

        let sub1 = document.getElementById('input1').value = '';
    let sub2 = document.getElementById('input2').value = '';
    let sub3 = document.getElementById('input3').value = '';
    

    let mathMarks = document.getElementById('mark1').value = '';
    let sciMarks = document.getElementById('mark2').value = '';
    let engMarks = document.getElementById('mark3').value = '';

    let result = document.getElementById('result').innerHTML = '';
        
     }