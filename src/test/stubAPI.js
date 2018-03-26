import _ from 'lodash';

class StubAPI {

    constructor() {
        this.crytos = [
            {
                'name': 'Bitcoin',
                'name_abbrev': 'BTC',
                "amount_purchased": '123',
                "price": '132'
            },

            {
                'name': 'Ethereum',
                'name_abbrev': 'ETH',
                "amount_purchased": '23',
                "price": '939'
            },

            {
                'name': 'Ripple',
                'name_abbrev': 'XRP',
                "amount_purchased": '4',
                "price": '432'
            },

            {
                'name': 'Litecoin',
                'name_abbrev': 'LTC',
                "amount_purchased": '49',
                "price": '934'
            },
            {
                'name': 'Stellar',
                'name_abbrev': 'XLM',
                "amount_purchased": '499',
                "price": '933'
            }
        ];
    }

    deleteCryto(k) {
        let elements = _.remove(this.crytos,
            (cryto) => cryto.price === k
        );
        return elements;
    }

    getAll() {
        return this.crytos;
    }

    getTotalCoins() {
        let totalCoins = 0
        for (let i = 0; i < this.crytos.length; i++) {
            totalCoins = +totalCoins + +this.crytos[i].amount_purchased;
        }
        return totalCoins;
    }

    getNameAbbrevList() {
        let listOfCrytos = []
        for (let i = 0; i < this.crytos.length; i++) {
            listOfCrytos.push(this.crytos[i].name_abbrev)
        }
        return listOfCrytos;
    }

    getTotalInvestment() {
        let totalInvested = 0
        for (let i = 0; i < this.crytos.length; i++) {
            totalInvested = +totalInvested + +this.crytos[i].price;
        }
        return totalInvested;
    }

    add(n, nb, a, p) {
        let len = this.crytos.length;
        let newLen = this.crytos.push({
            name: n, name_abbrev: nb, amount_purchased: a, price: p
        });
        return newLen > len;
    }

    update(key, n, nb, a, p) {
        let index = _.findIndex(this.crytos,
            (cryto) => cryto.price === key
        );
        if (index !== -1) {
            this.crytos.splice(index, 1,
                {name: n, name_abbrev: nb, amount_purchased: a, price: p});
            return true;
        }
        return false;
    }
}

export default (new StubAPI() );