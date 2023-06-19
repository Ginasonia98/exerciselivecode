// Menghasilkan data palsu
export const generateFakeData = () => {
  const data = [];
  for (let i = 1; i <= 30; i++) {
    data.push({
      name: `User ${i}`,
      email: `user${i}@example.com`,
      phone: `0812345678${i}`
    });
  }
  return data;
};
