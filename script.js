const smile = document.getElementById ( 'smile' );
const sad = document.getElementById ( ' sad ' );
const emoticon = document.getElementById ( 'emoticon' );

function emoticonSmile () {
	emoticon.src = './imagens/smile.png';
}

function emoticonSad () {
	emoticon.src = './imagens/sad.png';
}

function emoticonNeutre () {
	emoticon.src = './imagens/neutro.png';
}



smile.addEventListener ( 'click', emoticonSmile );
emoticon.addEventListener( 'mouseover', emoticonSad );
emoticon.addEventListener( 'mouseleave', emoticonNeutre );