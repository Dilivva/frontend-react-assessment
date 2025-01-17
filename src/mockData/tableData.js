  // This function generates random items for the table data

  export function generateItems(count) {
    const statuses = ["Draft", "Scheduled", "Live", "Past"];
    const titles = [
      { name: "Daily Horoscope", date: "No publish date set" },
      { name: "Daily Horoscope", date: "August 28" },
      { name: "Daily Horoscope", date: "October 16" },
      { name: "Daily Horoscope", date: "November 23" },
      { name: "Weekly Wallpapers", date: "June 2" },
      { name: "Weekly Wallpapers", date: "May 19" },
      { name: "Weekly Wallpapers", date: "June 2" },
    ];
  
    const getRandomDate = () => {
      const date = new Date(
        Date.now() - Math.floor(Math.random() * 10000000000) // Random past date
      );
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    };
  
    const getFutureDate = () => {
      const date = new Date(
        Date.now() + Math.floor(Math.random() * 10000000000) // Random future date
      );
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    };
  
    const result = [];
    for (let i = 0; i < count; i++) {
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const title = titles[Math.floor(Math.random() * titles.length)];
      result.push({
        title: { name: title.name, date: title.date },
        pages: Math.floor(Math.random() * 10) + 1,
        lastModified: getRandomDate(),
        status,
        liveFrom: status !== "Draft" ? getRandomDate() : "-",
        ends: status === "Live" || status === "Scheduled" ? getFutureDate() : "-",
      });
    }
    return result;
  }