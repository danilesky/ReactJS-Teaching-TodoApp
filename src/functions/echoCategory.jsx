export const echoCategory = (categoryId) => {
  switch (categoryId) {
    case "0":
      console.log("all");
      return "";
    case "1":
      return "🏠";
    case "2":
      return "🗄";
    case "3":
      return "📚";
    default:
      return "";
  }
};
