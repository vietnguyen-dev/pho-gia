import mysql from "mysql2/promise";
import { GetParameterCommand, SSMClient } from "@aws-sdk/client-ssm";

const ssm = new SSMClient({ region: process.env.AWS_REGION ?? "us-west-2" });

let cachedCACert: string | null = null;

async function getCACert(): Promise<string> {
  if (cachedCACert) return cachedCACert;
  const response = await ssm.send(
    new GetParameterCommand({
      Name: process.env.AWS_SSM_CA_CERT_PARAMETER,
      WithDecryption: true,
    }),
  );

  if (!response.Parameter?.Value) {
    throw new Error("Missing CA certificate in AWS SSM Parameter Store");
  }

  cachedCACert = response.Parameter.Value;
  return cachedCACert;
}

export async function getConnection() {
  const ca = await getCACert();
  return mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { ca },
  });
}
