    
export class App {
  configureRouter(config, router){
    config.title = 'Search Grid Test';
    config.map([
      { route: '',  moduleId: 'search', name:'search' }
    ]);

    this.router = router;
  }
}

  