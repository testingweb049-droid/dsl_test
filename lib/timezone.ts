/**
 * Timezone utilities for New York timezone (America/New_York)
 * All booking dates and times should be stored and displayed in NY timezone
 */

const NY_TIMEZONE = "America/New_York";

/**
 * Convert a date and time string to New York timezone
 * Takes user's local date/time and converts it to what that time would be in NY timezone
 * @param dateStr Date string in format "yyyy-MM-dd" (user's local date)
 * @param timeStr Time string in format "HH:mm" (24-hour, user's local time)
 * @returns Object with date and time strings in NY timezone
 */
export function convertToNYTimezone(
  dateStr: string,
  timeStr: string
): { date: string; time: string } {
  if (!dateStr || !timeStr) {
    return { date: dateStr || "", time: timeStr || "" };
  }

  try {
    // Parse the date and time that user selected in their local timezone
    const [year, month, day] = dateStr.split("-").map(Number);
    const [hours, minutes] = timeStr.split(":").map(Number);

    // Create a date object in the user's local timezone
    // new Date(year, month-1, day, hours, minutes) creates a date in local timezone
    const localDate = new Date(year, month - 1, day, hours, minutes, 0, 0);

    // Format this moment in time as it appears in NY timezone
    const nyDateStr = localDate.toLocaleDateString("en-CA", {
      timeZone: NY_TIMEZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const nyTimeStr = localDate.toLocaleTimeString("en-US", {
      timeZone: NY_TIMEZONE,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      date: nyDateStr,
      time: nyTimeStr,
    };
  } catch (error) {
    console.error("Error converting to NY timezone:", error);
    return { date: dateStr, time: timeStr };
  }
}

/**
 * Format a date string (yyyy-MM-dd) that is stored in NY timezone format
 * @param dateStr Date string in format "yyyy-MM-dd" (stored in NY timezone)
 * @returns Formatted date string (e.g., "Dec 25, 2024")
 */
export function formatNYDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "N/A";

  try {
    // Parse the date string (already in NY timezone format yyyy-MM-dd)
    const [year, month, day] = dateStr.split("-").map(Number);
    
    // Create a date object and format it
    const date = new Date(year, month - 1, day);
    
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch (error) {
    console.error("Error formatting NY date:", error);
    return dateStr;
  }
}

/**
 * Format a time string (HH:mm) from NY timezone to 12-hour format
 * @param timeStr Time string in format "HH:mm" (24-hour, stored in NY timezone)
 * @returns Formatted time string (e.g., "2:30 PM")
 */
export function formatNYTime(timeStr: string | null | undefined): string {
  if (!timeStr) return "N/A";

  try {
    const [hours24, minutes] = timeStr.split(":").map(Number);

    if (isNaN(hours24) || isNaN(minutes)) {
      return timeStr;
    }

    let hours12: number;
    let period: string;

    if (hours24 === 0) {
      hours12 = 12;
      period = "AM";
    } else if (hours24 === 12) {
      hours12 = 12;
      period = "PM";
    } else if (hours24 > 12) {
      hours12 = hours24 - 12;
      period = "PM";
    } else {
      hours12 = hours24;
      period = "AM";
    }

    return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
  } catch (error) {
    console.error("Error formatting NY time:", error);
    return timeStr;
  }
}

/**
 * Format both date and time from NY timezone
 * @param dateStr Date string in format "yyyy-MM-dd"
 * @param timeStr Time string in format "HH:mm"
 * @returns Formatted string (e.g., "Dec 25, 2024 • 2:30 PM")
 */
export function formatNYDateTime(
  dateStr: string | null | undefined,
  timeStr: string | null | undefined
): string {
  const date = formatNYDate(dateStr);
  const time = formatNYTime(timeStr);
  return `${date} • ${time}`;
}

/**
 * Get current date and time in NY timezone as strings
 * @returns Object with date and time strings in NY timezone
 */
export function getCurrentNYDateTime(): { date: string; time: string } {
  const now = new Date();
  
  const date = now.toLocaleDateString("en-CA", {
    timeZone: NY_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const time = now.toLocaleTimeString("en-US", {
    timeZone: NY_TIMEZONE,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return { date, time };
}
