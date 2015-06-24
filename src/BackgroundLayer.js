var BackgroundLayer = cc.Layer.extend({
    map00:null,
    map01:null,
    mapWidth:0,
    mapIndex:0,
    space:null,
    spriteSheet:null,
    objects:[],

    ctor:function (space) {
        this._super();

        // clean old array here
        this.objects = [];
        this.space = space;

        this.init();
    },

    init:function () {
        this._super();

        this.map00 = new cc.TMXTiledMap(res.game_board);
        this.addChild(this.map00);

        this.mapWidth = this.map00.getContentSize().width;

        // create sprite sheet
        cc.spriteFrameCache.addSpriteFrames(res.game_board_plist);
        this.spriteSheet = new cc.SpriteBatchNode(res.game_board_png);
        this.addChild(this.spriteSheet);

        this.scheduleUpdate();
    },

    removeObjects:function (mapIndex) {
        while((function (obj, index) {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].mapIndex == index) {
                    obj[i].removeFromParent();
                    obj.splice(i, 1);
                    return true;
                }
            }
            return false;
        })(this.objects, mapIndex));
    },

    removeObjectByShape:function (shape) {
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i].getShape() == shape) {
                this.objects[i].removeFromParent();
                this.objects.splice(i, 1);
                break;
            }
        }
    },

    update:function (dt) {

    }

});
