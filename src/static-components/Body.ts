import Container from "./Container";
import IconUpAndLoader from "./IconUpAndLoader";

export default class Body implements StaticComponent{
    render(): string {
        return `
        <!-- Container -->
        <div id="container">
          ${new Container().render()}
          ${new IconUpAndLoader().render()}
        <div>
      `        
    }
}