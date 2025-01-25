import React, { useEffect, useState } from 'react';

type CompanyInfo = {
  id: number;
  ticker: string;
  name: string;
  legal_name: string;
  stock_exchange: string;
  short_description: string;
  long_description: string;
  web: string;
  business_address: string;
  business_phone: string;
  entity_legal_form: string;
  latest_filing_date: string;
  inc_country: string;
  employees: number;
  sector: string;
  industry_category: string;
  industry_group: string;
  thea_enabled: boolean;
  legacy_sector: string;
  legacy_industry_category: string;
  legacy_industry_group: string;
};

const CompanyInfoWidget: React.FC<{ companyId: number }> = ({ companyId }) => {
  const [company, setCompany] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await fetch(`http://localhost:5000/${companyId}`);
      const data = await response.json();
      setCompany(data);
    };
    fetchCompany();
  }, [companyId]);

  if (!company) return <div>Loading...</div>;

  return (
    <div className="@container p-6 bg-gray-50 text-xs">
      <div className="mb-3">
        <span className="font-semibold text-gray-700">Ticker: </span>
        <span className="text-gray-600">{company.ticker}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Legal Name: </span>
        <span className="text-gray-600">{company.legal_name}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Stock Exchange: </span>
        <span className="text-gray-600">{company.stock_exchange}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Short Description: </span>
        <p className="text-gray-600">{company.short_description}</p>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Long Description: </span>
        <p className="text-gray-600">{company.long_description}</p>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Website: </span>
        <a
          href={company.web}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {company.web}
        </a>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Business Address: </span>
        <span className="text-gray-600">{company.business_address}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Business Phone: </span>
        <span className="text-gray-600">{company.business_phone}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Entity Legal Form: </span>
        <span className="text-gray-600">{company.entity_legal_form}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Latest Filing Date: </span>
        <span className="text-gray-600">{company.latest_filing_date}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Incorporation Country: </span>
        <span className="text-gray-600">{company.inc_country}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Employees: </span>
        <span className="text-gray-600">{company.employees}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Sector: </span>
        <span className="text-gray-600">{company.sector}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Industry Category: </span>
        <span className="text-gray-600">{company.industry_category}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Industry Group: </span>
        <span className="text-gray-600">{company.industry_group}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Thea Enabled: </span>
        <span className="text-gray-600">{company.thea_enabled ? 'Yes' : 'No'}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Legacy Sector: </span>
        <span className="text-gray-600">{company.legacy_sector}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Legacy Industry Category: </span>
        <span className="text-gray-600">{company.legacy_industry_category}</span>
      </div>

      <div className="mb-3">
        <span className="font-semibold text-gray-700">Legacy Industry Group: </span>
        <span className="text-gray-600">{company.legacy_industry_group}</span>
      </div>
    </div>
  );
};

export default CompanyInfoWidget;
