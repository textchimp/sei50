console.log('Loaded main.js', Vue);

const myApp = new Vue({
  // Where does this Vue app attach to the dom?
  el: '#app',

  // What is the 'state' of the app?
  // i.e. what is the collection of variables that change
  // as a user interacts with your app
  data: {
    message: 'Hello Vuorld!',
    hoverText: 'This is the Vue hover text!',
    billURL: 'http://www.fillmurray.com/300/300',
    showMessage: true,
    queryText: 'some texts',

    errorStatus: 'allGood',

    todoList: [
      { text: 'Learn Vue' },
      { text: 'Finish homework and push' },
      { text: 'Relax' },
    ]

  }, // data

  methods: {
    changeMessage: function( ev ){
      console.log('clicked!', ev);
      this.message = this.message.split('').reverse().join('');
      this.showMessage = !this.showMessage;
    } // changeMessage()
  },


}); // new Vue() constructor
