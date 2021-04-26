# Understanding the architecture of a web browser - [Html5Rocks](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)

A web browser is a software application that enables a user to access and display web pages or other online content through its graphical user interface. Refer to the image below to understand the key components involved in building a web browser.

![Browswer Engine](https://github.com/thelightbringer/FrontEndGuide/blob/main/Must%20Read/images/BrowserEngine.png?raw=true)

* __User Interface__ : This component allows end-users to interact with all visual elements available on the web page. The visual elements include the address bar, home button, next button, and all other elements that fetch and display the web page requested by the end-user.

* __Browser Engine__ : It is a core component of every web browser. The browser engine functions as an intermediary or a bridge between the user interface and the rendering engine. It queries and handles the rendering engine as per the inputs received from the user interface.

* __Rendering Engine__: As the name suggests, this component is responsible for rendering a specific web page requested by the user on their screen. It interprets HTML and XML documents along with images that are styled or formatted using CSS, and a final layout is generated, which is displayed on the user interface.

>Note: Every browser has its own unique rendering engine. Rendering engines might also differ for different browser versions. The list below mentions browser engines used by a few common browsers:
>
> * Google Chrome and Opera v.15+: Blink
> * Internet Explorer: Trident
> * Mozilla Firefox: Gecko
> * Chrome for iOS and Safari: WebKit

* __Networking__ : This component is responsible for managing network calls using standard protocols like HTTP or FTP. It also looks after security issues associated with internet communication.

* __JavaScript Interpreter__ : As the name suggests, it is responsible for parsing and executing the JavaScript code embedded in a website. Once the interpreted results are generated, they are forwarded to the rendering engine for displaying on the user interface.

* __UI Backend__ : This component uses the user interface methods of the underlying operating system. It is mainly used for drawing basic widgets (windows and combo boxes).

* __Data Storage/Persistence__ : It is a persistent layer. A web browser needs to store various types of data locally, for example, cookies. As a result, browsers must be compatible with data storage mechanisms such as WebSQL, IndexedDB, FileSystem, etc.
Now that we are aware of the key components involved in building a web browser, let’s dig deep into the role of the rendering engine.

___

## Role of Rendering Engine:

Once a user requests a particular document, the rendering engine starts fetching the content of the requested document. This is done via the networking layer. The rendering engine starts receiving the content of that specific document in chunks of 8 KBs from the networking layer. After this, the basic flow of the rendering engine begins.

![Browser rendering engine](./images/RenderingFlow.png)

The four basic steps include:

* The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. The HTML elements are then converted into DOM nodes to form a __“content tree” or “DOM tree.”__
* Simultaneously, the browser also creates a __render tree__. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.
* Further, the render tree goes through the __layout process__. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.
* The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s __paint() method__ is invoked, which paints each node on the screen using the UI backend layer.

___
