##  Get Alert


Installation 

```bash
npm i get-alert
```


## UsageExample

```javascript
import OkPopup from 'get-alert';

function App(){

    return(
        <div>
        <OkPopup 
        heading={'success'}
        text={'alert text here'}
        fun={} 
        />
        </div>
    )
}

```

## All Props


| Props  | Use |
| ------------- | ------------- |
| heading  |Alert Heading or Title|
| text  | Alert message text  |
| fun  | function to be executed on clicking ok  |

```javascript
import AlertPopup from 'get-alert';

function App(){

    return(
        <div>
        <AlertPopup 
        heading={'success'}
        text={'alert text here'}
        btn_text={'Ok'}
        fun={} 
        cancel={} 
        />
        </div>
    )
}

```
## All Props


| Props  | Use |
| ------------- | ------------- |
| heading  |Alert Heading or Title|
| text  | Alert message text  |
| btn_text  | text to be appear on the button|
| fun  | function to be executed on clicking ok  |
| cancel  | function to be executed on clicking cancel  |

## One Example for Usage
```javascript
import {useState} from 'react';
import AlertPopup from 'get-alert';

function App(){

    const [showAlert, set_ShowAlert] = useState(false);

    const ShowAlertPopup=()=>{
    set_ShowAlert(true);
    }

    return(
        <div>
        <button onClick={ShowAlertPopup()}>Show Alert </button>
        {showAlert?
        <AlertPopup 
        heading={'success'}
        text={'alert text here'}
        btn_text={'Ok'}
        fun={} 
        cancel={} 
        />
        :null}
        </div>
    )
}

```

Same Example for both the popups.
Basically I have used conditional rendering here, as you can see there is a variable 'showAlert' if it becomes true then Alert will appear on the screen. But by default popup will not be appear at the center of the screen you have to style according to your use.

## Author

- [@Kshirsagar-Govind](https://github.com/Kshirsagar-Govind)

-------------------
 THANK YOU


