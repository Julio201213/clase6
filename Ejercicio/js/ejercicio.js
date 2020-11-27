'use stric';
document.getElementById('valorSalario').style.display="none"

//crear variables

let sueldo= 0;
let sulNormal= 0;
let sulExtra= 0;
let horas;
let extra;
const horaValor= 300;
const extraValor= 500;


//operaciones

function Calcular(){
    document.getElementById('valorSalario').style.display='block'
    document.getElementById('horas').style.display='none'

    horas = Number(document.getElementById('cantidadHoras').value);
    Salario(horas)

    sueldo = sulNormal + sulExtra;
    document.getElementById('valorDom').value = sulNormal
    document.getElementById('valorExtra').value = sulExtra
    document.getElementById('total').value = sueldo
}

function Salario(horas){
    if (horas<=40){
        sulNormal = horas * horaValor;
    }
    else {
        var extra = horas - 40;
        sulNormal = 40 * horaValor;
        sulExtra = (extra * extraValor);
    }
    
    return sueldo
}