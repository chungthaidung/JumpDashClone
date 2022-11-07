import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('dataCenter')
export class dataCenter extends Component {
    private highestscore = 0;
    public setHighestScore(score) {
        this.highestscore = score;
    }
    public getHighestScore() {
        return this.highestscore;
    }


}

