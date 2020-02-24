import React, { useEffect, useState } from 'react';

function usePublicReposCount() {
  console.log('***** usePublicReposCount *****')
  const [publicRepos, setPublicRepos] = useState(0);

  useEffect(() => {
    console.log('useEffect ---')
    fetch('https://api.github.com/users/pipusana')
      .then(res => res.json())
      .then(({ public_repos: publicRepos }) => {
        console.log('----- fetch')
        setPublicRepos(publicRepos)
      })

    return () => {
      // unsubscribe
      console.log('componentWillUnmount')
    }
  }, []);

  // useEffect จะถูกเรียกแบบรัวๆ เพราะว่าเมื่อเราไป fetch data มา component จะมีการอัพเดท state ทำให้ component มีการ re-render ก็เลยไปสั่งให้ useEffect ให้ทำงานอีกครั้ง เราก็เลยต้องอย่างน้อยใส่ array ว่างเข้าไป เพื่อให้ทำงานเฉพาะตอน component นั้น mount หรือ unmount เพียงอย่างเดียว
  // เพิ่ม array เข้าไปเป็น parameter ที่ 2 ซึ่งถ้าหากว่าเป็น array ว่าง useEffect จะทำงานตอนที่ component นั้นมีการ mount หรือ unmount เพียงอย่างเดียว
  // อยากให้ useEffect นั้นทำงานแบบ componentDidUpdate ก็ต้องใส่ค่าเข้าไปใน array เพื่อให้ useEffect รู้ว่าจะเรียกใช้งานเมื่อค่าใน array นั้นมีการเปลี่ยนแปลง [username]

  return publicRepos
}

function App() {
  const publicRepoCpunt = usePublicReposCount()
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> Count github Repos: {publicRepoCpunt}</h1>
      <h1> Count: {count}</h1>
      <button onClick={() => setCount(count => count + 1)}>Add</button>
    </div>
  );
}


export default App;