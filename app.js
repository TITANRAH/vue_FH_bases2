const quotes = [
  {
    quote:
      "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "I believe what doesn’t kill you simply makes you, stranger.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote:
      "Your anger gives you great power. But if you let it, it will destroy you… As it almost did me",
    author: "Henri Ducard, Batman Begins",
  },
  {
    quote:
      "You either die a hero or live long enough to see yourself become the villain.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "If you’re good at something, never do it for free.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote: "Yes, father. I shall become a bat.",
    author: "Bruce Wayne/Batman, Batman: Year One",
  },
];

const app = Vue.createApp({
  data() {
    return {
      // quote: "I'm batman",
      // author: 'Bruce Wayne'

      // si el valor tiene el mismo nombre que la referencia no es necesario
      // definir asi quotes: quotes
      quotes,
      newQuote: "Hola Mundo",
    };
  },

  methods: {
    addQuote(event) {
      console.log(this.newQuote);
      console.log(event);

      if ((event.code = "Enter")) {
        this.quotes.unshift({
          quote: this.newQuote,
        });
      }
    },
  },
  //   methods: {
  //     changeQuote(event){
  //         console.log('Hola Mundo', event);
  //         this.author = 'jijiij',
  //         this.capitalize();
  //     },

  //     capitalize(){

  //         this.quote = this.quote.toUpperCase()
  //     }
  //   }
});

app.mount("#myApp");
