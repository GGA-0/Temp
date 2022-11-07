<?php

//receber os dados do formulário
$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

var_dump($dados);