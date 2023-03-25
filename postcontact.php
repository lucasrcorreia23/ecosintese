<?php
	$name = $_POST['nome'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$textarea = $_POST['textarea'];

	$to = 'susana@ecosintese.com.br';
	$subject = 'Novo cadastro de: '.$email;
	$msg .= "Nome: ".$name."\r\n";
	$msg .= "Email: ".$email."\r\n";
	$msg .= "Telefone: ".$phone."\r\n";
	$msg .= "Mensagem: ".$textarea."\r\n";
	$headers = 'Remetente: '.$email. "\r\n" .
    'Reply-To: '.$email. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	// send email
	$mail = mail($to,$subject,$msg,$headers);

	if ($mail){
	echo "Obrigado por entrar em contato!";
	}else{
		echo "Algo aconteceu. Consulte o seu provedor de rede ou tente mais tarde";
	}
?>