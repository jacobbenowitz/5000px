"use strict";
(self["webpackChunkmy5000px"] = self["webpackChunkmy5000px"] || []).push([["proGallery_videoItem"],{

/***/ "./node_modules/pro-gallery/dist/esm/components/item/videos/getStyle.js":
/*!******************************************************************************!*\
  !*** ./node_modules/pro-gallery/dist/esm/components/item/videos/getStyle.js ***!
  \******************************************************************************/
/***/ ((module) => {


module.exports = getStyle;
function getStyle(isCrop, isWiderThenContainer) {
    var CALC = 'calc(100% + 1px)';
    return isCrop ? getCrop() : getNonCrop();
    function getCrop() {
        return {
            height: isWiderThenContainer ? CALC : 'auto',
            width: isWiderThenContainer ? 'auto' : CALC,
            position: 'absolute',
            margin: 'auto',
            minHeight: '100%',
            minWidth: '100%',
            left: '-100%',
            right: '-100%',
            top: '-100%',
            bottom: '-100%',
        };
    }
    function getNonCrop() {
        return {
            width: isWiderThenContainer ? CALC : 'auto',
            height: isWiderThenContainer ? '100%' : CALC,
        };
    }
}
//# sourceMappingURL=getStyle.js.map

/***/ }),

/***/ "./node_modules/pro-gallery/dist/esm/components/item/videos/videoItem.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/pro-gallery/dist/esm/components/item/videos/videoItem.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pro-gallery-lib */ "./node_modules/pro-gallery-lib/dist/esm/common/window/windowWrapper.js");
/* harmony import */ var pro_gallery_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pro-gallery-lib */ "./node_modules/pro-gallery-lib/dist/esm/common/utils/index.js");
/* harmony import */ var pro_gallery_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pro-gallery-lib */ "./node_modules/pro-gallery-lib/dist/esm/common/constants/index.js");
/* harmony import */ var _galleryComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../galleryComponent */ "./node_modules/pro-gallery/dist/esm/components/galleryComponent.js");
/* harmony import */ var _itemHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../itemHelper */ "./node_modules/pro-gallery/dist/esm/components/item/itemHelper.js");
/* harmony import */ var _getStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getStyle */ "./node_modules/pro-gallery/dist/esm/components/item/videos/getStyle.js");
/* harmony import */ var _getStyle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_getStyle__WEBPACK_IMPORTED_MODULE_5__);






