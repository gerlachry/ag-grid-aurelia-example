
"use strict";
import {inject} from "aurelia-framework";

import {GridOptions} from "ag-grid";
import {WebAPI} from './web-api';

@inject(WebAPI)
export class Search {
  //static inject = [WebAPI, GridOptions];
  api;

  constructor(api) {
    this.api = api;
    this.gridOptions = {};
    this.rowData = [];
    this.getRowData();
    this.gridOptions.columnDefs = [];
    this.getColumnDefs();
  }

  attached() {
    console.log('attached:');
    //this.initGrid();
    //this.getColumnDefs();
    //this.getRowData();
  }

  getRowData() {
    console.log('calling data');
    this.api.getContactList().then(contacts => {
      this.rowData = contacts;
      console.log('rowData from getRowData');
      console.log(this.rowData);
      console.log('finished calling web-api');
    } );
  }

  getColumnDefs() {
    this.gridOptions.columnDefs = [
      {
        headerName: "id",
        field:"id"
      },
      {
        headerName: "First Name",
        field: "firstName"
      },
     {
        headerName: "Last Name",
        field: "lastName"
      },
      {
        headerName: "Email",
        field: "email"
      }
    ];
  }

  onGridReady() {
    console.log('grid is ready');
    console.log('gridOptions');
    console.log(this.gridOptions);
  }

}