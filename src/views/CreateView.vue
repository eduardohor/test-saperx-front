<script>
import Header from '../components/Header.vue'
import { axiosInstance } from '../services/http'


export default {
	components:{
		Header
	},
	data() {
		return {
			name: '',
			email: '',
			date_of_birth: '',
			cpf: '',
			telephone: '',
			validate: []
		}
	},
	methods: {
		async create() {
			const payload = {
				name: this.name,
				email: this.email,
				date_of_birth: this.date_of_birth,
				cpf: this.cpf,
				telephone: this.telephone
			}

			try {
				const { data } = await axiosInstance.post('/contacts', payload);
				this.$router.push({ name: 'home' });
			} catch (error) {
				this.validate = error.response.data.errors;
			}
		}
	}
}
</script>

<template>
	<div class="container py-4">
		<Header></Header>
		<form @submit.prevent="create">
			<div class="mb-3">
				<label for="name" class="form-label">Nome</label>
				<input type="text" class="form-control" id="name" v-model="name">
				<p class="text-danger" v-if="validate.name">
					{{ validate.name[0] }}
				</p>
			</div>
			<div class="mb-3">
				<label for="email" class="form-label">E-mail</label>
				<input type="email" class="form-control" id="email" v-model="email">
				<p class="text-danger" v-if="validate.email">
					{{ validate.email[0] }}
				</p>
			</div>
			<div class="mb-3">
				<label for="date_of_birth" class="form-label">Data de Nascimento</label>
				<input type="date" class="form-control" id="date_of_birth" v-model="date_of_birth">
				<p class="text-danger" v-if="validate.date_of_birth">
					{{ validate.date_of_birth[0] }}
				</p>
			</div>
			<div class="mb-3">
				<label for="cpf" class="form-label">CPF</label>
				<input type="text" class="form-control" id="cpf" v-model="cpf" placeholder="Somente números">
				<p class="text-danger" v-if="validate.cpf">
					{{ validate.cpf[0] }}
				</p>
			</div>
			<div class="mb-3">
				<label for="telephone" class="form-label">Telefone</label>
				<input type="text" class="form-control" id="telephone" v-model="telephone">
				<p class="text-danger" v-if="validate.telephone">
					{{ validate.telephone[0] }}
				</p>
			</div>
			<button type="submit" class="btn btn-primary">Salvar</button>
		</form>
	</div>
</template>