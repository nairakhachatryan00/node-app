
class ConvertService {
    constructor() {}
    findAndSet (res: any, path: string[], value: string) {
        path.forEach((key, index) => {
            if(index === path.length - 1) {
                res[key] = value
            } else {
                path.splice(0,1);
                res[key] = res[key] || {};
                this.findAndSet(res[key], path, value);
            }
        })
        return res;
    }
}
export const convertService = new ConvertService();
