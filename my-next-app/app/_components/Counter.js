"use client"

import { useState } from 'react'

function Counter({ count }) {
  const [current, setCurrent] = useState(count)

  return (
    <button onClick={() => setCurrent(current + 1)}>
      Кількість користувачів: {current}
    </button>
  )
}

export default Counter