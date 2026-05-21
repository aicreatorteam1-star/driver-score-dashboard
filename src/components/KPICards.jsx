import { TrendingUp, TrendingDown, UserCheck, PackageCheck, Fuel, Truck, AlertTriangle, Timer } from 'lucide-react'
import { kpiData } from '../data/mockData'

const iconMap = { UserCheck, PackageCheck, Fuel, Truck, AlertTriangle, Timer }

// Maps each KPI to an InnOlistic accent — mirrors StatCard's accent prop
const accentMap = {
  driver_score: 'plain',
  on_time:      'plain',
  fuel_cost:    'plain',
  fleet_active: 'aurora',   // featured — aurora gradient
  incidents:    'galaxy',   // critical — galaxy dark
  idle_time:    'plain',
}

// For "good" trend direction: some KPIs are better when negative (fuel↓, idle↓)
const positiveIsGood = { driver_score: true, on_time: true, fuel_cost: false, fleet_active: true, incidents: false, idle_time: false }

export default function KPICards() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 12,
      marginBottom: 16,
    }}>
      {kpiData.map(kpi => {
        const Icon = iconMap[kpi.icon]
        const accent = accentMap[kpi.id] || 'plain'
        const isDark = accent === 'galaxy'
        const isAurora = accent === 'aurora'
        const isPositive = kpi.trend > 0
        const isGood = positiveIsGood[kpi.id] ? isPositive : !isPositive

        const gradient =
          accent === 'aurora' ? 'var(--gradient-aurora)' :
          accent === 'galaxy' ? 'var(--gradient-galaxy)' : undefined

        const textPrimary   = isDark || isAurora ? '#fff' : 'var(--color-text-primary)'
        const textLabel     = isDark || isAurora ? 'rgba(255,255,255,0.65)' : 'var(--color-text-muted)'
        const trendGood     = isDark || isAurora ? 'var(--color-neon-cyan)' : 'var(--color-success)'
        const trendBad      = isDark || isAurora ? '#FCA5A5' : 'var(--color-error)'

        return (
          <div
            key={kpi.id}
            className="io-card-hover"
            style={{
              background: gradient ?? 'var(--color-bg-surface)',
              border: gradient ? 'none' : '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: 20,
              overflow: 'hidden',
              boxShadow: isAurora ? '0 8px 24px rgba(124,58,237,0.25)' :
                         isDark   ? '0 8px 24px rgba(11,19,43,0.25)' :
                         'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 12, fontWeight: 500, color: textLabel, margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {kpi.label}
                </p>
                <div style={{ fontSize: 24, fontWeight: 600, color: textPrimary, marginTop: 6, letterSpacing: '-0.5px', fontVariantNumeric: 'tabular-nums' }}>
                  {kpi.value}
                  {kpi.unit && <span style={{ fontSize: 12, fontWeight: 400, color: textLabel, marginLeft: 3 }}>{kpi.unit}</span>}
                </div>
                <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 4 }}>
                  {isPositive
                    ? <TrendingUp size={13} style={{ color: isGood ? trendGood : trendBad }} />
                    : <TrendingDown size={13} style={{ color: isGood ? trendGood : trendBad }} />
                  }
                  <span style={{ fontSize: 12, fontWeight: 500, color: isGood ? trendGood : trendBad }}>
                    {isPositive ? '+' : ''}{kpi.trend}%
                  </span>
                  <span style={{ fontSize: 11, color: textLabel }}>{kpi.trendLabel}</span>
                </div>
              </div>

              {Icon && (
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 'var(--radius-md)',
                  background: isDark || isAurora ? 'rgba(255,255,255,0.15)' : 'var(--color-accent-soft)',
                  color: isDark || isAurora ? '#fff' : 'var(--color-electric-purple)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} />
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
