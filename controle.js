var init = '3212132';

var ent = document.getElementById('entrada');
var rgg = document.getElementById('regg');
ent.innerHTML ="Entrada: "+ init;
var iter = 0;

var a = document.getElementById('iter');
a.innerHTML = iter;


var lin = document.getElementById('lina');
var ponto = 0;
rgg.innerHTML = 'Sem Regra';
var element = document.getElementById('inicio');
element.innerHTML = init;

var res = document.getElementById('respostas');
var reg = document.getElementById('regras');
res.innerHTML = "posição";

var conflito = document.getElementById('conflito');

var rr = document.getElementById('result');

var linhas = [];

var conff = [];

var confl =	'';

var pp = 0;


////////////////////////////////////////////////////////

var regra1 = {
regra :1,
padrao : "21",
acao : "12"}


var regra2 = {
regra :2,
padrao : "31",
acao : "13"}

var regra3 = {
regra :3,
padrao : "32",
acao : "23"}




//////////////////////////////////////

var i = 0;

var acabou = 0;

var memoria ='';

var regras = [regra1,regra2,regra3];

exibirRegras();

function teste(){
    alert("o tempo não volta");
}






function proximo(){
	

	  memoria = init.split('');

	
if(memoria[i+1]==null){
	
memoriaDeConflito();
}

else {

buscar();

}
	
}

function memoriaDeConflito(){
resolverConflito();
	
	linhas.push({iteracao: iter,memori: memoria.join(''),conjunto: confl,reg: rr});
	
	if (ponto === 0 ){
	lin.innerHTML = "<tr><th>Iteração</th><th>Memoria de Trabalho</th><th>Conjunto conflito</th><th>Regra Disparada</th></tr>";
	ponto=1;
	}
	
	lin.innerHTML += "<tr><td>"+ linhas[iter].iteracao + "</td><td>" + linhas[iter].memori + "</td><td> "+  linhas[iter].conjunto +"</td><td>"+linhas[iter].reg +"</td></tr>";
	alert('proxima iteração');
	iter++;
	resetar();	
	
	
}


function buscar(){
	res.innerHTML = "posição";
	rgg.innerHTML = 'Sem Regra';
	comparar(i,memoria[i],memoria[i+1]);	
	memoria[i] = '<b style="color:red">' + memoria[i];
	memoria[i+1] = memoria[i+1]+ '</b>';
	element.innerHTML = memoria.join('');

 i++;
	
	
}

function anterior(){
	
	
}


function resetar(){

	i = 0;
	confl ='';
	pp=0;
	rgg.innerHTML = 'Sem Regra';
	rr.innerHTML ='';
	res.innerHTML = "posição ";
    element.innerHTML = init;
	a.innerHTML = iter;
	conflito.innerHTML = confl;
	
}


function exibirRegras(){
	
	reg.innerHTML = "<tr><th>Regra</th><th>Conjunto</th><th>Ação</th></tr>";
	
	for (j = 0; j < regras.length; j++) {

    reg.innerHTML += "<tr><td>" + regras[j].regra + "</td><td>"+ regras[j].padrao + "</td><td>"+regras[j].acao +"</td></tr>";
}
	
		//res.innerHTML = regras.regra + regras.padrao + regras.acao;
	
}


function comparar(pos,a,b){
	res.innerHTML = "posição "+(pos+1) +' e ' +(pos+2) +" Numero:" + a + b ;
	
	for (k = 0; k < regras.length; k++) {
		
		
		
	if (regras[k].padrao == (a + b)){
		
		rgg.innerHTML = "Regra: " + regras[k].regra;
		if (pp == 0){
			
		confl  += regras[k].regra;
		
		pp=1;
		
		}
		else{
			
		confl  +=  ", " + regras[k].regra ;	
			
		}
		
		
		conff.push ({index: k, r: regras[k].regra,acao: regras[k].acao,posicao1: pos, posicao2: pos + 1});
		//console.log ( k + regras[k].regra + regras[k].acao + pos + (pos + 1));
		
		
	}
	
	
	
	conflito.innerHTML = confl;
	
	}
	
	
}
	
	
function resolverConflito(){
	
	
	if (conff.length == 0){
	
	alert('acabou')	;
		acabou =1;
	}
	else{
	
	
	var mm = init.split('');
	
		
	mm[conff[0].posicao1] = conff[0].acao[0];
	mm[conff[0].posicao2] = conff[0].acao[1];	
		
		rr = conff[0].r;
		
		init = mm.join('');
		console.log(conff[0].r);
		
		conff = [];
	}
}

