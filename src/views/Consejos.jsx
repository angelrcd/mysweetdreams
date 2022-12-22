import { useEffect } from 'react'
import tips from '../data/tips.json'

function Consejos () {
  function get4RandomInts (min, max) {
    const result = []
    min = Math.ceil(min)
    max = Math.floor(max)
    for (let i = 0; i < 4; i++) {
      const randomInt = Math.floor(Math.random() * (max - min + 1) + min)
      if (result.includes(randomInt) === true) {
        i--
      } else {
        result.push(randomInt)
      }
    }
    console.log(result)
    return result // The maximum is inclusive and the minimum is inclusive
  }

  function get4RandomTips () {
    const result = []
    const randomInts = get4RandomInts(0, tips.length - 1)
    for (let i = 0; i < randomInts.length; i++) {
      const x = {
        title: tips[randomInts[i]].title,
        tip: tips[randomInts[i]].tip
      }
      result.push(x)
    }
    return result
  }

  const randomTips = get4RandomTips()
  console.log(randomTips)
  return (
    <div className='mx-10 flex flex-col '>
      <section className='my-5'>
        <p className='text-2xl text-blue-500'>{randomTips[0].title}</p>
        <p>{randomTips[0].tip}</p>
      </section>
      <section className='my-5'>
        <p className='text-2xl text-blue-500'>{randomTips[1].title}</p>
        <p>{randomTips[1].tip}</p>
      </section>
      <section className='my-5'>
        <p className='text-2xl text-blue-500'>{randomTips[2].title}</p>
        <p>{randomTips[2].tip}</p>
      </section>
      <section className='my-5'>
        <p className='text-2xl text-blue-500'>{randomTips[3].title}</p>
        <p>{randomTips[3].tip}</p>
      </section>
    </div>
  )
}

export default Consejos
