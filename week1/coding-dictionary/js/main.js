console.log('Coding Dictionary JS loaded');




const dictionary = {

  // This nested object stores our actual coding terms
  // and their definitions as key:value pairs
  definitions: {
    method: 'a function which lives in an object (i.e. a function which is the value of a key)',
    scope: 'the visibility or lifetime of a variable within a program',
    'variadic function': 'a function which accepts a varying number of arguments from one call to the next',
    arity: 'the number of arguments a function accepts',
  },


  lookupTerm: function( term ){
    // console.log('in lookupTerm(): term = ', term);

    term = term.toLowerCase();

    if( term in this.definitions ){

      // Found the key
      const definition = this.definitions[ term ];
      console.log(`%c${term}:`, 'color: green', definition);
      return {
        term: term,
        definition: definition
      };

    } else {

      // Didn't find the key
      console.log(`%cSorry, '${term}' is not in the dictionary.`, 'color: orange');
      return { error: 'Term not found' };

    } // else

  }, // lookupTerm()


  printAllDefinitions: function(){

    let termsCount = 0;
    for( const key in this.definitions ){
      this.lookupTerm( key );
      termsCount++;
    } // for..in

    console.log(`Total entries: ${termsCount}`);

  }, // printAllDefinitions()


  addDefinition: function( term, definition ){

    term = term.toLowerCase();

    if( term in this.definitions ){
      console.log('This term is already defined');
      this.lookupTerm( term );
    } else {
      // Not already in the dictionary, so safe to add it
      this.definitions[term] = definition;
      // this.definitions.MTA = 'Metropolitan....??????!!!!!WTF'
      // numbers[1] = 'new value'
      console.log('Term added.');
    }

  }, // addDefinition()

  removeDefinition: function( term ){
    // TODO
  },

  searchAllDefinitions: function( searchText ){
    // TODO: loop through all definitions and do a substring search on each
  },


}; // dictionary object


// dictionary.lookupTerm( 'scope' );
dictionary.printAllDefinitions();
