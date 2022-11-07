import { _decorator, Component, Node, find, Label } from 'cc';
import { appRoot } from './appRoot';
const { ccclass, property } = _decorator;

@ccclass('showScore')
export class showScore extends Component {
    start() {
        let _approot = find('root')?.getComponent(appRoot);
        if (_approot){
            let _label = this.getComponent(Label);
            console.log(_label.string);
            _label.string = _approot.getDataCenter()?.getHighestScore() || 0;
        }
    }

    update(deltaTime: number) {
        
    }
}


