import { describe, it, expect, beforeEach } from 'vitest'
import { useStore as store } from '.'

const course = {
  id: 1,
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        {
          id: 'w-DW4DhDfcw',
          title: 'Estilização do Post',
          duration: '10:05',
        },
        {
          id: 'D83-55LUdKE',
          title: 'Componente: Header',
          duration: '06:33',
        },
      ],
    },
    {
      id: 2,
      title: 'Estrutura da aplicação',
      lessons: [
        {
          id: 'gE48FQXRZ_o',
          title: 'Componente: Comment',
          duration: '13:45',
        },
        {
          id: 'h5JA3wfuW1k',
          title: 'Interações no JSX',
          duration: '06:33',
        },
      ],
    },
  ],
}

const initialState = store.getState()

describe('Zustand Store', () => {
  beforeEach(() => {
    store.setState(initialState)
  })

  it('should be able to play', () => {
    const { play } = store.getState()

    play([1, 2])

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })

  it('should be able to play next video automatically', () => {
    store.setState({
      course,
    })

    const { next } = store.getState()

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(0)
    expect(currentLessonIndex).toEqual(1)
  })

  it('should be able to jump to next module automatically', () => {
    store.setState({
      course,
    })

    const { next } = store.getState()

    store.setState({
      currentLessonIndex: 1,
    })

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and lesson index if there is no next lesson available', () => {
    store.setState({
      course,
    })

    const { next } = store.getState()

    store.setState({
      currentModuleIndex: 1,
      currentLessonIndex: 1,
    })

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(1)
  })
})
