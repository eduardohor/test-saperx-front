<template>
	<div class="container py-4">
		<Header></Header>

		<form @submit.prevent="update">
			<div class="mb-3">
				<label for="name" class="form-label">Nome</label>
				<input type="text" class="form-control" id="name" v-model="contact.name">
				<p class="text-danger" v-if="validate.name">
					{{ validate.name[0] }}
				</p>
			</div>
			<div class="mb-3">
				<label for="email" class="form-label">E-mail</label>
				<input type="email" class="form-control" id="email" v-model="contact.email">
				<p class="text-danger" v-if="validate.email">
					{{ validate.email[0] }}
				</p>

			</div>
			<div class="mb-3">
				<label for="date_of_birth" class="form-label">Data de Nascimento</label>
				<input type="date" class="form-control" id="date_of_birth" v-model="contact.date_of_birth">
				<p class="text-danger" v-if="validate.date_of_birth">
					{{ validate.date_of_birth[0] }}
				</p>

			</div>
			<div class="mb-3">
				<label for="cpf" class="form-label">CPF</label>
				<input type="text" class="form-control" id="cpf" placeholder="Somente números" v-model="contact.cpf">
				<p class="text-danger" v-if="validate.cpf">
					{{ validate.cpf[0] }}
				</p>

			</div>
			<div class="mb-3">
				<label for="telephone" class="form-label">Telefone</label>
				<input type="text" class="form-control" id="telephone" v-model="contact.telephone">
				<p class="text-danger" v-if="validate.telephone">
					{{ validate.telephone[0] }}
				</p>

			</div>
			<button type="submit" class="btn btn-primary">Salvar</button>
		</form>

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
			validate: []
		}
	},

	async mounted() {
		try {
			const { data } = await axiosInstance.get(`/contacts/${this.id}`)
			this.contact = data.contact
		} catch (error) {
			console.log(error)
		}
	},

	methods:{
		async update() {
      const payload = {
        _method: 'put',
        name: this.contact.name,
        email: this.contact.email,
        date_of_birth: this.contact.date_of_birth,
        cpf: this.contact.cpf,
        telephone: this.contact.telephone,
      }

      try {
        const { data } = await axiosInstance.post(`/contacts/${this.id}`, payload);
        this.$router.push({ name: 'details', params: { id: this.contact.id } });
        console.log(data)
      } catch (error) {
				console.log(error)
        this.validate = error.response.data.errors;

      }
    }
	}
}

</script>