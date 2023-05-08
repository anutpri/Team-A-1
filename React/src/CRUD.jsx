import { useState, useEffect } from "react";
import { getCompanies, createCompanies } from "./api/Node";

function Crud() {
  const [companies, setCompanies] = useState([]);
  const [name, setName] = useState();
  const [taxId, setTaxId] = useState();
  const [load, toggleReload] = useState(false);

  useEffect(() => {
    const getCompany = async () => {
      const companies = await getCompanies();
      setCompanies(companies);
      
    };

    getCompany();
  }, [load]);

  const save = async () => {
    const newCompany = {
      name,
      taxId,
    };
    await createCompanies(newCompany);
    toggleReload(!load);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tax ID"
          onChange={(e) => setTaxId(e.target.value)}
        />
        <button onClick={save}>Save</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Tax ID</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => {
            return (
              <tr key={company.companyId}>
                <td>{company.companyId}</td>
                <td>{company.name}</td>
                <td>{company.taxId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Crud;
