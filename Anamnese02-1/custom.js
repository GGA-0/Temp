var controleCampo = 1;
function adicionarCampo(){
    controleCampo++;
    console.log(controleCampo);

    document.getElementById('formulario').insertAdjacentHTML('beforeend', '<div class="form-group" id ="campo' + controleCampo + '"><label>Nome</label><textarea name="nome[]" id="nome" cols="30" rows="10"></textarea><label>E-mail: </label><textarea name="email[]" id="email[]" cols="30" rows="10"></textarea></div>')

}