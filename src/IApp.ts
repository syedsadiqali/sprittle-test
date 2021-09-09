export interface Entry {
  timestamp: Date
  value: any
  action: String
}

export interface State {
  entries: Array<Entry>
  current: any
}

export interface Action {
  type: String
  data?: any
}
