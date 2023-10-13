import { useCallback } from 'react'
import { useAppSelector, useAppDispatch } from './hooks'
import { decrement, increment, incrementByAmount, fetchCount } from './redux-usage/app/slice'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Divider } from '@arco-design/web-react';
import './App.css'

function App() {
  const count = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()

  const onHandleClickPlus = useCallback(() => {
    dispatch(increment())
  }, [dispatch])

  const onHandleMinus = useCallback(() => {
    dispatch(decrement())
  }, [dispatch])
  
  
  const onAsyncHandleAmountTwo = useCallback(() => {
    dispatch(incrementByAmount(2))
  }, [dispatch])

  // 异步
  const onAsyncGetCount = useCallback(async () => {
    await dispatch(fetchCount())
  }, [dispatch])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card" style={{ display: 'flex' }}>
        <Button type="secondary" onClick={onHandleClickPlus}>
          + 1
        </Button>
        <Button type="primary" onClick={onHandleMinus} style={{ marginLeft: '12px' }}>
          - 1
        </Button>
        <Button 
          type="dashed" 
          onClick={onAsyncHandleAmountTwo}
          style={{ marginLeft: '12px' }}
        >
          + 2
        </Button>
        <Button
          type='outline'
          onClick={onAsyncGetCount}
          style={{ marginLeft: '12px' }}
          loading={count.loadingStatus}
        >Fetch Count</Button>
      </div>
      <Divider>
        loading fixed width
      </Divider>
      <p>Count: {count.value}</p>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
