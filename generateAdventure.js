import _ from 'underscore'

export const generateAdventure = (premise) => {
  const title = generateTitle(premise)
  const maxDepth = 2
  const pages = generatePages(premise, maxDepth)
  const adventure = { title, pages }
  console.log('adventure:', adventure)
  return adventure
}

const generateTitle = (premise) => {
  const generators = [
    (premise) => `${premise.person}'s Journey`,
    (premise) => `Once Upon ${premise.place}`,
    (premise) => `Curse of the ${premise.thingSingular}`,
    (premise) => `Too Many ${premise.thingPlural}`
  ]
  const generator = _.sample(generators)
  const title = generator(premise)
  const uppercaseTitle = uppercase(title)
  return uppercaseTitle
}

const uppercase = (text) => {
  return text.replace(
    /(^|\s)[a-z]/g, (letter) => letter.toUpperCase()
  )
}

const generatePages = (premise, maxDepth) => {
  const pages = {}
  const startPage = generateStartPage(premise)
  pages[startPage.key] = startPage
  const nextPages = generateNextPages(startPage, maxDepth)
  console.log('nextPages:', nextPages)
  for (let nextPage of nextPages) {
    console.log('nextPage:', nextPage)
    pages[nextPage.key] = nextPage
  }
  return pages
}

const generateStartPage = (premise) => {
  const key = 'start'
  const state = {
    person: premise.person,
    place: premise.place,
    thingsSingular: [
      premise.thingSingular
    ],
    thingsPlural: [
      premise.thingPlural
    ],
    friends: [],
    enemies: []
  }
  const type = PAGE_TYPES.START
  const text = generatePageText(type, state)
  const options = generateOptions(type, state, key)
  return {
    key,
    state,
    type,
    text,
    options
  }
}

const PAGE_TYPES = {
  START: 'START'
}

const generatePageText = (pageType, state) => {
  switch (pageType) {
    case PAGE_TYPES.START:
      return `
        You are ${state.person}
        at ${state.place}
        with a ${state.thingsSingular[0]}
        and some ${state.thingsPlural[0]}.
        Suddenly, you notice that it is raining.
      `
  }
}

const generateOptions = (pageType, state, key) => {
  const rawOptions = generateRawOptions(pageType, state, key)
  const options = rawOptions.map(rawOption => ({
    ...rawOption,
    text: generateOptionText(rawOption)
  }))
  return options
}

const generateRawOptions = (pageType, state, key) => {
  switch (pageType) {
    case PAGE_TYPES.START:
      return [
        {
          nextPage: getNextPageKey(key, 1),
          type: OPTION_TYPES.USE_THING_SINGULAR,
          thing: state.thingsSingular[0]
        },
        {
          nextPage: getNextPageKey(key, 2),
          type: OPTION_TYPES.USE_THING_PLURAL,
          thing: state.thingsPlural[0]
        }
      ]
  }
}

const getNextPageKey = (previousPageKey, previousPageOptionNumber) => {
  return `${previousPageKey}-${previousPageOptionNumber}`
}

const OPTION_TYPES = {
  USE_THING_PLURAL: 'USE_THING_PLURAL',
  USE_THING_SINGULAR: 'USE_THING_SINGULAR'
}

const generateOptionText = (option) => {
  return _.sample(OPTION_TEXT_GENERATORS[option.type])(option)
}

const OPTION_TEXT_GENERATORS = {
  [OPTION_TYPES.USE_THING_PLURAL]: [
    (option) => `Use the ${option.thing}`,
    (option) => `Use your ${option.thing}`
  ],
  [OPTION_TYPES.USE_THING_SINGULAR]: [
    (option) => `Use the ${option.thing}`,
    (option) => `Use your ${option.thing}`
  ]
}

const generateNextPages = (previousPage, remainingDepth) => {
  const isEnd = remainingDepth === 1
  const immediateNextPages = previousPage.options.map(
    previousPageOption => (
      generateNextPage(previousPage, previousPageOption, isEnd)
    )
  )
  if (isEnd) {
    return immediateNextPages
  }
  const followingNextPages = _.flatten(
    immediateNextPages.map(immediateNextPage => (
      generateNextPages(immediateNextPage, remainingDepth - 1)
    ))
  )
  return [
    ...immediateNextPages,
    ...followingNextPages
  ]
}

const generateNextPage = (previousPage, previousPageOption, isEnd) => {
  const previousPageKey = previousPage.key
  const previousPageOptionNumber = (
    previousPage.options.indexOf(previousPageOption) + 1
  )
  const key = getNextPageKey(previousPageKey, previousPageOptionNumber)
  // TODO: change the state according to the previousPageOption
  const state = {
    ...previousPage.state
  }
  // TODO: pick a new page type
  const type = PAGE_TYPES.START
  const text = generatePageText(type, state)
  const options = isEnd ? [] : generateOptions(type, state, key)
  return {
    key,
    state,
    type,
    text,
    options
  }
}
