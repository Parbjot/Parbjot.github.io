function button(oper_id, return_id) {
    let operator = document.querySelector("#" + oper_id).textContent;
    let output = document.querySelector("#" + return_id);
    output.value += operator;
}

function button_action(oper_id, return_id){
        let output = document.querySelector("#" + return_id);
        if(oper_id === 'delete'){
            console.log("This should delete 1 char");
            output.value = output.value.slice(0, -1); 

        }   
        else if(oper_id === 'clear'){
            output.value = '';

        } 
        else if(oper_id === 'equals'){
            let put_exp = document.querySelector("#show_exp");
            put_exp.innerHTML = '';           
            
            let put_ans = document.querySelector("#show_ans");
            put_ans.innerHTML = '';
            
            if ((eval(output.value)) === undefined){
                put_exp.innerHTML = ` Your expression was empty `;
            }
            else{
                put_exp.innerHTML = `Your expression was:${output.value}`;
                put_ans.innerHTML = `Your answer is:${(eval(output.value)).toFixed(2)}`;
                output.value += `=${eval(output.value).toFixed(2)}`
            }
        }
}