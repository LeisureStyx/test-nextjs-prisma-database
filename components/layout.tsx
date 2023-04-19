import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <a href="./">Test</a>
          </h1>
          <div>
            <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
              &#9776;
            </button>
            <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
              <a href="./users" className="hover:opacity-90">Customers</a>
              <a href="#test3" className="hover:opacity-90">Test3</a>
              <a href="#test4" className="hover:opacity-90">Settings</a>
            </nav>
          </div>
        </section>
      </header>
      <main className="max-w-4xl mx-auto p-4">
        {children}
      </main>
    </div>
  )
}