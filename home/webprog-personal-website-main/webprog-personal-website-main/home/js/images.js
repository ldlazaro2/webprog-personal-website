const app2 = Vue.createApp({
    data() {
      return {
        manyFoods: [
          {name: '', url: 'https://github.com/ldlazaro2/webprog-personal-website/blob/main/home/pictures/dogs.jpg?raw=true'},
          {name: '', url: 'https://github.com/ldlazaro2/webprog-personal-website/blob/main/home/pictures/dogs2.jpg?raw=true'},
          {name: '', url: 'https://github.com/ldlazaro2/webprog-personal-website/blob/main/home/pictures/family.jpg?raw=true'},
          {name: '', url: 'https://github.com/ldlazaro2/webprog-personal-website/blob/main/home/pictures/myself.jpg?raw=true'},
        ]
      }
    },
    computed: {
      imageSize() {
        return {
          width: '200px',
          height: 'auto',
          borderRadius: '8px'
        };
      }
    }
  })
  
  app2.mount('#app2')
  