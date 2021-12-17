console.log('Insults JS loaded');

const insultGenerator = {


  firstAdjectives: [
    'artless',
    'bawdy',
    'beslubbering',
    'bootless',
    'churlish',
    'cockered',
    'clouted',
    'craven',
    'currish',
    'dankish',
    'dissembling',
    'droning',
    'errant',
    'fawning',
    'fobbing',
    'froward',
    'frothy',
    'gleeking',
    'goatish',
    'gorbellied',
    'impertinent',
    'infectious',
    'jarring',
    'loggerheaded',
    'lumpish',
    'mammering',
    'mangled',
    'mewling',
    'paunchy',
    'pribbling',
    'puking',
    'puny',
    'qualling',
    'rank',
    'reeky',
    'roguish',
    'ruttish',
    'saucy',
    'spleeny',
    'spongy',
    'surly',
    'tottering',
    'unmuzzled',
    'vain',
    'venomed',
    'villainous',
    'warped',
    'wayward',
    'weedy',
    'yeasty'
  ],

  secondAdjectives: [
    'base-court',
    'bat-fowling',
    'beef-witted',
    'beetle-headed',
    'boil-brained',
    'clapper-clawed',
    'clay-brained',
    'common-kissing',
    'crook-pated',
    'dismal-dreaming',
    'dizzy-eyed',
    'doghearted',
    'dread-bolted',
    'earth-vexing',
    'elf-skinned',
    'fat-kidneyed',
    'fen-sucked',
    'flap-mouthed',
    'fly-bitten',
    'folly-fallen',
    'fool-born',
    'full-gorged',
    'guts-griping',
    'half-faced',
    'hasty-witted',
    'hedge-born',
    'hell-hated',
    'idle-headed',
    'ill-breeding',
    'ill-nurtured',
    'knotty-pated',
    'milk-livered',
    'motley-minded',
    'onion-eyed',
    'plume-plucked',
    'pottle-deep',
    'pox-marked',
    'reeling-ripe',
    'rough-hewn',
    'rude-growing',
    'rump-fed',
    'shard-borne',
    'sheep-biting',
    'spur-galled',
    'swag-bellied',
    'tardy-gaited',
    'tickle-brained',
    'toad-spotted',
    'unchin-snouted',
    'weather-bitten'
  ],

  nouns: [
    'apple-john',
    'baggage',
    'barnacle',
    'bladder',
    'boar-pig',
    'bugbear',
    'bum-bailey',
    'canker-blossom',
    'clack-dish',
    'clotpole',
    'coxcomb',
    'codpiece',
    'death-token',
    'dewberry',
    'flap-dragon',
    'flax-wench',
    'flirt-gill',
    'foot-licker',
    'fustilarian',
    'giglet',
    'gudgeon',
    'haggard',
    'harpy',
    'hedge-pig',
    'horn-beast',
    'hugger-mugger',
    'joithead',
    'lewdster',
    'lout',
    'maggot-pie',
    'malt-worm',
    'mammet',
    'measle',
    'minnow',
    'miscreant',
    'moldwarp',
    'mumble-news',
    'nut-hook',
    'pigeon-egg',
    'pignut',
    'puttock',
    'pumpion',
    'ratsbane',
    'scut',
    'skainsmate',
    'strumpet',
    'varlot',
    'vassal',
    'whey-face',
    'wagtail'
  ],

  generateRandomInt: function( max ){

    const randomFloat = Math.random() * max;
    const randomInt   = Math.floor( randomFloat );
    return randomInt;
    // return Math.floor( Math.random() * max );
  }, // generateRandomInt()

  // This function has an arity of 1
  getRandomElementFromArray: function( array ){
    const randomIndex = this.generateRandomInt( array.length );
    return array[ randomIndex ];
  }, // getRandomElementFromArray()


  generateInsult: function(){

    const randomFirstAdjective = this.getRandomElementFromArray( this.firstAdjectives );
    const randomSecondAdjective = this.getRandomElementFromArray( this.secondAdjectives );
    const randomNoun = this.getRandomElementFromArray( this.nouns );

    return `Thou ${randomFirstAdjective} ${randomSecondAdjective} ${randomNoun}!`;

  }, // generateInsult()


}; // end of insultGenerator object


const insult = insultGenerator.generateInsult();
console.log( insult );