var VideoItem = /** @class */ (function (_super) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(VideoItem, _super);
    function VideoItem(props) {
        var _this = _super.call(this, props) || this;
        _this.pause = _this.pause.bind(_this);
        _this.play = _this.play.bind(_this);
        _this.playVideoIfNeeded = _this.playVideoIfNeeded.bind(_this);
        _this.state = {
            playedOnce: false,
            loadVideo: props.loadVideo || props.playing,
            playing: false,
            reactPlayerLoaded: false,
            vimeoPlayerLoaded: false,
            hlsPlayerLoaded: false,
        };
        return _this;
    }
    VideoItem.prototype.componentDidMount = function () {
        this.dynamiclyImportVideoPlayers();
    };
    VideoItem.prototype.dynamiclyImportVideoPlayers = function () {
        var _this = this;
        if (!(pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"] && pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].ReactPlayer)) {
            __webpack_require__.e(/*! import() | proGallery_reactPlayer */ "proGallery_reactPlayer").then(__webpack_require__.bind(__webpack_require__, /*! react-player */ "./node_modules/react-player/lib/index.js")).then(function (ReactPlayer) {
                pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].ReactPlayer = ReactPlayer.default;
                _this.setState({ reactPlayerLoaded: true });
                _this.playVideoIfNeeded();
            });
        }
        if (
        //Vimeo player must be loaded by us, problem with requireJS
        !(pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"] && pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].Vimeo) &&
            this.props.videoUrl &&
            this.props.videoUrl.includes('vimeo.com')) {
            __webpack_require__.e(/*! import() | proGallery_vimeoPlayer */ "proGallery_vimeoPlayer").then(__webpack_require__.bind(__webpack_require__, /*! @vimeo/player */ "./node_modules/@vimeo/player/dist/player.es.js")).then(function (Player) {
                pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].Vimeo = { Player: Player.default };
                _this.setState({ vimeoPlayerLoaded: true });
                _this.playVideoIfNeeded();
            });
        }
        if (
        //Hls player must be loaded by us, problem with requireJS
        !(pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"] && pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].Hls) &&
            this.isHLSVideo()) {
            __webpack_require__.e(/*! import() | proGallery_HlsPlayer */ "proGallery_HlsPlayer").then(__webpack_require__.t.bind(__webpack_require__, /*! hls.js */ "./node_modules/hls.js/dist/hls.js", 23)).then(function (Player) {
                pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].Hls = Player.default;
                _this.setState({ hlsPlayerLoaded: true });
                _this.playVideoIfNeeded();
            });
        }
    };
    VideoItem.prototype.isHLSVideo = function () {
        return (this.props.videoUrl &&
            (this.props.videoUrl.includes('/hls') ||
                this.props.videoUrl.includes('.m3u8')));
    };
    VideoItem.prototype.shouldUseHlsPlayer = function () {
        return this.isHLSVideo() && !pro_gallery_lib__WEBPACK_IMPORTED_MODULE_3__["default"].isiOS();
    };
    VideoItem.prototype.shouldForceVideoForHLS = function () {
        return this.isHLSVideo() && pro_gallery_lib__WEBPACK_IMPORTED_MODULE_3__["default"].isiOS();
    };
    VideoItem.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.playing || nextProps.firstUserInteractionExecuted) {
            this.setState({ loadVideo: true });
        }
        this.playVideoIfNeeded(nextProps);
    };
    VideoItem.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.currentIdx !== this.props.currentIdx) {
            this.fixIFrameTabIndexIfNeeded();
        }
        if (prevProps.type === 'image' && this.props.type === 'video') {
            this.dynamiclyImportVideoPlayers();
        }
        this.playVideoIfNeeded();
    };
    VideoItem.prototype.play = function () {
        this.props.playVideo(this.props.idx);
    };
    VideoItem.prototype.pause = function () {
        this.props.pauseVideo();
    };
    VideoItem.prototype.playVideoIfNeeded = function (props) {
        if (props === void 0) { props = this.props; }
        try {
            var playingVideoIdx = props.playingVideoIdx;
            if (playingVideoIdx === this.props.idx && !this.isPlaying) {
                this.videoElement =
                    this.videoElement ||
                        pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].document.querySelector("#video-" + this.props.id + " video");
                if (this.videoElement) {
                    this.isPlaying = true;
                    this.videoElement.play();
                    pro_gallery_lib__WEBPACK_IMPORTED_MODULE_3__["default"].isVerbose() &&
                        console.log('[VIDEO] Playing video #' + this.props.idx, this.videoElement);
                }
            }
        }
        catch (e) {
            console.error('[VIDEO] Could not play video #' + this.props.idx, this.videoElement, e);
        }
    };
    //-----------------------------------------| UTILS |--------------------------------------------//
    VideoItem.prototype.createPlayerElement = function () {
        var _this = this;
        //video dimensions are for videos in grid fill - placing the video with negative margins to crop into a square
        if (!(pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"] &&
            pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].ReactPlayer &&
            (this.state.loadVideo || this.props.playing))) {
            return null;
        }
        var PlayerElement = pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].ReactPlayer;
        var isWiderThenContainer = this.props.style.ratio >= this.props.cubeRatio;
        // adding 1 pixel to compensate for the difference we have sometimes from layouter in grid fill
        var isCrop = this.props.styleParams.cubeImages &&
            this.props.styleParams.cubeType === 'fill';
        var url = this.props.videoUrl
            ? this.props.videoUrl
            : this.props.createUrl(pro_gallery_lib__WEBPACK_IMPORTED_MODULE_4__["default"].urlSizes.RESIZED, pro_gallery_lib__WEBPACK_IMPORTED_MODULE_4__["default"].urlTypes.VIDEO);
        var attributes = {
            controlsList: 'nodownload',
            disablepictureinpicture: 'true',
            muted: !this.props.styleParams.videoSound,
            preload: 'metadata',
            style: _getStyle__WEBPACK_IMPORTED_MODULE_5___default()(isCrop, isWiderThenContainer),
            type: 'video/mp4',
        };
        if ((0,_itemHelper__WEBPACK_IMPORTED_MODULE_6__.shouldCreateVideoPlaceholder)(this.props.styleParams)) {
            attributes.poster = this.props.createUrl(pro_gallery_lib__WEBPACK_IMPORTED_MODULE_4__["default"].urlSizes.SCALED, pro_gallery_lib__WEBPACK_IMPORTED_MODULE_4__["default"].urlTypes.HIGH_RES);
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PlayerElement, { className: 'gallery-item-visible video gallery-item', id: "video-" + this.props.id, width: "100%", height: "100%", url: url, alt: this.props.alt ? this.props.alt : 'untitled video', loop: !!this.props.styleParams.videoLoop, ref: function (player) { return (_this.video = player); }, volume: this.props.styleParams.videoSound ? 0.8 : 0, playing: this.props.playing, onEnded: function () {
                _this.setState({ playing: false });
                _this.props.actions.eventsListener(pro_gallery_lib__WEBPACK_IMPORTED_MODULE_4__["default"].events.VIDEO_ENDED, _this.props);
            }, onPause: function () {
                _this.setState({ playing: false });
            }, onError: function (e) {
                _this.props.actions.eventsListener(pro_gallery_lib__WEBPACK_IMPORTED_MODULE_4__["default"].events.VIDEO_ERROR, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, _this.props), { videoError: e }));
            }, playbackRate: Number(this.props.styleParams.videoSpeed) || 1, onStart: function () {
                if (!_this.state.playedOnce) {
                    _this.setState({ playedOnce: true });
                }
            }, onPlay: function () {
                _this.props.actions.eventsListener(pro_gallery_lib__WEBPACK_IMPORTED_MODULE_4__["default"].events.VIDEO_PLAYED, _this.props);
                _this.setState({ playing: true });
            }, onReady: function () {
                _this.playVideoIfNeeded();
                _this.fixIFrameTabIndexIfNeeded();
                _this.props.actions.setItemLoaded();
                _this.setState({ ready: true });
            }, controls: this.props.styleParams.showVideoControls, config: {
                file: {
                    attributes: attributes,
                    forceHLS: this.shouldUseHlsPlayer(),
                    forceVideo: this.shouldForceVideoForHLS(),
                },
            }, key: 'video-' + this.props.id }));
    };
    VideoItem.prototype.fixIFrameTabIndexIfNeeded = function () {
        if (this.props.isExternalVideo) {
            var videoGalleryItem = pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].document &&
                pro_gallery_lib__WEBPACK_IMPORTED_MODULE_2__["default"].document.getElementById("video-" + this.props.id);
            var videoIFrames = videoGalleryItem && videoGalleryItem.getElementsByTagName('iframe');
            var videoIFrame = videoIFrames && videoIFrames[0];
            if (videoIFrame) {
                if (this.props.currentIdx === this.props.idx) {
                    videoIFrame.setAttribute('tabIndex', '0');
                }
                else {
                    videoIFrame.setAttribute('tabIndex', '-1');
                }
            }
        }
    };
    VideoItem.prototype.getVideoContainerStyles = function () {
        var videoContainerStyle = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, this.props.imageDimensions);
        if (pro_gallery_lib__WEBPACK_IMPORTED_MODULE_3__["default"].deviceHasMemoryIssues() ||
            this.state.ready ||
            !(0,_itemHelper__WEBPACK_IMPORTED_MODULE_6__.shouldCreateVideoPlaceholder)(this.props.styleParams)) {
            videoContainerStyle.backgroundColor = 'black';
        }
        else {
            videoContainerStyle.backgroundImage = "url(" + this.props.createUrl(pro_gallery_lib__WEBPACK_IMPORTED_MODULE_4__["default"].urlSizes.RESIZED, pro_gallery_lib__WEBPACK_IMPORTED_MODULE_4__["default"].urlTypes.HIGH_RES) + ")";
        }
        return videoContainerStyle;
    };
    //-----------------------------------------| RENDER |--------------------------------------------//
    VideoItem.prototype.render = function () {
        var _a = this.props, videoPlaceholder = _a.videoPlaceholder, hover = _a.hover;
        var baseClassName = 'gallery-item-content gallery-item-visible gallery-item-preloaded gallery-item-video gallery-item video-item' +
            (pro_gallery_lib__WEBPACK_IMPORTED_MODULE_3__["default"].isiPhone() ? ' ios' : '');
        if (this.state.playing) {
            baseClassName += ' playing';
        }
        if (this.state.playedOnce && this.state.ready) {
            baseClassName += ' playedOnce';
        }
        // eslint-disable-next-line no-unused-vars
        var video = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: baseClassName, "data-hook": "video_container-video-player-element", key: 'video_container-' + this.props.id, style: this.getVideoContainerStyles() },
            this.createPlayerElement(),
            this.props.videoPlayButton));
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: 'video-and-hover-container' + this.props.idx },
            video,
            (0,_itemHelper__WEBPACK_IMPORTED_MODULE_6__.shouldCreateVideoPlaceholder)(this.props.styleParams) &&
                videoPlaceholder,
            hover));
    };
    return VideoItem;
}(_galleryComponent__WEBPACK_IMPORTED_MODULE_7__.GalleryComponent));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoItem);
//# sourceMappingURL=videoItem.js.map

/***/ })

}]);
//# sourceMappingURL=proGallery_videoItem.bundle.js.map