# Example ag-grid-aurelia using javascript

- npm install
- au run --watch

steps taken to create
- created new Aurelia project using the Aurelia CLI.
	- au new
- npm install au-grid --save
- npm install au-grid-aurelia --save
- update aurelia.json
```json
"name": "ag-grid",
"path": "../node_modules/ag-grid",
"main": "main",
"resources": [
  "dist/styles/ag-grid.css",
  "dist/styles/theme-fresh.css"
]
},
{
"name": "ag-grid-aurelia",
"path": "../node_modules/ag-grid-aurelia",
"main": "main"
}
```
- add aurelia plugin to app.js
```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('ag-grid-aurelia')
    .feature('resources')
...
```
- search.html and search.js uses ag-grid-aurelia