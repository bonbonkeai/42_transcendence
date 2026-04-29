import { unstable_noStore as noStore } from "next/cache";

import { prisma } from "@/server/prisma";
import styles from "./home.module.css";

export default async function OnlineCounter() {
  noStore();

  let onlineCount = 0;

  try {
    const [{ count }] = await prisma.$queryRaw<Array<{ count: bigint }>>`
      SELECT COUNT(DISTINCT "userId") AS count
      FROM "Progress"
    `;

    onlineCount = Number(count);
  } catch {
    onlineCount = 0;
  }

  return (
    <section className={styles.sectionCard}>
      <h2 className={styles.sectionTitle}>Online now</h2>

      <p className={styles.onlineText}>{onlineCount} users connected</p>
    </section>
  );
}
//need to access the real data of the database