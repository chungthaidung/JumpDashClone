import { _decorator, Component, Node, Collider2D, Contact2DType, IPhysics2DContact, director, systemEvent, System, SystemEventType } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Square')
export class Square extends Component {
    start() {
        let collider = this.getComponent(Collider2D);
       if (collider) {
           collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
       }
       systemEvent.on(SystemEventType.KEY_DOWN,this.onKeyDown,this);

    }
    update(deltaTime: number) {

    }
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        console.log(otherCollider.node.name);
        director.loadScene('main');
    }
    onKeyDown(){

    }
}

