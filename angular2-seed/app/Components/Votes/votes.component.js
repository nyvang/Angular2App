System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.currentVotes = 0;
                    this.myVote = 0;
                    this.change = new core_1.EventEmitter();
                    this.highLights = true;
                }
                VoteComponent.prototype.downVote = function () {
                    this.myVote = -1;
                    this.currentVotes = this.currentVotes - 1;
                    this.change.emit({ newValue: this.currentVotes });
                };
                VoteComponent.prototype.upVote = function () {
                    this.myVote = +1;
                    this.currentVotes = this.currentVotes + 1;
                    this.change.emit({ newValue: this.currentVotes });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteComponent.prototype, "currentVotes", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "change", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'voteComponent',
                        template: "\n    <div class=\"voteComponent\">\n        <div class=\"voteBox\">\n            <span class=\"glyphicon glyphicon-menu-up\" \n            [class.highlighted]=\"myVote > 0\"\n            (click)=\"upVote()\"></span>\n            <span class=\"currentVotes\">{{ currentVotes }}</span>\n            <span class=\"glyphicon glyphicon-menu-down\"\n            [class.highlighted]=\"myVote < 0\"\n            (click)=\"downVote()\"></span>            \n        </div>\n    </div>  \n    ",
                        styles: ["\n        .voteComponent {\n            display: inline;\n        }\n        .voteBox {\n            width: 20px;\n        }\n        .glyphicon {\n            font-size: 2em;\n        }\n        .currentVotes {\n            font-size: 1.5em;\n   \n        }\n        .highlighted {\n            color: yellow;\n        }\n     "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=votes.component.js.map