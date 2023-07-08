 const numeRr =(valor) =>{
    document.getElementById('scree').value += valor
 }

 const elim = () =>{
    document.getElementById('scree').value = ''
 }

 const resul= () => {
    const tomaDato = document.getElementById('scree').value
    const resultado = eval(tomaDato)
    document.getElementById('scree').value = resultado
 }