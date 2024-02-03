export default function () {
  return {
    status: "init",
    action: "/",

    handleSubmit() {
      const form = this.$root;
      this.status = "validate";

      if (form.checkValidity()) {
        this.status = "sending";

        const formdata = new FormData(form);
        const body = JSON.stringify(Object.fromEntries(formdata.entries()));

        fetch(this.action, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: body,
        })
          .then(() => {
            this.status = "sent";
            setTimeout(() => (this.status = "init"), 5000);
            form.reset();
          })
          .catch((error) => {
            this.status = "error";
            setTimeout(() => (this.status = "init"), 10000);
            console.log(error);
          });
      }
    },

    get formValidate() {
      switch (this.status) {
        case "validate":
          return this.status;
        default:
          return "";
      }
    },

    get submitButtonText() {
      switch (this.status) {
        case "sending":
          return `Отправляется <span class="loading loading-spinner"></span>`;
        case "sent":
          return `Отправлено <box-icon name="check" class="w-7 h-7 fill-current"></box-icon>`;
        case "error":
          return `Ошибка <box-icon name="error" class="w-7 h-7 fill-current"></box-icon>`;
        default:
          return `Отправить <box-icon name="mail-send" class="w-7 h-7 fill-current"></box-icon>`;
      }
    },

    get submitButtonColor() {
      switch (this.status) {
        case "sending":
          return "!btn-accent !bg-accent";
        case "sent":
          return "!btn-secondary !bg-secondary";
        case "error":
          return "!btn-error !bg-error";
        default:
          return "btn-secondary";
      }
    },

    get submitButtonDisable() {
      switch (this.status) {
        case "sending":
          return true;
        case "sent":
          return true;
        case "error":
          return true;
        default:
          return false;
      }
    },
  };
}
