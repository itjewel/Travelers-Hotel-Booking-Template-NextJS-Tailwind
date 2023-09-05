function incrementDateByOneDay(dateString: Date | string) {
    const originalDate = new Date(dateString);
    const incrementedDate = new Date(originalDate);
    incrementedDate.setDate(incrementedDate.getDate() + 1);
    return incrementedDate.toISOString();
  }

export default incrementDateByOneDay;