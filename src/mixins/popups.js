const popups = {
  methods: {
    showPopUpError() {
      this.$swal.fire({
        icon: 'error',
        title: 'Epa, responda a pergunta primeiro!',
        confirmButtonText: 'ENTENDI!',
        customClass: {
          icon: 'swal__icon',
          popup: 'swal__popup',
          actions: 'swal__actions',
          confirmButton: 'swal__confirmBtn'
        }
      })
    }
  }
}

export default popups
