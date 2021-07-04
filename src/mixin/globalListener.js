export default {
  mounted() {
    this.$bus.$on("swipeTriggered", type => {
      const cardsEl = document.querySelector(".feature-cards");
      if (this.numCards > 4) {
        if (type === 'prev') {
          if (this.frontIndex > 0) {
            this.frontIndex -= 1;
            this.rearIndex -= 1;
          }
        } else if (type === 'next') {
          if (this.rearIndex < this.numCards - 1) {
            this.rearIndex += 1;
            this.frontIndex += 1;
          }
        }
        cardsEl.style.transform = `translate3d(${-3.125 * this.frontIndex}rem, 0, 0)`;
      }
    });
  }
}