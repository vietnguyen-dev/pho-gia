import mysql from "mysql2/promise";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: "us-west-2" });

let cachedCACert: string | null = null;

async function getCACert(): Promise<string> {
  if (cachedCACert) return cachedCACert;
  const response = await s3.send(
    new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: process.env.AWS_S3_CA_CERT_KEY,
    })
  );
  cachedCACert = await response.Body!.transformToString();
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
