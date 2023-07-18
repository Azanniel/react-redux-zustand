import { useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'

import { useAppDispatch, useAppSelector } from '../store'
import { loadCourse, useCurrentLesson } from '../store/slices/player'
import { ModuleSkeleton } from '../components/ModuleSkeleton'

export function Player() {
  const dispatch = useAppDispatch()

  const { modules, isCourseLoading } = useAppSelector((state) => {
    const modules = state.player.course?.modules
    const isCourseLoading = state.player.isLoading

    return { modules, isCourseLoading }
  })

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    dispatch(loadCourse())
  }, [dispatch])

  useEffect(() => {
    if (currentLesson) {
      document.title = `Redux + Zustand - ${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 pr-80 shadow">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-auto border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {isCourseLoading || !modules ? (
              <ModuleSkeleton />
            ) : (
              modules.map((module, moduleIndex) => {
                return (
                  <Module
                    key={module.id}
                    title={module.title}
                    moduleIndex={moduleIndex}
                    amountOfLessons={module.lessons.length}
                  />
                )
              })
            )}
          </aside>
        </main>
      </div>
    </div>
  )
}
