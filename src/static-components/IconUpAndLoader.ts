

export default class IconUpAndLoader implements StaticComponent {
    
  async render(): Promise<string> {
    return `
    <!-- Go To Top Link -->
    <a href="#" class="back-to-top"><i class="icon-up-open-1"></i></a>
    
    <div id="loader">
        <div class="spinner">
          <div class="service-icon"><img src="https://machaon.us/images/Machaon_Spinner_Logo.gif">
        </div>`
  }
}