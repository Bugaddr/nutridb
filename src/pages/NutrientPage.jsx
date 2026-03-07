import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import nutrients from 'virtual:nutrients'

function Tabs({ tabs }) {
  const valid = tabs.filter(t => t.content)
  const [active, setActive] = useState(0)
  if (!valid.length) return null
  return (
    <div className="tabs">
      <div className="tabs-bar">
        {valid.map((t, i) => (
          <button key={t.label} className={i === active ? 'on' : ''} onClick={() => setActive(i)}>{t.label}</button>
        ))}
      </div>
      <div className="tabs-body">{valid[active]?.content}</div>
    </div>
  )
}

function List({ items }) {
  if (!items?.length) return null
  return <ul>{items.map((s, i) => <li key={i}>{s}</li>)}</ul>
}

const rdaLabels = { nih: 'NIH', who: 'WHO', efsa: 'EFSA' }

function RDATable({ rows }) {
  if (!rows?.length) return <p>No data.</p>
  return (
    <table>
      <thead><tr><th>Group</th><th>Amount</th></tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i}><td>{r.group}</td><td className="val">{r.amount}</td></tr>)}</tbody>
    </table>
  )
}

export default function NutrientPage() {
  const { id } = useParams()
  const idx = nutrients.findIndex(n => n.id === id)
  const n = nutrients[idx]
  const prev = idx > 0 ? nutrients[idx - 1] : null
  const next = idx < nutrients.length - 1 ? nutrients[idx + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)
    if (n) document.title = `${n.name} — NutriDB`
  }, [id, n])

  if (!n) return <div className="wrap" style={{ padding: '80px 0', textAlign: 'center' }}><h2>Not found</h2><Link to="/">← Back</Link></div>

  const sym = n.deficiency?.symptoms
  const hasSeverity = sym?.early || sym?.moderate || sym?.severe || sym?.longTerm

  return (
    <div className="wrap">
      <div className="np-header">
        <Link to="/" className="back">← All Nutrients</Link>
        <h1>{n.name}</h1>
        {n.altName && <div className="alt">{n.altName}</div>}
        <p className="desc">{n.description}</p>
      </div>

      <div className="np-body">

        {/* 1. HOOK — Discovery story and fun facts to engage curiosity */}
        {(n.history || n.funFacts?.length > 0) && (
          <div className="np-section">
            <h2>Discovery & Background</h2>
            <Tabs tabs={[
              { label: 'History', content: n.history && <p>{n.history}</p> },
              { label: 'Fun Facts', content: n.funFacts?.length > 0 && <List items={n.funFacts} /> },
            ]} />
          </div>
        )}

        {/* 2. UNDERSTAND — What does this nutrient actually do in your body? */}
        {(n.functions || n.enzymeRoles || n.hormonalRoles || n.metabolicPathways || n.organsAffected || n.cellularFunctions) && (
          <div className="np-section">
            <h2>What It Does</h2>
            <Tabs tabs={[
              { label: 'Functions', content: n.functions?.length > 0 && <List items={n.functions} /> },
              { label: 'Organs', content: n.organsAffected?.length > 0 && <List items={n.organsAffected} /> },
              { label: 'Cellular', content: n.cellularFunctions?.length > 0 && <List items={n.cellularFunctions} /> },
              { label: 'Pathways', content: n.metabolicPathways?.length > 0 && <List items={n.metabolicPathways} /> },
              { label: 'Enzymes', content: n.enzymeRoles?.length > 0 && <List items={n.enzymeRoles} /> },
              { label: 'Hormones', content: n.hormonalRoles?.length > 0 && <List items={n.hormonalRoles} /> },
            ]} />
          </div>
        )}

        {/* 3. MEASURE — How much do you need? */}
        {n.rda && (
          <div className="np-section">
            <h2>How Much You Need</h2>
            <Tabs tabs={Object.keys(n.rda).map(a => ({
              label: rdaLabels[a] || a.toUpperCase(),
              content: <RDATable rows={n.rda[a]} />,
            }))} />
          </div>
        )}

        {/* 4. RISK — What happens if you don't get enough? */}
        {n.deficiency && (
          <div className="np-section">
            <h2>What Happens Without It</h2>
            <Tabs tabs={[
              ...(hasSeverity ? [
                { label: 'Early Signs', content: sym.early?.length > 0 && <List items={sym.early} /> },
                { label: 'Moderate', content: sym.moderate?.length > 0 && <List items={sym.moderate} /> },
                { label: 'Severe', content: sym.severe?.length > 0 && <List items={sym.severe} /> },
                { label: 'Long-term', content: sym.longTerm?.length > 0 && <List items={sym.longTerm} /> },
              ] : []),
              { label: 'Conditions', content: n.deficiency.conditions?.length > 0 && <List items={n.deficiency.conditions} /> },
              { label: 'Who\'s At Risk', content: n.deficiency.riskGroups?.length > 0 && <List items={n.deficiency.riskGroups} /> },
            ]} />
          </div>
        )}

        {/* 5. SAFETY — Normal ranges, testing, toxicity */}
        {(n.normalLevels || n.toxicity || n.testing) && (
          <div className="np-section">
            <h2>Your Levels</h2>
            <Tabs tabs={[
              { label: 'Normal Range', content: n.normalLevels && (
                <>
                  <p><strong>Range:</strong> {n.normalLevels.bloodRange}</p>
                  {n.normalLevels.unit && <p><strong>Unit:</strong> {n.normalLevels.unit}</p>}
                  {n.normalLevels.notes && <p>{n.normalLevels.notes}</p>}
                </>
              )},
              { label: 'How to Test', content: n.testing && (
                <>
                  {n.testing.methods?.length > 0 && <List items={n.testing.methods} />}
                  {n.testing.sampleType && <p><strong>Sample:</strong> {n.testing.sampleType}</p>}
                </>
              )},
              { label: 'Too Much?', content: n.toxicity && (
                <>
                  {n.toxicity.symptoms?.length > 0 && <List items={n.toxicity.symptoms} />}
                  {n.toxicity.upperLimit && <p><strong>Upper Limit:</strong> {n.toxicity.upperLimit}</p>}
                  {n.toxicity.notes && <p>{n.toxicity.notes}</p>}
                </>
              )},
            ]} />
          </div>
        )}

        {/* 6. ACTION — How to get it (food first, then supplements) */}
        {(n.sources?.length > 0 || n.supplementForms?.length > 0) && (
          <div className="np-section">
            <h2>How to Get It</h2>
            <Tabs tabs={[
              { label: 'Food Sources', content: n.sources?.length > 0 && (
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
              )},
              { label: 'Supplements', content: n.supplementForms?.length > 0 && (
                <table>
                  <thead><tr><th>Form</th><th>Bioavailability</th><th>Notes</th></tr></thead>
                  <tbody>
                    {n.supplementForms.map((f, i) => (
                      <tr key={i}>
                        <td><strong>{f.form}</strong></td>
                        <td><span className={`bio-badge bio-badge--${f.bioavailability?.toLowerCase()}`}>{f.bioavailability}</span></td>
                        <td>{f.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )},
            ]} />
          </div>
        )}

        {/* 7. CAUTION — Interactions and precautions */}
        {(n.interactions?.length > 0 || n.precautions?.length > 0) && (
          <div className="np-section">
            <h2>Watch Out For</h2>
            <Tabs tabs={[
              { label: 'Drug Interactions', content: n.interactions?.length > 0 && (
                <div className="interaction-list">
                  {n.interactions.map((int, i) => (
                    <div key={i} className="interaction-item">
                      <span className="sub">{int.substance}</span>
                      <span className="eff">{int.effect}</span>
                    </div>
                  ))}
                </div>
              )},
              { label: 'Precautions', content: n.precautions?.length > 0 && <List items={n.precautions} /> },
            ]} />
          </div>
        )}

        {/* 8. DEBUNK — Myths vs reality */}
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

        {/* 9. EXPLORE — External links */}
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
