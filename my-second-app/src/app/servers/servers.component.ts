import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  //templateUrl: './servers.component.html',
  /*template: `<app-server></app-server>
            <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

      allowNewServer = false; // A property
      serverCreationStatus = 'No server was created!!!'; // A property
      serverName='Test_server'; // A property
      serverCreated=false; // A property
      servers = ['Testserver','TestServer 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer= true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created!!! '+this.serverName;
  }

  onUpdateServer(event: any){
      console.log(event);
  }

  onUpdateServerName(event: Event){
      this.serverName=(<HTMLInputElement>event.target).value;
  }


}
