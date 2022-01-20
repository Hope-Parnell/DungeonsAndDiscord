
exports.lol = (msg, ...args) => {
  msg.reply('You\'re so funny');
};

exports.roll = (msg, ...args) => {
  let total = 0;
  let input;
  const rolls = [];
  for (let i = 0; i < args.length; i += 2) {
    let n = 0;
    input = args[i];
    if (input.includes('d')) {
      const dice = input.split('d');
      if (Number(dice[0]) < 1) {
        msg.reply(`Invalid input: ${args[i]}: Number of dice must be a positive number.
        Example: 2d10`);
        return;
      }
      if (Number(dice[1]) < 1) {
        msg.reply(`Invalid input: ${args[i]}: Number of sides must be a positive number.
        Example: 2d10`);
        return;
      }
      for (let j = 0; j < Number(dice[0]); j++) {
        const roll = Math.floor((Math.random() * Number(dice[1]) + 1));
        rolls.push(roll);
        n += roll;
      }
    } else {
      n = Number(input);
      if (!n) {
        msg.reply(`Invalid input: ${args[i]}`);
        return;
      }
    }
    if (args[i - 1] === '-') {
      total -= n;
    } else if (args[i - 1] === '-') {
      total += n;
    } else {
      msg.reply(`Invalid operator [${args[i - 1]}]: Can only add or subtract.`);
      return;
    }
  }
  msg.reply(`Your total is ${total.toString()}
  Rolls: ${rolls.join(', ')}`);
};
