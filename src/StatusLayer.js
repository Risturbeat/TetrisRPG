var StatusLayer = cc.Layer.extend({
    linesLabel:null,
    pointsLabel:null,
    linesLeftLabel:null,
    lines:0,

    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        var winsize = cc.director.getWinSize();

        this.linesLabel = new cc.LabelTTF("Lines:0", "Helvetica", 20);
        this.linesLabel.setColor(cc.color(0,0,0));//black color
        this.linesLabel.setPosition(cc.p(winsize.width - 70, winsize.height - 60));
        this.addChild(this.linesLabel);

        this.pointsLabel = new cc.LabelTTF("Points:0", "Helvetica", 20);
        this.pointsLabel.setPosition(cc.p(winsize.width - 70, winsize.height - 20));
        this.addChild(this.pointsLabel);

        this.linesLeftLabel = new cc.LabelTTF("Lines left:0", "Helvetica", 20);
        this.linesLeftLabel.setPosition(cc.p(winsize.width - 70, winsize.height - 100));
        this.addChild(this.linesLeftLabel);
    },

    addLine:function (num) {
        this.lines += num;
        this.linesLabel.setString("Lines: " + this.lines);
    },

    updatePoints:function (points) {
        this.pointsLabel.setString("Points: " + points);
    },

    updateLinesLeft: function(linesLeft){
        this.linesLeftLabel.setString("Lines Left: " + linesLeft);
    }


});
