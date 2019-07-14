class HotGenerator {
    constructor(generator) {
        var gen = generator();
        
        return function () {
            return {
                next: (v) => gen.next(v),
                return: (fv) => gen.return(fv),
                throw: (e) => gen.throw(e)
            };
        };
    }
}
