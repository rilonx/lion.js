export let assets = {

    toLoad: 0,
    loaded: 0,

    imageExtensions: ['png', 'jpg'],
    fontExtensions: ['ttf', 'otf', 'ttc', 'woff'],
    jsonExtensions: ['json'],
    audioExtensions: ['mp3', 'ogg', 'wav', 'webm'],

    load(sources) {

        return new Promise(resolve => {
            let loadHandler = () => {
                this.loaded += 1;
                console.log(this.loaded);

                if (this.toLoad === this.loaded) {
                    this.toLoad = 0;
                    this.loaded = 0;
                    if (window.DEV) console.log('Assets finished loading');

                    resolve();
                }
            };

            console.log('Loading assets...');

            this.toLoad = sources.length;

            sources.forEach(source => {
                let extension = source.split('.').pop();
                // Load images
                if (this.imageExtensions.indexOf(extension) !== -1) {
                    this.loadImage(source, loadHandler);
                }
                // Load fonts
                else if (this.fontExtensions.indexOf(extension) !== -1) {
                    this.loadFont(source, loadHandler);
                }
                // Load json
                else if (this.jsonExtensions.indexOf(extension) !== -1) {
                    this.loadJson(source, loadHandler);
                }
                // Load audio
                else if (this.audioExtensions.indexOf(extension) !== -1) {
                    this.loadSound(source, loadHandler);
                }
                else {
                    console.log("File type not recognized: " + source);
                }
            })
        })
    },

    loadImage(source, loadHandler) {
        let image = new Image();
        image.addEventListener("load", loadHandler, false);
        this[source] = image;
        image.src = source;
    },

    loadFont(source, loadHandler) {
        let fontFamily = source.split("/").pop().split(".")[0];
        let newStyle = document.createElement("style");
        let fontFace
            = "@font-face {font-family: '" + fontFamily + "'; src: url('" + source + "');}";
        newStyle.appendChild(document.createTextNode(fontFace));
        document.head.appendChild(newStyle);

        loadHandler();
    },

    loadJson(source, loadHandler) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", source, true);
        xhr.responseType = "text";

        xhr.onload = event => {
            if (xhr.status === 200) {
                let file = JSON.parse(xhr.responseText);
                file.name = source;
                this[file.name] = file;

                if (file.frames) {
                    this.createTilesetFrames(file, source, loadHandler);
                } else {
                    loadHandler();
                }
            }
        };

        xhr.send();
    },

    createTilesetFrames(file, source, loadHandler) {
        let baseUrl = source.replace(/[^\/]*$/, "");
        let imageSource = baseUrl + file.meta.image;
        let imageLoadHandler = () => {

            this[imageSource] = image;

            Object.keys(file.frames).forEach(frame => {
                this[frame] = file.frames[frame];
                this[frame].source = image;
            });

            loadHandler();
        };

        let image = new Image();
        image.addEventListener("load", imageLoadHandler, false);
        image.src = imageSource;
    },

    loadSound(source, loadHandler) {
        console.log("loadSound called – see Chapter 10 for details");
    }
};