export default class NullArgumentsError extends Error{
    constructor(args){
        super(args);
        this.name="Null Arguments"
    }
}