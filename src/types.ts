export type CompanyInfo = {
  id: number
  ticker: string
  name: string
  legal_name: string
  stock_exchange: string
  short_description: string
  long_description: string
  web: string
  business_address: string
  business_phone: string
  entity_legal_form: string
  latest_filing_date: string
  inc_country: string
  employees: number
  sector: string
  industry_category: string
  industry_group: string
  thea_enabled: boolean
  legacy_sector: string
  legacy_industry_category: string
  legacy_industry_group: string
}

export type CompanyTickers = { ticker: string; id: number }[]

export type SelectedCompanies = Record<string, string>
