<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Calculadora de IMC</h1>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <form @submit.prevent="calculateBMI">
                    <div class="form-group">
                        <label for="weight">Peso (kg)</label>
                        <input type="number" class="form-control" id="weight" v-model.number="weight" required>
                    </div>
                    <div class="form-group">
                        <label for="height">Altura (cm)</label>
                        <input type="number" class="form-control" id="height" v-model.number="height" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Calcular</button>
                </form>
                <div v-if="bmi" class="mt-4">
                    <h3>Tu IMC: {{ bmi }}</h3>
                    <p>{{ bmiCategory }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        data() {
            return {
                weight: null,
                height: null,
                bmi: null,
                bmiCategory: null
            }
        },
        methods: {
            calculateBMI() {
                const heightInMeters = this.height / 100;
                this.bmi = (this.weight / (heightInMeters * heightInMeters)).toFixed(1);
                if (this.bmi < 18.5) {
                    this.bmiCategory = 'Bajo peso';
                } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
                    this.bmiCategory = 'Peso normal';
                } else if (this.bmi >= 25 && this.bmi <= 29.9) {
                    this.bmiCategory = 'Sobrepeso';
                } else {
                    this.bmiCategory = 'Obesidad';
                }
            }
        }
    }
</script>
<style lang ="scss" scoped>
    .btn {
      margin-top: 25px;
    }
    @import '@/assets/mainstyles.scss';
</style>
