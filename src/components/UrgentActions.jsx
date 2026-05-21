import { AlertTriangle, Zap } from 'lucide-react'
import { urgentActions } from '../data/mockData'

export default function UrgentActions() {
  const critical = urgentActions.filter(a => a.severity === 'red').length
  const warnings = urgentActions.filter(a => a.severity === 'amber').length

  return (
    <div style={{
      background: 'var(--gradient-galaxy)',
      border: '1px solid rgba(239,68,68,0.25)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      boxShadow: '0 8px 24px rgba(11,19,43,0.20)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            width: 32, height: 32,
            borderRadius: 'var(--radius-md)',
            background: 'rgba(239,68,68,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Zap size={16} style={{ color: '#FCA5A5' }} />
          </div>
          <span style={{
            position: 'absolute', top: -3, right: -3,
            width: 9, height: 9, borderRadius: '50%',
            background: 'var(--color-error)',
            border: '1.5px solid var(--color-tech-slate)',
          }} className="urgent-pulse" />
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>Urgent Actions</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          <span className="badge" style={{ background: 'rgba(239,68,68,0.2)', color: '#FCA5A5', fontSize: 11 }}>
            {critical} Critical
          </span>
          <span className="badge" style={{ background: 'rgba(245,158,11,0.2)', color: '#FCD34D', fontSize: 11 }}>
            {warnings} Warning
          </span>
        </div>
      </div>

      {/* Alerts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {urgentActions.map(alert => {
          const isRed = alert.severity === 'red'
          return (
            <div
              key={alert.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                padding: '10px 12px',
                borderRadius: 'var(--radius-md)',
                background: isRed ? 'rgba(239,68,68,0.08)' : 'rgba(245,158,11,0.08)',
                border: `1px solid ${isRed ? 'rgba(239,68,68,0.22)' : 'rgba(245,158,11,0.18)'}`,
                borderLeft: `3px solid ${isRed ? 'var(--color-error)' : 'var(--color-warning)'}`,
                cursor: 'pointer',
                transition: 'var(--transition-base)',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'var(--hover-lift)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <AlertTriangle
                size={14}
                style={{ color: isRed ? '#FCA5A5' : '#FCD34D', marginTop: 1, flexShrink: 0 }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: isRed ? '#FECACA' : '#FDE68A', margin: 0, lineHeight: 1.4 }}>
                  {alert.title}
                </p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', margin: '2px 0 0', lineHeight: 1.4 }}>
                  {alert.detail}
                </p>
                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', margin: '2px 0 0' }}>
                  {alert.time}
                </p>
              </div>
              <button
                className="btn btn-sm"
                style={{
                  background: isRed ? 'rgba(239,68,68,0.2)' : 'rgba(245,158,11,0.2)',
                  color: isRed ? '#FCA5A5' : '#FCD34D',
                  border: `1px solid ${isRed ? 'rgba(239,68,68,0.3)' : 'rgba(245,158,11,0.3)'}`,
                  flexShrink: 0,
                  fontWeight: 600,
                }}
              >
                {alert.action}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
