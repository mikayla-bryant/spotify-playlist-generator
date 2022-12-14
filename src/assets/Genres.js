const genres = [
  {
    text: 'Select a genre...',
    value: '',
    attributes: { disabled: true, selected: true },
  },
  { text: '<POP>', value: 'POP', attributes: { disabled: true } },

  { text: 'Electropop', value: 'electropop' },
  { text: 'Hyperpop', value: 'hyperpop' },
  { text: 'Indie Pop', value: 'indie+pop' },
  { text: 'J-Pop', value: 'japanese+pop' },
  { text: 'K-Pop', value: 'k-pop' },
  { text: 'Pop', value: 'Pop' },
  { text: '<HIP-HOP>', value: 'HIP-HOP', attributes: { disabled: true } },
  { text: 'Rap', value: 'rap' },
  { text: 'Trap', value: 'trap' },
  { text: 'Grime', value: 'grime' },
  { text: '<R&B>', value: 'R&B', attributes: { disabled: true } },
  { text: 'Soul', value: 'Soul' },
  { text: 'Funk', value: 'funk' },
  { text: 'Indie Soul', value: 'indie+soul' },
  { text: 'Gospel', value: 'gospel' },
  { text: '<ELECTRONIC>', value: 'ELECTRONIC', attributes: { disabled: true } },
  { text: 'Electronic', value: 'Electronic' },
  { text: 'Electronica', value: 'electronica' },
  { text: 'Microhouse', value: 'microhouse' },
  { text: 'Wonky', value: 'wonky' },
  { text: 'Downtempo', value: 'Downtempo' },
  { text: 'Jazztronica', value: 'jazztronica' },
  { text: 'Techno', value: 'Techno' },
  { text: 'Dubstep', value: 'Dubstep' },
  { text: 'EDM', value: 'EDM' },
  { text: 'IDM', value: 'IDM' },
  { text: 'Tropical House', value: 'tropical' },
  { text: 'Chiptune', value: 'Chiptune' },
  { text: 'Synthwave', value: 'synthwave' },
  {
    text: '<ALTERNATIVE>',
    value: 'ALTERNATIVE',
    attributes: { disabled: true },
  },
  { text: 'Britpop', value: 'Britpop' },
  { text: 'Experimental', value: 'experimental' },
  { text: 'Vaporwave', value: 'vaporwave' },
  { text: 'Shoegaze', value: 'shoegaze' },
  { text: 'Chillwave', value: 'Chillwave' },
  { text: 'Popgaze', value: 'popgaze' },
  { text: 'Neo-psychedelic', value: 'neo-psychedelic' },
  { text: '<ROCK>', value: 'ROCK', attributes: { disabled: true } },
  { text: 'Rock', value: 'rock' },
  { text: 'Dance-punk', value: 'dance-punk' },
  { text: 'Alternative Metal', value: 'alternative+metal' },
  { text: 'Indie Rock', value: 'indie+rock' },
  { text: 'Grunge', value: 'grunge' },
  { text: 'Punk', value: 'punk' },
  { text: 'Emo', value: 'Emo' },
  { text: 'Art Rock', value: 'art+rock' },
  { text: 'Psychedelic Rock (Classic)', value: 'psychedelic+rock' },
  { text: 'Hard Rock', value: 'hard+rock' },
  { text: 'Garage Rock', value: 'garage+rock' },
  { text: 'Surf Rock', value: 'surf+rock' },
  { text: 'Math Rock', value: 'math+rock' },
  { text: 'Rockabilly', value: 'rockabilly' },
  { text: 'Metal', value: 'metal' },
  { text: '<COUNTRY>', value: 'COUNTRY', attributes: { disabled: true } },
  { text: 'Country', value: 'country' },
  { text: 'Folk', value: 'folk' },
  { text: 'Indie folk', value: 'indie+folk' },
  { text: 'Acoustic', value: 'acoustic' },
  { text: '<JAZZ>', value: 'JAZZ', attributes: { disabled: true } },
  { text: 'Jazz', value: 'jazz' },
  { text: 'Swing', value: 'swing' },
  { text: '<WORLD>', value: 'world', attributes: { disabled: true } },
  { text: 'Latin', value: 'latin' },
  { text: 'Brazilian', value: 'brazilian' },
  { text: 'Cumbia', value: 'cumbia' },
  { text: 'Flamenco', value: 'flamenco' },
  { text: 'Salsa', value: 'salsa' },
  { text: 'Reggae', value: 'reggae' },
  { text: 'Reggaeton', value: 'reggaeton' },
  { text: 'Bachata', value: 'bachata' },
  { text: 'African', value: 'african' },
  { text: 'Afropop', value: 'afropop' },
  { text: 'Celtic', value: 'celtic' },
  { text: 'Balkan', value: 'balkan' },
  { text: 'Devotional', value: 'devotional' },
  { text: '<MISC>', value: 'MISC', attributes: { disabled: true } },
  { text: 'Soundtrack', value: 'soundtrack' },
  { text: 'Classical', value: 'classical' },
  { text: 'Kids', value: 'kids' },
];

export { genres };