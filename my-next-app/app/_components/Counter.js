"use client"

import { useState } from 'react'

function Counter({ count }) {
  const [current, setCurrent] = useState(count)

  return (
    <button onClick={() => setCurrent(current + 1)}>
      Number of users: {current}
    </button>
  )
}

export default Counter