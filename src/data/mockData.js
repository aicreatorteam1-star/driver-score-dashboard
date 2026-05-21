// ─── KPI Summary ────────────────────────────────────────────────────────────
export const kpiData = [
  {
    id: 'driver_score',
    label: 'Avg Driver Score',
    value: '74.2',
    unit: '/100',
    trend: +3.1,
    trendLabel: 'vs last month',
    status: 'amber',
    icon: 'UserCheck',
  },
  {
    id: 'on_time',
    label: 'On-Time Delivery',
    value: '87.4',
    unit: '%',
    trend: -2.3,
    trendLabel: 'vs last month',
    status: 'amber',
    icon: 'PackageCheck',
  },
  {
    id: 'fuel_cost',
    label: 'Fuel Cost / km',
    value: '฿4.82',
    unit: '',
    trend: -8.4,
    trendLabel: 'vs last month',
    status: 'green',
    icon: 'Fuel',
  },
  {
    id: 'fleet_active',
    label: 'Fleet Active',
    value: '38',
    unit: '/46',
    trend: +5.6,
    trendLabel: 'utilization',
    status: 'green',
    icon: 'Truck',
  },
  {
    id: 'incidents',
    label: 'Safety Incidents',
    value: '7',
    unit: 'this week',
    trend: +40,
    trendLabel: 'vs last week',
    status: 'red',
    icon: 'AlertTriangle',
  },
  {
    id: 'idle_time',
    label: 'Avg Idle Time',
    value: '18.3',
    unit: 'min/trip',
    trend: +12.1,
    trendLabel: 'vs last week',
    status: 'amber',
    icon: 'Timer',
  },
]

// ─── Urgent Actions ──────────────────────────────────────────────────────────
export const urgentActions = [
  {
    id: 1,
    severity: 'red',
    title: 'Driver: สมชาย ใจดี — Critical Speed Violation',
    detail: '148 km/h on Route BKK-CNX at 06:42',
    time: '12 min ago',
    action: 'Suspend',
  },
  {
    id: 2,
    severity: 'red',
    title: 'Truck TH-8823 — Brake System Warning',
    detail: 'ABS sensor fault detected. Pre-trip failed.',
    time: '28 min ago',
    action: 'Inspect',
  },
  {
    id: 3,
    severity: 'amber',
    title: '5 Deliveries At Risk — Route CNX-LPG',
    detail: 'ETA delay 65+ min due to flood checkpoint',
    time: '45 min ago',
    action: 'Reroute',
  },
  {
    id: 4,
    severity: 'amber',
    title: 'Driver: ณรงค์ สว่าง — Fatigue Alert',
    detail: 'Driving 7.2 hrs continuous. Rest overdue.',
    time: '1 hr ago',
    action: 'Contact',
  },
  {
    id: 5,
    severity: 'amber',
    title: 'Fuel Spend Spike — Central Region',
    detail: 'Exceeds budget by ฿12,400 this week',
    time: '2 hrs ago',
    action: 'Review',
  },
]

// ─── Driver Behavior ─────────────────────────────────────────────────────────
export const driverScoreData = [
  { month: 'Jan', score: 71 },
  { month: 'Feb', score: 69 },
  { month: 'Mar', score: 73 },
  { month: 'Apr', score: 75 },
  { month: 'May', score: 74 },
  { month: 'Jun', score: 78 },
]

export const driverIncidentTypes = [
  { type: 'Harsh Braking', count: 34, fill: '#EF4444' },
  { type: 'Speeding', count: 28, fill: '#F59E0B' },
  { type: 'Sharp Cornering', count: 19, fill: '#3B82F6' },
  { type: 'Rapid Accel', count: 14, fill: '#8B5CF6' },
  { type: 'Fatigue Risk', count: 9, fill: '#EC4899' },
]

export const driverTable = [
  { id: 'DRV-001', name: 'สมชาย ใจดี', route: 'BKK-CNX', score: 42, incidents: 5, status: 'Critical', trips: 18 },
  { id: 'DRV-008', name: 'ณรงค์ สว่าง', route: 'BKK-KKN', score: 58, incidents: 3, status: 'Warning', trips: 22 },
  { id: 'DRV-015', name: 'วิชัย มานะ', route: 'CNX-LPG', score: 61, incidents: 3, status: 'Warning', trips: 15 },
  { id: 'DRV-023', name: 'ประสิทธิ์ ทอง', route: 'BKK-PKT', score: 79, incidents: 1, status: 'Good', trips: 31 },
  { id: 'DRV-031', name: 'สุดา รักดี', route: 'BKK-HYI', score: 88, incidents: 0, status: 'Excellent', trips: 27 },
  { id: 'DRV-044', name: 'นิรัน ชัยมงคล', route: 'KKN-UDN', score: 91, incidents: 0, status: 'Excellent', trips: 24 },
]

// ─── Cost & Efficiency ───────────────────────────────────────────────────────
export const fuelTrendData = [
  { week: 'W1', actual: 5.12, budget: 4.80 },
  { week: 'W2', actual: 5.03, budget: 4.80 },
  { week: 'W3', actual: 4.91, budget: 4.80 },
  { week: 'W4', actual: 4.82, budget: 4.80 },
  { week: 'W5', actual: 4.74, budget: 4.80 },
  { week: 'W6', actual: 4.68, budget: 4.80 },
]

