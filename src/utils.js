export const generateRandomNumber = (limit) => {
  return Math.floor(Math.random() * (limit + 1));
};

export const generateRandomDate = (from, to) => {
  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  );
};

export const calcPoint = (amount) => {
  let points = 0;
  let over100 = amount - 100;

  if (over100 > 0) {
    points += over100 * 2;
  }
  if (amount > 50) {
    points += 50;
  }
  return points;
};

export const formatDate = (num) => {
  return num > 9 ? num : `0${num}`;
}

export const getMonthyData = (transactions) => {
  const data = {};

  for (let i = 0; i < transactions.length; i++) {
    if (!data[transactions[i].customerId]) {
      data[transactions[i].customerId] = {};
    }

    const year = new Date(transactions[i].date).getFullYear();
    const month = new Date(transactions[i].date).getMonth() + 1;
    const date = `${year}-${formatDate(month)}`;
    if (!data[transactions[i].customerId][date]) {
      data[transactions[i].customerId][date] = {
        name: transactions[i].customerName,
        email: transactions[i].customerEmail,
        points: transactions[i].points,
        count: 1,
      };
    } else {
      data[transactions[i].customerId][date].points += transactions[i].points;
      data[transactions[i].customerId][date].count++;
    }
  }

  return data;
};

export const getTotalData = (transactions) => {
  const data = {};

  for (let i = 0; i < transactions.length; i++) {
    if (!data[transactions[i].customerId]) {
      data[transactions[i].customerId] = {
        name: transactions[i].customerName,
        email: transactions[i].customerEmail,
        points: transactions[i].points,
        count: 1,
      };
    } else {
      data[transactions[i].customerId].points += transactions[i].points;
      data[transactions[i].customerId].count++;
    }
  }

  return data;
};
