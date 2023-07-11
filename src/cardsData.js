import vector_1 from './assets/Vector_1.svg';
import transactions from './assets/total_transactions_icon.svg';
import vector_2 from './assets/Vector_2.svg';
import vector_3 from './assets/Vector_3.svg';

export const cardsData = [
    {
        name: "Total Revenues",
        image: vector_1,
        number: "$2,129,430",
    },
    {
        name: "Total Transactions",
        image: transactions,
        number: "1,520",
    },
    {
        name: "Total Likes",
        image: vector_2,
        number: "9,721",
    },
    {
        name: "Total Users",
        image: vector_3,
        number: "892",
    }
]

export const getCardColor = (index) => {
    const colors = ['#DDEFE0', '#F4ECDD', '#EFDADA', '#DEE0EF'];
    return colors[index % colors.length];
  };