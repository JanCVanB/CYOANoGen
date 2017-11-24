export default {
  title: 'The Rainy Day',
  pages: {
    start: {
      key: 'start',
      text: 'You are a basketball player at the beach with a bike and some sunglasses. Suddenly, you notice that it is raining.',
      options: [
        { nextPage: '1', text: 'Use your bike' },
        { nextPage: '2', text: 'Use your sunglasses' }
      ]
    },
    '1': {
      key: '1',
      text: 'You use your bike. Cycling in the rain is almost inevitable, no matter where it is you ride. You meet Kerry, who asks to join you.',
      options: [
        { nextPage: '11', text: 'Welcome Kerry' },
        { nextPage: '12', text: 'Reject Kerry' }
      ]
    },
    '11': {
      key: '11',
      text: 'You welcome Kerry. Kerry can help you make better tasting and more authentic products that meet the vital nutritional needs of consumers across the world. Kerry gives you fans. What do you do?',
      options: [
        { nextPage: '111', text: 'Spin your fans' },
        { nextPage: '112', text: 'Grasp your fans' }
      ]
    },
    '111': {
      key: '111',
      text: 'You spin your fans. You now have a bike, sunglasses, fans, and a friend named Kerry at the beach.'
    },
    '112': {
      key: '112',
      text: 'You grasp your fans. You now have a bike, sunglasses, fans, and a friend named Kerry at the beach.'
    },
    '12': {
      key: '12',
      text: 'You reject Kerry. Israeli Prime Minister Benjamin Netanyahu rejected a peace deal last year that was brokered by then-Secretary of State John Kerry. Kerry takes your bike.',
      options: [
        { nextPage: '121', text: 'Use your sunglasses' },
        { nextPage: '122', text: 'Go to Ireland' }
      ]
    },
    '121': {
      key: '121',
      text: 'You use your sunglasses. You now have sunglasses at the beach.'
    },
    '122': {
      key: '122',
      text: 'You go to Ireland. You now have sunglasses at Ireland.'
    },
    '2': {
      key: '2',
      text: 'You use your sunglasses. Wear polarized sunglasses when driving in rain during the day. You find a driver.',
      options: [
        { nextPage: '21', text: 'Go to USA' },
        { nextPage: '22', text: 'Go to Allstate' }
      ]
    },
    '21': {
      key: '21',
      text: 'You go to USA. You are a citizen or eligible national of a Visa Waiver Program country. You lost your sunglasses on the way to USA. What do you use instead?',
      options: [
        { nextPage: '211', text: 'Use your bike' },
        { nextPage: '212', text: 'Use your skills as a basketball player' }
      ]
    },
    '211': {
      key: '211',
      text: 'You use your bike instead of sunglasses, and you break your bike. You are now a basketball player at USA.'
    },
    '212': {
      key: '212',
      text: 'You use your skills as a basketball player instead of sunglasses. You are now a basketball player with a bike at USA.'
    },
    '22': {
      key: '22',
      text: 'You go to Allstate. Please select the type of policy you have. Suddenly, a household attacks you!',
      options: [
        { nextPage: '221', text: 'Use your bike' },
        { nextPage: '222', text: 'Use your sunglasses' }
      ]
    },
    '221': {
      key: '221',
      text: 'You use your bike to defend against the household, and you gain a burglar. You are now a basketball player with a bike, sunglasses, and a burglar at USA.'
    },
    '222': {
      key: '222',
      text: 'You use your sunglasses to defend against the household, but you break the sunglasses. You are now a basketball player with a bike at USA.'
    }
  }
}
