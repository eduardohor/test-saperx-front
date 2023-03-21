<template>
	<div class="container py-4">
		<Header></Header>

		<div class="col">
			<div class=" p-5 bg-light border rounded-3">
				<div class="row">
					<p class="col"><span class="fw-bold">Nome:</span> {{ contact.name }}</p>
					<p class="col"><span class="fw-bold">E-mail:</span> {{ contact.email }}</p>
					<p class="col"><span class="fw-bold">Data de Nascimento:</span>{{ contact.date_of_birth }}</p>
				</div>
				<div class="row">
					<p class="col"><span class="fw-bold">Cpf:</span> {{ contact.cpf }}</p>
					<p class="col"><span class="fw-bold">Telefone:</span> {{ contact.telephone }}</p>
					<p class="col"><span class="fw-bold">Data do cadastro:</span> {{ contact.created_at }}</p>
				</div>
				<div class="col mt-5">
					<router-link :to="{ name: 'edit', params: { id: contact.id } }" class="btn btn-warning"
						role="button">Editar</router-link>
					<button data-bs-toggle="modal" data-bs-target="#deleteContact" class="btn btn-danger m-1"
						role="button">Excluir</button>
				</div>
			</div>

			 <!-- Modal -->
			 <div class="modal fade" id="deleteContact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Excluir </h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							Deseja realmente excluir o contato {{ contact.name }} ? 
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
							<form @submit.prevent="remove">
								<button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Excluir</button>
							</form>
						</div>
					</div>
				</div>
			</div>


		</div>
	</div>
</template>

<script>
import Header from '../components/Header.vue'
import { axiosInstance } from '../services/http'

export default {
	components: {
		Header
	},

	data() {
		return {
			contact: [],
			id: this.$route.params.id,
		}
	},

	async created() {
		try {
			const { data } = await axiosInstance.get(`/contacts/${this.id}`);
			this.contact = data.contact
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	},

	methods:{
    async remove(){
      try {
          const { data } = await axiosInstance.delete(`/contacts/${this.id}`)
          this.$router.push({ name: 'home' });
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>