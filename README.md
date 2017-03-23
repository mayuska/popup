# Simple classic popup


### how to install:

```bash
npm install mayuska/popup
```


### developt with:
 - webpack
 - SCSS
 

<br/>


### How to use it
```javascript
var modalBox = require('popup');
modalBox.open(popId, closeBtn, innerTemplate, hashUrl);

modalBox.close();
```
<br/>

### Methods

- **.open**(*popId, closeBtn, innerTemplate, hashUrl*) - creates and opens popup
- **.close**() - closes and removes popup

Parameter | Type | Description
--- | --- | ---
popId (required) 		 | string | popup Id.
closeBtn (required) 	 | string | Button Id for closing popup on click. There is also the Esc keydown for closing.
innerTemplate (required) | string | Represent your content you'd like to put in popup.
hashUrl (optional) 		 | string | Add hash if you want, if not, default is empty.

<br/>

### Styles

Add to your main scss
```SCSS
@import "~popup/Popup";
```

<br/>
### Example:

**yourJsFile.js**

```javascript
require(./yourScssFile.scss);
var modalBox = require('popup');
 
var template = '<img src="http://www.pupsor.com/wp-content/uploads/2016/03/cute-small-puppies.jpg">';
modalBox.open('myPopup', 'dismiss-popup', template);

modalBox.close();
```
<br/>

**yourScssFile.scss**

```SCSS
@import "~popup/Popup";
```