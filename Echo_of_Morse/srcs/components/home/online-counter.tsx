import { unstable_noStore as noStore } from "next/cache";

// ! yren / liyuan: update this Prisma import after the final Prisma client location is confirmed.
import { prisma } from "@/server/prisma";
import styles from "./home.module.css";

export default async function OnlineCounter() {
  noStore();

  let onlineCount = 0;

  try {
    // ! yren: replace this temporary query with the real online user count
    // ! after auth / session / user online status is confirmed.
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

      //! yren: display the real number of online users here
      <p className={styles.onlineText}>{onlineCount} users connected</p>
    </section>
  );
}