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

  useEffect(() => { window.scrollTo(0, 0) }, [id])

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
        {/* Biological Details — tabbed */}
        {(n.functions || n.enzymeRoles || n.hormonalRoles || n.metabolicPathways || n.organsAffected || n.cellularFunctions) && (
          <div className="np-section">
            <h2>Biological Details</h2>
            <Tabs tabs={[
              { label: 'Functions', content: n.functions?.length > 0 && <List items={n.functions} /> },
              { label: 'Enzymes', content: n.enzymeRoles?.length > 0 && <List items={n.enzymeRoles} /> },
              { label: 'Hormones', content: n.hormonalRoles?.length > 0 && <List items={n.hormonalRoles} /> },
              { label: 'Pathways', content: n.metabolicPathways?.length > 0 && <List items={n.metabolicPathways} /> },
              { label: 'Organs', content: n.organsAffected?.length > 0 && <List items={n.organsAffected} /> },
              { label: 'Cellular', content: n.cellularFunctions?.length > 0 && <List items={n.cellularFunctions} /> },
            ]} />
          </div>
        )}

        {/* RDA */}
        {n.rda && (
          <div className="np-section">
            <h2>Recommended Daily Allowance</h2>
            <Tabs tabs={Object.keys(n.rda).map(a => ({
              label: rdaLabels[a] || a.toUpperCase(),
              content: <RDATable rows={n.rda[a]} />,
            }))} />
          </div>
        )}

        {/* Deficiency — symptoms tabbed by severity */}
        {n.deficiency && (
          <div className="np-section">
            <h2>Deficiency</h2>
            {hasSeverity && (
              <Tabs tabs={[
                { label: 'Early', content: sym.early?.length > 0 && <List items={sym.early} /> },
                { label: 'Moderate', content: sym.moderate?.length > 0 && <List items={sym.moderate} /> },
                { label: 'Severe', content: sym.severe?.length > 0 && <List items={sym.severe} /> },
                { label: 'Long-term', content: sym.longTerm?.length > 0 && <List items={sym.longTerm} /> },
              ]} />
            )}
            {Array.isArray(sym) && <List items={sym} />}
            {n.deficiency.conditions?.length > 0 && <><h3>Conditions</h3><List items={n.deficiency.conditions} /></>}
            {n.deficiency.riskGroups?.length > 0 && <><h3>At-Risk Groups</h3><List items={n.deficiency.riskGroups} /></>}
          </div>
        )}

        {/* Levels, Toxicity, Testing — tabbed */}
        {(n.normalLevels || n.toxicity || n.testing) && (
          <div className="np-section">
            <h2>Levels & Safety</h2>
            <Tabs tabs={[
              { label: 'Normal Levels', content: n.normalLevels && (
                <>
                  <p><strong>Range:</strong> {n.normalLevels.bloodRange}</p>
                  {n.normalLevels.unit && <p><strong>Unit:</strong> {n.normalLevels.unit}</p>}
                  {n.normalLevels.notes && <p>{n.normalLevels.notes}</p>}
                </>
              )},
              { label: 'Toxicity', content: n.toxicity && (
                <>
                  {n.toxicity.symptoms?.length > 0 && <List items={n.toxicity.symptoms} />}
                  {n.toxicity.upperLimit && <p><strong>Upper Limit:</strong> {n.toxicity.upperLimit}</p>}
                  {n.toxicity.notes && <p>{n.toxicity.notes}</p>}
                </>
              )},
              { label: 'Testing', content: n.testing && (
                <>
                  {n.testing.methods?.length > 0 && <List items={n.testing.methods} />}
                  {n.testing.sampleType && <p><strong>Sample:</strong> {n.testing.sampleType}</p>}
                </>
              )},
            ]} />
          </div>
        )}

        {/* Food Sources, Interactions, Precautions — tabbed */}
        {(n.sources?.length > 0 || n.interactions?.length > 0 || n.precautions?.length > 0) && (
          <div className="np-section">
            <h2>Practical Info</h2>
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
              { label: 'Interactions', content: n.interactions?.length > 0 && (
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

        {/* Myths, History, Fun Facts — tabbed */}
        {(n.myths?.length > 0 || n.history || n.funFacts?.length > 0) && (
          <div className="np-section">
            <h2>More</h2>
            <Tabs tabs={[
              { label: 'Myths', content: n.myths?.length > 0 && (
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
              )},
              { label: 'History', content: n.history && <p>{n.history}</p> },
              { label: 'Fun Facts', content: n.funFacts?.length > 0 && <List items={n.funFacts} /> },
            ]} />
          </div>
        )}

        {/* Read More */}
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
