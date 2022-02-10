console.log('Loaded main.js', Vue);


Vue.component('dog-info', {
  props: [ 'name', 'roundness' ],
  data: function(){
    // Components must define data as a function that returns the
    // data object, so that each instance gets a unique copy
    return {
      age: 5
    };
  },
  methods: {
    incrementAge: function(){
      this.age++;
    }
  },
  template: `
    <div>
      <h3 @click="incrementAge">
        {{ name }}
      </h3
      <p>
        Roundness: {{ roundness }}
      </p>
      <p>
        Age: {{ age }}
      </p>
    </div>
  `
});

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
    }, // changeMessage()
    created: function(){
      console.log('Component loaded');
    }
  },


}); // new Vue() constructor
