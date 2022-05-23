"use strict";

class Account {
    constructor(number) {
        this._number = number; // the account number
        this._balance = 0.0;
    }

    /**
     * Getter for the 'private' number field   
     */
    getNumber() {
        return this._number;
    }

    /**
     * Accessor for the 'private' balance field
     */
    getBalance() {
        return this._balance;
    }

    /**
     * Method to add money into the account
     */
    deposit(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        this._balance += amount;
    }

    /**
     * Method to take money out of the account
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance;
    }

    /**
     * Performs needed actions at the end of the month
     */
    endOfMonth() {
        return ""; // does nothing
    }
}