import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import nutrients from 'virtual:nutrients'

function RDA({ rda }) {
  const agencies = Object.keys(rda || {})
  const [tab, setTab] = useState(agencies[0] || 'nih')
  const labels = { nih: 'NIH', who: 'WHO', efsa: 'EFSA' }
  if (!agencies.length) return <p>No data.</p>
  return (
    <>
      <div className="rda-tabs">
        {agencies.map(a => <button key={a} className={a === tab ? 'on' : ''} onClick={() => setTab(a)}>{labels[a] || a}</button>)}
      </div>
      <table>
        <thead><tr><th>Group</th><th>Amount</th></tr></thead>
        <tbody>{(rda[tab] || []).map((r, i) => <tr key={i}><td>{r.group}</td><td className="val">{r.amount}</td></tr>)}</tbody>
      </table>
    </>
  )
}

export default function NutrientPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const idx = nutrients.findIndex(n => n.id === id)
  const n = nutrients[idx]
  const prev = idx > 0 ? nutrients[idx - 1] : null
  const next = idx < nutrients.length - 1 ? nutrients[idx + 1] : null

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!n) return <div className="wrap" style={{ padding: '80px 0', textAlign: 'center' }}><h2>Not found</h2><Link to="/">← Back</Link></div>

  return (
    <div className="wrap">
      <div className="np-header">
        <Link to="/" className="back">← All Nutrients</Link>
        <h1>{n.name}</h1>
        {n.altName && <div className="alt">{n.altName}</div>}
        <p className="desc">{n.description}</p>
      </div>

      <div className="np-body">
        {n.functions?.length > 0 && (
          <div className="np-section">
            <h2>Functions</h2>
            <ul>{n.functions.map((f, i) => <li key={i}>{f}</li>)}</ul>
          </div>
        )}

        {n.rda && (
          <div className="np-section">
            <h2>Recommended Daily Allowance</h2>
            <RDA rda={n.rda} />
          </div>
        )}

        {n.deficiency && (
          <div className="np-section">
            <h2>Deficiency</h2>
            {n.deficiency.symptoms?.length > 0 && <><h3>Symptoms</h3><ul>{n.deficiency.symptoms.map((s, i) => <li key={i}>{s}</li>)}</ul></>}
            {n.deficiency.conditions?.length > 0 && <><h3>Conditions</h3><ul>{n.deficiency.conditions.map((c, i) => <li key={i}>{c}</li>)}</ul></>}
            {n.deficiency.riskGroups?.length > 0 && <><h3>At-Risk Groups</h3><ul>{n.deficiency.riskGroups.map((r, i) => <li key={i}>{r}</li>)}</ul></>}
          </div>
        )}

        {n.normalLevels && (
          <div className="np-section">
            <h2>Normal Blood Levels</h2>
            <p><strong>Range:</strong> {n.normalLevels.bloodRange}</p>
            {n.normalLevels.unit && <p><strong>Unit:</strong> {n.normalLevels.unit}</p>}
            {n.normalLevels.notes && <p>{n.normalLevels.notes}</p>}
          </div>
        )}

        {n.toxicity && (
          <div className="np-section">
            <h2>Toxicity</h2>
            {n.toxicity.symptoms?.length > 0 && <ul>{n.toxicity.symptoms.map((s, i) => <li key={i}>{s}</li>)}</ul>}
            {n.toxicity.upperLimit && <p><strong>Upper Limit:</strong> {n.toxicity.upperLimit}</p>}
            {n.toxicity.notes && <p>{n.toxicity.notes}</p>}
          </div>
        )}

        {n.testing && (
          <div className="np-section">
            <h2>Testing</h2>
            {n.testing.methods?.length > 0 && <ul>{n.testing.methods.map((m, i) => <li key={i}>{m}</li>)}</ul>}
            {n.testing.sampleType && <p><strong>Sample:</strong> {n.testing.sampleType}</p>}
          </div>
        )}

        {n.sources?.length > 0 && (
          <div className="np-section">
            <h2>Food Sources</h2>
            <div className="source-bar">
              {n.sources.map((s, i) => {
                const max = Math.max(...n.sources.map(x => parseFloat(x.amount) || 0))
                const pct = max > 0 ? ((parseFloat(s.amount) || 0) / max) * 100 : 0
                return (
                  <div key={i} className="source-row">
                    <div className="info"><span>{s.name}</span><span className="amt">{s.amount} {s.unit}</span></div>
                    <div className="bar"><div className="bar-fill" style={{ width: `${pct}%` }} /></div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {n.myths?.length > 0 && (
          <div className="np-section">
            <h2>Myths vs Reality</h2>
            <div className="myth-list">
              {n.myths.map((m, i) => (
                <div key={i} className="myth-item">
                  <div className="label myth">Myth</div>
                  <p>{m.myth}</p>
                  <div className="label reality" style={{ marginTop: 8 }}>Reality</div>
                  <p>{m.reality}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {n.interactions?.length > 0 && (
          <div className="np-section">
            <h2>Interactions</h2>
            <div className="interaction-list">
              {n.interactions.map((int, i) => (
                <div key={i} className="interaction-item">
                  <span className="sub">{int.substance}</span>
                  <span className="eff">{int.effect}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {n.precautions?.length > 0 && (
          <div className="np-section">
            <h2>Precautions</h2>
            <ul>{n.precautions.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </div>
        )}

        {n.history && (
          <div className="np-section">
            <h2>History</h2>
            <p>{n.history}</p>
          </div>
        )}

        {n.funFacts?.length > 0 && (
          <div className="np-section">
            <h2>Fun Facts</h2>
            <ul>{n.funFacts.map((f, i) => <li key={i}>{f}</li>)}</ul>
          </div>
        )}

        <div className="np-section">
          <h2>Read More</h2>
          <ul className="read-more">
            <li><a href={`https://ods.od.nih.gov/factsheets/${encodeURIComponent(n.name)}-HealthProfessional/`} target="_blank" rel="noopener noreferrer">NIH Office of Dietary Supplements</a></li>
            <li><a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(n.name)}`} target="_blank" rel="noopener noreferrer">Wikipedia — {n.name}</a></li>
            <li><a href={`https://examine.com/supplements/${n.id}/`} target="_blank" rel="noopener noreferrer">Examine.com</a></li>
            <li><a href={`https://pubchem.ncbi.nlm.nih.gov/#query=${encodeURIComponent(n.name)}`} target="_blank" rel="noopener noreferrer">PubChem</a></li>
          </ul>
        </div>

        <div className="np-nav">
          {prev ? <Link to={`/nutrient/${prev.id}`}><small>← Previous</small>{prev.name}</Link> : <span />}
          {next ? <Link to={`/nutrient/${next.id}`}><small>Next →</small>{next.name}</Link> : <span />}
        </div>
      </div>
    </div>
  )
}
