import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

const company = [];

webServer.get("/", (request, response) => {
  response.send("Hello World");
});

webServer.get("/test", (request, response) => {
  response.json(company);
});

webServer.post("/test", (request, response) => {
  const companyId = company.length +1;
  const name = request.body.name;
  const taxId = `tax-${request.body.taxId}`;
  const employees = [];
  
  company.push({ companyId, name, taxId, employees });
  response.send("Create Company Success");
});

// code down below.
webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});