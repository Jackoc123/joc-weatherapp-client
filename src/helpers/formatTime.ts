const formatTime = (milliseconds: number) => {
  const newDate = new Date(milliseconds * 1000);

  return newDate.toTimeString();
};

export default formatTime;
