<script setup>
</script>

<template>
	<main>
		<div class="container py-4">
			<header class="pb-3 mb-2 border-bottom">
				<a href="/" class="d-flex align-items-center text-dark text-decoration-none">
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-rolodex"
						viewBox="0 0 16 16">
						<path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
						<path
							d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
					</svg>
					<span class="fs-4 m-3">Agenda</span>
				</a>
			</header>

			<div class="p-5 bg-light rounded-3">
				<div class="container-fluid py-5">
					<h1 class="display-5 fw-bold">Meus Contatos</h1>
					<p class="col-md-8 fs-4">Olá, aqui estão seus contatos, clique no botão abaixo para adicionar mais.</p>
					<button class="btn btn-primary btn-lg" type="button">Adicionar</button>
				</div>
			</div>

			<div class="row align-items-md-stretch">
				<div class="col-md-6">
					<div class="h-80 p-5 bg-light border rounded-3">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
								class="bi bi-person-lines-fill" viewBox="0 0 16 16">
								<path
									d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
							</svg>
							<h2>Nome</h2>
						</div>
						<p>(99)912332112</p>
						<button class="btn btn-outline-secondary" type="button">Detalhes</button>
					</div>
				</div>
				<div class="col-md-6">
					<div class="h-80 p-5 bg-light border rounded-3">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
								class="bi bi-person-lines-fill" viewBox="0 0 16 16">
								<path
									d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
							</svg>
							<h2>Nome</h2>
						</div>
						<p>(99)912332112</p>
						<button class="btn btn-outline-secondary" type="button">Detalhes</button>
					</div>
				</div>
				<div class="col-md-6">
					<div class="h-80 p-5 bg-light border rounded-3">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
								class="bi bi-person-lines-fill" viewBox="0 0 16 16">
								<path
									d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
							</svg>
							<h2>Nome</h2>
						</div>
						<p>(99)912332112</p>
						<button class="btn btn-outline-secondary" type="button">Detalhes</button>
					</div>
				</div>

			</div>

			<footer class="pt-3 mt-4 text-muted border-top">
				&copy; 2023
			</footer>
		</div>
	</main>
</template>
