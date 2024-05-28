import defaultStaticData from "@/assets/static.json";
import defaultDynamicData from "@/assets/output.json";
export default class Manager {
    constructor(ctx) {
      this.ctx = ctx;
      this._initWorldMap();
      this.loadCallbacks = [];
      this.loader = new Loader(this.worldMap);
      this.load(defaultStaticData, defaultDynamicData);
      console.log("111111111111111")
    }
    load(staticData, dynamicData) {
    
      const result = this.loader.load(staticData, dynamicData);
      if (result.success) {
        this.timestamps = result.timestamps;
        this.nodes = result.nodes;
        this.links = result.links;
        for (const callback of this.loadCallbacks) {
          callback();
        }
      }
      return result.success;
    }
  
  }