
exports.lol = (msg, ...args) => {
  msg.reply('You\'re so funny');
};

exports.roll = (msg, ...args) => {
  let total = 0;
  let input;
  const rolls = [];
  for (let i = 1; i < args.length; i += 2) {
    let n = 0;
    input = args[i];
    if (input.includes('d')) {
      const dice = input.split('d');
      for (let j = 0; j < Number(dice[0]); j++) {
        const roll = Math.floor((Math.random() * Number(dice[1]) + 1));
        rolls.push(roll);
        n += roll;
      }
    } else {
      n = Number(input);
    }
    if (args[i - 1] === '-') {
      total -= n;
    } else {
      total += n;
    }
  }
  msg.reply('Your total is ' + total.toString() + '\nRolls: ' + rolls.join(', '));
};
