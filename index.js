/*
    В игре в казино Блэкджек игрок может определить, имеет ли он преимущество в следующей раздаче над казино,
 отслеживая относительное количество старших и младших карт, оставшихся в колоде. Это называется подсчетом карт.

Наличие большего количества старших карт, оставшихся в колоде, благоприятствует игроку. 
Каждой карте присваивается значение в соответствии с приведенной ниже таблицей. Когда счет положительный, 
игрок должен делать высокие ставки. Когда счет равен нулю или отрицательный, игрок должен делать низкую ставку.

*/


let count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 7:
    case 8:
    case 9:
      count == 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count --;
      break;
  }
  if( count <= 0) {
    return count + " Hold";
  }else{
    return count + " Bet"
  }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');