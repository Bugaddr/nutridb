import { useState } from 'react'
import nutrients from 'virtual:nutrients'

export default function ComparePage() {
  const [sel, setSel] = useState([null, null, null])
  const update = (i, id) => { const next = [...sel]; next[i] = id ? nutrients.find(n => n.id === id) : null; setSel(next) }
  const active = sel.filter(Boolean)

  return (
    <div className="wrap compare-page">
      <h1>Compare Nutrients</h1>
      <p>Pick up to 3 nutrients to compare.</p>

      <div className="compare-selects">
        {[0, 1, 2].map(i => (
          <select key={i} value={sel[i]?.id || ''} onChange={e => update(i, e.target.value)}>
            <option value="">Select…</option>
            {nutrients.map(n => <option key={n.id} value={n.id}>{n.name}</option>)}
          </select>
        ))}
      </div>

      {active.length >= 2 ? (
        <table>
          <thead><tr><th></th>{active.map(n => <th key={n.id}>{n.name}</th>)}</tr></thead>
          <tbody>
            <tr><td>Category</td>{active.map(n => <td key={n.id}>{n.subcategory?.replace(/-/g,' ')}</td>)}</tr>
            <tr><td>RDA</td>{active.map(n => <td key={n.id} className="val">{n.rda?.nih?.[0]?.amount || '—'}</td>)}</tr>
            <tr><td>Upper Limit</td>{active.map(n => <td key={n.id}>{n.toxicity?.upperLimit || '—'}</td>)}</tr>
            <tr><td>Normal Range</td>{active.map(n => <td key={n.id}>{n.normalLevels?.bloodRange || '—'}</td>)}</tr>
            <tr><td>Top Source</td>{active.map(n => <td key={n.id}>{n.sources?.[0]?.name || '—'}</td>)}</tr>
            <tr><td>Deficiency</td>{active.map(n => <td key={n.id}>{(n.deficiency?.symptoms||[]).slice(0,3).join('; ') || '—'}</td>)}</tr>
            <tr><td>Test</td>{active.map(n => <td key={n.id}>{n.testing?.methods?.[0] || '—'}</td>)}</tr>
          </tbody>
        </table>
      ) : (
        <div className="compare-empty">Select at least 2 nutrients.</div>
      )}
    </div>
  )
}
