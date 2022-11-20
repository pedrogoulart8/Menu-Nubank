
/*const listaCarros = ['gol', 'uno', 'onix', 'fusca', 'celta'];

console.log(listaCarros);
console.log(listaCarros[3]);

listaCarros.forEach(function(item, index){

console.log(`Carro: ${item}`);
    

})
*/


const overlay = document.querySelector('.overlay');
const menuItem  = document.querySelectorAll('.menu-item')

//A cada item que encontrar dentro da array menuItem, usar as funções abaixo:
menuItem.forEach(function(item){

    //adicionar classe .overlay-visible no overlay e .active em cada item do menu assim que passar o mouse por cima de cada um deles
    item.addEventListener('mouseenter', function(){
        
        overlay.classList.add('overlay-visible');
        item.classList.add('active');
        

    })
    
    // remover ações acima assim que retirar o mouse da div li (menu-item no index)
    item.addEventListener('mouseleave', function(){
        
        overlay.classList.remove('overlay-visible');
        item.classList.remove('active');
        

    })

})