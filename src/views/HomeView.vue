<template>
	<main>
		<div class="container py-4">
			<Header></Header>

			<div class="p-5 bg-light rounded-3">
				<div class="container-fluid py-5">
					<h1 class="display-5 fw-bold">Meus Contatos</h1>
					<p class="col-md-8 fs-4">Olá, aqui estão seus contatos, clique no botão abaixo para adicionar mais.</p>
					<button class="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#adicionarContato">Adicionar</button>
				</div>
			</div>
			
			<Form idName="adicionarContato"></Form>

			<div class="row align-items-md-stretch">
				<div v-for="contact of contacts" :key="contact.id" class="col-md-6">
					<div class="h-80 p-5 bg-light border rounded-3">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
								class="bi bi-person-lines-fill" viewBox="0 0 16 16">
								<path
									d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
							</svg>
							<h2>{{ contact.name }}</h2>
						</div>
						<p>{{ contact.telephone }}</p>
						<router-link :to="{ name: 'details', params: { id: contact.id } }" class="btn btn-outline-secondary">Detalhes
							&raquo;</router-link>
					</div>
				</div>
			</div>

			<footer class="pt-3 mt-4 text-muted border-top">
				&copy; 2023
			</footer>
		</div>
	</main>
</template>

<script>
import Header from '../components/Header.vue'
import Form from '../components/Form.vue'
import { axiosInstance } from '../services/http'

export default {
	components:{
		Header,
		Form
	},
  data() {
    return {
      contacts: [],
      url: `${import.meta.env.VITE_API_URL_IMG}`
    }
  },

  async created() {
    try {
      const { data } = await axiosInstance.get('/contacts');
      this.contacts = data
    } catch (error) {
      console.log(error)
    }

  }
}


</script>
