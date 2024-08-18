export function convertTimestampToTime(timestamp) {
    // Create a new Date object from the timestamp
    const date = new Date(timestamp * 1000); // Multiply by 1000 as timestamps are in seconds
  
    // Format the date as desired
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true // Use 12-hour format
    };
    const formattedTime = date.toLocaleTimeString('en-US', options);
  
    return formattedTime;
  }