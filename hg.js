class HotGenerator {
    constructor(generator) {
        var gen = generator();
        var last;
        
        function hotGenFn() {
            var hotGenAPI = {
                next: (v) => last = gen.next(v),
                return: (fv) => gen.return(fv),
                throw: (e) => gen.throw(e)
            };

            Object.setPrototypeOf(hotGenAPI, gen);
            return hotGenAPI;
        };

        Object.defineProperty(hotGenFn, 'last', {
            configurable: false,
            enumerable: true,
            get: () => () => last
        });

        return hotGenFn;
    }
}
