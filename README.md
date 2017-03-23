# Simple classic popup

### how to install:

```bash
npm install mayuska/popup
```


### developt with:
 - webpack
 - sass
 

<br/>


### Syntax:
```javascript
var modalBox = require('popup');
modalBox.open(popId, closeBtn, innerTemplate, hashUrl);

modalBox.close();
```

**Methods:**

methid | parameters | Description
--- | --- | ---
- open - creates and opens popup
    - popId (required) string - the id of popup.
    - closeBtn (required) string - is button id for closing popup on click. there is also the Esc keydown for closing.
    - innerTemplate (required) string - represent your content you'd like to put in popup.
    - hashUrl (optional) string - add hash if you want, if not, default is empty.
- close - closes and removes popup

<br/>

add styles to your main scss
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