import { unstable_noStore as noStore } from "next/cache";

import { Card } from "@/components/ui";
import { prisma } from "@/server/prisma";
import styles from "./home.module.css";

export default async function OnlineCounter() {
  noStore();

  let onlineCount = 0;

  try {
    // ! yren: replace this temporary query with the real global online user count
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
    <Card className={styles.sectionBlock}>
      <h2 className={styles.sectionTitle}>Online now</h2>

      {/* //! yren: display the real global online user count here */}
      <p className={styles.onlineText}>{onlineCount} users connected</p>
    </Card>
  );
}

// ! i18n: move home page titles, descriptive paragraphs, online-user labels, empty states, buttons, and alert messages into the i18n dictionary.
// ! i18n: keep dynamic values such as onlineCount and displayName as interpolation variables.