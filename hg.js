class HotGenerator {
    constructor(generator) {
        var gen = generator();
        var last;
        
        return function () {
            return {
                next: (v) => last = gen.next(v),
                return: (fv) => gen.return(fv),
                throw: (e) => gen.throw(e),
                last: () => last
            };
        };
    }
}
