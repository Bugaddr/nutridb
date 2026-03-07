import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import nutrients from 'virtual:nutrients'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'vitamin', label: 'Vitamins' },
  { key: 'mineral', label: 'Minerals' },
  { key: 'essential', label: 'Essential' },
  { key: 'conditionally-essential', label: 'Conditional' },
  { key: 'non-essential', label: 'Non-Essential' },
]

export default function HomePage() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const list = useMemo(() => {
    let r = nutrients
    if (filter !== 'all') r = r.filter(n => n.essentiality === filter || n.category === filter)
    if (search) {
      const q = search.toLowerCase()
      r = r.filter(n => n.name.toLowerCase().includes(q) || (n.altName || '').toLowerCase().includes(q))
    }
    return r
  }, [filter, search])

  return (
    <div className="wrap">
      <div className="home-hero">
        <h1>Micronutrient Encyclopedia</h1>
        <p>{nutrients.length} nutrients — vitamins, minerals, and essential compounds with RDA, deficiency data, food sources, and more.</p>
        <input placeholder="Search nutrients…" value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div className="filters">
        {filters.map(f => (
          <button key={f.key} className={filter === f.key ? 'on' : ''} onClick={() => setFilter(f.key)}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="count">{list.length} results</div>

      <div className="grid">
        {list.map(n => (
          <Link key={n.id} to={`/nutrient/${n.id}`}>
            <h3>{n.name}</h3>
            <div className="alt">{n.altName?.split('/')[0]?.trim()}</div>
            <div className="desc">{n.description?.slice(0, 80)}…</div>
            <div className="meta">
              <span>{n.subcategory?.replace(/-/g, ' ')}</span>
              <span>{n.symbol}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