export const costBreakdown = [
  { name: 'Fuel', value: 48, fill: '#3B82F6' },
  { name: 'Maintenance', value: 22, fill: '#8B5CF6' },
  { name: 'Driver Pay', value: 18, fill: '#10B981' },
  { name: 'Tolls & Fees', value: 8, fill: '#F59E0B' },
  { name: 'Other', value: 4, fill: '#6B7280' },
]

export const idleTimeData = [
  { route: 'BKK-CNX', idle: 22, target: 15 },
  { route: 'BKK-KKN', idle: 19, target: 15 },
  { route: 'CNX-LPG', idle: 31, target: 15 },
  { route: 'BKK-PKT', idle: 14, target: 15 },
  { route: 'BKK-HYI', idle: 17, target: 15 },
  { route: 'KKN-UDN', idle: 11, target: 15 },
]

// ─── Delivery Operations ─────────────────────────────────────────────────────
export const deliveryPerformance = [
  { day: 'Mon', onTime: 42, late: 6, failed: 1 },
  { day: 'Tue', onTime: 38, late: 9, failed: 2 },
  { day: 'Wed', onTime: 45, late: 5, failed: 0 },
  { day: 'Thu', onTime: 41, late: 8, failed: 3 },
  { day: 'Fri', onTime: 47, late: 4, failed: 1 },
  { day: 'Sat', onTime: 33, late: 7, failed: 2 },
]

export const deliveryTable = [
  { id: 'DEL-5821', route: 'BKK → CNX', driver: 'สมชาย ใจดี', eta: '14:30', status: 'Late', cargo: 'Electronics', truck: 'TH-4421' },
  { id: 'DEL-5822', route: 'BKK → KKN', driver: 'ณรงค์ สว่าง', eta: '13:15', status: 'On Route', cargo: 'FMCG', truck: 'TH-3318' },
  { id: 'DEL-5823', route: 'CNX → LPG', driver: 'วิชัย มานะ', eta: '16:00', status: 'At Risk', cargo: 'Cold Chain', truck: 'TH-7712' },
  { id: 'DEL-5824', route: 'BKK → PKT', driver: 'ประสิทธิ์ ทอง', eta: '12:45', status: 'Delivered', cargo: 'Auto Parts', truck: 'TH-2291' },
  { id: 'DEL-5825', route: 'BKK → HYI', driver: 'สุดา รักดี', eta: '15:20', status: 'On Route', cargo: 'Garments', truck: 'TH-9980' },
  { id: 'DEL-5826', route: 'KKN → UDN', driver: 'นิรัน ชัยมงคล', eta: '11:00', status: 'Delivered', cargo: 'Machinery', truck: 'TH-6634' },
]

// ─── Fleet Utilization ───────────────────────────────────────────────────────
export const fleetUtilizationData = [
  { category: 'Active', value: 38, fill: '#10B981' },
  { category: 'Idle', value: 4, fill: '#F59E0B' },
  { category: 'Maintenance', value: 3, fill: '#3B82F6' },
  { category: 'Offline', value: 1, fill: '#EF4444' },
]

export const fleetWeeklyUtilization = [
  { day: 'Mon', util: 82 },
  { day: 'Tue', util: 88 },
  { day: 'Wed', util: 91 },
  { day: 'Thu', util: 85 },
  { day: 'Fri', util: 93 },
  { day: 'Sat', util: 76 },
  { day: 'Sun', util: 61 },
]

// ─── Live Map Fleet Positions ────────────────────────────────────────────────
export const liveFleetPositions = [
  { id: 'TH-4421', x: 28, y: 32, status: 'late', driver: 'สมชาย ใจดี', speed: 148, route: 'BKK-CNX' },
  { id: 'TH-3318', x: 45, y: 55, status: 'active', driver: 'ณรงค์ สว่าง', speed: 87, route: 'BKK-KKN' },
  { id: 'TH-7712', x: 62, y: 25, status: 'risk', driver: 'วิชัย มานะ', speed: 74, route: 'CNX-LPG' },
  { id: 'TH-2291', x: 20, y: 68, status: 'active', driver: 'ประสิทธิ์ ทอง', speed: 92, route: 'BKK-PKT' },
  { id: 'TH-9980', x: 72, y: 72, status: 'active', driver: 'สุดา รักดี', speed: 81, route: 'BKK-HYI' },
  { id: 'TH-8823', x: 50, y: 45, status: 'offline', driver: 'ไม่ระบุ', speed: 0, route: 'Parked' },
  { id: 'TH-6634', x: 38, y: 40, status: 'active', driver: 'นิรัน ชัยมงคล', speed: 95, route: 'KKN-UDN' },
]

export const routes = ['All Routes', 'BKK-CNX', 'BKK-KKN', 'CNX-LPG', 'BKK-PKT', 'BKK-HYI', 'KKN-UDN']
export const fleets = ['All Fleets', 'TH-4421', 'TH-3318', 'TH-7712', 'TH-2291', 'TH-9980', 'TH-8823', 'TH-6634']
