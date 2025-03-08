let account = {
    balance: 0,
    deposit: function (amount) {
        this.balance += amount;
        console.log(`Account deposit ${amount}`);
        console.log(`Account balance now ${this.balance}`);
    },
    withdraw: function (amount) {
        this.balance -= amount;
        console.log(`Account withdrawal ${amount}`);
        console.log(`Account balance now ${this.balance}`);
    },
}


account.deposit(50);
account.deposit(100)
account.withdraw(25);
account.deposit(200);
account.withdraw(150)