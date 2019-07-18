module.exports = class HotGenerator {
    constructor(generator) {
        var gen = generator();
        var lasts = new WeakMap();
        var last;
        
        function hotGenFn() {
            var hotGenAPI = {
                next: function (v) {
                    last = gen.next(v);
                    lasts.set(this, last);
                    return last;
                },
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

        Object.defineProperty(hotGenFn, 'lastFrom', {
            configurable: false,
            enumerable: true,
            get: () => (genRef) => lasts.get(genRef)
        });

        return hotGenFn;
    }
}
