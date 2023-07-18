export function ModuleSkeleton() {
  return (
    <div className="bg-zinc-800">
      <div className="flex w-full animate-pulse items-center gap-3 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-xs" />

        <div className="flex flex-col gap-1">
          <div className="h-3 w-44 rounded bg-zinc-700" />
          <div className="h-2 w-28 rounded bg-zinc-700" />
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-zinc-900 p-6">
        <div className="flex animate-pulse items-center gap-3">
          <div className="h-2 w-28 rounded bg-zinc-700" />
          <div className="ml-auto h-2 w-8 rounded bg-zinc-700" />
        </div>

        <div className="flex animate-pulse items-center gap-3">
          <div className="h-2 w-28 rounded bg-zinc-700" />
          <div className="ml-auto h-2 w-8 rounded bg-zinc-700" />
        </div>

        <div className="flex animate-pulse items-center gap-3">
          <div className="h-2 w-28 rounded bg-zinc-700" />
          <div className="ml-auto h-2 w-8 rounded bg-zinc-700" />
        </div>
      </div>
    </div>
  )
}
