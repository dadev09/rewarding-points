import { v4 as uuidv4 } from "uuid";
import { generateRandomDate, generateRandomNumber } from "../utils";
import { MAX_AMOUNT, START_DATE } from "../env";

export const simulateAsyncApiCall = async ({
  transactionCount,
  customerCount,
}) => {
  // Simulate a delay of 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // generate customers and transactions
  const customers = [],
    transactions = [];

  for (let i = 0; i < customerCount; i++) {
    customers.push({
      customerId: uuidv4(),
      customerName: `Customer-${i + 1}`,
      customerEmail: `customer${i + 1}@email.com`,
    });
  }

  for (let i = 0; i < transactionCount; i++) {
    transactions.push({
      transactionId: uuidv4(),
      amount: generateRandomNumber(MAX_AMOUNT),
      date: generateRandomDate(START_DATE, new Date()),
      ...customers[generateRandomNumber(customerCount - 1)],
    });
  }

  // Return a mock response
  return { data: { transactions } };
};
