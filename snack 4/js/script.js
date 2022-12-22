/** Chiedere all'utente quanti elementi vuole includere nell'array.
  Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
  Stampare a schermo la somma dei numeri generati. */


const { createApp } = Vue


createApp({
  data() {
    return {
      userNumber: 0,
      numbers: [],
      sum : 0,
    }
  },

  methods: {
    getNumbers() {
      axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userNumber}`)
        .then((response) => {
          console.log(response.data.response)
          this.numbers.push(response.data.response)
        })

        setTimeout(() => {
          for (let i = 0; i < this.numbers.length; i++) {
            this.sum += parseInt(this.numbers, 10)
            
          }
          console.log(this.sum)
          
        }, 2000);
        
    },


    created() {
    }

  }
}).mount('#app')