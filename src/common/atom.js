import { atom, selector } from 'recoil'

export const nameState = atom({
  key: 'nameState',
  default: '',
})

export const getNameState = selector({
  key: 'getNameState',
  get: ({ get }) => {
    const name = get(nameState)

    return name + '님'
  },
})
