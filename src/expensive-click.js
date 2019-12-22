import NullArgumentsError from './Errors/null-arguments';
export default class ExpensiveClick {
    getMostExpensiveClickList(input) {
       
        const resultantArray = {};
        try {
            if(input===null){
                throw new NullArgumentsError(`input can not be null.`)
            }
            const filteredArray = this._excludeIpsHavingMoreThanTenClicks(input);
            filteredArray.forEach(click => {
                const timestamp = click.timestamp;
                const maxAmount = resultantArray[timestamp] !== undefined ? resultantArray[timestamp].amount : 0;
                if (click.amount > maxAmount) {
                    resultantArray[timestamp] = click;
                }
            });
        }
        catch (error) {
            this._handleError(error);
        }
        return Object.values(resultantArray);
    }

    _handleError(error) {
        if (error instanceof NullArgumentsError) {
            throw error;
        }
    }

    _excludeIpsHavingMoreThanTenClicks(input) {
        const ipCounter = {};
        let includedIpsArray = input;
        input.forEach(click => {
            const ipAddress = click.ip;
            if (ipCounter[ipAddress] === undefined) {
                ipCounter[ipAddress] = 1;
            } else {
                ipCounter[ipAddress] += 1;
            }
            if (ipCounter[ipAddress] > 10) {
                includedIpsArray = includedIpsArray.filter(item => item.ip != ipAddress);
                ipCounter[ipAddress] = 0;
            }
        });
        return includedIpsArray;
    }
}

