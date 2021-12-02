//Remove acentos
function removeAcento(s) {
    const r = s.toLowerCase();
    r = r.replace(new RegExp("\\s", 'g'), "");
    r = r.replace(new RegExp("[àáâãäå]", 'g'), "a");
    r = r.replace(new RegExp("æ", 'g'), "ae");
    r = r.replace(new RegExp("ç", 'g'), "c");
    r = r.replace(new RegExp("[èéêë]", 'g'), "e");
    r = r.replace(new RegExp("[ìíîï]", 'g'), "i");
    r = r.replace(new RegExp("ñ", 'g'), "n");
    r = r.replace(new RegExp("[òóôõö]", 'g'), "o");
    r = r.replace(new RegExp("œ", 'g'), "oe");
    r = r.replace(new RegExp("[ùúûü]", 'g'), "u");
    r = r.replace(new RegExp("[ýÿ]", 'g'), "y");
    r = r.replace(new RegExp("\\W", 'g'), "");
    return r;
  }

//funcao para converser valor monetário em float
  function parseCurrency(valor) {
    valor = valor.replace('.', '');
    valor = valor.replace('.', '');
    valor = valor.replace('.', '');
    valor = valor.replace(',', '.');
    return valor;
  }
  
  //funcao para converter float em valor monetário
  function formatarValorFloaTParaMonetario(valor) {
    valor = parseFloat(valor);
    valor = number_format(valor, 2, ',', '.');
    return valor;
  }

//calculo de diferença de horas retorno em secundos
  function diferencaDeHorario(hora1, hora2) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
  
    let data1 = new Date(mm + '/' + dd + '/' + yyyy + ' ' + hora1);
    let data2 = new Date(mm + '/' + dd + '/' + yyyy + ' ' + hora2);
    let sec = (data2.getTime() / 1000.0) - (data1.getTime() / 1000.0);
  
    return Math.round(sec);
  }


  //Função para contar as palavras
  const contadorPalavras = (valor) => {
    valor.replace(/(\r\n|\n|\r)/g,"").trim();// .replace subistitui caracteres especiais como espaço e tecla enter por vazio e o .trim  retira os espaços em branco
    const cont = valor.split(/\s+/g).length; // .split separa as strings a cada espaço
    if (cont == "1" || cont == ""){
      return cont;
    } else {
      return cont;
    }
  }
//   console.log('O texto têm ' +contadorPalavras('Mauriney Costa'), 'palavras');


// Função para validar email
function IsEmail(email) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email)) {
      return false;
    } else {
      return true;
    }
  }


//Converter celsius para fahrenheit
const fahr = (celsius) => ((1.8 * celsius + 32));
//console.log(fahr(1));


//Validar CPF
function validaCPF(cpfX) {
    let Soma;
    let Resto;
    let cpf = cpfX.replaceAll('.', '').replaceAll('-', '');
    Soma = 0;
    if (!cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999" 
      ) 
    {
      return false;
    }
    for (i=1; i<=9; i++) {
      Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    }
    if ((Resto == 10) || (Resto == 11)) {
      Resto = 0;
    }
    if (Resto != parseInt(cpf.substring(9, 10)) ) {
      return false;
    }
    Soma = 0;
    for (i = 1; i <= 10; i++) {
      Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
    }
    if ((Resto == 10) || (Resto == 11)) {
      Resto = 0;
    }
    if (Resto != parseInt(cpf.substring(10, 11) ) ) {
      return false;
    }
    return true;
  }


  //Validar data de nascimento
  function validaDataNascimento(dtNascX){
    let strData = dtNascX;
    let partesData = strData.split("/");
    let data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
    if(data > new Date()) {
     return false;
    }
    return true;
  }

//Função para evitar um delete acidental no formulario
//OBS.: Sempre utilizar na tag form || Também deve adicionar no form do html o onsubmit="confirmDelete(event, this)"
function confirmDelete(event, form){
    event.preventDefault();
    let decision = confirm("Você deseja deletar esta categoria?")
    if(decision){
        form.submit()
    }
}
