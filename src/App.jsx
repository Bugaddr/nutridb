import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import nutrients from 'virtual:nutrients'
import HomePage from './pages/HomePage'
import NutrientPage from './pages/NutrientPage'

import './index.css'

function Nav() {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const navigate = useNavigate()

  const results = q.length > 0
    ? nutrients.filter(n =>
        n.name.toLowerCase().includes(q.toLowerCase()) ||
        (n.symbol && n.symbol.toLowerCase().includes(q.toLowerCase()))
      ).slice(0, 6)
    : []

  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <nav className="nav">
      <div className="nav-inner wrap">
        <Link to="/" className="nav-brand">Nutri<span>DB</span></Link>
        <div className="nav-search" ref={ref}>
          <input placeholder="Search…" value={q}
            onChange={e => { setQ(e.target.value); setOpen(true) }}
            onFocus={() => setOpen(true)}
            onKeyDown={e => {
              if (e.key === 'Enter' && results.length > 0) {
                setQ(''); setOpen(false); navigate(`/nutrient/${results[0].id}`);
              }
            }} />
          {open && results.length > 0 && (
            <div className="nav-results">
              {results.map(n => (
                <button key={n.id} className="nav-result"
                  onClick={() => { setQ(''); setOpen(false); navigate(`/nutrient/${n.id}`) }}>
                  {n.name} <small>{n.symbol}</small>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nutrient/:id" element={<NutrientPage />} />
        </Routes>
      </main>
      <footer>
        <div className="wrap">
          <p>NutriDB — Educational resource. Not medical advice.</p>
          <p>Data sourced from NIH, WHO, EFSA, ICMR.</p>
        </div>
      </footer>
    </>
  )
}
