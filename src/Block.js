/**
 * Created by Risturbeat on 7-5-2015.
 */
var Block = cc.Class.extend({
    space: null,
    spriteSheet:null,
    shape:null,
    sprite:null,
    ctor: function(blockNumber, space, spriteSheet, pos){
        this.space = space;

        this.createSpriteWithBlockNumber(blockNumber);
        this.initBlock(pos);

        // add sprite to sprite sheet
        spriteSheet.addChild(this.sprite);
    },
    createSpriteWithBlockNumber: function(blockNumber){
        switch(blockNumber){
            case 0: //Square
                this.sprite = new cc.PhysicsSprite("#square_block.png");
                break;
            case 1: //T_block
                this.sprite = new cc.PhysicsSprite("#t_block.png");
                break;
            case 2: //Z_block
                this.sprite = new cc.PhysicsSprite("#z_block.png");
                break;
            case 3: //Reversed_z_block
                this.sprite = new cc.PhysicsSprite("#reversed_z_block.png");
                break;
            case 4: //L_block
                this.sprite = new cc.PhysicsSprite("#l_block.png");
                break;
            case 5: //Reversed_L_Block
                this.sprite = new cc.PhysicsSprite("#reversed_l_block.png");
                break;
            case 6: //Line_block
                this.sprite = new cc.PhysicsSprite("#line_block.png");
                break;
            default:
                break;
        }
    },

    initBlock:function(pos){
        // init physics
        var body = new cp.StaticBody();
        body.setPos(pos);
        this.sprite.setBody(body);

        this.shape = new cp.BoxShape(body,
            this.sprite.getContentSize().width,
            this.sprite.getContentSize().height);
        this.shape.setCollisionType(SpriteTag.block);
        //Sensors only call collision callbacks, and never generate real collisions
        this.shape.setSensor(true);

        this.space.addStaticShape(this.shape);
    },
    removeFromParent:function () {
        this.space.removeStaticShape(this.shape);
        this.shape = null;
        this.sprite.removeFromParent();
        this.sprite = null;
    },

    getShape:function () {
        return this.shape;
    }

});