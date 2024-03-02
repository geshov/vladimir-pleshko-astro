export default function () {
  return {
    status: "init",
    action: "https://formbold.com/s/35ely",

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
          return `Отправлено <svg class="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>`;
        case "error":
          return `Ошибка <svg class="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path><path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path></svg>`;
        default:
          return `Отправить <svg class="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>`;
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
