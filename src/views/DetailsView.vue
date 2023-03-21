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
					<router-link :to="{ name: 'edit', params: { id: contact.id } }" class="btn btn-warning" 						role="button">Editar</router-link>
					<button class="btn btn-danger m-2">Excluir</button>
					
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
      id:this.$route.params.id,
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
}

</script>