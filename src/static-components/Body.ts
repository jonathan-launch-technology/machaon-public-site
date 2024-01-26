import Container from "./Container";
import IconUpAndLoader from "./IconUpAndLoader";

export default class Body implements StaticComponent{


    async render(): Promise<string> {
        return `
        <!-- Container -->
        <div id="container">
          ${await new Container().render()}
          ${await new IconUpAndLoader().render()}
        <div>
      `        
    }
}