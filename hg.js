class HotGenerator {
    constructor(generator) {
        var gen = generator();
        var last;
        
        return function () {
            var hotGenAPI = {
                next: (v) => last = gen.next(v),
                return: (fv) => gen.return(fv),
                throw: (e) => gen.throw(e),
                last: () => last
            };

            Object.setPrototypeOf(hotGenAPI, gen);
            return hotGenAPI;
        };
    }
}
