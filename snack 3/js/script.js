/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
differenziando i messaggi utente da quelli del computer. */

const { createApp } = Vue


createApp({
  data() {
    return {
      messages: [],
      userMessage: '',
      activeIndex: 0,

    }
  },

  methods: {
    getMessage() {
      axios.get("https://flynn.boolean.careers/exercises/api/random/sentence")
        .then((response) => {
          console.log(response.data.response)
          let newObjMess = {
            message: response.data.response,
            status: "received",
          }
          this.messages.push(newObjMess)
        })
    },
    sendMessage() {
      if (this.userMessage != '') {

        let newObj = {
          message: this.userMessage,
          status: 'sent'
        }
        this.messages.push(newObj);
        this.userMessage = '';
      }
      setTimeout(() => {
        this.getMessage()
      }, 2000);
    },

    created() {
    }

  }
}).mount('#app')