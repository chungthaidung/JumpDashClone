import { _decorator, Component, Node } from 'cc';
import { dataCenter } from './dataCenter';
const { ccclass, property } = _decorator;

@ccclass('appRoot')
export class appRoot extends Component {
    private instance;
    private dataCenter;
    public getInstance() {
        return this.instance;
    }   
    public setInstance()
    {
        return this.instance;
    }
    start() {
        this.instance = this;
        this.dataCenter = new dataCenter;
    }
    update(deltaTime: number) {
    }
}

