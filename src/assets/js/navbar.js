export default function () {
  return {
    hideY: 300,
    currentY: window.scrollY,
    previousY: this.currentY,

    toggleMobileMenu() {
      if (this.$refs.buttonMobileMenu.checked) {
        this.$refs.mobileMenu.classList.remove("hidden");
      } else {
        this.$refs.mobileMenu.classList.add("hidden");
      }
    },

    closeMobileMenu() {
      this.$refs.buttonMobileMenu.checked = false;
      this.$refs.mobileMenu.classList.add("hidden");
    },

    handleScroll() {
      this.previousY = this.currentY;
      this.currentY = window.scrollY;
      this.closeMobileMenu();
    },

    get blurNavbar() {
      if (this.currentY > 10) return true;
      else return false;
    },

    get hideNavbar() {
      if (this.currentY > this.hideY && this.currentY >= this.previousY)
        return true;
      else return false;
    },
  };
}
