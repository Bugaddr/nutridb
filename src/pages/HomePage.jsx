import { Link } from 'react-router-dom'
import nutrients from 'virtual:nutrients'

const vitamins = nutrients.filter(n => n.category === 'vitamin')
const minerals = nutrients.filter(n => n.category === 'mineral')
const others = nutrients.filter(n => n.category === 'other')

function Card({ n }) {
  return (
    <Link to={`/nutrient/${n.id}`} className="card">
      <div className="card-top">
        <span className="card-symbol">{n.symbol}</span>
      </div>
      <h3>{n.name}</h3>
      <div className="card-alt">{n.altName?.split('/')[0]?.trim()}</div>
      <div className="card-desc">{n.description?.slice(0, 90)}…</div>
      <div className="card-foot">
        <span>{n.subcategory?.replace(/-/g, ' ')}</span>
        <span className={`card-ess card-ess--${n.essentiality}`}>
          {n.essentiality === 'essential' ? '●' : n.essentiality === 'conditionally-essential' ? '◐' : '○'}
        </span>
      </div>
    </Link>
  )
}

function Section({ title, subtitle, items }) {
  return (
    <div className="hp-section">
      <div className="hp-section-head">
        <div>
          <h2 className="hp-section-title">{title} <span className="hp-section-count">{items.length}</span></h2>
          <p className="hp-section-sub">{subtitle}</p>
        </div>
      </div>
      <div className="grid">
        {items.map(n => <Card key={n.id} n={n} />)}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="wrap">
      <div className="home-hero">
        <p className="hero-label">NutriDB</p>
        <h1>The Micronutrient<br />Encyclopedia</h1>
        <p className="hero-desc">
          {nutrients.length} nutrients with RDA from multiple agencies, deficiency symptoms by severity,
          biological pathways, food sources, drug interactions, myths, and more.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">{vitamins.length}</span>
            <span className="hero-stat-label">Vitamins</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">{minerals.length}</span>
            <span className="hero-stat-label">Minerals</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">{others.length}</span>
            <span className="hero-stat-label">Compounds</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">17+</span>
            <span className="hero-stat-label">Data points each</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <Section title="Vitamins" subtitle="Organic compounds essential in small amounts for metabolic processes"
            items={vitamins} />
          <Section title="Minerals" subtitle="Inorganic elements required for enzyme function, bone structure, and fluid balance"
            items={minerals} />
          <Section title="Other Compounds" subtitle="Conditionally essential and non-essential bioactive compounds"
            items={others} />
    </div>
  )
}
