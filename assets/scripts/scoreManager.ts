import { _decorator, Component, Node, director, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('scoreManager')
export class scoreManager extends Component {
    private score;
    @property({type:Node})
    private scoreNode;
    start() {
        this.score = 0;
    }
    public getScore() {
        return this.score;
    }

    public setScore(newscore) {
        this.score = newscore;
        let text = this.scoreNode.getComponent(Label);
        text.string = this.score.toString();
    }
    update(deltaTime: number) {
        
    }
}


