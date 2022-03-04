// function filter() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("input");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("ul");
//     li = ul.getElementsByTagName("li");
  
  
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (!input.value) {
//             li[i].style.display = "none";
//         } else if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "block";
//         } else {
//             li[i].style.display = "none";
//         }
  
//     }
//   }

//   var jogos = ["Celeste", "CupHead", "Dead Cells", "Unpacking", "One shot", "Omori"];
// function retornajogos (value){
//     if (value.charAt(0) == "C") 
//     return value;
// }
// var resultado = jogos.filter(retornajogos);
// console.log(resultado);

// things //

// var jogos = ["Celeste", "CupHead", "Dead Cells", "Unpacking", "One shot", "Omori", "To the moon", "Hollow Knight", "FireWatch"];
// function retornajogos (value){
//     if (value.charAt(0) == "O") 
//     return value;
// }
// var resultado = jogos.filter(retornajogos);
// console.log(resultado);


//testessssss\\
// function filter() {
//     var  jogos = ["Celeste", "CupHead", "Dead Cells", "Unpacking", "One shot", "Omori", "To the moon", "Hollow Knight", "FireWatch"];

//     jogos = document.getElementById("jogos");
//     filter = jogos.value.toUpperCase("jogos");
//     jogos = jogos.getElementsByTagName("jogos");
  
  
//     for (i = 0; i < jogos.length; i++) {
//         a = jogos[i].getElementsByTagName("a")[0];
//         jogos (!jogos.value)
//             jogos[i].style.display = "none";
//         } if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             jogos[i].style.display = "block";
//         } else {
//             jogos[i].style.display = "none";
//         }
  
//     }


// var jogos = ["Celeste", "CupHead", "Dead Cells", "Unpacking", "One shot", "Omori", "To the moon", "Hollow Knight", "FireWatch"];
// function retornajogos (value){
//     if (value.charAt(0) == "O") 
//     return value;
// }
// var resultado = jogos.filter(retornajogos);
// console.log(resultado);


// var jogos = document.getElementById('search');
// var jogos = document.getElementById('resultado');
// retornajogos.addEventListener('onchange', function(){ 
//   if (retornajogos.value == "") {
//         jogos.style.display = 'none'
// } else {
//         jogos.style.display = 'block'
// }
// })

var sectionCards = document.getElementById('cartoes')

function filter() {
        var input, filter, cartao, barraPesquisa, a, i;
        cartao = document.getElementsByClassName("cartao");
        barraPesquisa =  document.getElementById("barraPesquisa")
        filter = barraPesquisa.value.toUpperCase();
    
          for (i = 0; i < cartao.length; i++) {

            var h4 = cartao[i].getElementsByTagName("h4")[0];
            var img = cartao[i].getElementsByTagName("img")[0];
            var p = cartao[i].getElementsByTagName("p")[0];

             if (barraPesquisa.value == null) {
                cartao[i].style.display = "block";
            }
             else if (h4.innerHTML.toUpperCase().indexOf(filter) > -1) {
                cartao[i].style.display = "block";
            }
            else {
                cartao[i].style.display = "none";
            } 
        }
    }