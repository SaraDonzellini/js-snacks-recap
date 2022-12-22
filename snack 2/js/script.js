  /***
  Chiedere all'API 10 nomi da inserire in un array di invitati.
  Una volta generata la lista chiedere all'utente di dire il proprio nome.
  Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
  */


  const { createApp } = Vue
  

  createApp({
    data() {
      return {
        guests: [],
        userName: '',
      }
    },

    methods: {
      getRandomName(){
        for (let i = 0; i < 10; i++) {
          axios.get("https://flynn.boolean.careers/exercises/api/random/name")
            .then((response) => {
              
              console.log(response.data.response)
              this.guests.push(response.data.response)
                
              
            })
        
          
        }
        console.log(this.guests)
      },
      checkName(){
        if (this.guests.includes = this.userName.toLowerCase()) {
          alert('benvenuto')

        } else {
          alert('non sei invitato')
        }
      }
    },

    created(){
      this.getRandomName()
    }
    
  }).mount('#app')