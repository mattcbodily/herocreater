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
    superpower: 'Super Spy',
    index: 4
   },
   {
    name: 'Hawkeye',
    superpower: 'Super Sight',
    index: 5
   }
]

module.exports = {
    getHeroes: (req, res) => {
        res.status(200).send(allHeroes)
    },

    addHeroes: (req, res) => {
        const index = allHeroes[allHeroes.length - 1].index+1

        const newHero = {
            name: req.body.name,
            superpower: req.body.superpower,
            index: index
        }
        allHeroes.push(newHero)
        res.status(200).send(allHeroes)
    },

    editHeroes: (req, res) => {
        const {index} = req.params;
        const editHero = req.body;
        
        let hero = allHeroes.find((element) => {
            return element.index === +index;
        })

        hero.name = editHero.name;
        hero.superpower = editHero.superpower;

        res.status(200).send(allHeroes);
    },

    deleteHeroes: (req, res) => {
        allHeroes = allHeroes.filter((hero) => hero.index !== +req.params.index)
        res.status(200).send(allHeroes)
    }
}