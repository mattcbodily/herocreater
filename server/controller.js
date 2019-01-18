let allHeroes = [
   {
    name: 'Iron Man',
    superpower: 'Being Filthy Rich',
    index: 0
   },
   {
    name: 'Captain America',
    superpower: 'Super Strength',
    index: 1
   },
   {
    name: 'Thor',
    superpower: 'God of Thunder',
    index: 2
   },
   {
    name: 'The Hulk',
    superpower: 'Hulk Smash',
    index: 3
   },
   {
    name: 'Black Widow',
    superpower: '?',
    index: 4
   },
   {
    name: 'Hawkeye',
    superpower: 'Shooting Arrows, I guess',
    index: 5
   }
]

module.exports = {
    getHeroes: (req, res) => {
        res.status(200).send(allHeroes)
    }
}