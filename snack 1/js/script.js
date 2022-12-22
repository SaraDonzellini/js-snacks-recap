
  const { createApp } = Vue
  

  createApp({
    data() {
      return {
        numbersOdd: [],
        numbersEven: [],
      }
    },

    methods: {
      getRandomNumber(){
          axios.get("https://flynn.boolean.careers/exercises/api/random/int")
            .then((response) => {
              if (response.data.response % 2 == 0) {
                this.numbersEven.push(response.data.response)
                
              } else {
                this.numbersOdd.push(response.data.response)
              }
            })
        
      }
    },

    created(){
    }
    
  }).mount('#app')