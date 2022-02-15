import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useAuth } from '../../contexts/AuthContext'
import { getRecapDataAtom, testFinishedAtom } from '../../store'

function Index() {
  const [testFinished] = useAtom(testFinishedAtom)
  const { user } = useAuth()
  const [recapData] = useAtom(getRecapDataAtom)

  // useEffect(() => {
  //   socket.on('data', ({ recap, averageWPM, averageAccuracy, accuracy, testTime }) => {
  //     setData({
  //       recap,
  //       averageWPM,
  //       accuracy,
  //       testTime,
  //       averageAccuracy,
  //     })

  //     if (user && user.email) {
  //       addDoc(testsRef, {
  //         email: user?.email,
  //         recap,
  //         wpm: averageWPM,
  //         accuracy: averageAccuracy,
  //         seconds: testTime,
  //         date: {
  //           seconds: Date.now() / 1000,
  //           nanoseconds: Date.now() / 1000000,
  //         },
  //       })
  //     }
  //     const statsRef = doc(db, 'stats', user?.email as string)

  //     setDoc(
  //       statsRef,
  //       {
  //         testsTaken: increment(1),
  //         testsCompleted: increment(1),
  //         timeTyping: increment(testTime),
  //       },
  //       { merge: true }
  //     )
  //   })

  //   return () => {
  //     socket.off('data')
  //   }
  // }, [socket, data, user?.email, user])

  return (
    <>
      {testFinished && recapData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300} maxHeight={300}>
          <LineChart data={recapData}>
            <XAxis dataKey="seconds" />
            <YAxis dataKey="wpm" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="wpm" stroke="#82ca9d" animationDuration={5000} />
            <Line
              type="monotone"
              dataKey="incorrect"
              stroke="#8b0000"
              animationDuration={5000}
              zoomAndPan="incorrect"
            />
          </LineChart>
        </ResponsiveContainer>
      ) : null}
    </>
  )
}

Index.displayName = 'TypingTest'

export default Index
