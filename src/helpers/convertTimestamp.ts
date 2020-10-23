
export function convertTimestamp(timestamp: number): string {
    const unixTime = timestamp;
    const date = new Date(unixTime*1000);
    return `${date.toLocaleDateString("en-US")}`;
  }