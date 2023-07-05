/* eslint-disable react/no-unescaped-entities */
import { MessageCircle } from 'lucide-react'

export function Player() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
            <span className="text-sm text-zinc-400">
              Módulo "Desvendando o Redux"
            </span>
          </div>

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">video</div>

          <aside className="h-[400px] w-80 border-l border-zinc-800 bg-zinc-900">
            Módulos
          </aside>
        </main>
      </div>
    </div>
  )
}