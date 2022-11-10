import { useRecoilState, useRecoilValue } from 'recoil'

import { getNameState, nameState } from '../common/atom'

const TestPage = () => {
  const [name, setName] = useRecoilState(nameState)
  const hello = useRecoilValue(getNameState)

  return (
    <div>
      <p>{name}</p>
      <p>{hello}</p>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default TestPage
