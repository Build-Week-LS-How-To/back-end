
exports.seed = function(knex) {
  const hacks = [
    {
title: 'Getting the Life that You Want',
description: 'Three steps to live your dream life.',
steps: {
  step1: 'Being aware change is needed.',
  step2: 'Believe that you deserve to have what you want.',
  step3: 'For at least 20 minutes a day, apply a change to an area of your life that gets you closer to having what you want.'
},
userID: 1
  },
    {
title: 'Problem Solving',
description: 'Three Basic Steps of Problem Solving.',
steps: {
  step1: 'Define the problem.',
  step2: 'Explain why there is a problem.',
  step3: 'Find solutions to prevent future occurences of the problem.'
},
userID: 2
  },
    {
title: 'Simple Routine for Great Skin',
description: 'Clinique signature steps for healthy glowing skin.',
steps: {
  step1: 'Use Cleansers.',
  step2: 'Exfoliate.',
  step3: 'Moisturize.'
},
userID: 3
  }
]
      return knex('hacks').insert(hacks).then(() => {
        console.log('Seed data for hacks added.')
      });
};
