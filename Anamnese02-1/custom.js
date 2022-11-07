var controleCampo = 1;
function adicionarCampo(){
    controleCampo++;
    console.log(controleCampo);

    document.getElementById('formulario').insertAdjacentHTML('beforeend', '<div class="form-group" id ="campo' + controleCampo + '"><label>Nome</label><button type="button" id="' + controleCampo + '" onclick="removerCampo('+ controleCampo + ') "> - </button><br><textarea style="width:70vw" name="nome[]" id="nome" cols="30" rows="10"></textarea></div>')

}
function removerCampo(idCampo){
    console.log("Campo remover: " + idCampo);
    document.getElementById('campo' + idCampo).remove();
}