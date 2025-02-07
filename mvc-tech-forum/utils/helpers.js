module.exports = {
  // Format date as MM/DD/YYYY
  format_date: (date) => {
    return date.toLocaleDateString();
  },

  // format large numbers with commas
  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },

  // Check if user is owner of page
  my_page: (pageUser, userId) => {
    return pageUser === userId;
  },
};
