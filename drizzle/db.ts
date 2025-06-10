import { getXataClient } from "@/xata";
import { drizzle } from 'drizzle-orm/xata-http'

//CONNECT DRIZZLE AND XATA
const xata = getXataClient();
export const db = drizzle(xata);