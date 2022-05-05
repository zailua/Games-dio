let jogador,
	vencedor = null
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let vencedorSelecionado = document.getElementById('vencedor-selecionado')
let quadrados = document.getElementsByClassName('quadrado')

mudarJogador('X')

function escolherQuadrado(id) {
	let quadrado = document.getElementById(id)
	if (quadrado.innerHTML != '-') {
		return
	}

	quadrado.innerHTML = jogador
	quadrado.style.color = '#000'

	if (jogador === 'X') {
		jogador = 'O'
	} else {
		jogador = 'X'
	}
	mudarJogador(jogador)
	checaVencedor()
}

function mudarJogador(valor) {
	jogador = valor
	jogadorSelecionado.innerHTML = jogador
}

function checaVencedor() {
	let q1 = document.getElementById(1)
	let q2 = document.getElementById(2)
	let q3 = document.getElementById(3)
	let q4 = document.getElementById(4)
	let q5 = document.getElementById(5)
	let q6 = document.getElementById(6)
	let q7 = document.getElementById(7)
	let q8 = document.getElementById(8)
	let q9 = document.getElementById(9)

	if (checaSequencia(q1, q2, q3)) {
		mudaCor(q1, q2, q3)
		mudarVencedor(q1)
		return
	}
	if (checaSequencia(q4, q5, q6)) {
		mudaCor(q4, q5, q6)
		mudarVencedor(q4)
		return
	}
	if (checaSequencia(q7, q8, q9)) {
		mudaCor(q7, q8, q9)
		mudarVencedor(q7)
		return
	}
	if (checaSequencia(q1, q4, q7)) {
		mudaCor(q1, q4, q7)
		mudarVencedor(q1)
		return
	}
	if (checaSequencia(q2, q5, q8)) {
		mudaCor(q2, q5, q8)
		mudarVencedor(q2)
		return
	}
	if (checaSequencia(q3, q6, q9)) {
		mudaCor(q3, q6, q9)
		mudarVencedor(q3)
		return
	}
	if (checaSequencia(q1, q5, q9)) {
		mudaCor(q1, q5, q9)
		mudarVencedor(q1)
		return
	}
	if (checaSequencia(q3, q5, q7)) {
		mudaCor(q3, q5, q7)
		mudarVencedor(q3)
	}
}

function mudarVencedor(qWinner) {
	vencedor = qWinner.innerHTML
	vencedorSelecionado.innerHTML = vencedor
}

function mudaCor(q1, q2, q3) {
	q1.style.background = '#0f0'
	q2.style.background = '#0f0'
	q3.style.background = '#0f0'
}

function checaSequencia(q1, q2, q3) {
	let equals = false

	if (
		q1.innerHTML !== '-' &&
		q1.innerHTML === q2.innerHTML &&
		q2.innerHTML === q3.innerHTML
	) {
		equals = true
	}
	return equals
}

function reiniciar() {
	vencedor = null
	vencedorSelecionado.innerHTML = ''

	for (i = 1; i <= 9; i++) {
		let quadrado = document.getElementById(i)
		quadrado.style.background = '#eee'
		quadrado.style.color = '#eee'
		quadrado.innerHTML = '-'
	}
	mudarJogador('X')
}
