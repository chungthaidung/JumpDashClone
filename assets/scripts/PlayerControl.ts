import { _decorator, Component, Node, EventKeyboard, Vec3, SystemEventType, systemEvent, macro } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerControl')
export class PlayerControl extends Component {
    start() {
        systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);
    }

    update(deltaTime: number) {
        
    }
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            default:
                break;
            case macro.KEY.a:
                if (this.node.position.x > 100)
                {
                    this.node.position = new Vec3(this.node.position.x-100, this.node.position.y, 0);
                }
                else
                {
                    this.node.position = new Vec3(this.node.position.x+100, this.node.position.y, 0);
                }
 
                break;
        }
    }
}

