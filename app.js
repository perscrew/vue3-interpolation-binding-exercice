const app = Vue.createApp({
  data() {
    return {
      name: "Thibaud",
      age: 39,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    };
  },
});

app.mount("#exercise");
