class Wallet {
    constructor(money) {
        let _money = money;
    
        this.getWalletValue = () => _money;
    }

    checkCanPlay(value) {
        if (this.getWalletValue() >= value) return true;
        return false;
    }

    changeWallet(value, type = '+') {
        let _money = this.getWalletValue();
        if (typeof value === 'number' && !isNaN(value)) {
            if (type === '+') {
                _money += value;
            } else if (type === '-') {
                _money -= value;
            } else {
                throw new Error('invalid action type');
            }
          
            this.getWalletValue = () => _money;
            return _money;
        } else {
            throw new Error('invalid number');
        }
    }
}

export default Wallet;

