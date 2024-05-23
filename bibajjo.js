let bibajjo_num = [];

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0) {
    bibajjo_num.push(i);
  }
  if (i % 5 == 0) {
    bibajjo_num.push(i);
  }
}

for (let i = 0; i < bibajjo_num.length; i++) {
  console.log(bibajjo_num[i]);
}
