import { useEffect } from 'react'
import tips from '../data/tips.json'

function Consejos () {
  function getRandomIntInclusive (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
  }

  function getRandomTips () {
    const randomInt = getRandomIntInclusive(0, tips.length - 1)
    return {
      title: tips[randomInt].title,
      tip: tips[randomInt].tip
    }
  }

  const tip1 = getRandomTips()
  const tip2 = getRandomTips()
  const tip3 = getRandomTips()
  const tip4 = getRandomTips()
  console.log(tip1)
  return (
    <div className='mx-10 flex flex-col'>
      <section>
        <p>{tip1.title}</p>
        <p>{tip1.tip}</p>
      </section>
      <section>
        <p>{tip2.title}</p>
        <p>{tip2.tip}</p>
      </section>
      <section>
        <p>{tip3.title}</p>
        <p>{tip3.tip}</p>
      </section>
      <section>
        <p>{tip4.title}</p>
        <p>{tip4.tip}</p>
      </section>
    </div>
  )
}

export default Consejos
