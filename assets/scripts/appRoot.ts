import { _decorator, Component, Node, director } from 'cc';
import { dataCenter } from './dataCenter';
const { ccclass, property } = _decorator;

@ccclass('appRoot')
export class appRoot extends Component {
    private instance;
    private dataCenter;
    public getInstance() {
        return this.instance;
    }   
    public getDataCenter() {
        return this.dataCenter;
    } 
    public saveHighestScore(score)
    {
        this.dataCenter.setHighestScore(score);
        console.log(this.dataCenter.getHighestScore());
    }  
    start() {
        director.addPersistRootNode(this.node);
        this.instance = this;
        this.dataCenter = new dataCenter;
    }
    update(deltaTime: number) {
    }

}

