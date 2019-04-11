var btnview = document.querySelector("#btnshow");
		btnview.addEventListener("click", function(evento){
			evento.preventDefault();
            console.log("button clicado");
            /* do meu style, testando novas técnicas*/
			/*var nome = document.getElementById("txtnome").value;
			var rg  = document.getElementById("rg").value;
			var cpf = document.getElementById("cpf").value;
			var endereco = document.getElementById("endereco").value;
			var sexo = document.getElementById("opicao").value;
			var sexo1 = document.getElementsByClassName("opicao1").value;
            var datanasc = document.getElementById("dt").value;
			var div = document.getElementById("show-resultado");

			div.innerText = "Nome:" + nome +"\n" + "RG: " + rg + "\n" + "CPF: " + cpf + "\n" + "Endereço: " + endereco
                + "\n" + "Sexo:  " + sexo  + "\n" + "Data de nascimento: " + datanasc + "\n" 
                
			; */
			/* jeito do teacher */
            var formulario = document.cadastro;
            var nome = formulario.nome.value;
            var rg = formulario.rg.value;
            var cpf = formulario.cpf.value;
            var endereco = formulario.endereco.value;
            var genero = formulario.genero.value;
            var dt = formulario.dt.value;
            var civil = formulario.civil.value;

            var relatorio = document.querySelector("#show-resultado");
            relatorio.textContent += "Nome:" + nome + "\n";
            relatorio.textContent += "RG: " + rg + "\n";
            relatorio.textContent += "CPF:  " + cpf + "\n";
            relatorio.textContent += "Endereço: " + endereco + "\n";
            relatorio.textContent += "Genero: " + genero + "\n";
            relatorio.textContent += "Data de nascimento: " + dt + "\n";
            relatorio.textContent += "Estado Civil:  " + civil + "\n";
            

            
            /* Testando validação de email*/

            /* var tem arroba = email.indexof("@") >= 0;
            if(temarroba){
                alert("Email valido")
            }else{
                alert("Email invalido")
            }
            */
		});