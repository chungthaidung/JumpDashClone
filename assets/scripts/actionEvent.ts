import { _decorator, Component, Node, systemEvent, SystemEventType, EventTouch, Scene, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('actionEvent')
export class actionEvent extends Component {
    start() {
        this.node.on(Node.EventType.MOUSE_DOWN,this.onMouseDown,this);
    }

    update(deltaTime: number) {
        
    }
    onMouseDown(){
        director.loadScene('main');
    }
  
}

