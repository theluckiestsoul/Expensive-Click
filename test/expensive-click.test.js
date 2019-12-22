import ExpensiveClick from '../src/expensive-click';
import NullArgumentsError from '../src/Errors/null-arguments';
import clicks from '../clicks.json';
import clicks2 from '../clicks-2.json';
import resultset from '../resultset.json';

//let expensiveClick = new ExpensiveClick();



describe("Expensive Click", () => {

    describe("getMostExpensiveClickList", () => {
        let expensiveClick;
        beforeEach(() => {
             expensiveClick = new ExpensiveClick();
        });
        test("throws Null Arguments error when passed with null value", () => {
            expect(() => 
                expensiveClick.getMostExpensiveClickList(null)
            ).toThrowError(NullArgumentsError);
        });
        test("returns 18 records in resultset when supplied with clicks", () => {
            expect(expensiveClick.getMostExpensiveClickList(clicks).length              
            ).toBe(18)
        });

        test("returned resultset contains the expected resultset", () => {
            expect(expensiveClick.getMostExpensiveClickList(clicks)              
            ).toEqual(expect.arrayContaining(resultset));
        });

        test("returns 2 records in resultset when supplied with second clicks", () => {
            expect(expensiveClick.getMostExpensiveClickList(clicks2).length              
            ).toBe(2)
        });

    })
});
