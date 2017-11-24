export const generateAdventure = (premise) => {
  const title = generateTitle(premise)

  const pages = {
    start: {
      key: 'start',
      text: `
        You are ${premise.person} at ${premise.place}
        with a ${premise.thingSingular} and some ${premise.thingPlural}.
        Suddenly, you notice that it is raining.
      `
    }
  }

  return { title, pages }
}

const generateTitle = (premise) => {
  const generators = [
    (premise) => `${premise.person}'s Journey`,
    (premise) => `Once Upon ${premise.place}`,
    (premise) => `Curse of the ${premise.thingSingular}`,
    (premise) => `Too Many ${premise.thingPlural}`
  ]
  const randomGeneratorIndex = Math.floor(Math.random() * generators.length)
  const generator = generators[randomGeneratorIndex]
  const title = generator(premise)
  const uppercaseTitle = uppercase(title)
  return uppercaseTitle
}

const uppercase = (text) => {
  return text.replace(/(^|\s)[a-z]/g, (letter) => letter.toUpperCase())
}
