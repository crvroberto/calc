const idvalue = (el) => document.getElementById(el).value
const id = (el) => document.getElementById(el)
const element = (el) => document.createElement(el)

id('pesquisa').focus();

const campos = [id('pesquisa'), id('quantidade'), id('preço'),  id('Total')    ];

const listeners = {
        1: document.addEventListener('keyup', function (e) { if (e.which == 17) { limpar() }}, false),
        2: campos[0].addEventListener('keyup', function (e) { if (e.which == 13) { inputs();lançar(); } }, false),
        3: campos[1].addEventListener('keyup', function (e) { if (e.which == 13) { criardiv(); lançar(); inputs()} }, false),
        4: campos[2].addEventListener('keyup', function (e) { if (e.which == 13) { criardiv(); lançar() ; inputs() } }, false),
        5: campos[3].addEventListener('keyup', function (e) { if (e.which == 13) {  inputs(); } }, false)
}

const apagartexto = () => {document.getElementById('pesquisa').value = ''; limpartbotoes()}

function lançar() {
 
        let quantidade = idvalue('quantidade')
        let pesquisa = idvalue('pesquisa')
        let botao = id('avulso')
        let myDiv0 = id('myDiv0')

                if (!id('myDiv')){
                        const myDiv = document.createElement('div')
                                myDiv.id = 'myDiv'
                                myDiv0.appendChild(myDiv)
}
        const funcoesprodutos = {
        preçoproduto(quant1,preço1,quant2,preço2,quant3,preço3,quant4,preço4,quant5,preço5,quant6,preço6){ 
                preço = 0
                if (quantidade > quant1) { preço = preço1 }
                if (quantidade >= quant2) { preço = preço2 }
                if (quantidade >= quant3) { preço = preço3 }
                if (quantidade >= quant4) { preço = preço4 }
                if (quantidade >= quant5) { preço = preço5 }
                if (quantidade >= quant6) { preço = preço6 }
                        return preço },
        definicao(definicao2){
                                console.log(definicao2)
                                return definicao2
                                
                        },
        total(){
                        total2 = quantidade*this.preço
                           return total2
                        },
        lançar(preço,total2){
                                
                document.getElementById('preço').value = preço.toFixed(2)
                document.getElementById('Total').value = total2.toFixed(2)
                                
                        },
        criartabela(preçotabela,definicao2,totaltabela,limpa,) {
                                if (id('novadiv')){         
                                        const pegarid = {
                                                                       myDivtabela: id('myDivtabela'),
                                                                       table: id('tableid'),
                                                                        tbody: id('tbodyid')             }
                                   
                                                        const {myDivtabela, table, tbody} = pegarid
                                
                                        let elementos = document.getElementsByClassName('produtos')
                                        const quant = 'quant'+elementos.length
                                        const prec = 'preco'+elementos.length
                                        const tota = 'total'+elementos.length
                                        const tr = element('tr');
                                        // 1
                                   
                                        let td = element('td')
                                        td.id='textspan'
                                                td.innerHTML = `${pesquisa || ''} <br>  <strong> ${definicao2 || ''}  </strong>`
                                                        tr.appendChild(td);
                                        // 2
                                        td = element('td');
                                        td.id= quant
                                        td.innerHTML = `${quantidade || ''}`
                                                        tr.appendChild(td)
                                        
                                        td = element('td');
                                        td.innerHTML = `X`
                                                        tr.appendChild(td)
                        
                                        td = element('td');
                                   
                                                td.innerHTML = ` <input type = 'number' value = '${preçotabela}' id = '${prec}' onkeyup=alterarpreco('${quant}','${prec}','${tota}')> `
                                
                                                        tr.appendChild(td);
                                   
                                        // 3
                                        td = element('td');
                                                td.id="spntotal";
                                                td.innerHTML =`<strong><span id=${tota} class= 'produtos'>  ${totaltabela.toFixed(2) || ''}  </span></strong> ` 
                                                       tr.appendChild(td);
                                   
                                        tbody.appendChild(tr);
                                        table.appendChild(tbody);
                                        myDivtabela.appendChild(table);
                                        document.body.appendChild(myDivtabela);
                                   
                                                
                                       // 
                                        
                                        if (!limpa){
                                                supertotal()
                                                limpar()
                                                id('novadiv').remove()}
                                        
                                                console.log(document.getElementsByTagName('campopreço0').innerHTML)        
                        
                                }
                        }
}

        const {criartabela,lançar,total,definicao,preçoproduto} = funcoesprodutos                                     

                if (pesquisa == 'IMPRESSÃO') {//Função Impressão --------------------------------------------------------

                        if (!!botao) {  

        const pegarbotoes = {
                pretofrente: id('pretofon'),
                frenteeverso: id('frenteeversoon'),
                coloridofrente: id('colorfon'),
                encadernado: id('encaon'),
                livreto: id('livretoon')
        }
                const {pretofrente,frenteeverso,coloridofrente,encadernado,livreto} = pegarbotoes  
        
        function verificar(){
                                //Preto Frente**
                                if (!!pretofrente && !frenteeverso && !coloridofrente && !encadernado && !livreto) {
                                        const pretofrente = {
                                                 preço: preçoproduto(0,0.25,20,0.20,40,0.15,50,0.10)                             ,
                                                 total2: total() ,
                                                 lançar: lançar(this.preço,this.total2),
                                                 criar: criartabela(this.preço,definicao('Preto - Frente'),this.total2) ,   
                                                 
                                                 };                           }
                                 //Preto Frente e Verso**
                                 else if (!!pretofrente && !!frenteeverso && !coloridofrente && !encadernado && !livreto) {
                                         const pretofrenteeverso = {
                                                 preço: preçoproduto(0,0.25,20,0.20,40,0.15,50,0.10,100,0.07) ,
                                                 total2: total(),
                                                 lançar: lançar(this.preço,this.total2),
                                                 criar: criartabela(this.preço,definicao('Preto - Frente e Verso'),this.total2) 
                                                 
                         
                                         } }
                                 //Preto Frente + Encadernação**
                                 else if (!!pretofrente && !frenteeverso && !coloridofrente && !!encadernado && !livreto) {
                                         const pretofrente = {
                                                 preço: preçoproduto(0,0.25,20,0.20,40,0.15,50,0.10)                             ,
                                                 total2: total() ,
                                                 lançar: lançar(this.preço,this.total2),
                                                 criar: criartabela(this.preço,definicao('Preto - Frente'),this.total2,('1')) ,   
                                                 
                                                 }
                                         const encadernaçãof = {
                                                 preço: preçoproduto(0,2,25,3,50,4,100,5,200,6,300,7 )                             ,
                                                 criar: criartabela(this.preço,definicao('Encadernação'),this.preço) ,
                                                 
                                                 
                                         }
                                   }
                                 //Preto Frente e Verso com Encadernação
                                else if (!!pretofrente && !!frenteeverso && !coloridofrente && !!encadernado && !livreto) {
                                 const pretofrenteeverso = {
                                         preço: preçoproduto(0,0.25,20,0.20,40,0.15,50,0.10,100,0.07) ,
                                         total2: total(),
                                         lançar: lançar(this.preço,this.total2),
                                         criar: criartabela(this.preço,definicao('Preto - Frente e Verso'),this.total2,('1')) } 
                                 const encadernaçãofv = {
                                                 preço: preçoproduto(0,2,50,3,100,4,200,5,400,6,600,7 )                             ,
                                                 criar: criartabela(this.preço,definicao('Encadernação'),this.preço) ,
                                                 
                                         }
                                 }
                                 // Colorido Frente
                                else if (!!coloridofrente && !pretofrente && !frenteeverso && !encadernado && !livreto) {const coloridofrente = {
                                 preço: preçoproduto(0,0.50,10,0.30,50,0.20)                             ,
                                 total2: total() ,
                                 lançar: lançar(this.preço,this.total2),
                                 criar: criartabela(this.preço,definicao('Colorido - Frente'),this.total2)    
                                }  }
                                 // Colorido Frente e Verso
                                else if (!pretofrente && !!frenteeverso && !!coloridofrente && !encadernado && !livreto) {const coloridofrenteeferso = {
                                 preço: preçoproduto(0,0.50,10,0.30,50,0.10)                             ,
                                 total2: total() ,
                                 lançar: lançar(this.preço,this.total2),
                                 criar: criartabela(this.preço,definicao('Colorido - Frente e Verso'),this.total2) 
                         
                                }    }
                                 // Colorido Frente + Encadernação
                               else if (!pretofrente && !frenteeverso && !!coloridofrente && !!encadernado && !livreto) {
                                       const coloridofrente = {
                                 preço: preçoproduto(0,0.50,10,0.30,50,0.20)                             ,
                                 total2: total() ,
                                 lançar: lançar(this.preço,this.total2),
                                 criar: criartabela(this.preço,definicao('Colorido - Frente'),this.total2,('1'))}
                         
                                 const encadernaçãof = {
                                         preço: preçoproduto(0,2,25,3,50,4,100,5,200,6,300,7 )     ,
                                         criar: criartabela(this.preço,definicao('Encadernação'),this.preço) ,
                                         
                                         
                                 }
                         }
                                 // Colorido Frente e Verso + Encadernação
                                 else if (!pretofrente && !!frenteeverso && !!coloridofrente && !!encadernado && !livreto) {
                                         const coloridofrenteeferso = {
                                                 preço: preçoproduto(0,0.50,10,0.30,50,0.10)                             ,
                                                 total2: total() ,
                                                 lançar: lançar(this.preço,this.total2),
                                                 criar: criartabela(this.preço,definicao('Colorido - Frente e Verso'),this.total2,('1'))  }
                                                 const encadernaçãofv = {
                                                         preço: preçoproduto(0,2,50,3,100,4,200,5,400,6,600,7 )                             ,
                                                         criar: criartabela(this.preço,definicao('Encadernação'),this.preço) ,
                                                         
                                                 }
                         
                                          }
                                 // Livreto preto frente e verso
                                else if (!!pretofrente && !!frenteeverso && !coloridofrente && !!encadernado && !!livreto) {
                                 const pretofrenteeverso = {
                                         preço: preçoproduto(0,0.25/2,40,0.20/2,80,0.15/2,100,0.10/2,200,0.07/2) ,
                                         total2: total(),
                                         lançar: lançar(this.preço,this.total2),
                                         criar: criartabela(this.preço,definicao('Livreto Preto - Frente e Verso'),this.total2,('1'),) } 
                                 const encadernaçãofv = {
                                                 preço: preçoproduto(0,2,50,3,100,4,200,5,400,6,600,7 )                             ,
                                                 criar: criartabela(this.preço,definicao('Encadernação'),this.preço) ,
                                                 
                                         }
                                            }
                                 // Livreto colorido frente e verso
                                else if (!pretofrente && !!frenteeverso && !!coloridofrente && !!encadernado && !!livreto) {
                                 const coloridofrenteeferso = {
                                         preço: preçoproduto(0,0.50/2,20,0.30/2,100,0.10/2)                             ,
                                         total2: total() ,
                                         lançar: lançar(this.preço,this.total2),
                                         criar: criartabela(this.preço,definicao('Livreto Colorido - Frente e Verso'),this.total2,('1'))  }
                                         const encadernaçãofv = {
                                                 preço: preçoproduto(0,2,50,3,100,4,200,5,400,6,600,7 )                             ,
                                                 criar: criartabela(this.preço,definicao('Encadernação'),this.preço) ,
                                                 
                                         }
                                }
                                 else {alert('Opção não etá disponível')}; }
        verificar()        
        
                const produtos = {
                       
                espiralf: {
                definicao(){
                        if (quantidade < 26) { espiralf = " Espiral 7mm " }
                        else if (quantidade >= 26 && quantidade < 51) { espiralf = " Espiral 9mm " }
                        else if (quantidade >= 51 && quantidade < 71) { espiralf = " Espiral 12mm " }
                        else if (quantidade >= 71 && quantidade < 86) { espiralf = " Espiral 14mm " }
                        else if (quantidade >= 86 && quantidade < 101) { espiralf = " Espiral 17mm " }
                        else if (quantidade >= 101 && quantidade < 121) { espiralf = " Espiral 20mm " }
                        else if (quantidade >= 121 && quantidade < 141) { espiralf = " Espiral 23mm " }
                        else if (quantidade >= 141 && quantidade < 161) { espiralf = " Espiral 25mm " }
                        else if (quantidade >= 161 && quantidade < 201) { espiralf = " Espiral 29mm " }
                        else if (quantidade >= 201 && quantidade < 251) { espiralf = " Espiral 33mm " }
                        else if (quantidade >= 251 && quantidade < 351) { espiralf = " Espiral 40mm " }
                        else if (quantidade >= 351 && quantidade < 401) { espiralf = " Espiral 45mm " }
                        else if (quantidade >= 401 && quantidade < 450) { espiralf = " Espiral 50mm " }
                        else { alert('não é possível encadernar') };

                       return espiralf
                }        },
                espiralfv: {
                definicao(){
                        if (quantidade < 51) { espiralfv = "Espiral 7mm" }
                                 else if (quantidade >= 51 && quantidade < 101) { espiralfv = "Espiral 9mm" }
                                 else if (quantidade >= 101 && quantidade < 141) { espiralfv = "Espiral 12mm" }
                                 else if (quantidade >= 141 && quantidade < 171) { espiralfv = "Espiral 14mm" }
                                 else if (quantidade >= 171 && quantidade < 201) { espiralfv = "Espiral 17mm" }
                                 else if (quantidade >= 201 && quantidade < 241) { espiralfv = "Espiral 20mm" }
                                 else if (quantidade >= 241 && quantidade < 281) { espiralfv = "Espiral 23mm" }
                                 else if (quantidade >= 281 && quantidade < 321) { espiralfv = "Espiral 25mm" }
                                 else if (quantidade >= 321 && quantidade < 401) { espiralfv = "Espiral 29mm" }
                                 else if (quantidade >= 401 && quantidade < 501) { espiralfv = "Espiral 33mm" }
                                 else if (quantidade >= 501 && quantidade < 701) { espiralfv = "Espiral 40mm" }
                                 else if (quantidade >= 701 && quantidade < 801) { espiralfv = "Espiral 45mm" }
                                 else if (quantidade >= 801 && quantidade < 900) { espiralfv = "Espiral 50mm" }
                                 else { alert('não é possível encadernar') };

                                        return espiralfv
                }        },   
                  
}       
         
                                        }                                 
                        else if (!botao) {
        

        myDiv.innerHTML = `     <span id='pretofoff' onclick=trocarId('pretofon','pretofoff') class='btn btn-secondary m-1'>Preto? </span>
                                <span id='coloroff' onclick=trocarId('colorfon','coloroff') class='btn btn-secondary m-1'>Colorido? </span> <br>
                                <span id='frenteeversooff' onclick=trocarId('frenteeversoon','frenteeversooff') class='btn btn-secondary m-1'>Frente e Verso? </span>
                                
                                <span id='encaoff' onclick=trocarId('encaon','encaoff') class='btn btn-secondary m-1'>Encadernado? </span>
                               
                                <span id='livretoff' onclick=trocarId('livretoon','livretoff') class='btn btn-secondary m-1'>Livreto? </span>
                                <span id='avulso' ></span>`
                                        }



                                                   }
                else if (pesquisa == 'PLASTIFICAÇÃO') {
                let total = 0
                let preço = 2
                total = preço * quantidade;

                
                id('preço').value = (preço.toFixed(2));
                id('Total').value = (total.toFixed(2));

                                                        }
                else if (pesquisa == 'ARTE') { 
                
         let ir = id('tempo')       
         if (!ir) {

                limpartbotoes()
                
            let button = document.createElement('button')
            let button2 = document.createElement('button')
            let span = document.createElement('span')
            let span2 = document.createElement('span')
            button.appendChild(span)
            button2.appendChild(span2)
                button.id= 'tempo'
                button2.id= 'tempo'
                span.textContent='Iniciar'
                span.id='spanbutton'
                span2.textContent='Pausar'
                span2.id='spanbutton'
            let pausado = 'false'
            let tempo = 0
            let settempo = setInterval(function() {
                
                if (!pausado){  tempo++
                        
                        console.log(tempo)
                                         if (tempo <= 360) {span.textContent= `Segundos : ${tempo} Arte R$ 2,00`}
                                        else if (tempo > 360 && tempo <= 540) {span.textContent= `Segundos : ${tempo} Arte R$ 3,00`} 
                                        else if (tempo > 541 && tempo <= 720) {span.textContent= `Segundos : ${tempo} Arte R$ 4,00`} 
                                        else if (tempo > 721 && tempo <= 900) {span.textContent= `Segundos : ${tempo} Arte R$ 5,00`} 
                                        else if (tempo > 901 && tempo <= 1080) {span.textContent= `Segundos : ${tempo} Arte R$ 6,00`} 
                                        else if (tempo > 1081 && tempo <= 1260) {span.textContent= `Segundos : ${tempo} Arte R$ 7,00`} 
                                        else if (tempo > 1261 && tempo <= 1440) {span.textContent= `Segundos : ${tempo} Arte R$ 8,00`} 
                                        else if (tempo > 1441 && tempo <= 1620) {span.textContent= `Segundos : ${tempo} Arte R$ 9,00`} 
                                        else if (tempo > 1621 && tempo <= 1800) {span.textContent= `Segundos : ${tempo} Arte R$ 10,00`} 
                                        else if (tempo > 1801 && tempo <= 1980) {span.textContent= `Segundos : ${tempo} Arte R$ 11,00`}
                                        else if (tempo > 1981 && tempo <= 2160) {span.textContent= `Segundos : ${tempo} Arte R$ 12,00`} 
                                        else if (tempo > 2161 && tempo <= 2340) {span.textContent= `Segundos : ${tempo} Arte R$ 13,00`} 
                                        else if (tempo > 2341 && tempo <= 2520) {span.textContent= `Segundos : ${tempo} Arte R$ 14,00`} 
                                        else if (tempo > 2521 && tempo <= 2700) {span.textContent= `Segundos : ${tempo} Arte R$ 15,00`} 
                                        else if (tempo > 2701 && tempo <= 2880) {span.textContent= `Segundos : ${tempo} Arte R$ 16,00`} 
                                        else if (tempo > 2881 && tempo <= 3060) {span.textContent= `Segundos : ${tempo} Arte R$ 17,00`} 
                                        else if (tempo > 3061 && tempo <= 3240) {span.textContent= `Segundos : ${tempo} Arte R$ 18,00`} 
                                        else if (tempo > 3241 && tempo <= 3420) {span.textContent= `Segundos : ${tempo} Arte R$ 19,00`} 
                                        else if (tempo > 3421 && tempo <= 3600) {span.textContent= `Segundos : ${tempo} Arte R$ 20,00`}  
                                }  }   , 1000);

        button.onclick = function () {
                
                pausado = false

                           }
        button2.onclick = function () {
                
                pausado = true
                
                                }

        document.body.appendChild(button)
        document.body.appendChild(button2)
        
           
}
                                                }
                
                else {alert('PRODUTO NÃO CADASTRADO')
        id('pesquisa').value = ""
        id('pesquisa').focus()                                
                        }
}
const funcoes = {
        supertotal () { 
                let elementos = document.getElementsByClassName("produtos");
                let valores = [];
                console.log(elementos)
                for (let i = 0; i < elementos.length; i++) {
                  valores.push(elementos[i].innerHTML);
                };
                
                
        let resultado = valores.map(function(v){ return parseFloat(v)})
                
                        
                function sum() {
                        let soma = 0
                        for(let i = 0; i < resultado.length; i++){
                                soma= soma + resultado[i];
                        }
                        return soma;
                        }
        
                        console.log(sum)
                        document.getElementById('totalspan').innerHTML = `<h3 class="h3">Total a Pagar <br>R$ ${sum().toFixed(2)}</h3>`
        },
        maiuscula(z) {
                v = z.value.toUpperCase();
                z.value = v;
                if(v == 'IMPRESSÃO'){lançar()}
                else if (v == 'ARTE'){lançar()}
                else if (v == 'PLASTIFICAÇÃO'){lançar()}
},
        inputs() {
       

        let pesquisa = id('pesquisa').value
        let quantidade = id("quantidade").value

        if (pesquisa == '') { id('pesquisa').focus(); }
        else if (quantidade == '' ) { id('quantidade').focus(); }
        else if (!pesquisa == '' && !quantidade == '') { id('preço').focus(); }

},
        limpartbotoes(){
                if (!!id('myDiv')) { id('myDiv').remove(); }
},
        limpartabela() {
        let tbody = id('tbodyid')
        tbody.innerHTML = `<tr><td><span class="produtos">  0.00  </span> </td></tr>`
                supertotal()
        if (id('tableid')) {
               tbody.innerHTML =''
               document.getElementById('pesquisa').value = ''
               id('pesquisa').focus()
        } else if (id('myDiv')) {
                id('myDiv').remove()
        }
        limpartbotoes()


},      
        limpar() {
        
        id("quantidade").value = ('')
      //  id('pesquisa').value = ('')
        id("preço").value = ('')
        id("Total").value = ('')
      //  id("tr1").innerHTML = ('')
        
},
        criardiv(){
        let novadiv = element('div')
        const myDiv = id('myDiv')
        myDiv.appendChild(novadiv)
        novadiv.id= 'novadiv'
        },
        trocarId(ligado, desligado,){
                if(id(ligado)){
                        let id1 = id(ligado)
                        id1.className='btn btn-secondary'
                        
                        return id1.id=desligado 
                }
                else if (id(desligado)){
                        let id1 = id(desligado)
                        id1.id=ligado
                        id1.className="btn btn-danger"
                        id('quantidade').focus()
                          }
        },
        alterarpreco(qua,preo,totl){
                let quant = id(qua).innerHTML
               quant = parseInt(quant)
                  let prec = id(preo).value
                 prec = parseFloat(prec)
                
                 let novototal = quant*prec
           
            document.getElementById(totl).innerHTML = novototal.toFixed(2)
           supertotal()
           }
}
const {supertotal,maiuscula,inputs,limpartbotoes,limpartabela,limpar,criardiv,trocarId,alterarpreco} = funcoes